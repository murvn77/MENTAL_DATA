var estudiante = prompt("Por favor ingrese el nombre del estudiante")
var asistencia = parseInt(prompt("Por favor ingrese el porcentaje de asistencia"))
var calificacion = parseInt(prompt("Por favor ingrese la calificación"))

if (asistencia < 0 || asistencia > 100) {
  alert(`El porcentaje de asistencia ${asistencia} no está entre 0 y 100`)
  throw(`El porcentaje de asistencia ${asistencia} no está entre 0 y 100`)
}

if (calificacion < 0 || calificacion > 5) {
  alert(`La calificación ${calificacion} no está entre 0 y 5`)
  throw(`La calificación ${calificacion} no está entre 0 y 5`)
}

if (asistencia >= 80) {
  if (calificacion >= 3) {
    alert(`El estudiante ${estudiante} aprobó la asignatura`)
  }
  else {
    alert("El estudiante ${estudiante} no aprobó")
  }
} 
else {
  alert("El estudiante ${estudiante} no aprobó")
}	