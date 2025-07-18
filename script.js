// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function () {
    // Create confetti effect
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '9999';
        document.body.appendChild(confettiContainer);

        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f9ca24', '#f0932b', '#eb4d4b', '#6c5ce7'];

        function createConfettiPiece() {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.animation = `fall ${Math.random() * 3 + 2}s linear forwards`;

            confettiContainer.appendChild(confetti);

            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }

        // Create confetti pieces
        for (let i = 0; i < 50; i++) {
            setTimeout(createConfettiPiece, i * 100);
        }

        // Remove confetti container after animation
        setTimeout(() => {
            confettiContainer.remove();
        }, 8000);
    }

    // Add confetti CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fall {
            0% {
                transform: translateY(-100vh) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(100vh) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Trigger confetti on page load
    setTimeout(createConfetti, 1000);



    // Add hover sound effect (visual feedback)
    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        container.addEventListener('mouseenter', function () {
            this.style.filter = 'brightness(1.1)';
        });

        container.addEventListener('mouseleave', function () {
            this.style.filter = 'brightness(1)';
        });
    });

    // Add smooth scrolling for better UX
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.image-section, .smiling-section, .birthday-wishes');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });

    // Add typing effect to the main title
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    // Add click-to-celebrate feature
    const celebrationEmojis = document.querySelectorAll('.emoji');
    celebrationEmojis.forEach(emoji => {
        emoji.addEventListener('click', function () {
            // Create a burst of mini confetti
            for (let i = 0; i < 10; i++) {
                const miniConfetti = document.createElement('span');
                miniConfetti.innerHTML = '🎉';
                miniConfetti.style.position = 'absolute';
                miniConfetti.style.left = Math.random() * 100 + 'px';
                miniConfetti.style.top = Math.random() * 100 + 'px';
                miniConfetti.style.fontSize = '1rem';
                miniConfetti.style.animation = 'float 2s ease-out forwards';
                miniConfetti.style.pointerEvents = 'none';

                this.parentElement.appendChild(miniConfetti);

                setTimeout(() => {
                    miniConfetti.remove();
                }, 2000);
            }
        });
    });

    // Add easter egg - double click on name for special effect
    const nameElement = document.querySelector('.name');
    let clickCount = 0;

    nameElement.addEventListener('click', function () {
        clickCount++;

        if (clickCount === 2) {
            // Special birthday animation
            this.style.animation = 'none';
            this.style.transform = 'scale(1.2) rotate(5deg)';
            this.style.transition = 'all 0.3s ease';

            // Add rainbow effect
            this.style.background = 'linear-gradient(45deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)';
            this.style.backgroundSize = '400% 400%';
            this.style.animation = 'rainbow 2s ease infinite';
            this.style.webkitBackgroundClip = 'text';
            this.style.webkitTextFillColor = 'transparent';
            this.style.backgroundClip = 'text';

            // Add more confetti
            createConfetti();

            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
                this.style.background = 'white';
                this.style.webkitTextFillColor = 'white';
                this.style.animation = 'slideInFromTop 1s ease-out 0.4s both';
            }, 3000);

            clickCount = 0;
        }

        // Reset click count after 1 second
        setTimeout(() => {
            clickCount = 0;
        }, 1000);
    });

    // Add rainbow animation CSS
    const rainbowStyle = document.createElement('style');
    rainbowStyle.textContent = `
        @keyframes rainbow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
    `;
    document.head.appendChild(rainbowStyle);

    // Add fun cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,215,0,0.8) 0%, rgba(255,215,0,0) 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor trail on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }

    // Add celebration sound effect simulation (visual feedback)
    function celebrateVisually() {
        document.body.style.animation = 'celebrate 0.5s ease-in-out';
        setTimeout(() => {
            document.body.style.animation = '';
        }, 500);
    }

    const celebrateStyle = document.createElement('style');
    celebrateStyle.textContent = `
        @keyframes celebrate {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.01); }
        }
    `;
    document.head.appendChild(celebrateStyle);

    console.log('🎉 Happy Birthday Kushal! 🎉');
    console.log('Hope you have the coolest birthday ever! 🎂');
    console.log('With love from your friend! ❤️');
}); 