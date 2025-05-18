function toggleFAQ(element) {
  const answer = element.querySelector(".faq-answer");
  const icon = element.querySelector("span");
  const isOpen = answer.classList.contains("max-h-[200px]");
  
  document.querySelectorAll(".faq-answer").forEach(el => {
    el.classList.remove("max-h-[200px]", "opacity-100");
    el.classList.add("max-h-0", "opacity-0");
  });
  document.querySelectorAll(".faq-answer + span").forEach(i => {
    i.classList.remove("rotate-45");
  });

  if (!isOpen) {
    answer.classList.remove("max-h-0", "opacity-0");
    answer.classList.add("max-h-[200px]", "opacity-100");
    icon.classList.add("rotate-45");
  } else {
    answer.classList.add("max-h-0", "opacity-0");
    icon.classList.remove("rotate-45");
  }
}

function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", function () {
  const mode = getQueryParam('mode');
  if (mode === 'signup') {
    document.getElementById('signin-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
  } else {
    document.getElementById('signin-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
  }

  updatePrices(pricingMonthly, '/mo');
  if (localStorage.getItem('mode') === 'dark') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
  
});

const toggle = document.getElementById('pricing-toggle');
const toggleLabel = document.getElementById('toggle-label');
const pricingCards = document.querySelectorAll('.price-card');
const pricingMonthly = [9, 29, 99];
const pricingYearly = [90, 290, 990];

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    toggleLabel.textContent = 'Yearly';
    updatePrices(pricingYearly, '/yr');
  } else {
    toggleLabel.textContent = 'Monthly';
    updatePrices(pricingMonthly, '/mo');
  }
});

function updatePrices(prices, period) {
  pricingCards.forEach((card, index) => {
    const priceElement = card.querySelector('.pmo span');
    const periodElement = card.querySelector('.pmo');
    priceElement.textContent = `$${prices[index]}`;
    periodElement.innerHTML = periodElement.innerHTML.replace(/\/mo|\/yr/, period);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const modeToggle = document.getElementById('mode-toggle');
  const modeLabel = document.getElementById('mode-label');
  const logoImg = document.querySelector('.logo img');
  const userIcon = document.getElementById('user-icon');
  const tagLine = document.querySelectorAll('.tagline');
  const service = document.getElementById('service');
  const pricetext = document.getElementById('price-cont');
  const faq = document.getElementById('faq-text');
  const toggleLabel = document.getElementById('toggle-label');

  function enableDarkMode() {
    document.body.classList.add('dark-mode');
    modeToggle.checked = true;
    modeLabel.textContent = 'Dark Mode';

    if (logoImg) logoImg.src = 'img/log-dark.png';
    if (userIcon) userIcon.src = 'img/user-dark.png';

    tagLine.forEach(el => el.style.color = '#fff');
    if (service) service.style.color = '#00ABE4';
    if (pricetext) pricetext.style.color = '#00ABE4';
    if (toggleLabel) toggleLabel.style.color = '#3B82F6';
    if (faq) faq.style.color = '#00ABE4';
  }

  function disableDarkMode() {
    document.body.classList.remove('dark-mode');
    modeToggle.checked = false;
    modeLabel.textContent = 'Light Mode';

    if (logoImg) logoImg.src = 'img/logo.png';
    if (userIcon) userIcon.src = 'img/user.png';
    logoImg.style.height = '120px';
    logoImg.style.position = 'absolute';
    logoImg.style.top = '10px';
    logoImg.style.left = '10px';
  }

  modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });

  enableDarkMode();
});

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});