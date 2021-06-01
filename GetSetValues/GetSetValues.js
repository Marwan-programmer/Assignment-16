let val1=document.querySelector("#value1");
let val2=document.querySelector("#value2");
let result=document.querySelector("#result");
let select=document.querySelector("select");
let btn=document.querySelector("button")


// select.addEventListener("change",function(){ select.options[select.selectedIndex].text;})


btn.addEventListener("click",function(){
  let opreater= select.options[select.selectedIndex].value;
         
       
       let stringResult= +val1.value + opreater+ +val2.value;
         if( isNaN(eval(stringResult))){
 alert("the value should be a number")

         }else{

            result.value=eval(stringResult)
         }

})


//////////////eval extractes opreaters from string 
