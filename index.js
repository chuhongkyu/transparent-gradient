//module

function transparentGradient(target){
    const data = target ? target : document.querySelector('body');
    const dim = document.createElement("div");
    dim.setAttribute('tg','')
    data.appendChild(dim);
}