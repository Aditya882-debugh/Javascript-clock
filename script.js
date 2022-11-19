

setInterval(() => {
    const secondhand = document.querySelector('.second-hand')
    const minutehand = document.querySelector('.minute-hand')
    const hourhand = document.querySelector('.hour-hand')
    const date = new Date()
    const secdeg = date.getSeconds() / 60 * 360
    const minutedeg = date.getMinutes() / 60 * 360
    const hourdeg = date.getHours() / 12 * 360
    secondhand.style.transform = `rotate(${secdeg}deg)`
    minutehand.style.transform = `rotate(${minutedeg}deg)`
    hourhand.style.transform = `rotate(${hourdeg}deg)`
}, 1000);
