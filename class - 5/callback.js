let add = (a, b) => {
    return a + b;
}

let client = (callback, a, b) => {
    console.log(callback(a, b))
}

client(add, 1, 5)


//callback hell
// let add = (a, b) => {
//     return a + b;
// }

// let superF = (a, b, callback) => {
//     return callback(a, b)
// }

// let client = (callback, a, b, add) => {
//     return callback(a, b, add)
// }

// console.log(client(superF, 1, 5, add));
