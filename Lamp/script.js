const lamp =  document.getElementById('lamp')
const btnTurnOn = document.getElementById('turnOn')
const btnTurnOff = document.getElementById('turnOff')

btnTurnOn.addEventListener("click", () => {
    if( lamp.className == "off"){
        lamp.classList.remove('off')
        lamp.classList.add ('on')
    }
    console.log(lamp.className)
})

btnTurnOff.addEventListener("click", () => {
    if( lamp.className == "on"){
        lamp.classList.remove('on')
        lamp.classList.add ('off')
    }
    console.log(lamp.className)
})