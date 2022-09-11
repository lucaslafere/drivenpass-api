import { Request, Response } from "express";
import * as wifisService from "../services/wifisService";
import { WifisData } from "../types/wifisType";
import { wifisSchema } from "../schemas/wifisSchema";

export async function createWifi(req: Request, res: Response) {
  const wifiDetails: Omit<WifisData, "userId"> = req.body;
  const { error } = wifisSchema.validate(wifiDetails);
  if (error)
    throw { type: "wrong-body-format", message: error.message, code: 400 };
  const { userId } = res.locals;
  await wifisService.insert(wifiDetails, userId);
  return res.status(201).send("Created");
}
export async function getAllWifis(req: Request, res: Response) {
  const { userId } = res.locals;
  const result = await wifisService.findAll(userId);
  return res.status(200).send(result);
}
export async function getWifiById(req: Request, res: Response) {
  const { userId } = res.locals;
  const wifiId = Number(req.params.wifiId);
  const result = await wifisService.findById(userId, wifiId);
  return res.status(200).send(result);
}
export async function deleteWifi(req: Request, res: Response) {
  const { userId } = res.locals;
  const wifiId = Number(req.params.wifiId);
  const result = await wifisService.deleteById(userId, wifiId);
  return res.status(200).send(result);
}
