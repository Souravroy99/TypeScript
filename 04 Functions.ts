    /*
// Named Function
function add(a: number, b: number): number {
    return (a + b) ;
}

let results: number = add(9, 91) ;
console.log(results) ;
    */



    /*
// Store Named Function
let results2 = function multiplication(num1: number, num2: number): number {
    return num1 * num2 ;
}

console.log(results2(9,1)) ;
    */



    /*
// Arrow Function
let results3 = (num1:number, num2:number): number => (num1 ^ num2) ;

console.log(results3(1, 2)) ;
    */



    /*
// Optional Parameter
function add2(num1: number, num2: number, num3?: number): number {
    return num1 + num2 + (num3 ? num3 : 0) ;
}

console.log(add2(9, 8)) ;
console.log(add2(9, 8, 7)) ;
    */



    /*
// Default Parameter
function add3(num1: number, num2: number, num3=10): number {
    return num1 + num2 + num3 ;
}

console.log(add3(9, 8)) ;
console.log(add3(9, 8, 7)) ;
    */



    /*
// Rest Parameter
function addAll(num1: number, ...num2: number[]): number {

    // let n = num2.length ;
    // for(let i=0 ; i<n ; i++) {
    //     num1 += num2[i] ;
    // }
    // return num1 ;
    
    // OR

    return num1 + num2.reduce((acc, ele) => acc+ele, 10) ;
}

console.log(addAll(1, 2, 3, 4, 5, ...[6,7,8])) ;
    */




// Generic Function
function getFirstElement<Type>(array: Type[]): Type {
    return array[0] ;
}

let numbers: number[] = [2,3,5,7,11] ;
console.log(getFirstElement(numbers)) ;  // OR // console.log(getFirstElement<number>(numbers)) ;


let strings: string[] = ["Vijay", "Thala", "MSD", "PVS"] ;
console.log(getFirstElement(strings)) ;