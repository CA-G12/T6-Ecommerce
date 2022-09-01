const bcrypt = require("bcrypt");
const { loginSchema } = require("../validation/usersValidation");
const validate = require("../validation/validator");
const { selectUserEmail } = require("../database/queries");
const GenericError = require("../helpers/GenericError");
const AuthHelpers = require("../helpers/AuthHelpers");

const signIn = (req, res) => {
  const { email, password } = req.body;
  let user;

  validate(loginSchema, { email, password })
    .then(() => selectUserEmail(email))
    .then((data) => {
      user = data.rows[0];

      if (!user) {
        throw new GenericError(
          400,
          "Please double check your password and email"
        );
      }

      return bcrypt.compare(password, user.hashed);
    })
    .then((isPasswordMatched) => {
      if (!isPasswordMatched) {
        throw new GenericError(
          400,
          "Please double check your password and email"
        );
      }

      return AuthHelpers.generateToken({ id: user.id });
    })
    .then((jwt) =>
      res.cookie("token", jwt, { httpOnly: true }).json({ message: "Success" })
    )
    .catch((error) =>
      res
        .status(error.status || 500)
        .json({ error: error.msg || "Something Went Wrong" })
    );
};

module.exports = signIn;
