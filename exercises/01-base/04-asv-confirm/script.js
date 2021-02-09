/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // your code here


    const getValue = () => {
        let input1 = document.getElementById("age").value;
        let input2 = document.getElementById("genre").value;
        let input3 = document.getElementById("ville").value;
        alert('Vous êtes donc un(e) ' + input2 + ' de ' + input1 + ' ans, habitant '  + input3 + ' !' );
    }