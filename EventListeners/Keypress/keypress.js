document.addEventListener('keypress',(e)=>{
    const key= e.key;  

   document.querySelector('span').innerText=`${key}`

})