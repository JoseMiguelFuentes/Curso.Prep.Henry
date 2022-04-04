// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var result =  Object.entries(objeto);
  return result;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let toArray = string.split('');
  let result = {};
  toArray.map(function(letra){
  result[letra] = (result[letra] || 0) + 1;
  });
  return result;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let division = s.split('');
  let mayus = [];
  let minus = [];
  for(var i = 0; i < division.length; i++){
    if(division[i] === division[i].toUpperCase()){
      mayus.push(division[i]);
    }
    if(division[i] === division[i].toLowerCase()){
      minus.push(division[i]);  
      }
}
return mayus.join('').concat(minus.join(''));
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var words = str.split(' ');
  var result = [];
  for (let i = 0; i < words.length; i++) {
  if(i !== 0){
  result.push(' ');
  }
  for (let j = words[i].length -1; j >= 0; j--) {
    result.push(words[i][j]);
  }
}
return result.join('')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var array = numero.toString().split("").reverse().join('');
  var numbackturn = parseInt(array)
  if(numero === numbackturn){
    return "Es capicua"; 
  }else {
    return "No es capicua";
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var result = "";
  var arrayletras = cadena.split('').filter(function(letra){
    if(letra !== 'a' && letra !== 'b' && letra !== 'c'){
  return result += letra;
    }
  }) 
   return result;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  let result = arr.sort(function(a, b){return a.length - b.length});
  return result
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var result = [];
  if(arreglo1.length < arreglo2.length){
    for (let i = 0; i < arreglo2.length; i++){
	    for(let j = 0; j <= arreglo2.length; j++){
		    if(arreglo1[j] === arreglo2[i]){
			    result.push(arreglo1[j]);
        }
      }
	  }
}
  if(arreglo2.length < arreglo1.length){
    for (let i = 0; i < arreglo2.length; i++){
	    for(let j = 0; j <= arreglo2.length; j++){
		    if(arreglo1[j] === arreglo2[i]){
			    result.push(arreglo1[j]);
        }
      }
	  }
}

return result;  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

