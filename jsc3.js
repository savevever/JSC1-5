const items = document.querySelectorAll(".accordion-item-text");

function toggleAccordion() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion)); //item = .accordion-item-text array