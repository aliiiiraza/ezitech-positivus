
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); 
  });


const steps = document.querySelectorAll(".process-step");
steps.forEach(step => {
  step.addEventListener("click", () => {
    step.classList.toggle("active");
  });
});


const dots = document.querySelectorAll(".dot");
const testimonialCards = document.querySelectorAll(".testimonial-card");

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    testimonialCards.forEach(card => card.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));

    testimonialCards[index].classList.add("active");
    dot.classList.add("active");
  });
});
