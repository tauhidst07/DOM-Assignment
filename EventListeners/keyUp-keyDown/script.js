document.addEventListener('keydown',(e)=>{
   document.querySelector('h3').innerText=e.key+' is down'
}) 
document.addEventListener('keyup',(e)=>{
    document.querySelector('h3').innerText=e.key+' is up'
 })