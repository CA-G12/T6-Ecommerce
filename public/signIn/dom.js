const loginBtn = document.querySelector("#btn");

const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

let email = emailInput.value;
let password = passwordInput.value;

loginBtn.addEventListener("click", () => {
  email = emailInput.value;
  password = passwordInput.value;

  fetch("/signin", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((data) => data.json())
    .then((result) => {
      console.log(document.cookie)
      if (result.message === "Success" || result.message === "have-access") {
        window.location.href = "/products";
      }
    })
    .catch((err) => console.log(err));
});
