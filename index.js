function fib(n){
if (n==1||n==2) return 1;
else return fib(n-2)+fib(n-1);		
}
const userNum= parseFloat(prompt("Enter your order number of Fibonacci number"));
alert(fib(userNum));
