burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav = document.querySelector('.rightNav');
navLinks = document.querySelectorAll('.nav-list li a'); 

const closeMenu = () => {
    rightNav.classList.add('v-class-resp');
    navList.classList.add('v-class-resp');
    navbar.classList.add('h-nav-resp');
}

const openMenu = () => {
    rightNav.classList.remove('v-class-resp');
    navList.classList.remove('v-class-resp');
    navbar.classList.remove('h-nav-resp');
}

burger.addEventListener('click', () => {
    if (navList.classList.contains('v-class-resp')) {
        openMenu();
    } else {
        closeMenu();
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const isMenuOpen = !navList.classList.contains('v-class-resp');

        if (isMenuOpen) {
            e.preventDefault(); 
            const targetId = link.getAttribute('href'); 

            closeMenu();

            setTimeout(() => {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 200); 
        }
        
    });
});
