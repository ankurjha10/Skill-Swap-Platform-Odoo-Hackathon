document.addEventListener('DOMContentLoaded', function () {
    const requestButtons = document.querySelectorAll('.request-btn');

    // Login check
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    requestButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            if (!isLoggedIn) {
                alert("⚠️ Please login to send a request.");
                // Optional: redirect to login
                // window.location.href = "login.html";
                return;
            }

            // ✅ Ripple effect and animation logic
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = `${size}px`;
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(255, 255, 255, 0.6)';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'ripple 0.6s linear';
            ripple.style.pointerEvents = 'none';

            this.appendChild(ripple);

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

    // === Card Hover Scale Effect ===
    userCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // === Login Button Press Animation ===
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // === Search Icon Spin ===
    if (searchIcon) {
        searchIcon.addEventListener('click', function () {
            this.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        });
    }

    // === Avatar Float & Hover Zoom ===
    avatars.forEach((avatar, index) => {
        avatar.style.animationDelay = `${index * 0.3}s`;
        avatar.addEventListener('mouseenter', function () {
            this.style.animationPlayState = 'paused';
            this.style.transform = 'scale(1.1)';
        });
        avatar.addEventListener('mouseleave', function () {
            this.style.animationPlayState = 'running';
            this.style.transform = 'scale(1)';
        });
    });

    // === Theme Toggle ===
    if (themeToggleBtn) {
        // Load saved theme
        if (localStorage.getItem('theme') === 'light') {
            document.body.classList.add('light-theme');
            themeToggleBtn.textContent = '🌞';
        }

        themeToggleBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-theme');
            const isLight = document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isLight ? 'light' : 'dark');
            themeToggleBtn.textContent = isLight ? '🌞' : '🌙';
        });
    }

    // === Inject Ripple Animation Once ===
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
});
