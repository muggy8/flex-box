let flexClasses = [".flex", ".flex-xs", ".flex-s", ".flex-m", ".flex-l", ".flex-xl"]
let sizes = ["", "-xs", "-s", "-m", "-l", "-xl"]
let gridList = [0,1,2,3,4,5,6,7,8,9,10,11,12]
let css = `
.flex,
.flex-xs {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

${flexClasses.map(c=>c + ".vstart").join(", ")},
${flexClasses.map(c=>c + ".vhstart").join(", ")} {align-items: start}

${flexClasses.map(c=>c + ".hstart").join(", ")},
${flexClasses.map(c=>c + ".vhstart").join(", ")} {justify-content: start}

${flexClasses.map(c=>c + ".vcenter").join(", ")},
${flexClasses.map(c=>c + ".vhcenter").join(", ")} {align-items: center}

${flexClasses.map(c=>c + ".hcenter").join(", ")},
${flexClasses.map(c=>c + ".vhcenter").join(", ")} {justify-content: center}

${flexClasses.map(c=>c + ".vend").join(", ")},
${flexClasses.map(c=>c + ".vhend").join(", ")} {align-items: end}

${flexClasses.map(c=>c + ".hsend").join(", ")},
${flexClasses.map(c=>c + ".vhend").join(", ")} {justify-content: end}

${flexClasses.map(c=>c + ".column").join(", ")} {flex-direction: column}

${flexClasses.map(c=>c + ".no-wrap").join(", ")} {flex-wrap: no-wrap}

${flexClasses.map(c=>c + " .box").join(", ")} {
	flex-grow: 1;
	flex-basis: 1;
	flex-shrink: 1;
}

${gridList.map(size=>{
	let width = round(size / (gridList.length - 1) * 100) + "%"
	let flexClasses = [".flex", ".flex-xs"]
	let classes = flexClasses.map(c=>c + " .box-" + size + ", " + c + " .box-xs-" + size).join(", ")
	return classes + ` {flex-basis: ${width}}`
}).join("\n")}

.gutter, .gutter .box,
${sizes.map(size=>{
	let gutterClasses = gridList.map(col=>`.gutter .box${size}-${col}`).join(", ")
	return gutterClasses
})} {padding-left: 0.5rem; padding-right: 0.5rem}

@media (min-width: 34rem){
	.flex-s {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${gridList.map(size=>{
		let width = round(size / (gridList.length - 1) * 100) + "%"
		let flexClasses = [".flex", ".flex-xs", ".flex-s"]
		let classes = flexClasses.map(c=>c + " .box-s-" + size).join(", ")
		return classes + ` {flex-basis: ${width}}`
	}).join("\n\t")}
}

@media (min-width: 46rem){
	.flex-m {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${gridList.map(size=>{
		let width = round(size / (gridList.length - 1) * 100) + "%"
		let flexClasses = [".flex", ".flex-xs", ".flex-s", ".flex-m"]
		let classes = flexClasses.map(c=>c + " .box-m-" + size).join(", ")
		return classes + ` {flex-basis: ${width}}`
	}).join("\n\t")}
}

@media (min-width: 60rem){
	.flex-l {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${gridList.map(size=>{
		let width = round(size / (gridList.length - 1) * 100) + "%"
		let flexClasses = [".flex", ".flex-xs", ".flex-s", ".flex-m", ".flex-l"]
		let classes = flexClasses.map(c=>c + " .box-l-" + size).join(", ")
		return classes + ` {flex-basis: ${width}}`
	}).join("\n\t")}
}

@media (min-width: 90rem){
	.flex-xl {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${gridList.map(size=>{
		let width = round(size / (gridList.length - 1) * 100) + "%"
		let flexClasses = [".flex", ".flex-xs", ".flex-s", ".flex-m", ".flex-l", ".flex-xl"]
		let classes = flexClasses.map(c=>c + " .box-xl-" + size).join(", ")
		return classes + ` {flex-basis: ${width}}`
	}).join("\n\t")}
}
`

console.log(css)

function round(n, digits = 8){
	let exp = Math.pow(10, digits)
	return Math.round(n * exp) / exp
}

if (typeof require !== "undefined"){
	let fs = require("fs")
	fs.writeFileSync("./flex-box.css", css)
}
