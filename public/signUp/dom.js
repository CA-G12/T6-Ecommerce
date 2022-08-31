const firstName = document.querySelector("#first_name");
const lastName = document.querySelector("#last_name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm_password");
const signupBtn = document.querySelector("#signup_btn");

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
    }).then((data) => console.log(data.json()));
  }
});
