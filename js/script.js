let hamburger = document.querySelector('.hamburger');
let mobileMenu = document.querySelector('.mobile-nav');
let mobileMenuBg = document.querySelector('.mobile-nav-bg');
let header = document.querySelector('header');

hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('mobile-nav-active');
    hamburger.classList.toggle('hamburger-close');
    mobileMenuBg.classList.toggle('mobile-nav-bg-active');
    header.classList.toggle("hdr-fixed");
});

mobileMenuBg.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-nav-active');
    hamburger.classList.remove('hamburger-close');
    mobileMenuBg.classList.remove('mobile-nav-bg-active');
    header.style.position = "relative";
});

let faqRow = document.querySelectorAll(".faq-title");
let arrow = document.querySelectorAll(".faq-arrow");

for (let i = 0; i < faqRow.length; i++) {
    faqRow[i].addEventListener("click", () => {
        console.log(faqRow[i]);
        let focusFaq = faqRow[i];
       focusFaq .classList.toggle("active");
       arrow[i].classList.toggle("arrow-active");

    //    open FAQ answer when title container is clicked
       let answer = focusFaq.nextElementSibling;
        console.log(answer);
        if(answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
}
