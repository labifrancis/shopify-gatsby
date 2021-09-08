module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        password: "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",
        storeUrl: "francisgatsby.myshopify.com",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
