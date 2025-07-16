/*
FUNCION ORIGINAL

function pintar(){
ele.style.backgroundColor = 'yellow'
}
const ele = document.getElementById("ele1")
ele.addEventListener("click", pintar);

*/


function pintar(a,color ='green'){
a.style.backgroundColor=color
}

const ele1 = document.getElementById("ele1");

ele1.addEventListener('click',()=>pintar(ele1,'yellow'))