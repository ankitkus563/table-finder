
let btn = document.getElementById("btn");

btn.addEventListener("click", furLoop);
let value;
let tableOf = 0;

function furLoop(){
    for(let i=1; i<11; i++){
        
        value = tableOf + "*"+ i+"="+tableOf*i;
          console.log(value);
for(let j=1; j<11; j++){

    let text = document.getElementById("text"+i);
text.innerHTML = value;
              
               
                }

               
        }
        
}

let inputt = document.getElementById("input");
inputt.addEventListener("input",function(){
    tableOf= this.value;
})


function eraseText() {
    var eraseText = document.getElementsByClassName("eraseText");
    document.getElementById("input").value ="";
    for(let i=0; i<11; i++){
        eraseText[i].innerHTML = "";


    }

    
}

