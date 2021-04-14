// Asynchronous JS Functions
/*  - async returns a Promise*
    - *await makes function wait for a Promise
    */

     //function declaration

    //let standardFunction = {

   // function expression...if you use a variable, its a funcion
    //expression

    // standardFunction();

    // async function asyncFunction(){
    //     return "This returns a promise."
    // }
    // async function asyncFunction(){
    //     return Promise.resolve// or Promise.reject (
    //         "This is resolved."
    //     )
    // }

    async function asyncAction(){
        setTimeout(() => {
            console.log('3 Async finally hit yo!')
        }, 3000);
    }
asyncAction()

//python is a synchronous language
//what does asynchronous mean? (of two or more objects or events) not existing or happening at the same time.
//Promise
/*

Commit to something
    -completed --> resolved
    -rejected
    */

    let p = new Promise((resolve, reject) => {
      //Promise object with one function with resolve & reject parameters 
        let a = 1+ 1
        if (a === 2) {
            resolve('Promise successful and Resolved')
        } else {
            reject('Promise rejected')
        }
    })

    // function assNums (x,y) {
    //     let sum = x + y
    //     return sum
    // }
    // let result = addNums (5,5)
    // // document.querySelector('.result').innerText =result

    // addNums(5,5)
    // let result = addNums(5,5)
    // let result2 = addNums(7,15)
    // document.querySelector('.result').innerText =result
    // document.querySelector('.result2').innerText =result2

    p.then((message)) => {
        //amything inside .then is a resolve. Takes a fx with single parameter
        console.log(`This is the then ${message}`)
    }).catch((message) => {
        //anything inside.catch is a reject state
        console.log(`This is the .catch(). ${message}`)
    })

    //Try, Catch, Throw, and Finally

    try {
        //tests a block of code
        console.log('Start of the try')
    } catch(err) {
        //handles the error
        console.log('Error has occurred' + err)
        //err.name logs the name of the error; err.message logs the message
    } finally {
        //executes the code after try/catch regardless of the result
        console.log("Finally ALWAYS runs")
    }
    console.log("The execution continues.")

    let json = `{'age: 30}`

    try (
        let user = JSON.parse(json)
        if(!user.name){
            throw new SyntaxError("Incomplete data: no name")
        }
    ) catch(e){
        console.log(`JSON error: ${e}`)// e.name or e.message for specificity
    }
    console.log(user.name)

    function upperCase(name) {
        if(typeof name !=== "string") {
            throw TypeError('Name must be a string')
        }
        return name.toUpperCase():
        }
        console.log(upperCase(47))
    