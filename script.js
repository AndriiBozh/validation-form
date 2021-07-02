const confirmationForm = document.getElementById("confirmation-form");
const confirmationErrors = document.getElementById("confirmation-errors");
const createAccountBtn = document.getElementById("create-account-btn");
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const inputConfirmPassword = document.getElementById("confirm-password");
const acceptTermsCheckbox = document.getElementById("accept-terms");
const usernameError = document.getElementById("username-error");
const passwordLengthError = document.getElementById("password-length-error");
const confirmPasswordError = document.getElementById("confirm-password-error");
const acceptTermsError = document.getElementById("terms-checkbox-error");
const welcomeWindow = document.getElementById("welcome-window");
const userName = document.getElementById("insert-username");
const closeWelcomeWindowBtn = document.getElementById("close-welcome-window");
const testUsernamePattern = /^[a-zA-Z]/;

createAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const passwordLength = inputPassword.value.length;
  const password = inputPassword.value;
  const confirmPassword = inputConfirmPassword.value;
  const checkboxChecked = acceptTermsCheckbox.checked;

  //   check if username starts with a letter
  const usernameStartsWithLetter = testUsernamePattern.test(
    inputUsername.value
  );

  if (!usernameStartsWithLetter) {
    usernameError.classList.remove("hide-error");
  } else {
    usernameError.classList.add("hide-error");
  }

  if (passwordLength < 8) {
    passwordLengthError.classList.remove("hide-error");
  } else {
    passwordLengthError.classList.add("hide-error");
  }

  if (password !== confirmPassword) {
    confirmPasswordError.classList.remove("hide-error");
  } else {
    confirmPasswordError.classList.add("hide-error");
  }

  if (!checkboxChecked) {
    acceptTermsError.classList.remove("hide-error");
  } else {
    acceptTermsError.classList.add("hide-error");
  }

  if (
    usernameStartsWithLetter &&
    passwordLength >= 8 &&
    password === confirmPassword &&
    checkboxChecked
  ) {
    confirmationErrors.classList.remove("show");
    welcomeWindow.classList.add("show");
    userName.innerHTML = inputUsername.value;
  } else {
    confirmationErrors.classList.add("show");
  }
});

closeWelcomeWindowBtn.addEventListener("click", () => {
  welcomeWindow.classList.remove("show");
  //clear all input fields and uncheck checkbox
  inputUsername.value = "";
  inputPassword.value = "";
  inputConfirmPassword.value = "";
  acceptTermsCheckbox.checked = false;
});
