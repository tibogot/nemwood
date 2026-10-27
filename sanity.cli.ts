import { defineCliConfig } from "sanity/cli";
import { sanityDataset, sanityProjectId } from "./src/sanity/env";

/** For the `sanity` CLI only (schema deploys, CORS, dataset exports). */
export default defineCliConfig({
  api: {
    projectId: sanityProjectId,
    dataset: sanityDataset,
  },
});
