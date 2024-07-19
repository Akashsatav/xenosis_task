/*
This line declares a constant mainTitle and assigns it the result of document.querySelector("#title").

document.querySelector("#title") finds the first element in the HTML document with the id of title.

It's assuming there's an HTML element like <h1 id="title">...</h1> where ... is the initial content.
*/
const mainTitle = document.querySelector("#title");

//This line declares a variable curValue and initializes it to 0 using let, which allows the variable to be reassigned later.
let curValue = 0;

/*These lines declare constants btnDecrement, btnReset, and btnIncrement, and assign them the results of document.querySelector for elements with the ids decrement, reset, and increment respectively.
These elements are assumed to be buttons (<button id="decrement">, <button id="reset">, <button id="increment">) in the HTML structure. */
const btnDecrement = document.querySelector("#decrement");
const btnReset = document.querySelector("#reset");
const btnIncrement = document.querySelector("#increment"); 

/* 
This code adds an event listener to btnIncrement (which is the button with id increment).
When this button is clicked, the arrow function () => {...} increments curValue by 1 (curValue++) and updates the textContent of mainTitle (which is the element with id title) to display the new value of curValue.*/
btnIncrement.addEventListener("click",()=>{
    curValue++;
    mainTitle.textContent = curValue;
});

/* This code adds an event listener to btnDecrement (which is the button with id decrement).
When this button is clicked, the arrow function decrements curValue by 1 (curValue--) and updates the textContent of mainTitle to display the new value of curValue. */

btnDecrement.addEventListener("click",()=>{
    curValue--;
    mainTitle.textContent = curValue;
});

/*This code adds an event listener to btnReset (which is the button with id reset).
When this button is clicked, the arrow function sets curValue back to 0 and updates the textContent of mainTitle to display curValue (which is now 0). */
btnReset.addEventListener("click",()=>{
    curValue =  0;
    mainTitle.textContent = curValue;
});