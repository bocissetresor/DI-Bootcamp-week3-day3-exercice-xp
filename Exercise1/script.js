// Part I
let container = document.getElementById('container')
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds.
// 2. The function will alert “Hello World”.
setTimeout(() => {
    alert("Hello World");
}, 2000)
// Part II
// 1. In your Javascript file, using setTimeout, call a function after 2 seconds. 
// 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
setTimeout(() => {
    let elt = document.createElement("elt")
    elt.innerHTML = "Hello World"
    container.appendChild(elt)
}, 2000);

// Part III
// 1. In your Javascript file, using setInterval, call a function every 2 seconds.
 // 2. The function will add a new paragraph <p>Hello World</p> to the <div id="container">. 
 // 3. The interval will be cleared (ie. clearInterval), when the user will click on the button.
 // 4. Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.
 let Interval = setInterval(() => {
    let elt = document.createElement("elt")
    p.innerHTML = "Hello World"
    container.appendChild(p)
    document.getElementById('clear').addEventListener("click", () => clearInterval(Interval))
    let cmpt = container.querySelectorAll('elt').length
    if (cmpt == 5)
        clearInterval(Interval)
}, 2000);