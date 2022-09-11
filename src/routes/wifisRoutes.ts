import { Router } from 'express';
import validateToken from '../middlewares/validateTokenMiddleware';
import * as wifisController from '../controllers/wifisController';

const wifisRouter = Router();
wifisRouter.post("/wifis", validateToken, wifisController.createWifi)
wifisRouter.get("/wifis", validateToken, wifisController.getAllWifis)
wifisRouter.get("/wifis/:wifiId", validateToken, wifisController.getWifiById)
wifisRouter.delete("/wifis/:wifiId", validateToken, wifisController.deleteWifi)
export default wifisRouter;