const Joi = require("@hapi/joi");

const schema = Joi.object({
    name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    phone: Joi.number()
        .required(),
    date_Of_Birth: Joi.date()
        .required()
});

module.exports = schema;