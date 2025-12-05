"use server";

import nodemailer from "nodemailer";
import { z } from "zod";
import { redirect } from "next/navigation";

// Form validation schema
const contactSchema = z.object({
  firstName: z.string().min(1, "Le prénom est requis"),
  lastName: z.string().min(1, "Le nom est requis"),
  email: z.string().email("Adresse email invalide"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères"),
});

export type ContactFormState = {
  success?: boolean;
  error?: string;
  fieldErrors?: {
    firstName?: string[];
    lastName?: string[];
    email?: string[];
    phone?: string[];
    message?: string[];
  };
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  try {
    // Validate form data
    const validatedFields = contactSchema.safeParse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    });

    // If validation fails, return field errors
    if (!validatedFields.success) {
      return {
        error: "Veuillez corriger les erreurs ci-dessous",
        fieldErrors: validatedFields.error.flatten().fieldErrors,
      };
    }

    const { firstName, lastName, email, phone, message } = validatedFields.data;

    // Create nodemailer transporter

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "ssl0.ovh.net",
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      // OVH SSL0 specific options
      ignoreTLS: false,
      requireTLS: true,
      debug: false,
      connectionTimeout: 60000, // 60 seconds
      greetingTimeout: 30000, // 30 seconds
    });

    // Email content
    const emailContent = `
Nouvelle demande de contact depuis le site Nemwood

Informations du client :
- Nom : ${firstName} ${lastName}
- Email : ${email}
- Téléphone : ${phone ? phone : "Non renseigné"}

Message :
${message}

---
Email envoyé depuis le formulaire de contact Nemwood
Date : ${new Date().toLocaleString("fr-BE", { timeZone: "Europe/Brussels" })}
    `.trim();

    // Test SMTP connection first
    await transporter.verify();

    // Send email to your business email
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: "contact@nemwood.be",
      subject: `Nouvelle demande de contact - ${firstName} ${lastName}`,
      text: emailContent,
      html: emailContent.replace(/\n/g, "<br>"),
      replyTo: email, // Allow direct reply to the customer
    });

    // Optional: Send confirmation email to the customer
    const confirmationContent = `
Bonjour ${firstName},

Merci pour votre message ! Nous avons bien reçu votre demande concernant votre projet de menuiserie.

Notre équipe vous recontactera dans les plus brefs délais (généralement sous 24h) pour discuter de vos besoins et vous proposer une solution sur mesure.

Votre message :
"${message}"

Cordialement,
L'équipe Nemwood
Menuisier artisan en Belgique

---
Cet email est envoyé automatiquement, merci de ne pas y répondre.
Pour toute question urgente, contactez-nous directement au +32 489 33 05 44.
    `.trim();

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: email,
      subject: "Confirmation de réception - Nemwood",
      text: confirmationContent,
      html: confirmationContent.replace(/\n/g, "<br>"),
    });

    return {
      success: true,
    };
  } catch (error) {
    // Log error only in development
    if (process.env.NODE_ENV === "development") {
      console.error("Contact form submission error:", error);
    }
    return {
      error:
        "Une erreur est survenue lors de l'envoi de votre message. Veuillez réessayer ou nous contacter directement.",
    };
  }
}
