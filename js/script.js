// Close the navbar when a nav-item is clicked 
document.querySelectorAll('.navbar-nav .nav-link').forEach(item => { 
    item.addEventListener('click', () => {
        if (document.querySelector('.navbar-collapse').classList.contains('show')) { 
            document.querySelector('.navbar-toggler').click(); 
        } 
    }); 
});
