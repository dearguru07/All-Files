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





// let n = 10;
// function SumOfNumbers(n) {
//     if (n <= 1) return n;
//     return n + SumOfNumbers(n - 1);
// }
// // SumOfNumbers(n);
// console.log(SumOfNumbers(n))


// let arry = [1, 5, 4, 7, 8, 5, 2, 4, 7, 0];

// function SumOfArry(n) {
//     if (arry[i] == 0) return n;
//     return arry[n]+SumOfArry(n-1)
// }
// console.log(SumOfArry(arry.length-1))


// function Rec(n) {
//     if (n < 0) return;
//     console.log(n);
//     return Rec(--n);
// }
// // console.log(Rec(10))

// Rec(10)


// function Rect(n) {
//     if (n < 0) return;
//     console.log(n);
//     return Rect(n++);
// }
// Rect(5)


// function Hello(n) {
//     if (n < 1) return;
//     console.log(n);
//     Hello(--n);
// }
// Hello(10)

// let n=20
// function Hello(x) {
//     if (x == n) return;
//     console.log(x);
//     Hello(++x);
// }
// Hello(1)


// let n = 15;
// function Hello(x) {
//     if (x > n) return;
//     console.log(x);
//     Hello(++x);
// }
// Hello(1)


// function Namste(x) {
//     if (x == n) return;
//     console.log(x);
//     Namste(++x);
// }
// Namste(1)


// let n = 5;
// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = i + 1; j < n - i - 1; j++){
//         row = row + j;
//     }
//     console.log(row)
// }


// function MaxNumber(nums) {
//     let max = -Infinity;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i]>max) {
//             max = nums[i];
//         }
//     }
//     return max;
// }
// let nums = [1,18, 5, 7, 8, 5, 0, 1, 2, 3, 60, 5, 4, 17,17, 8, 9, 60,5];
// // console.log(MaxNumber(nums))

// function SecNumber(nums) {
//     let first = -Infinity;
//     let second = -Infinity;
//     for (let i = 0; i < nums.length; i++){
//         if (nums[i] > first) {
//             second = first;
//             first = nums[i];
//         }
//         else if (nums[i] > second && nums[i] !==first) {
//             second = nums[i];
//         }
//     }
//     return second;
// }

// console.log(SecNumber(nums))


// let n = 4;
// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < n; j++){
//         row = row + '*';
//     }
//     console.log(row)
// }

// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < i + 1; j++){
//         row=row+'*'
//     }
//     console.log(row);
// }

// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < i + 1; j++){
//         row = row + (j + 1);
//     }
//     console.log(row)
// }


// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < i + 1; j++){
//         row = row + (i + 1);
//     }
//     console.log(row);
// }

// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < n - i; j++){
//         row = row + '*';
//     }
//     console.log(row)
// }


// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j < n - i; j++){
//         row = row + '-';
//     }
//     for (let k = 0; k < i + 1; k++){
//         row = row + '*';
//     }
//     console.log(row)
// }



// let toggle = 1;

// for (let i = 0; i < n; i++){
//     let row = '';
//     for (let j = 0; j <= i; j++){
//         row = row + toggle;
//         if (toggle == 1) {
//             toggle = 0;
//         }
//         else {
//             toggle = 1;
//         }
//     }
//     console.log(row)
// }


// let arr = [1, 5, 4, 2, 5,9, 8, 0];
// let n = arr.length;
// function BobbleSort(arr) {
//     for (let i = 0; i < n; i++){
//         for (let j = 0; j < n - 1 - i; j++){
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(BobbleSort(arr))


// function Nums(n) {
//     if (n <= 0) return;
//     console.log(n);
//     n = n - 1;
//     Nums(n);

// }
// let n = 11;
// Nums(n)


// let n = 15;
// function Nums(x) {
//     if (x > n) return;
//     console.log(x);
//     x = x + 1;
//     Nums(x);
// }
// Nums(1)


// let n = 12;
// function Sum(n) {
//     if (n == 0) return 0;
//     return n + Sum(n - 1);
// }
// console.log(Sum(n))


// let arr = [1, 2, 5, 7, 8, 5, 2,1,1, 0];
// function SumOfArry(n) {
//     if (n == 0) return arr[0];
//     return arr[n] + SumOfArry(n - 1);
// }
// console.log(SumOfArry(arr.length-1))


// function SumOfArry(n) {
//     if (n == arr[0]) return arr[0];
//     return arr[n] + SumOfArry(n - 1);
// }
// console.log(SumOfArry(arr.length-1))


// let n = 6;
// function Factorial(n) {
//     if (n == 1) return 1;
//     return n * Factorial(n - 1);
// }
// console.log(Factorial(n));



// function PowerOfTwo(n) {
//     if (n == 1) return true;
//     else if (n < 1 || n % 2 !== 0) return false;
//     return PowerOfTwo(n / 2);
// }
// console.log(PowerOfTwo(32))



let arr=[1,5,4,1,2,5,4,7,8,5,9]
function BobbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++){
        for (let j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }    
    return arr;
}
console.log(BobbleSort(arr))

// let arr = [1, 5, 4, 2, 5,9, 8, 0];
// let n = arr.length;
// function BobbleSort(arr) {
//     for (let i = 0; i < n-1; i++){
//         for (let j = 0; j < n - 1 - i; j++){
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//             }
//         }
//     }
//     return arr;
// }
// console.log(BobbleSort(arr))