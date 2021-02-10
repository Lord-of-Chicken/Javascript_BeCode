/* becode/javascript
 *
 * /04-dates/01-title-by-hour-one/script.js - 4.1: texte en fonction de l'heure (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


now = new Date();
annee = now.getFullYear();
mois = now.getMonth() + 1;
jour = now.getDate();
heure = now.getHours();
minute = now.getMinutes();
seconde = now.getSeconds();

if (heure < 18)
{
document.getElementById("target").innerHTML = "Bonjour"}

else
{
document.getElementById("target").innerHTML = "Bonsoir"}



//console.log("Nous sommes le ", jour, "/", mois, "/", annee, " et il est ", heure, " heure ", minute, " minutes ", seconde, " secondes")   
    
    // Résultat: Nous sommes le 2/11/2012 et il est 19 heure 57 minutes 37 secondes
    
    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    // your code here
