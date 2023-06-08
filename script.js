const css = document.querySelector('h2');
const [color1,color2,color3] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');

setGradient=()=> {
    body.style.background = _linearGradient();
    css.textContent= '${body,style,background};'; 
}

_linearGradient = () => {
    return 'linear-gradient(to right,${color1.value},${color2.value},${color3.value}'

}
color1.addEventListener('input',setGradient);
color2.addEventListener('input',setGradient);
color3.addEventListener('input',setGradient);