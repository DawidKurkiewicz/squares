const btn = document.querySelector("button")
let number = 1
const addElement = () => {
    const div = document.createElement("div")
    div.innerHTML = number
    if(number%5 == 0) {
        div.classList.add("circle")
    }
    if(number%4 == 0) {
        div.classList.add("red")
    }
    if(number%3 == 0) {
        div.classList.add("green")
    }
    if(number%2 == 0) {
        div.classList.add("big")
    }
    document.body.appendChild(div)
    number ++
}
btn.addEventListener("click", addElement)