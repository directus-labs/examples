require("dotenv").config({ path: ".env" });

module.exports = {
  siteMetadata: {
    title: "Directus Gatsby Example",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.GATSBY_DIRECTUS_URL,
        auth: {
          // You can use the credentials of an user
          email: process.env.DIRECTUS_EMAIL,
          password: process.env.DIRECTUS_PASSWORD,

          // Or you can use a static token from an user
          // token: process.env.DIRECTUS_STATIC_TOKEN, 
        },
      },
    },
  ],
};
