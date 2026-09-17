# Documentación del uso de Inteligencia Artificial

## 1. Introducción

Durante el desarrollo del Proyecto Integrador se utilizó
inteligencia artificial como herramienta de asistencia...

## 2. Objetivo del uso de IA

La IA fue utilizada para:

- comprender conceptos;
- detectar errores;
- analizar código;
- proponer mejoras;
- aprender sobre DOM;
- implementar funcionalidades;
- mejorar accesibilidad.

## 3. Prompts utilizados

### Prompt 1 — Generación de colores

Uno de los primeros objetivos era cumplir con la generación aleatoria:

“Necesito generar colores aleatorios en dos formatos: HSL y HEX, dame una explicación paso a paso para principiante para enteder que estamos haciendo”

Este prompt está directamente relacionado con una de las consignas principales.

Resultado aplicado:

Generación aleatoria de colores HEX.
Conversión del mismo color a HSL.
Selector para elegir qué formato visualizar.

### Prompt 2 — Conversión HEX a HSL

En el desarrollo de la app me di cuenta que no había implementado el cambio de formato así que le indique lo que necesitaba exactamente, esta vez sin tanta explicacion. (termino dandome explicación de cada paso de igual manera por la forma en la que veniamos interactuando)

“No implemente el paso 10, me gustaría que el usuario pueda elegir que formato de color ver y copiar.”

Resultado aplicado:

Se agregó:

 <select id="formato">
    <option value="hex">HEX</option>
    <option value="hsl">HSL</option>
 </select>

  Y JavaScript permite cambiar el formato sin generar nuevamente la paleta.

### Prompt 3 — Sistema de bloqueo

  “¿Cómo agregamos bloqueo de colores?”

  A partir de esto implementamos la propiedad:

  bloqueado: false

   en cada objeto de color.

  Resultado aplicado:

  {
    hex: "#FF00AA",
    hsl: "hsl(...)",
    bloqueado: false
  }

  Después apareció un error real durante las pruebas: al bloquear un color, los demás cambiaban.

   Detecte el problema y le indique:

  “Cuando apretamos el boton de bloquear las paletas que no estan bloqueadas cambian de color. solucionemos ese error”

  Resultado aplicado: se modificó la lógica para que únicamente se conserve el color bloqueado y los demás puedan regenerarse.


### Prompt 4 — localStorage


“¿Qué vamos a guardar?”

A partir de ahí definimos que no solamente había que guardar los colores, sino también información necesaria para recuperar correctamente el estado de la aplicación:

colores;
cantidad;
formato;
estado de bloqueo.

Se implementó mediante:

localStorage.setItem()

y:

localStorage.getItem()

con:

JSON.stringify()

y:

JSON.parse()

### Prompt 5 — Revisión visual

“la página no tienen ningun error cuando la pruebo, analizalo y decime que es lo que hace falta y lo terminamos hoy”

Resultado aplicado:

Se comparó el proyecto contra cada requisito obligatorio y los extras:

generación;
cantidad;
formatos;
DOM;
feedback;
accesibilidad;
bloqueo;
localStorage;
animaciones;
copiar;
responsive.

Esto puede documentarse como una etapa de revisión y validación asistida por IA.

### Prompt 6- Mejora visual de CSS

“me gustaría que cambiemos algunas cosas del css para que la página se vea más actual, siento que más alla de que tenga una identidad (por los colores usados) que se vea más profesional. 
Te paso el codigo css para ver que cambios podemos hacer sin afectar su funcionalidad”

Resultado aplicado:

Se revisó el CSS manteniendo la funcionalidad y se trabajó sobre:

jerarquía visual;
botones;
tarjetas;
espaciado;
sombras;
bordes;
responsive;
animaciones;
identidad visual.

## 7- Reflexión final sobre la IA 

La inteligencia artificial fue utilizada como apoyo y asistente en cuanto a todo el contenido del modulo 1, repasamos todo lo estudiado y aplicamos todo en conjunto. 

Las respuestas obtenidas fueron aplicadas, analizadas, modificadas y probadas dentro del proyecto. Cuando aparecieron errores, utilice nuevos prompts para indentificar el problema y corregirlo. 

El proceso permitió utilizar la IA no solamente para obtener
código, sino también para comprender el funcionamiento de
HTML, CSS y JavaScript y mejorar progresivamente la aplicación.