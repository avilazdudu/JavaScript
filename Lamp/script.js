const lamp =  document.getElementById('lamp')
const btnTurnOn = document.getElementById('turnOn')
const btnTurnOff = document.getElementById('turnOff')
const imagem = document.getElementById('imagem')

btnTurnOn.addEventListener("click", () => {
    if( lamp.className == "off"){
        lamp.classList.remove('off')
        lamp.classList.add ('on')
    }
    imagem.src = "./img/ligada.png"
    console.log(lamp.className)
})

btnTurnOff.addEventListener("click", () => {
    if( lamp.className == "on"){
        lamp.classList.remove('on')
        lamp.classList.add ('off')
    }
    imagem.src = "./img/desligada.png"
    console.log(lamp.className)
})