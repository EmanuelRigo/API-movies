import { Router } from "express";
import { read, create } from "../../data/mongo/managers/user.manager.js";

const productsApiRouter = Router();

productsApiRouter.post("/", async (req, res, next) => {
  try {
    const message = "PRODUCT CREATED";
    const data = req.body;
    const response = await create(data);
    return res.status(201).json({ response, message });
  } catch {
    return next(error);
  }
});

productsApiRouter.get("/", async (req, res, next) => {
  try {
    const message = "PRODUCT FOUND";
    const response = await read();
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
});

export default productsApiRouter;
