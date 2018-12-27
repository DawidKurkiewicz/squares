const btn = document.querySelector("button")
let number = 1
const addElement = () => {
    const div = document.createElement("div")
    div.textContent = number
    document.body.appendChild(div)
    number += 1
}
btn.addEventListener("click", addElement)