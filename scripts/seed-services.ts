/**
 * Creates one `service` document per service page defined in
 * src/data/services.ts. Existing documents are left untouched, so it is safe
 * to run again after adding a new service page in the code.
 *
 *   npx sanity exec scripts/seed-services.ts --with-user-token
 */
import { getCliClient } from "sanity/cli";
import { defaultServices } from "../src/data/services";

const client = getCliClient({ apiVersion: "2025-02-19" });

async function seed() {
  const transaction = client.transaction();

  defaultServices.forEach((service, index) => {
    transaction.createIfNotExists({
      _id: `service-${service.slug}`,
      _type: "service",
      title: service.title,
      slug: service.slug,
      branch: service.branch,
      order: index + 1,
    });
  });

  await transaction.commit();
  console.log(`${defaultServices.length} service documents checked/created.`);
}

seed().catch((error) => {
  console.error(error);
  process.exit(1);
});
