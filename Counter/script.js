const valor = document.getElementById('valor');
const botaoMais = document.getElementById('mais'); 
const botaoMenos = document.getElementById('menos');

const valorNovo = () => {
    valor.innerHTML = numero;
}
let numero = 0;
let Intervalo = 0;

botaoMais.addEventListener('mousedown', () => {
    Intervalo = setInterval(() => {
        numero += 1;
        valorNovo();
    }, 120);
});

botaoMais.addEventListener('click', () => {
    numero += 1;
    valorNovo();
});

botaoMenos.addEventListener('mousedown', () => {
    Intervalo = setInterval(() => {
        numero -= 1;
        if (numero < 0) {
            numero = 0;
        }
        valorNovo();
    }, 120);
});

botaoMenos.addEventListener('click', () => {
    numero -= 1;
    if (numero < 0) {
        numero = 0;
        window.alert("The number can't be negative");
    }
    valorNovo()
});

document.addEventListener('mouseup', () => {
    clearInterval(Intervalo);
});