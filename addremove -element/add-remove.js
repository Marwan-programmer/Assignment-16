let add=document.getElementById("add-element");
let i=0;////for id element 
let idnum=0;////id number text insid h3

add.addEventListener("click" ,function(){
    i++;
    idnum++;
    let mainelement=document.getElementById("elements");
    mainelement.insertAdjacentHTML("beforeEnd","<div class='element'><h3>Element  </h3><h4>This is an element</h4><button>Delete</button></div>")

   let element=mainelement.querySelectorAll(".element")[i-1];
   idnumbertext=element.querySelector("h3").innerHTML="id number"+idnum;
    element.id=idnum;

   
/////////////remove
let del =element.querySelector("button");
    del.addEventListener("click",function(){
        element.remove();
    
    //////if we remove first element ,the second element will change its id like the previous that has been removed.and so on for other elements.....
   
    if(mainelement.childElementCount!=idnum);{
        for(count=1;count<mainelement.childElementCount+1;count++){
        let numelement=  mainelement.querySelectorAll(".element")[count-1];
        idnumbertext=numelement.querySelector("h3").innerHTML="id number"+ count;
        numelement.id=count;
         }
        
    }
    ////when we add element agin it will add after last number of child 
    idnum=mainelement.childElementCount;
    i=mainelement.childElementCount;
    })






})

