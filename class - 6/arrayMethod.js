// 1. push
let arr = [1, 2, 3]

//push -> add new element in array at last position
arr.push(1)

console.log("push", arr);

// 2. pop
let lastEle = arr.pop()

console.log("pop", arr);
console.log("pop", lastEle);

// 3. unshift
arr.unshift(5)

console.log("unshift", arr);

// 4. shift
let firstEle = arr.shift()

console.log("shift", arr);
console.log("shift", firstEle);


// 5. concat

let arr1 = [1, 2]
let arr2 = [3, 4]

// let arr = [1, 2, 3, 4]

// 1. spread
// let ans = [...arr1, ...arr2]
// arr1.push(...arr2)

console.log("concat", arr1.concat(arr2), arr1);

// 6. slice
let array = [1, 2, 3, 4, 5, 6, 7]
// let sliceArr = array.slice()
// let sliceArr = array.slice(0)
// let sliceArr = array.slice(0, 3)
// 0 < 3 => 0, 1,2
// let sliceArr = array.slice(4, 3)
let sliceArr = array.slice(2, 2)

// first - StaticRange, secomdin = end

// 0 - last

console.log("slice", array);
console.log("slice", sliceArr);

// 7. splice
let arrSpl = [1, 2, 3, 4, 5, 6, 7]

// let splArr = arrSpl.splice()
// let splArr = arrSpl.splice(2)
// let splArr = arrSpl.splice(2, 10)
let splArr = arrSpl.splice(2, 1, 10, 20, 30)


console.log("splice", arrSpl);
console.log("splice", splArr);


// m -> 1  4 5
// de -> 2 3
// 1 , 2


// 8. forEach

//1,2 ,3
let newArr = arr.forEach((a, i, arr) => {
    console.log(a, i, arr);
    return a * a
})

console.log("forEach: ", newArr);

// 9. map

let newArr1 = arr.map((a, i, arr) => {
    console.log(a, i, arr);
    return a * a
})

console.log("Map: ", newArr1);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i], i);

// }

// 10. filter

let f = [1, 2, 3, 4, 5, 6]

//[2,4,6]
// let even = []
// for (let i = 0; i < f.length; i++) {
//     if (f[i] % 2 === 0) {
//         even.push(f[i]);
//     }
// }

let even = f.filter((a) => {
    return a % 2 === 0
})

console.log(even);

// 11. reduce 
// 12. find
// 13. indexOf
// 14. includes
// 15. findIndex
// 16. join
// 17. reverse
// 18. sort
// 19. some
// 20. every 

// Interview Question write customised array metods

// 1 2 3 4 5 => 15

Array.prototype.sum = function () {
    console.log("this", this)
    // let sum = 0
    // for (let i = 0; i < this.length; i++) {
    //     sum += this[i]
    // }

    // // console.log(sum);
    // return sum;

    return this.reduce((sum, ele) => {
        sum += ele;
        return sum;
    }, 0)
}

let arrSum = [1, 2, 3, 4, 5];



console.log(arrSum.sum());
