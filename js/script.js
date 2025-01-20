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
