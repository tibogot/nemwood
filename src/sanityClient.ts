import { createClient } from "@sanity/client";
import { sanityDataset, sanityProjectId } from "@/sanity/env";

const client = createClient({
  projectId: sanityProjectId,
  dataset: sanityDataset,
  apiVersion: "2023-07-01", // Use a recent date
  useCdn: true,
});

export default client;
