let str1 = "Hello, World"; 

let str2 = 'This is a string'; 

let str3 = `123`; 

console.log(typeof str1, typeof str2, typeof str3); //returns the variable type, strings

console.log(`1 + 2 = ${1+2}`); //prints out the whole expression //  ${...} = sum expression

console.log(str2.length)//prints out the length of the whole string, spaces included
console.log(str2[0])//prints out the value in the 0th index of the string

str2[0] = 'H'; //strings cant be changed like this, they are fixed
console.log(str2); //still is "This is a string"