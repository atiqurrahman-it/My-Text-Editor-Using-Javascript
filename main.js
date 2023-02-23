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
    // way one 
    textArea.classList.remove('text-lowercase')
    textArea.classList.remove('text-capitalize')
    textArea.classList.toggle('text-uppercase')

    //           second way 
    // textArea.style.textTransform = "uppercase";


    //           third way 
    //  classList=textArea.getAttribute('class').split(' ')
    //  for(const list of classList){
    //     textArea.classList.remove(list)
    //  }
    //textArea.classList.toggle('text-uppercase')
    

}
function f8(){
    textArea.classList.remove('text-uppercase')
    textArea.classList.remove('text-capitalize')
    textArea.classList.toggle('text-lowercase')
}
function f9(){
    textArea.classList.remove('text-uppercase')
    textArea.classList.remove('text-lowercase')
    textArea.classList.toggle('text-capitalize')

}
