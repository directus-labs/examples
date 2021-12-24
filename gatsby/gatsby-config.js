require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    // siteUrl: "https://www.yourdomain.tld",
    title: "Directus Gatsby Example",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "@directus/gatsby-source-directus",
      options: {
        url: process.env.GATSBY_DIRECTUS_URL, // Fill with your Directus instance address
        auth: {
          token: process.env.DIRECTUS_STATIC_TOKEN, // You can use a static token from an user

          // Or you can use the credentials of an user
          // email: process.env.DIRECTUS_EMAIL,
          // password: process.env.DIRECTUS_PASSWORD,
        },
      },
    },
  ],
};
