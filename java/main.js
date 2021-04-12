const click = document.querySelector('#generate').onclick = computeScore;

function computeScore(par, strokes){
    par = Math.floor(Math.random()*10);
    document.getElementById("par").innerHTML = par;
    strokes = Math.floor(Math.random()*10);
    document.getElementById("strokes").innerHTML = strokes;

    return (strokes == 1 ? document.querySelector('#return').innerHTML = 'Hole in one!'
    : (strokes <= par -2 ? document.querySelector('#return').innerHTML = 'Eagle'
    : (strokes == par -1 ? document.querySelector('#return').innerHTML = 'Birdie'
    : (strokes == 0 || par == 0 ? document.querySelector('#return').innerHTML = 'Undefined'
    : (strokes == par ? document.querySelector('#return').innerHTML = 'Par'
    : (strokes == par +1 ? document.querySelector('#return').innerHTML = 'Bogey'
    : (strokes == par +2 ? document.querySelector('#return').innerHTML = 'Double Bogey'
    : document.querySelector('#return').innerHTML = 'Go Home!')))))));
}
let reset = () =>{
    window.location.reload();
}