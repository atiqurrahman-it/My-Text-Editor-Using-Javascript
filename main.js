textArea=document.getElementById('textArea')

function f1(){
    textArea.classList.toggle('fw-bold')
}
function f2(){
    textArea.classList.toggle('fst-italic')
}
function f3(){
    textArea.classList.toggle('text-decoration-underline')
}
  

function f4(){
    textArea.style.textAlign = "left";
}

function f5(){
    textArea.style.textAlign = "center";
}

function f6(){
    textArea.style.textAlign = "right";
}


function f7(){
    textArea.style.textTransform = "uppercase";
}
function f8(){
    textArea.style.textTransform = "lowercase";
}
function f9(){
    textArea.style.textTransform = "capitalize";
}
