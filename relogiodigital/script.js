function updateHour() {
    let now = new Date()
    let hour = [now.getHours(), now.getMinutes(), now.getSeconds()]

    for (let i = 0; i < hour.length; i++) {
        if(hour[i] < 10) {
            hour[i] = '0' + hour[i]
        }
    }

    let formateHour = hour.join(':')

    const display = document.querySelector('.display')
    display.textContent = formateHour
}

updateHour() //chamar antes para não zerar o relógio quando a página recarregar
setInterval(updateHour, 1000)
