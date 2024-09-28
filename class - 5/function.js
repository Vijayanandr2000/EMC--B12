// 1 , 5

// 1 + 2 + 3 + 4 + 5  = 15 + 100 = 115

let sum = 100;
for (let i = 1; i <= 5; i++) {
    sum += i

}

// console.log(sum); // 15


// 20 - 40  = 630 + 200 = 830

let sum1 = 0;
for (let i = 20; i <= 40; i++) {
    sum1 += i

}

// console.log(sum1);



// function function_name (){

// } 

// 1. basic function declaration
// function sumInRange(start, end, sum = 0) {
//     // let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i

//     }

//     return sum
// }

// 2. function expression
// let sumInRange = function (start, end, sum = 0) {
//     // let sum = 0;
//     for (let i = start; i <= end; i++) {
//         sum += i

//     }

//     return sum
// }

// 3. Arrow function
let sumInRange = (start, end, sum = 0) => {
    // let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i

    }

    return sum
}

// 4. Anonymous function
// setTimeout(function () {
//     console.log("I'm from setTimeout");

// }, 1000)

//5. IIFE -> Immediate Invoke Function Expressions
// (function () {
//     console.log("I'm from IIFE");
// }())

// console.log(sumInRange(1, 5, 100));
// console.log(sumInRange(20, 40, 200));
// console.log(sumInRange(20, 40));

// demo = {
//     name: 'sumInRange',
// }

// demo.name

// demo.age // undefined


// function add() {

// }

// const add = () => {

// } 


const obj = {
    name: 'vijay',
    log: function () {
        console.log(this)
    },
    arrowLog: () => {
        console.log(this)
    },
    global: function () {
        return () => {
            return () => {
                console.log(this)
            }
        }
    }
}

obj.log() // access global obj
obj.arrowLog() //  able to access parent obj but not current obj

obj.global()()()

// let newFun = obj.global()
// newFun()

console.log("this", this)