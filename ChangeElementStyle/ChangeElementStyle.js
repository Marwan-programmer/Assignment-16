let select=document.querySelector("select");
let btn=document.querySelector("button");
/////////////////////////////////////////////selects a valid theme

function validoption(){
let select=document.querySelector("select");
if(select.options[select.selectedIndex].text!="Select Theme"){
    btn.classList.remove("disabled")
}    else{
    btn.classList.add("disabled")

}
}
select.addEventListener("change",validoption);


//////////////////change color for text 
function color(e){
    e.preventDefault();

   let valuecolor=select.options[select.selectedIndex].value;
        div=document.querySelector("#content")
        div.className=valuecolor;
}


btn.addEventListener("click",color);

