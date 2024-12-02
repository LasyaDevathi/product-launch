// script.js
const countdownElement = document.getElementById('countdown');
const launchDate = new Date('December 31, 2024 00:00:00').getTime();
const toggleThemeBtn = document.getElementById('toggle-theme');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "The Product is Live!";
  }
}

let timer = setInterval(updateCountdown, 1000);

// Theme toggle
let darkMode = false;
toggleThemeBtn.addEventListener('click', () => {
  darkMode = !darkMode;
  document.body.style.background = darkMode 
    ? 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' 
    : 'linear-gradient(to right, #4facfe, #00f2fe)';
});

//Animation Launch
function celebrate() {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
  
  if (distance < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "The Product is Live!";
    celebrate();
  }

  //Rsvp form
  const form = document.getElementById('rsvp-form');
const message = document.getElementById('rsvp-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  message.textContent = `Thank you for RSVPing, ${name}! We'll send updates to ${email}.`;
  form.reset();
});



