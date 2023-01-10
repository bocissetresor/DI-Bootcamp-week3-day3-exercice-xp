// 2. In your Javascript file add the functionality which will allow you to drag the box and drop it into the target.
let target = document.getElementById('target')
let box = document.getElementById('box')

box.setAttribute('draggable', true)
box.addEventListener('dragstart', (e) => {
    box.style.cursor = "grabbing"
})

box.addEventListener('dragend', (e) => {
    box.style.left = (e.clientX - 25) + "px"
    box.style.top = (e.clientY - 25) + "px"
    box.style.cursor = 'grab'
})

target.addEventListener('dragover', (e) => {
    target.style.opacity = '0.5'
})

target.addEventListener('dragleave', (e) => {
    target.style.opacity = '1'
})