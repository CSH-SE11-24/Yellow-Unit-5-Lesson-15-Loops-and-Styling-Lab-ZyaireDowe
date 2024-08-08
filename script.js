console.log("Script running...");
// Task 1: CSH Mode
// Select the CSH mode button and console log to confirm you selected successfully
let button=document.querySelector("#csh")
console.log(button)

// Select the body and console log to confirm you selected successfully
let body=document.body
console.log(body)
// Add an event listener such that when you click the CSH mode button, the background color of body becomes green
button.addEventListener("click",function(event){
 body.style.backgroundColor="green"
})




// Task 2: All off button
// Select the all off button and console log to confirm you selected successfully
let butt=document.querySelector("#clear")
console.log(butt)
// Select all the lightbulb p tags and console log the length to confirm you selected successfully
 let pTags =document.querySelectorAll(".lightbulb")

// Add an event listener such that when the all off button is clicked, the background color of all the lightbulbs becomes bla
butt.addEventListener("click",function(event){
  for(let i=0;i<pTags.length;i++){
    pTags[i].style.backgroundColor="black"
  }
  })




// Task 3: On and off feature
// Add an event listener to the FIRST lightbulb such that when you click it, the background color of that p tag changes to white

pTags[0].addEventListener("click",function (event){
  pTags[0].style.backgroundColor="white"
})




// Extra credit: try to use a for loop to make every lightbulb's background color to change when you click it






