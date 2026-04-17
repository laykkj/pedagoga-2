const el = document.querySelector(".typing");

const words = ["Pedagoga Infantil", "Lidiane"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
  const current = words[wordIndex];

  if (!deleting) {
    el.textContent = current.substring(0, charIndex++);
    if (charIndex > current.length) {
      deleting = true;
      setTimeout(type, 3200);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex--);
    if (charIndex < 0) {
      deleting = false;
      wordIndex = (wordIndex + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}

type();