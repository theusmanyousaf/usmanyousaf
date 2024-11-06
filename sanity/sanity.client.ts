import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
    projectId: "xzotwus7",
    dataset: "production",
    apiVersion: "2024-11-06",
    useCdn: false,
};

const client = createClient(config);

export default client;