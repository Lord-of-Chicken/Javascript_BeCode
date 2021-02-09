/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

const oui = document.getElementById('oui')
const non = document.getElementById('non')

oui.addEventListener('click', () => {
alert('Félicitations, voici votre gateaux !')
})
non.addEventListener('click', () => {
    alert('Du gâteau, ça ne se refuse pas !')
})