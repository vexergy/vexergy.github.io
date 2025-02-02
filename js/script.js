// Close the navbar when a nav-item or dropdown-item is clicked
document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item').forEach(item => { 
    item.addEventListener('click', (event) => {
        // Check if the clicked item is not part of a dropdown toggle
        if (!event.target.closest('.dropdown-toggle')) {
            if (document.querySelector('.navbar-collapse').classList.contains('show')) { 
                document.querySelector('.navbar-toggler').click(); 
            }
        }
    }); 
});

// Add click events to product/module images to open corresponding accordion item
document.querySelectorAll('.product-container .clickable').forEach(img => {
    img.addEventListener('click', () => {
        const target = img.getAttribute('data-target');
        const accordionButton = document.querySelector(`button[data-bs-target="${target}"]`);

        if (accordionButton) {
            // Close all open accordion items
            document.querySelectorAll('.accordion-collapse.show').forEach(openItem => {
                openItem.classList.remove('show');
            });

            // Open the clicked accordion item
            const collapseElement = document.querySelector(target);
            collapseElement.classList.add('show');

            // Adjust the aria-expanded attribute
            accordionButton.setAttribute('aria-expanded', 'true');

            // Trigger the Bootstrap collapse event to apply styles correctly
            const collapseInstance = new bootstrap.Collapse(collapseElement, {
                toggle: false
            });
            collapseInstance.show();
        }
    });
});

let mybutton = document.getElementById("backToTopBtn");

// When user scrolls down 20px from the top of the page, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When user clicks on button, scroll to top of page smoothly
function topFunction() {
    scrollToTop();
}

function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, isMobile ? c - c / 4 : c - c / 8); // Faster scroll for mobile devices
    }
}
