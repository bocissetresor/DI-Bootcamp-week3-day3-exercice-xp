let container = document.getElementById('container')
let animate = document.getElementById('animate')
// 1. In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
const myMove = () => {
    let limit = 350 
    let left = 0
    let interval = setInterval(() => {
        if(left < limit) {
            left++
            animate.style.left = left.toString() + 'px'
        } else clearInterval(interval)
    }, 1);
}