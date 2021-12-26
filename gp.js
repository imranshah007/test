/*var a =2;
a=parseInt(a);
var r=3;
r=parseInt(r);
var n=5;
n=parseInt(n);
var curr_term;
for(var i=0;i<n;i++){
    curr_term = a*Math.pow(r,i);
    console.log(curr_term + " ");
}*/
/*const num = 12;
const findNth = n => {
   var seq = [1], x = 0, y = 0
   for (var i = 0; i < n; i++) {
      var nextX = 2 * seq[x] + 1, nextY = 3 * seq[y] + 1
      if (nextX <= nextY) {
         seq.push(nextX)
         x++
         if (nextX == nextY)
            y++
         } else {
            seq.push(nextY)
            y++
      }
   }
   return seq[n];
}
console.log(findNth(num));*/
const a = 2, b = 5;
const N = 7;
const findNthTerm = (first, second, num) => {
   const diff = second - first;
   const fact = (num - 1) * diff;
   const term = first + fact;
   return term;
};
console.log(findNthTerm(a, b, N));