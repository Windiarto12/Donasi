// ===== Carousel =====
let slideIndex = 0;
showSlides();
function showSlides() {
  let slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 4000);
}

// ===== Modal Login =====
function openLogin() {
  document.getElementById("loginModal").style.display = "block";
}
function closeLogin() {
  document.getElementById("loginModal").style.display = "none";
}

// ===== Modal Donasi =====
function openDonate() {
  document.getElementById("donateModal").style.display = "block";
}
function closeDonate() {
  document.getElementById("donateModal").style.display = "none";
}

// ===== Button On Top =====
let btnTop = document.getElementById("btnTop");
window.onscroll = function() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

