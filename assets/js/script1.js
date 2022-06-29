const img = document.querySelector('#img');
const sinborde = document.querySelector('.sinborde');
const borde1 = document.querySelector('.borde1');

img.addEventListener('click', () => {
    sinborde.classList.toggle('sinborde');
    borde1.classList.toggle('borde1');
    
    
})