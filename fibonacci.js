var n = prompt("Enter the count");
n = parseInt(n);
var a = 0; //1
var b = 1; //1
//Printing first 2
console.log(a);
console.log(b);
var count = 2;
//while(c < n) {
while(count < n) {
  var c = a + b;
  console.log(c);
  a = b;
  b = c;
  count = count + 1;
}