 Generador de Paletas de Colores

Aplicación web estática e interactiva desarrollada como Proyecto
Integrador.

La aplicación permite generar paletas de colores aleatorias de forma
dinámica, seleccionar la cantidad de colores, elegir el formato de
visualización y realizar diferentes acciones sobre los colores
generados.


Demo: 

GitHub Pages:
https://santiago-sanchez01.github.io/-ProyectoM1_SantiagoSanchez-/


Descripcion del proyecto:

El objetivo del proyecto es desarrollar una aplicación web utilizando
HTML5, CSS y JavaScript, aplicando conceptos de manipulación del
DOM, eventos, generación de valores aleatorios, arrays, almacenamiento
local y diseño responsive.

El usuario puede seleccionar una paleta de 6, 8 o 9 colores y
generar colores aleatorios mediante un botón principal.

Cada color generado puede visualizarse en formato HEX o HSL,
copiarse al portapapeles y bloquearse para conservarlo cuando se genere
una nueva paleta.

Además, la aplicación permite guardar una paleta en el navegador
mediante localStorage y recuperarla posteriormente.


Funcionalidades:

Generación de colores aleatorios.

Selección de 6, 8 o 9 colores.

Renderizado dinámico de la paleta mediante JavaScript.

Visualización de los colores en formato HEX.

Conversión y visualización de los colores en formato HSL.

Microfeedback mediante mensajes dinámicos.

Diseño adaptado para desktop.

Consideraciones básicas de accesibilidad.

Labels asociados correctamente a sus controles.

Estados de foco visibles para navegación mediante teclado.

Diseño responsive para tablet y celular.

Funcionalidades extra

🔒 Bloqueo individual de colores.

💾 Guardado de paletas mediante localStorage.

📂 Recuperación de paletas guardadas.

📋 Copiado de códigos al portapapeles.

✨ Animaciones sutiles al generar las tarjetas.

🎨 Mejoras visuales de la interfaz.

🔄 Cambio de formato en tiempo real.

🛠️ Tecnologías utilizadas

HTML5 --- estructura y semántica.

CSS3 --- estilos, variables, Grid, Flexbox, media queries,
transiciones y animaciones.

JavaScript --- lógica de la aplicación, DOM, eventos, arrays y
generación de colores.

Git --- control de versiones.

GitHub --- almacenamiento del repositorio.

GitHub Pages --- publicación de la aplicación.

localStorage --- persistencia de datos en el navegador.

📁 Estructura del proyecto

proyecto-integrador/
│
├── index.html
├── styles.css
├── apps.js
└── README.md

index.html

Contiene la estructura semántica de la aplicación, los controles de
configuración, el contenedor de la paleta y el feedback para el usuario.

styles.css

Contiene todos los estilos de la interfaz, incluyendo:

Variables CSS.

Reset básico.

Diseño de paneles.

Grid de colores.

Botones.

Estados hover y focus.

Animaciones.

Diseño responsive.

Adaptación para usuarios que prefieren reducir el movimiento.

apps.js

Contiene la lógica principal de la aplicación:

Generación aleatoria de colores.

Conversión HEX → HSL.

Manipulación del DOM.

Manejo de eventos.

Copiado al portapapeles.

Bloqueo de colores.

Guardado y recuperación mediante localStorage.

Actualización del formato mostrado.




Cómo utilizar la aplicación:
 
Seleccionar la cantidad de colores:

6 colores.

8 colores.

9 colores.

Seleccionar el formato:

HEX.

HSL.

Presionar "Generar paleta".

Utilizar las acciones disponibles en cada color:

presionar "Copiar" para copiar el código al portapapeles.

Bloquear para conservar uno o varios colores en futuras generaciones.

Presionar "Guardar paleta" para almacenar la paleta actual.

Presionar "Cargar paleta" para recuperar la última paleta
guardada.

Conceptos de JavaScript aplicados:

Manipulación del DOM

Se utilizan métodos como:

document.querySelector()
document.createElement()
appendChild()

para seleccionar elementos y construir dinámicamente las tarjetas de
colores.

Eventos

La aplicación responde a acciones del usuario mediante:

addEventListener()

Se utilizan eventos para generar paletas, cambiar formatos, copiar
colores, bloquear colores y guardar o cargar información.

Valores aleatorios

Los colores HEX se generan utilizando Math.random() y Math.floor().

El algoritmo selecciona caracteres hexadecimales de:

"0123456789ABCDEF"

para construir códigos de seis caracteres.

Arrays y objetos

Los colores generados se almacenan en un array. Cada color se representa
mediante un objeto que contiene:

