function changerTexte() {
  const message = document.getElementById("message");
  message.textContent = "Bravo 🎉 tu as cliqué sur le bouton !";
}

// Burger menu mobile
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  const ul = document.querySelector('nav ul');
  ul.classList.toggle('active');
});
