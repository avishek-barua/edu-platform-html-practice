// $(document).ready(function () {
//     $('.fa-bars').click(function () {
//         $(this).toggleClass('fa-times');
//         $('.navbar').toggleClass('nav-toggle');
//     });

//     $(window).on('scroll load', function () {
//         $('.fa-bars').removeClass('fa-times');
//         $('.navbar').removeClass('nav-toggle');

//         if ($(window).scrollTop() > 30) {
//             $('header').addClass('header-active');
//         } else {
//             $('header').removeClass('header-active');
//         }

//         $('section').each(function () {
//             var id = $(this).attr('id');
//             var height = $(this).height();
//             var offset = $(this).offset().top - 200;
//             var top = $(window).scrollTop();

//             if (top >= offset && top < height + offset) {
//                 $('.navbar ul li a').removeClass('active');
//                 $('.navbar').find('[href="#' + id + '"]').addClass('active');
//             }
//         });
//     });
// });


document.addEventListener('DOMContentLoaded', () => {
    const barsIcon = document.querySelector('.fa-bars');
    const navbar = document.querySelector('.navbar');
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar ul li a');

    barsIcon.addEventListener('click', () => {
        barsIcon.classList.toggle('fa-times');
        navbar.classList.toggle('nav-toggle');
    });

    window.addEventListener('scroll', () => {
        barsIcon.classList.remove('fa-times');
        navbar.classList.remove('nav-toggle');

        if (window.scrollY > 30) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }

        sections.forEach((section) => {
            const id = section.getAttribute('id');
            const height = section.offsetHeight;
            const offset = section.offsetTop - 200;
            const top = window.scrollY;

            if (top >= offset && top < offset + height) {
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                });
                const activeLink = navbar.querySelector(`[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    });

    window.addEventListener('load', () => {
        if (window.scrollY > 30) {
            header.classList.add('header-active');
        } else {
            header.classList.remove('header-active');
        }
    });
});
