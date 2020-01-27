const { mergeWith } = require('lodash/fp')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'My Doc',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/mkruk/Desktop/test/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'My Doc',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/mkruk/Desktop/test',
          templates:
            '/Users/mkruk/Desktop/test/node_modules/docz-core/dist/templates',
          docz: '/Users/mkruk/Desktop/test/.docz',
          cache: '/Users/mkruk/Desktop/test/.docz/.cache',
          app: '/Users/mkruk/Desktop/test/.docz/app',
          appPackageJson: '/Users/mkruk/Desktop/test/package.json',
          gatsbyConfig: '/Users/mkruk/Desktop/test/gatsby-config.js',
          gatsbyBrowser: '/Users/mkruk/Desktop/test/gatsby-browser.js',
          gatsbyNode: '/Users/mkruk/Desktop/test/gatsby-node.js',
          gatsbySSR: '/Users/mkruk/Desktop/test/gatsby-ssr.js',
          importsJs: '/Users/mkruk/Desktop/test/.docz/app/imports.js',
          rootJs: '/Users/mkruk/Desktop/test/.docz/app/root.jsx',
          indexJs: '/Users/mkruk/Desktop/test/.docz/app/index.jsx',
          indexHtml: '/Users/mkruk/Desktop/test/.docz/app/index.html',
          db: '/Users/mkruk/Desktop/test/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
