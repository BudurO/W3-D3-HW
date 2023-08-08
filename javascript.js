console.log("Calculate area of a rectangle:");

let length = 4;
let width = 25;
let rectangle = length * width;
console.log("The area of the rectangle is: " + rectangle);

console.log("-----------------------------------------------");


console.log("The Temperature Converter:");

let celsius = 50;

let Convertercelsius = celsius * 9 / 5 + 32;


console.log( Convertercelsius+ " NN°C is NN°F");

let fahrenheit = Convertercelsius;
let Converterfahrenheit = fahrenheit - 32 * 5 / 9;

console.log(Converterfahrenheit+ " NN°F is NN°C");



console.log("-----------------------------------------------");

console.log("Convert hours to seconds:");

let hours = 2;
let Convert = hours * 60 * 60;
console.log(Convert);

console.log("-----------------------------------------------");

console.log("Leap year:");
let year = 2000;
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("it is Leap "+year);
}else{
  console.log("it is Not Leap");
}

console.log("-----------------------------------------------");

console.log("Find the a number is present in given range:");
 let start = 11;
 let end = 30;
 let numberRange = 15;
 let range = true;
 if (numberRange >= start && numberRange <= end){
  console.log("Number is present in given range: "+numberRange+" it is "+range);
 }else{
  console.log("Number is not present in given range"+" it is "+!range);
 }

console.log("-----------------------------------------------");

console.log("Factorial numbers:");

let Factorial = 1;
let number = 9;
if (number === 0 || number === 1) {
  console.log(Factorial);
} else {
  for (i = number; i > 1; i--) {
    Factorial = Factorial * i;
  }
  console.log(Factorial);

}
