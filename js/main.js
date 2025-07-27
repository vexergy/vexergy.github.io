document.querySelectorAll('.navbar-nav .nav-link, .dropdown-item').forEach(item => { 
    item.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-toggle')) {
            if (document.querySelector('.navbar-collapse').classList.contains('show')) { 
                document.querySelector('.navbar-toggler').click(); 
            }
        }
    }); 
});
