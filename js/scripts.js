/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const logoLight = document.querySelector('.logo-light');
        const logoDark = document.querySelector('.logo-dark');

        if (!navbarCollapsible) {
            return;
        }

        if (window.innerWidth < 992) {
            navbarCollapsible.classList.add('navbar-shrink');
            logoLight.classList.add('d-none');
            logoDark.classList.remove('d-none');
        } else {
            // On larger screens, toggle navbar shrink and logo based on scroll
            if (window.scrollY === 0) {
                navbarCollapsible.classList.remove('navbar-shrink');
                logoLight.classList.remove('d-none');
                logoDark.classList.add('d-none');
            } else {
                navbarCollapsible.classList.add('navbar-shrink');
                logoLight.classList.add('d-none');
                logoDark.classList.remove('d-none');
            }
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar and toggle logos when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    const links = document.querySelectorAll('a[href^="#"]');
    const navbarHeight = document.querySelector('#mainNav').offsetHeight; // Get navbar height
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                e.preventDefault(); // Prevent default anchor behavior

                // Scroll to the target with offset for navbar
                const targetPosition = targetElement.offsetTop - navbarHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth',
                });
            }
        });
    });
});
