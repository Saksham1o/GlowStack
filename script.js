function toggleFAQ(element) {
    const answer = element.querySelector(".faq-answer");
    const icon = element.querySelector("span");

    const isOpen = answer.classList.contains("max-h-[200px]");
    
    // Close all FAQs
    document.querySelectorAll(".faq-answer").forEach(el => {
        el.classList.remove("max-h-[200px]", "opacity-100");
        el.classList.add("max-h-0", "opacity-0");
    });
    document.querySelectorAll(".faq-answer + span").forEach(i => {
        i.classList.remove("rotate-45");
    });

    // If the clicked FAQ is not open, open it
    if (!isOpen) {
        answer.classList.remove("max-h-0", "opacity-0");
        answer.classList.add("max-h-[200px]", "opacity-100");
        icon.classList.add("rotate-45");
    } else {
        // If it is open, close it and reset the icon
        answer.classList.add("max-h-0", "opacity-0");
        icon.classList.remove("rotate-45");
    }
}
