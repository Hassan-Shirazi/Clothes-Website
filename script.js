 document.addEventListener("DOMContentLoaded", function() {

            gsap.from(".hero-background", {
                scale: 1.15,
                duration: 25,
                ease: "power1.inOut",
                repeat: -1,
                yoyo: true
            });

            gsap.from(".hero-content h1", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.2,
                ease: "power2.out"
            });
            gsap.from(".hero-content p", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.4,
                ease: "power2.out"
            });
            gsap.from(".hero-content .btn", {
                opacity: 0,
                y: 20,
                duration: 1,
                delay: 0.6,
                ease: "power2.out"
            });

            const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
            const mainNav = document.querySelector('.main-nav');
            const menuIcon = document.querySelector('.menu-icon');
            const closeIcon = document.querySelector('.close-icon');

            mobileMenuToggle.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                if (mainNav.classList.contains('active')) {
                    menuIcon.style.display = 'none';
                    closeIcon.style.display = 'block';
                } else {
                    menuIcon.style.display = 'block';
                    closeIcon.style.display = 'none';
                }
            });
            
            const slider = document.getElementById('new-arrivals-slider');
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (slider && prevBtn && nextBtn) {
                const scrollAmount = 300;
            
                nextBtn.addEventListener('click', () => {
                    slider.scrollLeft += scrollAmount;
                });
            
                prevBtn.addEventListener('click', () => {
                    slider.scrollLeft -= scrollAmount;
                });
            }

            const scrollRevealElements = document.querySelectorAll('.scroll-reveal');
            const revealOnScroll = (entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        gsap.to(entry.target, {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            ease: 'power3.out',
                            onComplete: () => observer.unobserve(entry.target)
                        });
                    }
                });
            };

            const scrollObserver = new IntersectionObserver(revealOnScroll, {
                root: null,
                threshold: 0.1
            });
            
            scrollRevealElements.forEach(el => {
                scrollObserver.observe(el);
            });
        });