import getFlora from '../controllers/FloraControllers.js';
import express from 'express';

const FloraRouter = express.Router();

FloraRouter.get("/flora", getFlora);

export default FloraRouter;