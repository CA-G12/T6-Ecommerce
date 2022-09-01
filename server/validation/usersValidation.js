const joi = require("joi");

const loginSchema = joi.object({
  email: joi.string().min(7).max(20),
  password: joi.string().alphanum(),
});

module.exports = {
  loginSchema,
};
