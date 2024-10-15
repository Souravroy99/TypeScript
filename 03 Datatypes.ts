/*

string      number          boolean

null        undefined       void 

object      array           tuple

any         never           unknown

*/

// String
/*
let firstName: string = "Sachin" ;

firstName = firstName.toUpperCase() ;

console.log(firstName) ;

firstName = firstName.replace('A', 'f') ;
console.log(firstName) ;
*/

// number
/*
let id: number = 213 ;
let id2: number = 87.784 ;

let idString: string = id.toString() ;

console.log(id) ;
console.log(idString) ;
console.log(id2.toPrecision(2)) ; // return string
*/

// boolean
/*
let isExists: boolean = true ; // false, false && true, false || true

console.log(isExists) ;
*/

/*
// array --> User defined datatypes

let empList: string[] = ["Sourav"];  // let empList: Array<string> ;

let numList: Array<number> = [1,2,3,4,5,6,7,8,9,10] ;


// Filter
let ans: number[] = numList.filter((val): boolean => (val > 2)) ;
console.log(ans) ;

    console.log( numList.filter((val) => {
        return 0 ;
    }) ) ;

    console.log( numList.filter((val) => {
        return 1 ;
    }) ) ;


    console.log(numList.filter(function(val) { 
        return val > 5
    })) ;
    // Find
    let emp: string|undefined = empList.find((emp) => (emp == "Sourav")) ; // string | undefined
    console.log(emp) ;
    
    // Reduce
    // let sum: number = numList.reduce((acc, num) => acc + num) ;
    let sum = numList.reduce(function(acc, num) {
        return acc+num ;
    })
    console.log(sum) ;
    
    let mixedArray: (number | string)[] = [2,3,5,7,11,13,17,23, "John", 29] ;
    console.log(mixedArray) ;
*/

// enum --> User defined datatypes
enum color {
  Red,
  Blue,
  Yellow,
  Green,
}
// console.log(color.Green)

// tuple --> User defined datatypes

let person: [string, number, number[][], number] = [
  "Alice",
  30,
  [
    [1, 2, 3],
    [2, 3, 5, 7],
  ],
  9,
]; // Tuple's length can be anything

// console.log(person[2]) ;

/*
// any

let anyNum: any = 10 ;
console.log("Number -->", anyNum) ;

anyNum = "10" ;
console.log("String -->", anyNum) ;
*/

function handleError(errMsg: string): never {
  throw new Error(errMsg) ;
}

try {
  console.log(handleError("Everything is fine"));
} catch (err) {
  console.error("Caught an error");
}
