<?php
// Boolean: se usa cuando una variable puede tomar uno de dos valores: true (1) o false (0)
echo 'Booleans: ';
$mayor_edad = True;
echo $mayor_edad . "\n";

// Integers: números enteros
echo 'Integers: ';
$a = 1234; // Número decimal
$b = -1234; // Número negativo
echo $a, '  ', $b . "\n";
  
// Float: números flotantes
echo 'Float: ';
$c = 1.234; // Número con punto flotante
$d = 1.2e3; // Número con punto flotante muy grande
echo $c, '  ', $d . "\n";

// String: para representar cadenas de texto
echo 'String: ';
$text = 'Esto es un ejemplo de una cadena de texto';
echo $text . "\n";

// Array: es como un map que asocia valores con claves
echo 'Arreglo: ';
$arreglo = [
  "nombre" => "Mauren",
  "apellido" => "Rivera",
];
foreach($arreglo as $data){
    echo $data, ' ';
}
?>