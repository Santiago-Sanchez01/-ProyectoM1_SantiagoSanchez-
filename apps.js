const boton = document.querySelector("#generar");
const paleta = document.querySelector("#paleta");
const selectorCantidad = document.querySelector("#cantidad");
const mensaje = document.querySelector("#mensaje");

boton.addEventListener("click", generarPaleta);

function generarColor() {

    const caracteres = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        const numero = Math.floor(Math.random() * 16);

        color += caracteres[numero];
    }

    return color;
}

function generarPaleta() {

    const cantidad = Number(selectorCantidad.value);

    paleta.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {

        const color = generarColor();

        const tarjeta = document.createElement("div");

        tarjeta.classList.add("color-card");

        tarjeta.style.backgroundColor = color;


        const codigo = document.createElement("span");

        codigo.textContent = color;


        const botonCopiar = document.createElement("button");

        botonCopiar.textContent = "Copiar HEX";


      botonCopiar.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(color);

        botonCopiar.textContent = "✓ Copiado";

        setTimeout(() => {
            botonCopiar.textContent = "Copiar HEX";
        }, 1500);

    } catch (error) {

        botonCopiar.textContent = "Error al copiar";

        setTimeout(() => {
            botonCopiar.textContent = "Copiar HEX";
        }, 1500);   

    }

});

        tarjeta.appendChild(codigo);

        tarjeta.appendChild(botonCopiar);

        paleta.appendChild(tarjeta);
    }

    mensaje.textContent = `¡Paleta de ${cantidad} colores generada correctamente!`;
}