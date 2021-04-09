/*
Array
Hig-level, list-like object used to be traversed and mutated
    -uses integers as element index
    -can be accessed by bracket notation [index] or
    dot notation (method)
    -arrays are zero index
        -first onject at zero
        -last object at array length - 1
*/

//Create an Array

let british = ['Rolls Royce', 'Bentley', 'Caterham', 'Aston Martin']
console.log(british)

british.length//returns length of an array
british.push('MINI')//appends element to the end of an array
british.splice(0,1, 'Jaguar')// index to start, how many to remove,
//and what to replace it with
console.log(british)

british.pop()//removes last index of an array and returns it for a 
//brief moment
console.log(british)

let bReturn = british.pop();
console.log(bReturn)

british.unshift('Bentley');//adds an item  or items to the beginning of an array
//and returns array length
british.unshift('Land Rover', 'McLaren');
console.log(british)

british.shift()//removes the first element of an array

console.log(british.indexOf('Land Rover', 1))// searches an array
//for an index of element. Can add second parameter to select start index

british.includes//determines whether an array includes a certain element
//returns true or false
console.log(british.includes('MINI'))

//Advanced Array manipulations

let german = ['BMW', 'Mercedes', "Audi", "Porsche", 'Alpina', 'VW'];
for (cars in german) {
    console.log(cars)
}

for (cars of german) {
    console.log(cars)
}
//array.ForEach()method--> runs a function for each element in an array

german.forEach(car => console.log(car))

//array.map()--> transforms elements in original array by callback function
//and returns a new, modified array

//console.log(german.map(car => car.toUpperCase()))

//console.log(car.toUpperCase)

//array.filter()--> creates a new array with elements that pass the test
//in a given function

console.log(german.filter(car => car.startsWith('A', 'B') || car.startsWith('B')))

//Objects
/* Containers for values in a JSON (Java Script Onject Notation)
    -exists as a string
    -has properties and methods
    -.property
    -.method()
    -associative arrays (each property is associated with a string value)
    */

    //define JS object with an object literal

    let car = {
        //key : value pair (properties) that are comma separarated
    make: 'Porsche',
    model: '911',
    country: 'Germany',
    driver: 'Walter Rohl',
    association: {
        name: 'Jeff',
        lastName: 'Adams',
    }
    }

    //Accessing object values
    console.log(car.make);//access using key
    console.log(car['model'])//access using object key
    let returnKeys = Object.keys(car);//returns keys in an object
    console.log(returnKeys);
    console.table(car)//console logs a table of an object

    //Object property reassignment
    car.make = "maserati";
    console.log(car.make)
    car['model'] = 'GranTurismo S';
    console.log(car)
    console.log(car.association.name)//to access nested objects withn an
    //object (think of a ladder)

    //Object Constructor

    let client =new Object;//a way to construct an object without
    //hardcoding one
    console.log(client)

    client.firstName = 'Paul';
    console.log(client)
    client.lastName = 'Niemczyk';
    client.birthYear = '1990';
    console.log(client)

    let manager = {
        firstName: 'Brad',
        lastName: 'Tutus',
        birthYear: '1980',
        //First way requires parameter of birthYear from outside
        // setAge: function(birthYear){
        //     return 2021-birthYear
        // }
        // },
        //Second way takes property from this.birthYear
        // setAge: function(){
        //     return 2021 - this.birthYear
        setAge: function(){
            this.age = 2021 - this.birthYear//this creates new
            //age property with value of function calculation once
            //it has been called
        }
        }
    

//console.log(manager.setAge(1990))
// console.log(manager.setAge())
manager.setAge()
console.log(manager)