module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shopify-francis",
  },
  plugins: [
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "francisgatsby",
        accessToken: "",
      },
    },
    "gatsby-plugin-gatsby-cloud",
  ],
};
