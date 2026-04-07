// Placeholder for slider functionality
console.log("Slider ready");
let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
  index = (index + 1) % slides.length; // يدور من الأول منين يسالي
}

setInterval(showSlide, 3000); // كل 3 ثواني تبدل
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;
let timer = setInterval(nextSlide, 3000); // تبديل تلقائي كل 3 ثواني

function showSlide(n) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
    if (i === n) {
      slide.classList.add("active");
      dots[i].classList.add("active");
    }
  });
  index = n;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

// أزرار
document.querySelector(".next").addEventListener("click", () => {
  nextSlide();
  resetTimer();
});
document.querySelector(".prev").addEventListener("click", () => {
  prevSlide();
  resetTimer();
});

// نقاط
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    resetTimer();
  });
});

// Reset Timer
function resetTimer() {
  clearInterval(timer);
  timer = setInterval(nextSlide, 3000);
}
<script>
  let slides = document.querySelectorAll('.slide');
  let dots = document.querySelectorAll('.dot');
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
      dots[i].classList.toggle('active', i === index);
    });
    current = index;
  }

  function nextSlide() {
    let next = (current + 1) % slides.length;
    showSlide(next);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => showSlide(i));
  });

  setInterval(nextSlide, 4000);
</script>
<script>
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let index = 0;
  let timer;

  function showSlide(i) {
    slides.forEach((s, n) => s.classList.toggle('active', n === i));
    dots.forEach((d, n) => d.classList.toggle('active', n === i));
    index = i;
  }

  function nextSlide() {
    index = (index + 1) % slides.length;
    showSlide(index);
  }

  function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    showSlide(index);
  }

  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetTimer();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetTimer();
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      showSlide(i);
      resetTimer();
    });
  });

  function startTimer() {
    timer = setInterval(nextSlide, 4000);
  }

  function resetTimer() {
    clearInterval(timer);
    startTimer();
  }

  startTimer();
</script>
// Toggle on click (mobile)
document.querySelectorAll('.menu-item > button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    const parent = btn.parentElement;
    // اقفل اي واحد مفتوح من قبل
    document.querySelectorAll('.menu-item.open').forEach(it => {
      if (it !== parent) it.classList.remove('open');
    });
    parent.classList.toggle('open');
  });
});

// بفّرشي برا باش تسد
document.addEventListener('click', function(e) {
  if (!e.target.closest('.menu-item')) {
    document.querySelectorAll('.menu-item.open').forEach(it => it.classList.remove('open'));
  }
});
<script>
function searchProduct() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let text = card.textContent.toLowerCase();
    card.style.display = text.includes(input) ? "block" : "none";
  });
}
</script>
let index = 0;
const slides = document.querySelector('.slides');
const total = document.querySelectorAll('.slide').length;

setInterval(() => {
  index++;
  if (index >= total) index = 0;
  slides.style.transform = `translateX(-${index * 100}%)`;
}, 4000);
