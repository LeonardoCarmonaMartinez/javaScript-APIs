const inputValue = document.querySelector("#input-money");
const btnConvert = document.querySelector("#search");
const resultValue = document.querySelector("#result");

async function getDolar() {
    try {
        const res = await fetch("https://mindicador.cl/api/dolar");
        const valorDolar = await res.json();
        const serieDolar = valorDolar.serie[0]["valor"]
        btnConvert.addEventListener("click", () => {
            const selector = document.querySelector('#money').value
    
            if (selector == "dolar"){
                resultValue.innerHTML = Number(inputValue.value) / Number(serieDolar) + "<br>" + "Dolares"
            }
        })
          
    }
    catch (e) {
        console.log(e.message);
        document.querySelector("#alert").innerHTML = "Servidor no encontrado";
    }
    }
    getDolar();

async function getEuro() {
    try {
        const res = await fetch("https://mindicador.cl/api/euro");
        const valorEuro = await res.json();
        const serieEuro = valorEuro.serie[0]["valor"]
        btnConvert.addEventListener("click", () => {
            const selector = document.querySelector('#money').value
    
            if (selector == "euro"){
                resultValue.innerHTML = Number(inputValue.value) / Number(serieEuro) + "<br>" + "Euros"      
            }
        })   
    }
    catch (e) {
        console.log(e.message);
        document.querySelector("#alert").innerHTML = "Servidor no encontrado";
    }
    }
    getEuro();


    
