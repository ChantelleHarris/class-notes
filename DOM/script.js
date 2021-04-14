//DOM Document Object Model

/* 
A representation of a window.document object that comprises
everything that we see in the browser (and things we don't such as <head> tag)
-DOM Node interface has subclasses of:
    -Document
    -Element
    -DocumentFragment
*/

// //document.createElement creates an HTML element
// let h1 = document.createElement("h1");
// //.innerText is a property that injects text
// h1.innerText = "Welcome to Document Object Model"
// //references style sheet and its color property to assign it a value
// h1.style.color = "whitesmoke"
// h1.style.fontFamily = "sans-serif"
// //appends the Node
// document.body.appendChild(h1)

//document.getElementById()

let h3 = document.getElementById('id-method')
h3.innerText = '.getElementById'
h3.style.color= 'white'

let p = document.getElementById('get-id');
p.innerText = "Method used to grab the first element with a specified id"

let myList = document.getElementsByClassName('our-list')
console.log(myList)//shows all of the list items with the same class
//as an array
myList[0].style.color ='red'

let qSelect = document.querySelector('#q-select');
qSelect.innerText = "Query Selector grabs the first matching selector"

let selectAll = document.querySelectorAll('h3')
console.log(selectAll)
selectAll[0]

// .addEventListener( "event", callback_function)

let myBtn = document.querySelector('.submit-btn');
console.log(myBtn)
myBtn.addEventListener('click', ()=> {console.log('Button has been hit!')})