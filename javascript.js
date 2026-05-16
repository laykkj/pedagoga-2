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

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    const start = window.pageYOffset;
    const end = target.offsetTop;
    const distance = end - start;
    const duration = 800;
    let startTime = null;

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      window.scrollTo(0, start + distance * easeInOutCubic(progress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    function easeInOutCubic(t) {
      return t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    requestAnimationFrame(animation);
  });
});