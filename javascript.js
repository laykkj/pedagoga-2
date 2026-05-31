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

const carousel = document.getElementById("carousel");
const cards = document.querySelectorAll(".feedback-card");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

const dots = document.querySelectorAll("#dots div");

let currentIndex = 0;

function getCardsPerView(){

  if(window.innerWidth <= 768) return 1;

  if(window.innerWidth <= 1400) return 2;

  return 3;
}

function updateCarousel(){

  const gap = 30;
const cardWidth =
cards[0].offsetWidth + gap;

  carousel.style.transform =
  `translateX(-${currentIndex * cardWidth}px)`;

  dots.forEach(dot =>
    dot.classList.remove("active")
  );

  if(dots[currentIndex]){
    dots[currentIndex].classList.add("active");
  }
}

nextBtn.addEventListener("click",()=>{

  const maxIndex =
  cards.length - getCardsPerView();

  if(currentIndex < maxIndex){
    currentIndex++;
  }else{
    currentIndex = 0;
  }

  updateCarousel();
});

prevBtn.addEventListener("click",()=>{

  const maxIndex =
  cards.length - getCardsPerView();

  if(currentIndex > 0){
    currentIndex--;
  }else{
    currentIndex = maxIndex;
  }

  updateCarousel();
});

dots.forEach((dot,index)=>{

  dot.addEventListener("click",()=>{

    const maxIndex =
    cards.length - getCardsPerView();

    currentIndex =
    Math.min(index,maxIndex);

    updateCarousel();
  });

});

window.addEventListener("resize",()=>{

  const maxIndex =
  cards.length - getCardsPerView();

  if(currentIndex > maxIndex){
    currentIndex = maxIndex;
  }

  updateCarousel();
});

updateCarousel();

document.getElementById("whatsapp-form").addEventListener("submit", function(e){

  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto = encodeURIComponent(
`Olá! Meu nome é ${nome}

Telefone: ${telefone}

Assunto: ${assunto}

Mensagem: ${mensagem}`
  );

  const numero = "5521980993661";

  window.open(
    `https://wa.me/${numero}?text=${texto}`,
    "_blank"
  );

});