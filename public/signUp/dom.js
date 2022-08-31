const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const signupBtn = document.querySelector("#signup_btn");
const inputs = document.querySelectorAll("input");
const errorMessage = document.querySelector("#message");

signupBtn.addEventListener("click", () => {
  const first_name = firstName.value;
  const last_name = lastName.value;
  const email_user = email.value;
  const password_user = password.value;
  const confirm_password = confirmPassword.value;

  const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (first_name.length === 0) {
    firstName.style.outline = "2px solid #ff5353";
  } else if (last_name.length === 0) {
    lastName.style.outline = "2px solid #ff5353";
  } else if (!regexEmail.test(email_user) || email_user.length === 0) {
    email.style.outline = "2px solid red";
  } else if (password_user.length === 0) {
    password.style.outline = "2px solid red";
  } else if (confirm_password !== password_user) {
    password.style.outline = "2px solid #ff5353";
    confirmPassword.style.outline = "2px solid #ff5353";
  } else {
    fetch("/signup", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        first_name,
        last_name,
        email_user,
        password_user,
        confirm_password,
      }),
    })
      .then((data) => data.json())
      .then((data) => {
        if (data.message === "successful sign up") {
          window.location.href = "../signIn/index.html";
        } else if (data.message === "Email already exists") {
          errorMessage.textContent = data.message;
          email.style.outline = "2px solid red";
        }
      });
  }
});

inputs.forEach((e) => {
  e.addEventListener("input", () => {
    if (e.value.length === 0) {
      e.style.outline = "2px solid red";
    } else {
      e.style.outline = "2px solid green";
    }
  });
});
