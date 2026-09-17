// ================================
// ELEMENTOS DEL DOM
// ================================

const boton = document.querySelector("#generar");
const botonGuardar = document.querySelector("#guardar");
const botonCargar = document.querySelector("#cargar");

const paleta = document.querySelector("#paleta");

const selectorCantidad = document.querySelector("#cantidad");
const selectorFormato = document.querySelector("#formato");

const mensaje = document.querySelector("#mensaje");


// ================================
// ARRAY DE COLORES
// ================================

let coloresGenerados = [];


// ================================
// EVENTOS
// ================================

boton.addEventListener("click", generarPaleta);

botonGuardar.addEventListener("click", guardarPaleta);

botonCargar.addEventListener("click", cargarPaleta);

selectorFormato.addEventListener("change", cambiarFormato);


// ================================
// GENERAR COLOR HEX ALEATORIO
// ================================

function generarColor() {

    const caracteres = "0123456789ABCDEF";

    let color = "#";

    for (let i = 0; i < 6; i++) {

        const numero = Math.floor(Math.random() * 16);

        color += caracteres[numero];
    }

    return color;
}


// ================================
// CONVERTIR HEX A HSL
// ================================

function hexToHSL(hex) {

    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    let h;
    let s;

    const l = (max + min) / 2;


    // Si los valores son iguales,
    // el color no tiene saturación.

    if (max === min) {

        h = 0;
        s = 0;

    } else {

        const diferencia = max - min;


        // Calculamos la saturación

        s = l > 0.5
            ? diferencia / (2 - max - min)
            : diferencia / (max + min);


        // Calculamos el tono

        switch (max) {

            case r:

                h =
                    (g - b) /
                    diferencia +
                    (g < b ? 6 : 0);

                break;


            case g:

                h =
                    (b - r) /
                    diferencia +
                    2;

                break;


            case b:

                h =
                    (r - g) /
                    diferencia +
                    4;

                break;
        }

        h /= 6;
    }


    // Convertimos los valores

    h = Math.round(h * 360);

    s = Math.round(s * 100);

    const luminosidad =
        Math.round(l * 100);


    return `hsl(${h}, ${s}%, ${luminosidad}%)`;
}


// ================================
// CALCULAR COLOR DEL TEXTO
// ================================

function obtenerColorTexto(color) {

    const r =
        parseInt(color.slice(1, 3), 16);

    const g =
        parseInt(color.slice(3, 5), 16);

    const b =
        parseInt(color.slice(5, 7), 16);


    const brillo =
        (r * 299 + g * 587 + b * 114) / 1000;


    if (brillo > 128) {

        return "#111111";

    } else {

        return "#FFFFFF";
    }
}


// ================================
// GENERAR PALETA
// ================================

function generarPaleta() {

    const cantidad =
        Number(selectorCantidad.value);


    // Guardamos la paleta anterior
    // para conservar los colores bloqueados.

    const paletaAnterior =
        [...coloresGenerados];


    // Limpiamos el array

    coloresGenerados = [];


    // Generamos los colores necesarios

    for (let i = 0; i < cantidad; i++) {

        let color;

        let hsl;

        let bloqueado = false;


        // ================================
        // COMPROBAR COLOR BLOQUEADO
        // ================================

        if (
            paletaAnterior[i] &&
            paletaAnterior[i].bloqueado
        ) {

            // Conservamos el color

            color =
                paletaAnterior[i].hex;

            hsl =
                paletaAnterior[i].hsl;

            bloqueado = true;


        } else {

            // Generamos un color nuevo

            color =
                generarColor();

            hsl =
                hexToHSL(color);
        }


        // Guardamos el color

        coloresGenerados.push({

            hex: color,

            hsl: hsl,

            bloqueado: bloqueado
        });
    }


    // Mostramos la paleta

    mostrarPaleta();


    // Feedback

    mensaje.textContent =
        `¡Paleta de ${cantidad} colores generada correctamente!`;
}


// ================================
// MOSTRAR PALETA
// ================================

