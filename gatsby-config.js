module.exports = {
  siteMetadata: {
    title: "Advir.co"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/imgs/advir-icon.png",
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          twitter: true,
          yandex: true,
          windows: true
        }
      }
    }
  ]
};
