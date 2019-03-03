// function fib(n){
// if (n==1||n==2) return 1;
// else return fib(n-2)+fib(n-1);		
// }
// const userNum= parseFloat(prompt("Enter your order number of Fibonacci number"));
// alert(fib(userNum));



function fibNum(n) {
  return n <= 1 ? n : fibNum(n - 1) + fibNum(n - 2);
}

const userNum= parseFloat(prompt("Enter your order number of Fibonacci number"));

alert(fibNum(userNum))