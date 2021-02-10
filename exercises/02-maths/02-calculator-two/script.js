/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    const performOperation = operation => {
        switch (operation) {
            case 'addition':
              let input1 = parseInt(document.getElementById("op-one").value);
              let input2 = parseInt(document.getElementById("op-two").value);
              x = input1 + input2;
              alert(x);              
              break;
            case 'substraction':
              let input3 = parseInt(document.getElementById("op-one").value);
              let input4 = parseInt(document.getElementById("op-two").value);
              x = input3 - input4;
              alert(x);           
              break;
            case 'multiplication':
              let input5 = parseInt(document.getElementById("op-one").value);
              let input6 = parseInt(document.getElementById("op-two").value);
              x = input5 * input6;
              alert(x);              
              break;
            case 'division':
              let input7 = parseInt(document.getElementById("op-one").value);
              let input8 = parseInt(document.getElementById("op-two").value);
              x = input7 / input8;
              alert(x);              
              break;
          }
      };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
            ),
            );
        })();
        