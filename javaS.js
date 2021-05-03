// DOM
const touches = [...document.querySelectorAll(".bouton")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.getElementById('resultat');

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

touches.forEach((touche) => {
    touche.addEventListener("click", (e) => {

        const valeur = e.target.dataset.key;
        calculer(valeur);
    });
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.message);
});



















/*var input = '';
var resul = 0;

function ShowValue(btn){
  input = input + btn.value;

  document.getElementById('resultat').innerHTML = input;
};


function quickMath() {
  resul = eval(input)
  console.log(resul);
  document.getElementById('resultat').innerHTML = resul;
};

function Reset(btn) {
  document.getElementById('resultat').innerHTML = "";
  input = "";

};

function rem1(btn) {

  input = input.replace(input.slice(-1),"");
  document.getElementById('resultat').innerHTML = input;
};


window.addEventListener("error", (e) => {
    alert("Une erreur est survenue dans votre calcul : " + e.message);
});
*/
