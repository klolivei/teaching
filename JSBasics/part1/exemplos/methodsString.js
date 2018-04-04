/* 20 String Methods */

var stringOne = "CTECamp é o melhor lugar para aprender"
var stringTwo = "Programação Web"

// charAt()
console.log(stringOne.charAt(1))

// charCodeAt()
console.log(stringOne.charCodeAt(1))

// concat()
console.log(stringOne.concat(stringTwo))

// endsWith()
console.log(stringOne.endsWith("aprender"))

// fromCharCode()
console.log(String.fromCharCode(84))

// includes()
console.log(stringTwo.includes("Web"))


// indexOf() - retorna index da primeira ocorrencia.
console.log(stringOne.indexOf("Camp"))

// lastIndexOf() - retorna index da ultima ocorrencia
console.log(stringOne.lastIndexOf("Camp"))

// match() - retorna um array para cada match
console.log(stringOne.match(/Camp/g))

// repeat()
console.log(stringOne.repeat(3))

// replace()
console.log(stringOne.replace(/Camp/g, "CAMP"))

// search() - retorna o index da expressão procurada
console.log(stringTwo.search("Web"))

// slice() -  retorna parte da string delimitada pelos indexes
console.log(stringTwo.slice(2, 4))

// split() - divide a string e a coloca num array
console.log(stringOne.split(" "))

// startsWith()
console.log(stringTwo.startsWith("Programação"))

// substr() - retorna parte da string começando por um idx
console.log(stringTwo.substr(2, 4))

// toLowerCase()
console.log(stringOne.toLowerCase())

// toUpperCase()
console.log(stringOne.toUpperCase())

// trim() -- retira espaços dos dois lados da string
var stringThree = "     CTECampTop      ";
console.log(stringThree.trim())
