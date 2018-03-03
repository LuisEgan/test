module.exports = {
  siteMetadata: {
    title: "Admix"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-react-next",
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/assets/imgs/admixLogo.png",
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
