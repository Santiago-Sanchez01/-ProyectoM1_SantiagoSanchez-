const boton = document.querySelector("#generar");
const paleta = document.querySelector("#paleta");

boton.addEventListener("click", generarColor);


function generarColor() {

    const caracteres = "0123456789ABCDEF";

let color = "#";

for (let i = 0; i < 6; i++) {

    const numero = Math.floor(Math.random() * 16);

    color += caracteres[numero];
}

    const tarjeta = document.createElement("div");

    tarjeta.textContent = color;
    tarjeta.style.backgroundColor = color;
    
    paleta.appendChild(tarjeta);

}



