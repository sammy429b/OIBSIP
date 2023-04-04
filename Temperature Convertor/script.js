const input = document.querySelector("#inputBar")
const output = document.querySelector("#outputBar")
const cel = document.querySelector("#Celcius")
const fah = document.querySelector("#Fahrenheit")
const btn = document.querySelector("button")
const unit = document.querySelector("#unit")


const convertFunc = () => {
    let celFah;
    if (fah.checked == true) {
        celFah = (input.value * 9 / 5) + 32
        celFah = parseFloat(celFah).toFixed(2)
        output.innerHTML = celFah
        unit.innerHTML = "°F"
    } else if (cel.checked == true) {
        celFah = (input.value - 32) * 5 / 9
        celFah = parseFloat(celFah).toFixed(2)
        output.innerHTML = celFah
        unit.innerHTML = "°C"

    } else {
        alert("select")
    }
    console.log("clicked")
    console.log(celFah)
}

btn.addEventListener('click', convertFunc)

