console.log("working") 
let value=0;
let increment= document.querySelector(".Increment");  
let decrement= document.querySelector(".Decrement");  
let reset= document.querySelector(".Reset") 
let span = document.querySelector(".counter span") 

 

increment.addEventListener('click',()=>{
    value+=1; 
    span.innerText=`${value}` 
})
 
decrement.addEventListener('click',()=>{
    value-=1; 
    span.innerText=`${value}` 
}) 

reset.addEventListener('click',()=>{
    value=0; 
    span.innerText=`${value}` 
})
span.innerText=`${value}` 