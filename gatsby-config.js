module.exports = {
  siteMetadata: {
    title: 'AI Financial Services',
    description: 'Transforming Financial Services with Advanced AI Use Cases and Solutions',
    siteUrl: 'https://your-domain.github.io', // Update with your actual GitHub Pages URL
    author: 'AI Financial Services',
    keywords: 'AI, financial services, machine learning, fintech, artificial intelligence, data analytics',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'AI Financial Services',
        short_name: 'AI FinServ',
        start_url: '/',
        background_color: '#0f172a',
        theme_color: '#3b82f6',
        display: 'minimal-ui',
        icon: 'static/favicon-32x32.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
  ],
};
