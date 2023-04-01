 
 console.log("working")
function randomColor() {
    let red= Math.floor(Math.random()*255) 
    let green= Math.floor(Math.random()*255) 
    let blue= Math.floor(Math.random()*255)
     
    return [red,green,blue]
} 

let btn= document.getElementById("btn")  
let span=document.querySelector('h1 span') ; 

console.log(btn) 
btn.addEventListener('click',()=>{
  let [red,green,blue]=randomColor(); 
  document.body.style.backgroundColor=`rgb(${red},${green},${blue})`; 
  span.innerHTML=`rgb(${red},${green},${blue})`;
}) 



