let calcul = '';

// Met à jour le calcul et affiche la valeur
function updateCalculation(value) {
  const display = document.querySelector('.place-calcul'); // Sélectionne l'affichage

  if (value === '=') {
    try {
      calcul = eval(calcul); 
    } catch {
      calcul = 'Error'; 
    }
  } else if (value === 'Clear') {

    calcul = '';
  } else {
    calcul += value;
  }

  // Met à jour l'affichage avec la chaîne calculée ou en cours
  display.innerText = calcul;
}

function resetCalculation() {
  calcul = ''; // Réinitialise le calcul
  document.querySelector('.place-calcul').innerText = ''; // Efface l'affichage
}