function mostrarPaleta() {

    // Limpiamos las tarjetas anteriores

    paleta.innerHTML = "";


    // Recorremos los colores

    coloresGenerados.forEach((color, indice) => {


        // ================================
        // CREAR TARJETA
        // ================================

        const tarjeta =
            document.createElement("article");


        tarjeta.classList.add("color-card");


        tarjeta.style.animationDelay =
            `${indice * 0.05}s`;


        tarjeta.style.backgroundColor =
            color.hex;


        tarjeta.style.color =
            obtenerColorTexto(color.hex);


        // ================================
        // CREAR CÓDIGO DEL COLOR
        // ================================

        const codigo =
            document.createElement("span");


        codigo.classList.add("codigo-color");


        if (selectorFormato.value === "hex") {

            codigo.textContent =
                color.hex;

        } else {

            codigo.textContent =
                color.hsl;
        }


        // ================================
        // BOTÓN COPIAR
        // ================================

        const botonCopiar =
            document.createElement("button");


        botonCopiar.type = "button";


        botonCopiar.textContent =
            "Copiar";


        botonCopiar.setAttribute(
            "aria-label",
            `Copiar color ${color.hex}`
        );


        // ================================
        // EVENTO COPIAR
        // ================================

        botonCopiar.addEventListener(
            "click",
            async () => {

                try {

                    const formato =
                        selectorFormato.value;


                    let valorCopiar;


                    if (formato === "hex") {

                        valorCopiar =
                            color.hex;

                    } else {

                        valorCopiar =
                            color.hsl;
                    }


                    await navigator.clipboard.writeText(
                        valorCopiar
                    );


                    botonCopiar.textContent =
                        "✓ Copiado";


                    setTimeout(() => {

                        botonCopiar.textContent =
                            "Copiar";

                    }, 1500);


                } catch (error) {

                    botonCopiar.textContent =
                        "Error al copiar";


                    setTimeout(() => {

                        botonCopiar.textContent =
                            "Copiar";

                    }, 1500);
                }
            }
        );


        // ================================
        // BOTÓN BLOQUEAR
        // ================================

        const botonBloquear =
            document.createElement("button");


        botonBloquear.type = "button";


        if (color.bloqueado) {

            botonBloquear.textContent =
                "🔒 Bloqueado";

        } else {

            botonBloquear.textContent =
                "🔓 Bloquear";
        }


        botonBloquear.setAttribute(
            "aria-label",
            color.bloqueado
                ? `Desbloquear color ${color.hex}`
                : `Bloquear color ${color.hex}`
        );


        // ================================
        // EVENTO BLOQUEAR
        // ================================

        botonBloquear.addEventListener(
            "click",
            () => {

                // Cambiamos el estado

                coloresGenerados[indice].bloqueado =
                    !coloresGenerados[indice].bloqueado;


                // Actualizamos solamente
                // el botón.

                if (
                    coloresGenerados[indice].bloqueado
                ) {

                    botonBloquear.textContent =
                        "🔒 Bloqueado";


                    botonBloquear.setAttribute(
                        "aria-label",
                        `Desbloquear color ${color.hex}`
                    );


                } else {

                    botonBloquear.textContent =
                        "🔓 Bloquear";


                    botonBloquear.setAttribute(
                        "aria-label",
                        `Bloquear color ${color.hex}`
                    );
                }
            }
        );


        // ================================
        // AGREGAR ELEMENTOS
        // ================================

        tarjeta.appendChild(codigo);

        tarjeta.appendChild(botonCopiar);

        tarjeta.appendChild(botonBloquear);


        // Agregamos la tarjeta

        paleta.appendChild(tarjeta);
    });
}


// ================================
// CAMBIAR FORMATO
// ================================

function cambiarFormato() {

    const formato =
        selectorFormato.value;


    const tarjetas =
        document.querySelectorAll(
            ".color-card"
        );


    coloresGenerados.forEach(
        (color, indice) => {

            const tarjeta =
                tarjetas[indice];


            const codigo =
                tarjeta.querySelector(
                    ".codigo-color"
                );


            if (formato === "hex") {

                codigo.textContent =
                    color.hex;

            } else {

                codigo.textContent =
                    color.hsl;
            }
        }
    );


    mensaje.textContent =
        `Formato cambiado a ${formato.toUpperCase()}.`;
}


// ================================
// GUARDAR PALETA
// ================================

function guardarPaleta() {

    // Comprobamos que exista una paleta

    if (coloresGenerados.length === 0) {

        mensaje.textContent =
            "Primero generá una paleta.";

        return;
    }


    // Creamos el objeto que vamos a guardar

    const datosPaleta = {

        colores: coloresGenerados,

        cantidad: selectorCantidad.value,

        formato: selectorFormato.value
    };


    // Convertimos el objeto a texto
    // y lo guardamos en el navegador

    localStorage.setItem(
        "paletaGuardada",
        JSON.stringify(datosPaleta)
    );


    // Feedback

    mensaje.textContent =
        "💾 Paleta guardada correctamente.";
}


// ================================
// CARGAR PALETA
// ================================

function cargarPaleta() {

    // Buscamos la paleta guardada

    const datosGuardados =
        localStorage.getItem(
            "paletaGuardada"
        );


    // Si no existe

    if (!datosGuardados) {

        mensaje.textContent =
            "No hay ninguna paleta guardada.";

        return;
    }


    // Convertimos el texto nuevamente
    // en un objeto JavaScript

    const datosPaleta =
        JSON.parse(datosGuardados);


    // Recuperamos los colores

    coloresGenerados =
        datosPaleta.colores;


    // Recuperamos la cantidad

    selectorCantidad.value =
        datosPaleta.cantidad;


    // Recuperamos el formato

    selectorFormato.value =
        datosPaleta.formato;


    // Mostramos la paleta

    mostrarPaleta();


    // Feedback

    mensaje.textContent =
        "📂 Paleta cargada correctamente.";
}
























































































































































































































































