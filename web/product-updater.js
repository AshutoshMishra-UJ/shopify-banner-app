import { shopifyApi } from "@shopify/shopify-api";

const ADJECTIVES = [
  "autumn",
  "hidden",
  "bitter",
  "misty",
  "silent",
];

const NOUNS = ["waterfall", "river", "breeze", "moon", "rain"];

export const productUpdater = async (session) => {
  const client = new shopifyApi.clients.Rest({ session });

  const adjective = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const noun = NOUNS[Math.floor(Math.random() * NOUNS.length)];

  await client.post({
    path: "products",
    data: {
      product: {
        title: `${adjective} ${noun}`,
        body_html: "<strong>Good snowboard!</strong>",
        vendor: "Burton",
        product_type: "Snowboard",
        status: "draft"
      },
    },
  });
};
