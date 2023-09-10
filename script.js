document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

         responseDiv.innerHTML = `Thank you, ${name}! Your message has been sent.`;
         form.reset();
         const mailtoLink = `mailto:funwithmetamil@gmail.com?subject=Contact%20${name}&body=${encodeURIComponent(message)}`;

// Redirect the user to the mailto link
window.location.href = mailtoLink;
    });
});

const currentYear = new Date().getFullYear();

const copyrightElement = document.getElementById("copyright");
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} Raghavan`;
}
function scrollToSection(elementId) {
    const section = document.getElementById(elementId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }
}

document.querySelector(".navmenu").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
        e.preventDefault();
        const targetId = e.target.getAttribute("href").substring(1); 
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.querySelector('.back-to-top');


    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    });


    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

