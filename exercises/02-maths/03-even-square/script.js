/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("run").addEventListener("click", () => {
        // your code here
        
    });
})();

let nombre = 0;   // on commence à 0
let max = 19;     // nombre maximum
var result = "";  // la chaine résultat
while( nombre < max){
  // ajout à la chaine résultat
  result = result + nombre +"-"
  // incrémentation de nombre
  nombre = nombre + 2;
}
// ajout nommbre maximum
result = result + nombre;
// affiche résultat
console.log(result)