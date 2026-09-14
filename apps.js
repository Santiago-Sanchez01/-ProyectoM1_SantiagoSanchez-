const boton = document.querySelector("#generar");
const paleta = document.querySelector("#paleta");
const selectorCantidad = document.querySelector("#cantidad");

boton.addEventListener("click", generarPaleta);

function generarPaleta() {
    // Limpia la paleta anterior 
    paleta.innerHTML = "";

    const cantidad = Number(selectorCantidad.value);

    for (let i = 0; i < cantidad; i++) {
        const color = generarColor();
        
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("color-card");
        tarjeta.textContent = color;
        tarjeta.style.backgroundColor = color;
        
        paleta.appendChild(tarjeta);
    }
}

function generarColor() {
    const caracteres = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const numero = Math.floor(Math.random() * 16);
        color += caracteres[numero];
    }

    return color;
}
