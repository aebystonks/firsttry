// undefined 

let haveNoValue;
const copyEmpty = haveNoValue;
console.log(`Getting undefined: \n ${haveNoValue} \n`)

// Null

const n = "a".match("b");

console.log(`Null: \n ${n} \n`)


// boolean
let bool = 1;
bool = Boolean(bool)

const copyBool = bool;

const f = 1;
const s = 2;
const trueResult = f < s;

console.log(`True moment: \n method first: ${copyBool} \r method second: ${trueResult} \n`)




// NaN
let u = undefined;
u = Number(u)

const copyUndefined = u;

const str1 = 10;
const str2 = '10wtf'
const result = +str1 + +str2;

console.log(
	`Nope \n the first method(with undefined): ${copyUndefined} \r
		second method(with string): ${result}`
);

