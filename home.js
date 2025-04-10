

  function openPopup() {
    document.getElementById("customPopupContainer").style.display = "flex";
    document.body.classList.add("popup-open");  
  }
  
  function closePopup() {
    document.getElementById("customPopupContainer").style.display = "none";
    document.body.classList.remove("popup-open"); 
  }
  
  // Form Switching
  function showSignupForm() {
    document.getElementById("customSignupForm").classList.remove("custom-hidden");
    document.getElementById("customLoginForm").classList.add("custom-hidden");
    document.getElementById("customForgotForm").classList.add("custom-hidden");
  }
  
  function showLoginForm() {
    document.getElementById("customLoginForm").classList.remove("custom-hidden");
    document.getElementById("customSignupForm").classList.add("custom-hidden");
    document.getElementById("customForgotForm").classList.add("custom-hidden");
  }
  
  function showForgotForm() {
    document.getElementById("customForgotForm").classList.remove("custom-hidden");
    document.getElementById("customLoginForm").classList.add("custom-hidden");
    document.getElementById("customSignupForm").classList.add("custom-hidden");
  }
  
  // Validation Functions
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function validateLogin() {
    const email = document.getElementById("customLoginEmail").value;
    const password = document.getElementById("customLoginPassword").value;
  
    document.getElementById("customLoginEmailError").textContent = email ? (validateEmail(email) ? "" : "Invalid Email") : "Email is required";
    document.getElementById("customLoginPasswordError").textContent = password ? (password.length >= 8 ? "" : "Password must be at least 8 characters") : "Password is required";
  }
  
  function validateSignup() {
    const email = document.getElementById("customSignupEmail").value;
    const password = document.getElementById("customSignupPassword").value;
    const confirmPassword = document.getElementById("customConfirmPassword").value;
    const termsChecked = document.getElementById("customTermsCheckbox").checked;
  
    document.getElementById("customSignupEmailError").textContent = email ? (validateEmail(email) ? "" : "Invalid Email") : "Email is required";
    document.getElementById("customSignupPasswordError").textContent = password ? (password.length >= 8 ? "" : "Password must be at least 8 characters") : "Password is required";
    document.getElementById("customConfirmPasswordError").textContent = confirmPassword ? (confirmPassword === password ? "" : "Passwords do not match") : "Confirm Password is required";
    document.getElementById("customTermsError").textContent = termsChecked ? "" : "You must accept the Terms & Conditions";
  }
  window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll(".wixui-vector-image");

    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;

        if (position < windowHeight - 100 && position > -100) {
            section.classList.add("show");
        } else {
            section.classList.remove("show");
        }
    });
});
let timeout;
window.addEventListener("scroll", function () {
    let title = document.querySelector("#comp-lziyobea");
    title.classList.add("hide");
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        title.classList.remove("hide");
    }, 500);
});
let slideIndex = 0;
  
function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.style.display = "none";
  });

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; 

  slides[slideIndex - 1].style.display = "block"; 
  setTimeout(showSlides, 3000); 
}

document.addEventListener("DOMContentLoaded", showSlides);


  