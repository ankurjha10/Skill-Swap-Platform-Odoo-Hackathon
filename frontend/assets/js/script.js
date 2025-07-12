document.addEventListener('DOMContentLoaded', function () {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const loginBtn = document.querySelector('.login-btn');
    const searchIcon = document.querySelector('.fa-search');
    const avatars = document.querySelectorAll('.avatar');
    const userCards = document.querySelectorAll('.user-card');
    const requestButtons = document.querySelectorAll('.request-btn');

    // ========== Ripple Request Button ==========
    requestButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Show popup directly
            showPopup();

            // Ripple animation
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

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // ========== Card Hover Scale ==========
    userCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========== Avatar Hover Zoom ==========
    avatars.forEach((avatar, index) => {
        avatar.style.animationDelay = `${index * 0.3}s`;
        avatar.addEventListener('mouseenter', () => {
            avatar.style.animationPlayState = 'paused';
            avatar.style.transform = 'scale(1.1)';
        });
        avatar.addEventListener('mouseleave', () => {
            avatar.style.animationPlayState = 'running';
            avatar.style.transform = 'scale(1)';
        });
    });

    // ========== Search Icon Spin ==========
    if (searchIcon) {
        searchIcon.addEventListener('click', function () {
            this.style.transform = 'rotate(360deg) scale(1.2)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg) scale(1)';
            }, 500);
        });
    }

    // ========== Login Button Press ==========
    if (loginBtn) {
        loginBtn.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // ========== Theme Toggle ==========
    if (themeToggleBtn) {
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

    // ========== Profile Page Loader ==========
    const container = document.getElementById('profile-container');
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');

    if (container && name) {
        const data = {
            Ankur: {
                offered: ['Kotlin', 'Jetpack Compose'],
                wanted: ['Python', 'Graphic Designer']
            },
            Kritagya: {
                offered: ['JavaScript', 'Assembly'],
                wanted: ['Python', 'Linux', 'Swift']
            },
            Anubhav: {
                offered: ['Bash'],
                wanted: ['Kali Linux', 'AWS']
            },
            Prabhat: {
                offered: ['React'],
                wanted: ['Next.js']
            }
        };

        const user = data[name];
        if (user) {
            container.innerHTML = `
                <div class="user-card">
                    <div class="avatar"></div>
                    <div class="user-info">
                        <div class="user-name">${name}</div>
                        <div class="skills-offered"><strong>Skills Offered:</strong> <span class="skills-list">${user.offered.join(', ')}</span></div>
                        <div class="skills-wanted"><strong>Skills Wanted:</strong> <span class="skills-list">${user.wanted.join(', ')}</span></div>
                    </div>
                    <button class="request-btn">Request</button>
                </div>
            `;

            // Fill dropdowns
            document.getElementById('your-skill').innerHTML = user.offered.map(skill => `<option>${skill}</option>`).join('');
            document.getElementById('their-skill').innerHTML = user.wanted.map(skill => `<option>${skill}</option>`).join('');

            document.querySelector('.request-btn').addEventListener('click', () => {
                showPopup();
            });
        }
    }

    // ========== Ripple Keyframe ========== 
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

    // ========== Form Submit Login Check ==========
    const submitBtn = document.getElementById('submit-request');
    if (submitBtn) {
        submitBtn.addEventListener('click', function () {
            const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
            if (!isLoggedIn) {
                alert("⚠️ Please login to submit a request.");
            } else {
                // ✅ Send the request (you can write fetch/ajax here)
                closePopup();
                alert("✅ Request sent successfully!");
            }
        });
    }
});

// ========== Popup Show/Close ==========
function showPopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.classList.remove('hidden');
}

function closePopup() {
    const popup = document.getElementById('popup');
    if (popup) popup.classList.add('hidden');
}
