import Joi from "joi";

// Esquema de validación para autores
export const autorSchema = Joi.object({
  nombres: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "El nombre no puede estar vacío",
      "string.min": "El nombre debe tener al menos 2 caracteres",
      "any.required": "El campo 'nombres' es obligatorio"
    }),
  
  apellidos: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      "string.empty": "El apellido no puede estar vacío",
      "string.min": "El apellido debe tener al menos 2 caracteres",
      "any.required": "El campo 'apellidos' es obligatorio"
    }),
  
  nacionalidad: Joi.string()
    .min(3)
    .max(50)
    .required()
    .messages({
      "string.empty": "La nacionalidad no puede estar vacía",
      "any.required": "El campo 'nacionalidad' es obligatorio"
    })
});
