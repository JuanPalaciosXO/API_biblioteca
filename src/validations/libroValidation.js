import Joi from "joi";

export const libroSchema = Joi.object({
  titulo: Joi.string()
    .min(2)
    .max(100)
    .required()
    .messages({
      "string.empty": "El título no puede estar vacío",
      "string.min": "El título debe tener al menos 2 caracteres",
      "any.required": "El campo 'título' es obligatorio"
    }),

  genero: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "El género no puede estar vacío",
      "string.min": "El género debe tener al menos 3 caracteres",
      "any.required": "El campo 'género' es obligatorio"
    }),

  anioPublicacion: Joi.number()
    .integer()
    .min(1500)
    .max(new Date().getFullYear())
    .required()
    .messages({
      "number.base": "El año de publicación debe ser un número",
      "number.min": "El año de publicación no puede ser menor a 1500",
      "number.max": "El año de publicación no puede ser mayor al actual",
      "any.required": "El campo 'año de publicación' es obligatorio"
    }),

  autor: Joi.string()
    .required()
    .messages({
      "string.empty": "El autor no puede estar vacío",
      "any.required": "El campo 'autor' es obligatorio"
    })
});
 export const libroUpdateSchema = Joi.object({
  titulo: Joi.string()
    .min(2)
    .max(100)
    .messages({
      "string.empty": "El título no puede estar vacío",
      "string.min": "El título debe tener al menos 2 caracteres",
    }),

  genero: Joi.string()
    .min(3)
    .max(50)
    .messages({
      "string.empty": "El género no puede estar vacío",
      "string.min": "El género debe tener al menos 3 caracteres",
    }),

  anioPublicacion: Joi.number()
    .integer()
    .min(1500)
    .max(new Date().getFullYear())
    .messages({
      "number.base": "El año de publicación debe ser un número",
      "number.min": "El año de publicación no puede ser menor a 1500",
      "number.max": "El año de publicación no puede ser mayor al actual",
    }),

  autor: Joi.string().messages({
    "string.empty": "El autor no puede estar vacío",
  }),
});