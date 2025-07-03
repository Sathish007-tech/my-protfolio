// Typewriter effect
const typewriter = document.getElementById('typewriter');
const text = "Hello, I'm Lakshmanan";
let index = 0;

function type() {
  if (index < text.length) {
    typewriter.innerHTML += text.charAt(index);
    index++;
    setTimeout(type, 100);
  }
}
type();

// Scroll fade-in effect
const faders = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
  faders.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
});
