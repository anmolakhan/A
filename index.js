const body = document.getElementsByTagName("body") [0]
// body.style.background = "red"

function setColor(name) {
    body.style.backgroundColor = name;
}

function randomColor() {
    const red = Math.random(Math.random() * 225)
    const green = Math.random(Math.random() * 225)
    const blue = Math.random(Math.random() * 225)

    const color = `rgb(${red}, ${green}, ${blue})`
     body.style.backgroundColor = color;

}
