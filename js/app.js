const container = document.querySelector('#container');
const seconds = document.querySelector('#seconds');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = window.screen.height;
let tiempo;
mostrarCuadros();
seconds.addEventListener('change', () =>{
    limpiarHTML();
    
    if (seconds.value === '1') {
        mostrarCuadros('uno');
    } 
    if (seconds.value === '2') {
        mostrarCuadros('dos');
    } 
    if (seconds.value === '3') {
        mostrarCuadros('tres');
    } 
    if (seconds.value === '4') {
        mostrarCuadros('cuatro');
    } 
    if (seconds.value === '5') {
        mostrarCuadros('cinco');
    } 

    // console.log(tiempo);
});

function mostrarCuadros(x = 'none'){
for(let i = 0; i < SQUARES; i++){
    const square = document.createElement('DIV');
    square.classList.add('square',`${x}`);


    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))

    container.appendChild(square);
}
}
function setColor(element){
    const color = getRandomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = '#1d1d1d';
    element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}

function limpiarHTML(){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}