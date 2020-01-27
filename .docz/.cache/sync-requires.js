const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/mkruk/Desktop/test/.docz/.cache/dev-404-page.js"))),
  "component---index-mdx": hot(preferDefault(require("/Users/mkruk/Desktop/test/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/mkruk/Desktop/test/.docz/src/pages/404.js")))
}

