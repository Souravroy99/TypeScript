class Employee {
    public id: number ;
    protected name: string ;
    private address: string ;

    // Non-Parameterized Constructor
    // constructor() {
    //     this.id = 0 ;
    //     this.name = "Joker" ;
    //     this.address = "Universe" ;
    // }


    // Parameterized Constructor
    constructor(id: number, name: string, address: string) {
        this.id = id ;
        this.name = name ;
        this.address = address ;
    }

    // Methods
    getMyInfo(): string {
        return this.name + " " + this.id + " " + this.address ;
    }

    // static members are accessible via class name only
    static tellMeSecret(): void { 
        console.log("I am not an employee of this company") ;
    }


    // getters
    tellMeYourAddress(): string {
        return this.address ;
    }

    // setters
    wantToSetYourAddress(newAddress: string): void {
        this.address = newAddress ;
    }
};

class Ram extends Employee {
    constructor(id: number, name: string, address: string) { 
        super(id, name, address) 
    }

    greet(): void {
        console.log(`${this.id} + ${this.name}`) ;
    }
};


/*
const john = new Employee(111, "Sourav", "Kharagpur") ;

// console.log(john) ;

john.id = 1 ;
// john.name = "Radhe" ;          // Not Work
// john.address = "Park Street" ; // Not Work

console.log(john) ;
console.log(john.getMyInfo()) ;


const ram = new Ram(100, "RAM", "Ram Mandir") ;
console.log(ram) ;
ram.greet() ;
*/

Employee.tellMeSecret() ; // Static methods are accessible only through class name

const raj = new Employee(1, "Raj", "Kolkata") ;
console.log(raj) ;
console.log(raj.tellMeYourAddress());

raj.wantToSetYourAddress("Mumbai") ;
console.log(raj) ;
console.log(raj.tellMeYourAddress());