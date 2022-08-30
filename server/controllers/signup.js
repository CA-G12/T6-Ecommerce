const bcrypt = require("bcrypt");
const joi = require("joi");
const { postSignupQuery } = require("../database/queries");

const postSignup = (req, res) => {
  const { first_name, last_name, email_user, password_user, confirm_password } =
    req.body;
  const schema = joi.object({
    email: joi.string().email().required(),
    first_name: joi.string().required(),
    last_name: joi.string().required(),
    password_user: joi.string().min(7).max(20).required(),
    confirm_password: joi.ref("password_user"),
  });
  schema
    .validateAsync(req.body, { abortEarly: false })
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
  bcrypt
    .hash(password_user, 10)
    .then((hashed) =>
      postSignupQuery([first_name, last_name, email_user, hashed])
    )
    .catch((err) => err);
};

module.exports = postSignup;
