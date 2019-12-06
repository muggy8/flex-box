const CleanCSS = require("clean-css")
require("./flex-box.js")
const options = {}
const minifier = new CleanCSS(options)
const fs = require("fs")

const rawCssPaths = []
fs.readdirSync(".").filter(path=>{
	if (!/\.css$/i.test(path) || /\.min\.css$/.test(path)){
		return
	}
	let contents = fs.readFileSync(path, "utf-8")
	let minCss = minifier.minify(contents)
	fs.writeFileSync(path.replace(".css", ".min.css"), minCss.styles)
	console.log("minified", path)
})
