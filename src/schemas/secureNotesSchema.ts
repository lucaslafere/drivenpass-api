import joi from 'joi';

export const secureNotesSchema = joi.object({
    title: joi.string().max(50).required().trim(),
    note: joi.string().trim().max(1000).required()
})