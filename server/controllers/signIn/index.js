const jwt = require("jsonwebtoken");
const query = require("../../database/queries");

const { SECRET_KEY } = process.env;
const signIn = (req, res) => {
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  query
    .selectUserEmail(userEmail)
    .then((data) => {
      console.log("data => ", data);
      const user = data.rows[0];

      if (!user) {
        return res
          .status(401)
          .json({ error: "Email or password is incorrect" });
      }

      if (userPassword !== user.password) {
        return res
          .status(401)
          .json({ error: "Email or password is incorrect" });
      }

      jwt.sign({ id: user.id }, SECRET_KEY, (err, decode) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Something went wrong" });
        }

        return res
          .cookie("token", decode, { httpOnly: true, secure: true })
          .json({ message: "success" });
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: "Something went wrong" });
    });
};

module.exports = signIn;
