//conditional statements-- if, if else/else if, swithch, ternary

//IF STATEMENTS
//Checks for a boolean value, if something is truthy( a truthy statement),
//or fasly.
//Truthy--if a condition is or can be true
//Falsy==if a condition is false or can be false
//Some falsy exdpressions are: null, NaN(not a number), 0, an 
//empty string (" "), and undefined

//If a condition is true, js will execute (perform) the code block
//every if checks one, singular condition
//Declare a variable

//the condition to check is  held in our ( )
if(isOpen===true){
    //the code we perform if the condition is met is held in the block{ }
    console.log('The door is open.')
};
//same as above, statement checks if the value in parenthesis is true
if(isOpen){
    console.log('The door is open.')
};
//Can test false values
if(isOpen===false){
    console.log('The door is shut.')
}

//If ELSE
//if else is used to check a condition, but run a code block for either
//the met condition or a separate code block if it does not meet the
//condition

let isOpen=false;

if(isOpen===false){
    console.log('You can go inside, the door is open');
} else{
    console.log('The door is not open to enter.');
}

let temp = 68;
if(temp>=65){
    console.log('Wow, what a nice day.')
} else{
    console.log('I need a sweater.')
}

//ELSE IF
//else if is used to allow us to check more than two conditions
//Examples: Day 2 Challenge, Fizz Buzz Challenge
let temp=68;
if(temp>=80){
    console.log('I know people are wearing shorts.')
} else if( temp>=65){
    console.log('This is t-shirt weather for most folks.')
} else if(temp>=50){
    console.log("You're gonna need a sweater.")
}
else{
    console.log('I am not leaving my house, and you cannot make me.')
}

let userName ="myUsername";
let password="myPassword";
if(userName==="myUsername" && password==="myPassword"){
    console.log(`Welcome back, ${userName}, you're logged in!`);
} else if(userName==="myUsername"){
    console.log('Your username is correct, but you have the wrong password.')
}
else{
    console.log('You are not in our database, would you like to sign up?')
}

//SWITCH STATEMENTS
//execute a block of code depending on the "cases"; condition met? 
//check against cases
//use case(condition): -starts code block
//break-to end the code
//Example: fizz buzz
//Default- code to be run if no cases are met, good practice to have

let favColor= "maroon";
switch(favColor){
    case "blue":
        console.log('Blue like the sky.')
        break;
    case "red":
        console.log('Red like a rose')
        break;
    default:
        console.log(`${favColor} is beautiful too.`)
}

let doYouLikePizza = "Yep";

switch(doYouLikePizza){
    case 'yes':
    case 'yeah':
    case 'yep':
    case 'duh':
        console.log('Me too! I love pizza.')
        break;
    case "nope":
    case "nah":
    case "no":
        console.log("Ohh...I will order something else for dinner.")
        break;
    default:
        console.log('I cannot tell if that is a yes or a no....')
}
//TERNARY
//Concise way to check two or more conditions using the syntax of 
//? and :
//Structure:
//(condition) ? (code to run if true/truthy): (code to run if false/falsy)
let temp=70;
//ternary
temp>75?console.log('Indiana Summer Temps'): console.log("Indiana Spring Time");

let num=-55;

num>0? console.log('positive number') :
num<0? console.log('negative number') :
console.log('Number is 0, neutral');

//LOOPS
//For loop- a quick and easy way to iterate or "loop" over something,
//to do it repeatedly
//Infinite loops are possible (best to avoid): ctrl + c, or close VSC
//Loop take in three parameters, each sepatated by a semicolom:
//1. initial expression
//2. Condition
//3. increment (or decrement)expression

//   (1) ;  (2) ; (3)
for(i=10; i>=0; i--){
    console.log(i);
}

//Challenge: use for loop to count to 20 by 2s

for(i=0;i<21;i+=2){
    console.log(i)
}
//Printing each letter with a loop

let word="Fantastic";
for(i=0; i<word.length; i++){
    console.log(word[i]);
    

}