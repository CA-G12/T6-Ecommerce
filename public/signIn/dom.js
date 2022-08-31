const loginBtn = document.querySelector("#btn");

const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");

loginBtn.addEventListener("click", () => {
  const email = emailInput.value;
  const password = passwordInput.value;

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
      if (result.message === "Success") {
        window.location.href = "../shoppingPage/index.html";
      }
    })
    .catch((err) => console.log(err));
});
