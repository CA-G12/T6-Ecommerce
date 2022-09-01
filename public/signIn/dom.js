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
      if (result.error) {
        const errorPlaceholder = document.getElementById("errorPlaceholder");
        errorPlaceholder.textContent = result.error;
      } else {
        window.location.href = "/shoppingPage";
      }
    })
    .catch((err) => {
      const errorPlaceholder = document.getElementById("errorPlaceholder");
      errorPlaceholder.textContent ='Something went wrong, please try again later';
    });
});
