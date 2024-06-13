import getKeajaibanDunia from '../controllers/KeajaibanDuniaControllers.js';
import express from 'express';

const KeajaibanDuniaRouter = express.Router();

KeajaibanDuniaRouter.get("/keajaibandunia", getKeajaibanDunia);

export default KeajaibanDuniaRouter;