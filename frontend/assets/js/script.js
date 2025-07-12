// Add click animations and interactions
document.addEventListener('DOMContentLoaded', function () {
    const requestButtons = document.querySelectorAll('.request-btn');
    const userCards = document.querySelectorAll('.user-card');
    const loginBtn = document.querySelector('.login-btn');
    const searchIcon = document.querySelector('.search-icon');

    // Request button click animation
    requestButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

            // Change button text temporarily
            const originalText = this.textContent;
            this.textContent = 'Requested!';
            this.style.background = 'linear-gradient(45deg, #27ae60, #2ecc71)';

            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'linear-gradient(45deg, #1abc9c, #16a085)';
                ripple.remove();
            }, 2000);
        });
    });

    // User card hover effects
    userCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Login button animation
    loginBtn.addEventListener('click', function () {
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 150);
    });

    // Search icon animation
    searchIcon.addEventListener('click', function () {
        this.style.transform = 'rotate(360deg) scale(1.2)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg) scale(1)';
        }, 500);
    });

    // Add floating animation to avatars
    const avatars = document.querySelectorAll('.avatar');
    avatars.forEach((avatar, index) => {
        avatar.style.animationDelay = `${index * 0.5}s`;
        avatar.addEventListener('mouseenter', function () {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.1)';
        });

        avatar.addEventListener('mouseleave', function () {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });
});

// Add CSS animation for ripple effect
const style = document.createElement('style');
style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
document.head.appendChild(style);
