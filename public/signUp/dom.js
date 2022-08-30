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
  const password_user = `${password.value}`;
  const confirm_password = confirmPassword.value;

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
});
