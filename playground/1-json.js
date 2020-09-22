const fs = require("fs")
const readData = fs.readFileSync("./1-json.json")
const data = JSON.parse(readData)
data.name = "swarnima"
data.age = "21"
const finalJsonData = JSON.stringify(data)
fs.writeFileSync("./1-json.json",finalJsonData)
console.log(finalJsonData);