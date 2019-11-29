const CleanCSS = require("clean-css")
const css = require("./flex-box.js")
const options = {}
const minCss = new CleanCSS(options).minify(css)
const fs = require("fs")
fs.writeFileSync("flex-box.min.css", minCss.styles)
