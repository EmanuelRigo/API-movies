import { Router } from "express";

const productsApiRouter = Router();

productsApiRouter.get("/", (req, res, next) => {
  try {
    const message = "PRODUCT FOUND";
    const response = [];
    return res.status(200).json({ response, message });
  } catch (error) {
    return next(error);
  }
});

export default productsApiRouter;
