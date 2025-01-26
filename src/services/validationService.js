// src/services/validationService.js
const Joi = require('joi');

exports.validateCreateConversation = (data) => {
  const schema = Joi.object({
    payload: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      messages: Joi.array().items(Joi.object()).required(),
    }).required(),
  });

  return schema.validate(data);
};
