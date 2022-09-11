import { Request, Response } from "express";
import * as credentialsService from "../services/credentialsService";
import { CredentialsData } from "../types/credentialsType";
import {credentialsSchema} from '../schemas/credentialsSchema'

export async function createCredentials(req: Request, res: Response) {
  const credentials: Omit<CredentialsData, "userId"> = req.body;
  const { error } = credentialsSchema.validate(credentials);
    if (error) throw {type: 'wrong-body-format', message: error.message, code: 400};
  const { userId } = res.locals;
  await credentialsService.insert(credentials, userId);
  return res.status(201).send("Created");
}

export async function getAllCredentials(req: Request, res: Response) {
  const { userId } = res.locals;
  const result = await credentialsService.findAll(userId);
  return res.status(200).send(result);
}
export async function getCredentialById(req: Request, res: Response) {
  const { userId } = res.locals;
  const credentialId = Number(req.params.credentialId);
  const result = await credentialsService.findById(userId, credentialId);

  return res.status(200).send(result);
}
export async function deleteCredential(req: Request, res: Response) {
  const { userId } = res.locals;
  const credentialId = Number(req.params.credentialId);
  await credentialsService.DeleteById(userId, credentialId)
  return res.status(200).send("Deleted");
}
