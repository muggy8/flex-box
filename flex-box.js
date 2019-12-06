const combinations = require("combinations")
let flexClasses = [".flex", ".flex-xs", ".flex-s", ".flex-m", ".flex-l", ".flex-xl"]
let sizes = ["", "-xs", "-s", "-m", "-l", "-xl"]
let gridList = [0,1,2,3,4,5,6,7,8,9,10,11,12]
let base = `* {box-sizing: border-box}

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

${flexClasses.map(c=>c + " > .box").join(", ")} {
	flex-grow: 1;
	flex-basis: auto;
	flex-shrink: 1;
}

${gridList.map(size=>{
	let width = round(size / (gridList.length - 1) * 100) + "%"
	let flexClasses = [".flex", ".flex-xs"]
	let classes = flexClasses.map(c=>c + " > .box-" + size + ", " + c + " > .box-xs-" + size).join(", ")
	return classes + ` {flex-basis: ${width}}`
}).join("\n")}

@media (min-width: 34rem){
	.flex-s {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	${gridList.map(size=>{
		let width = round(size / (gridList.length - 1) * 100) + "%"
		let flexClasses = [".flex", ".flex-xs", ".flex-s"]
		let classes = flexClasses.map(c=>c + " > .box-s-" + size)
			.concat([`.flex-s > .box-${size}`])
			.join(", ")
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
		let classes = flexClasses.map(c=>c + " > .box-m-" + size)
			.concat([`.flex-m > .box-${size}`])
			.join(", ")
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
		let classes = flexClasses.map(c=>c + " > .box-l-" + size)
			.concat([`.flex-l > .box-${size}`])
			.join(", ")
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
		let classes = flexClasses.map(c=>c + " > .box-xl-" + size)
			.concat([`.flex-xl > .box-${size}`])
			.join(", ")
		return classes + ` {flex-basis: ${width}}`
	}).join("\n\t")}
}
`

let gutterMutipliers = [0.25, 0.5, 0.75, 1, 1.5, 2, 3]
let directions = combinations(["t", "r", "b", "l"])

let gutters = `html {
	/*Set variables*/
	--flex-box-gutter: 1rem;
}

.use-gutter, .gutter > .box,
${sizes.map(size=>{
	let gutterClasses = gridList.map(col=>`.gutter > .box${size}-${col}`).join(", ")
	return gutterClasses
})} {
	padding-left: 1rem;
	padding-right: 1rem;
	padding-left: var(--flex-box-gutter);
	padding-right: var(--flex-box-gutter);
}

${gutterMutipliers.map(multiplier=>{
	let suffix = multiplier.toString().replace(".", "\\.").replace("0", "")
	suffix = "-" + suffix

	let rules = [
		directions
			.filter(combo=>combo.some(direction=>direction === "t"))
			.map(combo=>`.gutter-${combo.join("")}${suffix}`)
			.map(rule=>{
				if (multiplier === 1){
					rule = [rule, rule]
					rule[0] = rule[0].replace(suffix, "")
					rule = rule.join(",\n")
				}
				return rule
			})
			.join(",\n")
			+ (multiplier === 1 ? "{padding-top: var(--flex-box-gutter);}" : `{padding-top: calc(var(--flex-box-gutter) * ${multiplier});}`)
		,
		directions
			.filter(combo=>combo.some(direction=>direction === "r"))
			.map(combo=>`.gutter-${combo.join("")}${suffix}`)
			.map(rule=>{
				if (multiplier === 1){
					rule = [rule, rule]
					rule[0] = rule[0].replace(suffix, "")
					rule = rule.join(",\n")
				}
				return rule
			})
			.join(",\n")
			+ (multiplier === 1 ? "{padding-right: var(--flex-box-gutter);}" : `{padding-right: calc(var(--flex-box-gutter) * ${multiplier});}`)
		,
		directions
			.filter(combo=>combo.some(direction=>direction === "b"))
			.map(combo=>`.gutter-${combo.join("")}${suffix}`)
			.map(rule=>{
				if (multiplier === 1){
					rule = [rule, rule]
					rule[0] = rule[0].replace(suffix, "")
					rule = rule.join(",\n")
				}
				return rule
			})
			.join(",\n")
			+ (multiplier === 1 ? "{padding-bottom: var(--flex-box-gutter);}" : `{padding-bottom: calc(var(--flex-box-gutter) * ${multiplier});}`)
		,
		directions
			.filter(combo=>combo.some(direction=>direction === "l"))
			.map(combo=>`.gutter-${combo.join("")}${suffix}`)
			.map(rule=>{
				if (multiplier === 1){
					rule = [rule, rule]
					rule[0] = rule[0].replace(suffix, "")
					rule = rule.join(",\n")
				}
				return rule
			})
			.join(",\n")
			+ (multiplier === 1 ? "{padding-left: var(--flex-box-gutter);}" : `{padding-left: calc(var(--flex-box-gutter) * ${multiplier});}`)
	]

	return rules.join("\n")
}).join("\n")}
`

function round(n, digits = 8){
	let exp = Math.pow(10, digits)
	return Math.round(n * exp) / exp
}

// console.log(gutters)

if (typeof require !== "undefined"){
	let fs = require("fs")
	fs.writeFileSync("./flex-box.css", base)
	fs.writeFileSync("./flex-box.gutters.css", gutters)
}

if (typeof module !== "undefined"){
	module.exports = {base, gutters}
}
