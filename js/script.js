let domN1 = document.getElementById("d1");
let domN2 = document.getElementById("d0");

const domBtnStart = document.getElementById("btnStart");

let d1;
let d2;
let myInterval;

let speedCounter = 0;
function start(){
    if (typeof(myInterval) != "undefined") { return ; }
    
    myInterval=setInterval( nRandom , 1000);
}

function nRandom(){
    speedCounter++
 
    d1 = Math.random()*9;
    d0 = Math.random()*9;
    d1 = Math.trunc(d1);    
    d0 = Math.trunc(d0);

    domN1.innerText = d1;
    domN2.innerText = d0;
    

    if(speedCounter = 3){
        clearInterval(myInterval);
        myInterval=undefined;
        
        let messaggio = document.getElementById("message");
        if(d1 == d0){
             messaggio.innerHTML = "Hai vinto!"
        } else if (
            messaggio.innerHTML = "Hai perso! Ritenta e sarai più fortunato!"
        );
    }
}

domBtnStart.addEventListener('click' , start);