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

  document.addEventListener("DOMContentLoaded", function() {
    const mode = getQueryParam('mode');
    if (mode === 'signup') {
      document.getElementById('signin-form').style.display = 'none';
      document.getElementById('signup-form').style.display = 'block';
    } else {
      document.getElementById('signin-form').style.display = 'block';
      document.getElementById('signup-form').style.display = 'none';
    }
  });

  const toggle = document.getElementById('pricing-toggle');
  const toggleLabel = document.getElementById('toggle-label');
  const pricingCards = document.querySelectorAll('.price-card');
  const pricingElements = document.querySelectorAll('.pmo');
  
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
  updatePrices(pricingMonthly, '/mo');
  
  

  const modeToggle = document.getElementById('mode-toggle');
  const modeLabel = document.getElementById('mode-label');
  const logoImg = document.getElementById('logo');
  const userIcon = document.getElementById('user-icon');
  const tagLine = document.querySelectorAll('.tagline');
  const service = document.getElementById('service');
  const pricetext = document.getElementById('price-cont');
  const faq = document.getElementById('faq-text');
  const h3 = document.getElementsByClassName('serveh3');
  
  modeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
  
    if (document.body.classList.contains('dark-mode')) {
      console.log('Dark mode activated');
      modeLabel.textContent = 'Dark Mode';
      userIcon.src = 'img/user-dark.png';
      logoImg.src = 'img/log-dark.png';
      logoImg.style.height = '150px'; 
      logoImg.style.top = '0'; 
      logoImg.style.left = '0';
      tagLine.forEach(element => {
          element.style.color = '#fff';
        });
        service.style.setProperty('color', '#00ABE4', 'important'); 
        pricetext.style.color = '#00ABE4';
        toggleLabel.style.color = '#3B82F6';
        faq.style.color = '#00ABE4';
    } else {
      console.log('Light mode activated');
      modeLabel.textContent = 'Light Mode';
      userIcon.src = 'img/user.png';
      logoImg.src = 'img/logo.png';
      logoImg.style.height = '100px'; 
      logoImg.style.position = 'absolute'; 
      logoImg.style.top = '10px'; 
      logoImg.style.left = '10px'; 
    }
  });
  