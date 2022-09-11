import joi from "joi";

export const credentialsSchema = joi.object({
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    password: joi.string().required(),
    label: joi.string().required(),
});