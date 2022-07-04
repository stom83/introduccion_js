// - uso de todos los tipos de variables que js soporta y hacer console.log de ellos
// Variablex string
var texto1 = 'mi texto 1 stom83'; // con comillas
console.log(texto1);
var texto2 = "mi texto 2 stom83"; // con comillas dobles
console.log(texto2);
var texto3 = "123456789"; // numeros como string
console.log(texto3);

//  Contenido con comillas en el interior

var texto4 = "comillas en el texto 'aqui las comillas simples'"; // comillas simples en el texto
console.log(texto4);
var texto5 = 'comillas en el texto "aqui las comillas dobles"'; // comillas dobles en el texto
console.log(texto5);

var texto6 = 'texto con separadores \n nueva linea'; // use \n
console.log(texto6);
var texto7 = 'texto con separadores \t tabulador'; // use \t
console.log(texto7);
var texto8 = 'texto con separadores \\\ barra inclinada'; // use \\\
console.log(texto8);

// Variables numericas

var num1 = 1; // asignacion simple
console.log(num1);
var num_1 = 11; // asignacion con guion bajo _ entre
console.log(num_1);
var _num1 = 111; // asignacion con guion bajo _ al inicio
console.log(_num1);
var $num1 = 11111; // asignacion con $
console.log($num1);
var _$num1 = 11111; // asignacion con $ y _
console.log(_$num1);
var $$$num1 = 11111; // asignacion con varios $
console.log($$$num1);
var _$num1_a_$1 = 111111; // asignacion con $ y _ y varias combinaciones
console.log(_$num1_a_$1);

// variables con arrays

var $array_1 = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
console.log($array_1); // Arrays simples
$array_2_select = $array_1[2];
console.log($array_2_select); // Arrays seleccionado por ubicacion
console.log($array_1[4]); // Arrays seleccionado por en console.log

// Operadores matematicos

var $_num_a = 10;
var $_num_b = 2;

$_sum = $_num_a + $_num_b; //Suma simple
console.log($_sum);
$_res = $_num_a - $_num_b; //Resta simple
console.log($_res);
$_mul = $_num_a * $_num_b; //Multiplicacion simple
console.log($_mul);
$_div = $_num_a / $_num_b; //Division simple
console.log($_div);



