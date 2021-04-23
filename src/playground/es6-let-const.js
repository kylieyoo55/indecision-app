//chalenge area

const multiplier={
    numbers:[2,5,7,3,8,13],
    multiplyBy:5,
    multiply(){
        return this.numbers.map(num=>num*this.multiplyBy)
    }
}
console.log(multiplier.multiply());





