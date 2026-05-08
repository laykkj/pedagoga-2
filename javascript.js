const el = document.querySelector(".typing");

if (el) {
  const words = ["Psicopedagoga", "Lidiane"];
  let wordIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const current = words[wordIndex];

    if (!deleting) {
      el.textContent = current.substring(0, charIndex++);

      if (charIndex > current.length) {
        deleting = true;

        // só pausa se for Psicopedagoga
        const delay = current === "Psicopedagoga" ? 8200 : 8200;
        setTimeout(type, delay);
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
}

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const href = link.getAttribute('href');
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});