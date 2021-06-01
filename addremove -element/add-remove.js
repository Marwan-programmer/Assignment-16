let add=document.getElementById("add-element");


add.addEventListener("click" ,function(){
    let element=document.getElementById("elements");
    element.insertAdjacentHTML("beforeEnd","<div class='element'><h3>Element </h3><h4>This is an element</h4><button>Delete</button></div>")
    let del =document.querySelector(".element button");
     del.onclick=remove;

    
})


function remove(e){
let del =document.querySelector(".element button");
    del.addEventListener("click",function(){
    
        let elementDel=document.querySelector(".element")
         
    elementDel.outerHTML="";
    })}

