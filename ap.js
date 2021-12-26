const a = 2, b = 5;
const N = 7;
const N = (num1, num2, n) => {
   const diff = num2 - num1;
   const fact = (n - 1) * diff;
   const term = num1 + fact;
   return term;
};
console.log(N(a, b, N));