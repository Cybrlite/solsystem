/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'Sol System',
    description: 'Interactive solar system explorer.',
    author: 'Cybrlite',
    siteUrl: 'https://solsystem.space',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        display: 'minimal-ui',
        icon: 'public/images/logo.png'
      },
    },
  ],
}
