module.exports = {
  siteMetadata: {
    title: `Idential Suns`,
    description: `Identical Suns Website`,
    social: {
      facebook: `https://www.facebook.com/identicalsuns/`,
      youtube: `https://www.youtube.com/channel/UC6-oJz8BdxJWzUVxRy2Tqag`,
    },
    links: {
      weekminded: {
        cdbaby: `https://store.cdbaby.com/cd/identicalsuns2`,
        amazon: `https://www.amazon.com/Week-Minded-Identical-Suns/dp/B07QG23FJZ`,
        itunes: `https://music.apple.com/us/album/week-minded/1459680202`,
      },
      isuns: {
        cdbaby: `https://store.cdbaby.com/cd/identicalsuns`,
        amazon: `https://www.amazon.com/Identical-Suns/dp/B010QZNMSU`,
        itunes: `https://music.apple.com/us/album/identical-suns/1015001469`,
      },
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {},
    },
  ],
}
