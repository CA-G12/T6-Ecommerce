const GenericError = require("../helpers/GenericError");

const validate = (schema, data) =>
  schema.validateAsync(data).catch((error) => {
    console.log(error)
    throw new GenericError(400, error.details[0].message);
  });

module.exports = validate;
