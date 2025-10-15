function Nums(n) {
    if (n <= 0) return;
    console.log(n);
    n = n - 1;
    Nums(n);

}
let n = 11;
Nums(n)


let n = 15;
function Nums(x) {
    if (x > n) return;
    console.log(x);
    x = x + 1;
    Nums(x);
}
Nums(1)


let n = 12;
function Sum(n) {
    if (n == 0) return 0;
    return n + Sum(n - 1);
}
console.log(Sum(n))


let arr = [1, 2, 5, 4, 7, 8, 5, 2, 0];
function SumOfArry(n) {
    if (n == 0) return arr[0];
    return arr[n] + SumOfArry(n - 1);
}
console.log(SumOfArry(arr.length-1))

let arr = [1, 2, 5, 7, 8, 5, 2,1,1, 0];
function SumOfArry(n) {
    if (n == 0) return arr[0];
    return arr[n] + SumOfArry(n - 1);
}
console.log(SumOfArry(arr.length-1))


function SumOfArry(n) {
    if (n == arr[0]) return arr[0];
    return arr[n] + SumOfArry(n - 1);
}
console.log(SumOfArry(arr.length-1))


let n = 6;
function Factorial(n) {
    if (n == 1) return 1;
    return n * Factorial(n - 1);
}
console.log(Factorial(n));



function PowerOfTwo(n) {
    if (n == 1) return true;
    else if (n < 1 || n % 2 !== 0) return false;
    return PowerOfTwo(n / 2);
}
console.log(PowerOfTwo(32))