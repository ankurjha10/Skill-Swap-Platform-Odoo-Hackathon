const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const mobileToggle = document.getElementById('mobileToggle');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// Mobile toggle functionality
mobileToggle.addEventListener('click', () => {
    if (container.classList.contains("right-panel-active")) {
        container.classList.remove("right-panel-active");
        mobileToggle.textContent = "Sign Up";
    } else {
        container.classList.add("right-panel-active");
        mobileToggle.textContent = "Sign In";
    }
});