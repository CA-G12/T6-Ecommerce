const bcrypt = require("bcrypt");
const joi = require("joi");
const jwt = require("jsonwebtoken");
const { selectUserEmail } = require("../database/queries");

const { SECRET_KEY } = process.env;

const signIn = (req, res) => {
  const { email, password } = req.body;
  const schema = joi.object({
    email: joi.string().min(7).max(20),
    password: joi.string().alphanum(),
  });

  const result = schema.validate(req.body);
  if (result.error) res.sendStatus(401);

  selectUserEmail(email).then((data) => {
    if (data.rows.length !== 0) {
      const { id, hashed } = data.rows[0];
      bcrypt.compare(password, hashed, (err, data) => {
        if (err) console.log(err);
        if (data) {
          const token = jwt.sign({ id }, SECRET_KEY);
          res
            .cookie("token", token, { httpOnly: true })
            .json({ message: "Success" });
        }
      });
    } else {
      res.status(401).json({ message: "invalid Input" });
    }
  });
};

module.exports = signIn;
