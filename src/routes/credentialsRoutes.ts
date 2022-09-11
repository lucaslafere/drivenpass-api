import { Router } from 'express';
import validateToken from '../middlewares/validateTokenMiddleware';
import * as credentialsController from '../controllers/credentialsController';

const credentialsRouter = Router();
credentialsRouter.post("/credentials/", validateToken, credentialsController.createCredentials);
credentialsRouter.get("/credentials/", validateToken, credentialsController.getAllCredentials);
credentialsRouter.get("/credentials/:credentialId", validateToken, credentialsController.getCredentialById);
credentialsRouter.delete("/credentials/:credentialId", validateToken, credentialsController.deleteCredential);
export default credentialsRouter;