const bcrypt = require("bcrypt");
const joi = require("joi");
const { postSignupQuery } = require("../database/queries");

const postSignup = (req, res) => {
  const { first_name, last_name, email_user, password_user, confirm_password } =
    req.body;
  const schema = joi.object({
    email_user: joi.string().email().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    password_user: joi.string().min(7).max(20).required(),
    confirm_password: joi.ref("password_user"),
  });
  schema
    .validateAsync(req.body)
    .then((data) => data)
    .catch((err) => console.log(err, "schema error"));
  bcrypt
    .hash(password_user, 10)
    .then((hashed) =>
      postSignupQuery([first_name, last_name, email_user, hashed])
    )
    .then((dd) => {
      res.send({ message: "successful sign up" });
    })
    .catch((err) => res.json({ message: err.message }));
};

module.exports = postSignup;
