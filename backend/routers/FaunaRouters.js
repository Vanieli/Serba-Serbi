import getFauna from "../controllers/FaunaControllers.js";
import  express from "express";

const FaunaRouter = express.Router();

FaunaRouter.get("/fauna", getFauna);

export default FaunaRouter;