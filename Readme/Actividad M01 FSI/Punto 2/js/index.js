let rc = parseInt(prompt("Ingrese la cantidad de respuestas correctas"))
let ri = parseInt(prompt("Ingrese la cantidad de respuestas incorrectas"))
let rb = parseInt(prompt("Ingrese la cantidad de respuestas en blanco"))
let puntajeFinal = 0, prc = 0, pri = 0, i

for (i=0; i<rc; i++) {
  prc += 4
}

for (i=0; i<ri; i++) {
  pri -= 1
}

puntajeFinal = prc + pri

alert(`Puntaje de -> respuestas correctas: ${prc}, respuestas incorrectas: ${pri}`)

alert(`El puntaje total es ${puntajeFinal}`)