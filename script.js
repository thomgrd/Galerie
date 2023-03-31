// Sélectionnez le bouton et la div pour le pop-up
const button = document.querySelector('.info-button');
const popup = document.querySelector('#header-popup');

// Ajoutez un événement click pour afficher le pop-up
button.addEventListener('click', () => {
  popup.style.display = 'block';
});

// Ajoutez un événement click pour fermer le pop-up
popup.addEventListener('click', () => {
  popup.style.display = 'none';
});


// Sélectionnez la croix
const close = document.querySelector('.close');

// Ajoutez un événement click pour fermer le pop-up
close.addEventListener('click', () => {
  popup.style.display = 'none';
});
