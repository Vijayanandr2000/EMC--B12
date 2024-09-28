class B8 {
    constructor() {
        this.batch = "B8";
        this.hms = "hm"
    }

    printBatch() {
        console.log(this.batch);
    }

    hm() {
        console.log(this.hms);
    }

}

class B10 extends B8 {
    constructor() {
        super()
        this.batch = "B10"
    }

    printBatch() {
        console.log(this.batch);
    }
}

class B12 extends B10 {
    constructor() {
        super()

        this.batch = "B12"
    }

    printBatch() {
        console.log(this.batch);
    }
}

// vijayAnand

// VijayAnand

let b8 = new B8() // object creation
b8.printBatch()
b8.hm()

// let b10 = new B10() // object creation
// b10.printBatch()
// b10.hm()

// let b12 = new B12() // object creation
// b12.printBatch()
// b12.hm()