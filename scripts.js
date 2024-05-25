document.addEventListener("DOMContentLoaded", () => {
  const signupForm = document.getElementById("signup-form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const successMessage = document.getElementById("success-message");

  emailInput.addEventListener("input", validateEmail);
  passwordInput.addEventListener("input", validatePassword);

  signupForm.addEventListener("submit", handleSubmit);

  function validateEmail() {
    const emailValue = emailInput.value;
    if (
      emailValue.length > 3 &&
      emailValue.includes("@") &&
      emailValue.includes(".")
    ) {
      emailError.textContent = "";
      emailInput.style.border = "1px solid green";
      emailInput.style.outline = "none";
      checkFormValidity();
    } else {
      emailError.textContent = "Please enter a valid email address";
      successMessage.style.display = "none";
      emailInput.style.border = "1px solid red";
      emailInput.style.outline = "none";
    }
  }

  function validatePassword() {
    const passwordValue = passwordInput.value;
    if (passwordValue.length >= 8) {
      passwordError.textContent = "";
      passwordInput.style.border = "1px solid green";
      passwordInput.style.outline = "none";
      checkFormValidity();
    } else {
      passwordError.textContent = "Please must be at least 8 characters";
      successMessage.style.display = "none";
      passwordInput.style.border = "1px solid red";
      passwordInput.style.outline = "none";
    }
  }

  function checkFormValidity() {
    if (!emailError.textContent && !passwordError.textContent) {
      successMessage.style.display = "block";
      successMessage.textContent = "All good to go!";
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!emailError.textContent && !passwordError.textContent) {
      if (confirm("Do you want to submit this form?")) {
        alert("Successful Signup!");
        signupForm.reset();
        successMessage.style.display = "none";
      }
    }
  }
});
