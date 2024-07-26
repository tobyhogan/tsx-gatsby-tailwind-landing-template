import type { GatsbyConfig } from "gatsby"

module.exports = {
  plugins: [
    'gatsby-plugin-dark-mode'

    /*
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        "icon": "src/assets/icon.png"
    }},

    */

  ],

  pathPrefix: "SITE_SUBDOMAIN_OR_PREFIX_HERE",
  

}

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://SITE_URL_HERE`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [],
}

export default config


