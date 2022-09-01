const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum(),
});

module.exports = {
  loginSchema,
};
