function nav_border(element){
    element.style.background = ' #77b2ce'
    boxIcon = element.querySelector("box-icon")
    if (boxIcon){
        boxIcon.setAttribute('color',"#0a5176")

    }
    
    console.log('Hi');
}
function navborderremove(element){
    element.style.background = '';

    element.querySelector("box-icon").removeAttribute('color')
    console.log('Worked')
}
function onclick_nav(element){
    nave = element.querySelector(".dropdown-menu")
    
    if(nave.classList.contains('show')){
        
        nave.classList.remove("show")
        nave.removeAttribute('data-bs-popper')
        console.log(22);


    }
    else{
        closeall()
        nave.setAttribute('data-bs-popper','static')
        nave.classList.add("show")
        console.log("fasfasfaf");
        
    }
 
}
function closeall(){
    let element = document.getElementsByClassName("dropdown-menu")
    for(let i = 0;i<element.length;i++){
        element[i].classList.remove('show')
    }
    
}
