import joi from "joi";

export const wifisSchema = joi.object({
    label: joi.string().trim().required(),
    networkName: joi.string().trim().required(),
    password: joi.string().trim().required(),
});