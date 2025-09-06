function changerTexte() {
  const message = document.getElementById("message");
  message.textContent = "Bravo 🎉 tu as cliqué sur le bouton !";
}

function envoyerMessage() {
  alert("Merci ! Votre message a été envoyé 🚀");
}

// Burger menu mobile
const burger = document.querySelector('.burger');
burger.addEventListener('click', () => {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('active');
});
