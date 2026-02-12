const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
};
loginBtn.onclick = () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
};
signupLink.onclick = () => {
  signupBtn.click();
  return false;
};


///pass strength
const passwordInput = document.querySelector(".signup input[placeholder='Password']");
const strengthMessage = document.createElement("p");
passwordInput.parentElement.appendChild(strengthMessage);

passwordInput.addEventListener("input", function() {
    const value = passwordInput.value;
    let strength = "Weak";
    if (value.length > 8 && /[A-Z]/.test(value) && /[0-9]/.test(value)) {
        strength = "Medium";
    }
    if (value.length > 12 && /[^A-Za-z0-9]/.test(value)) {
        strength = "Strong";
    }
    strengthMessage.textContent = `Password strength: ${strength}`;
    strengthMessage.style.color = strength === "Strong" ? "green" : (strength === "Medium" ? "orange" : "red");
});
//

///