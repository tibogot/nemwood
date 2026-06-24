import FAQSchema from "@/components/FAQSchema";
import { homepageFaqs } from "@/data/faqs";
import HomePage from "./HomePage";

export default function Page() {
  return (
    <>
      <FAQSchema faqs={homepageFaqs} />
      <HomePage />
    </>
  );
}
