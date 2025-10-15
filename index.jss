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