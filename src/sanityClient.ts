import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "my0lnpp8",
  dataset: "production", // Change if your dataset is different
  apiVersion: "2023-07-01", // Use a recent date
  useCdn: true,
});

export default client;
