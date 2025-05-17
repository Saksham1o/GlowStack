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
  
  

