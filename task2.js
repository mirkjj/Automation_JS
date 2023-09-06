//Perform addition of various types (string + boolean, string + number, number + boolean)
//Perform multiplication of various types (string * boolean, string * number, number * boolean)
//Divide different types (string / boolean, string / number, number / Boolean)
//Perform explicit conversion (number, string, boolean)

//string + boolean

let line = "10 ";
let boolean = true;
let number = 5;

//string, boolean

console.log("Addition: " + line + boolean);
console.log("Multiplication: " + line * boolean);
console.log("Divide: " + line / boolean);


//string, number
console.log("Addition: " + line + number);
console.log("Multiplication: " + line * number);
console.log("Divide: " + line / number);


//number, boolean
console.log("Addition: " + number + boolean);
console.log("Multiplication: " + number * boolean);
console.log("Divide: " + number / boolean);

//Perform explicit conversion (number, string, boolean)
console.log("Explicit conversion. The new datatype is " + typeof (String(boolean)));
console.log("Explicit conversion. The new datatype is " + typeof (Number(line)));
console.log("Explicit conversion. The new datatype is " + typeof (Boolean(number)));