{
    hex: "#FFFFFF",
    hsl: "hsl(0, 0%, 100%)",
    bloqueado: false
}

Esto permite conservar la información necesaria para actualizar y
regenerar la interfaz.

LocalStorage

La aplicación utiliza localStorage para guardar información en el
navegador.

Antes de guardar los datos se utiliza:

JSON.stringify()

y al recuperarlos:

JSON.parse()

Sistema de bloqueo:

Cada color posee una propiedad:

bloqueado

Cuando el usuario bloquea un color, su estado cambia.

Al generar una nueva paleta, JavaScript comprueba cuáles colores estaban
bloqueados:

Los colores bloqueados se conservan.

Los colores desbloqueados se generan nuevamente.

De esta manera, el usuario puede construir progresivamente una paleta
manteniendo los colores que considera útiles.


Accesibilidad:

Se incorporaron diferentes consideraciones básicas de accesibilidad:

Uso de HTML semántico.

label asociados mediante for e id.

Mensajes dinámicos mediante aria-live="polite".

Estados de foco visibles mediante :focus-visible.

Contraste suficiente entre texto y fondos.

aria-label en botones generados dinámicamente.

Soporte para prefers-reduced-motion.

Diseño responsive:

La interfaz utiliza CSS Grid y media queries para adaptarse a diferentes
tamaños de pantalla.

Desktop

La paleta se muestra en tres columnas.

Tablet

La paleta se adapta a dos columnas.

Celular

La paleta se presenta en una sola columna y los botones de configuración
se reorganizan verticalmente.

Identidad visual:

La interfaz utiliza una identidad basada principalmente en tonos:

Negro.

Bordó.

Rosa.

Tonos neutros.

El objetivo visual es combinar una estética moderna y tecnológica con
una identidad propia, manteniendo una interfaz clara y funcional.

Uso de inteligencia artificial:

Durante el desarrollo se utilizó inteligencia artificial como
herramienta de asistencia para:

Comprender conceptos de HTML, CSS y JavaScript.

Analizar errores de código.

Comprender el funcionamiento del DOM.

Mejorar la organización del JavaScript.

Implementar funcionalidades adicionales.

Revisar aspectos de accesibilidad.

Proponer mejoras visuales.

Las sugerencias fueron revisadas, comprendidas, probadas y adaptadas al
proyecto antes de incorporarlas.

Ejemplos de prompts utilizados

Explicame paso a paso cómo generar colores aleatorios
con JavaScript utilizando Math.random().

Revisá este código JavaScript y explicame por qué
los colores desbloqueados cambian cuando bloqueo otro.

¿Cómo puedo utilizar localStorage para guardar
una paleta de colores?

Revisá mi CSS y proponé mejoras visuales sin modificar
la funcionalidad del proyecto.


Proceso de desarrollo:

El proyecto se desarrolló de forma incremental:

Creación de la estructura HTML.

Aplicación de estilos CSS básicos.

Creación del generador de colores.

Manipulación dinámica del DOM.

Implementación de HEX y HSL.

Incorporación de selección de cantidad.

Implementación del sistema de copiado.

Implementación del bloqueo de colores.

Implementación de localStorage.

Mejoras visuales y responsive.

Revisión de accesibilidad.

Control de versiones con Git.

Publicación mediante GitHub Pages.

Resolución de errores:

Durante el desarrollo se detectó un problema en el sistema de bloqueo:
al bloquear un color, los colores restantes se generaban nuevamente.

El problema se producía porque la acción de bloquear llamaba nuevamente
a la función encargada de generar la paleta.

La solución fue separar las responsabilidades:

generarPaleta() se encarga de generar colores.

mostrarPaleta() se encarga de construir la interfaz.

El botón de bloqueo solamente modifica el estado bloqueado.

Esto permitió conservar los colores bloqueados sin modificar
innecesariamente los demás colores.

Aprendizajes:

A través del proyecto se trabajaron conceptos fundamentales del
desarrollo web:

Estructura semántica con HTML5.

Variables y diseño responsive con CSS.

CSS Grid y Flexbox.

Manipulación del DOM.

Eventos en JavaScript.

Arrays y objetos.

Funciones.

Valores aleatorios.

Conversión de formatos de color.

Portapapeles del navegador.

localStorage.

Accesibilidad.

Git y GitHub.

Publicación mediante GitHub Pages.

Uso de herramientas de inteligencia artificial como apoyo al
aprendizaje y desarrollo.

Autor: 

Santiago Nicolas Sanchez

Proyecto realizado con fines educativos.

Este readme fue armado con inteligencia artificial para dar una explicacion más profesional sobre el proyecto integrador. 