import express, { Router } from "express";
import OrderController from "../controllers/OrderController";

export default class OrderRoutes {
  private router: Router = express.Router();
  private orderController: OrderController = new OrderController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/order
    this.router.post("/", this.orderController.addNewOrder);

    // GET /api/v1/order
    this.router.get("/", this.orderController.retrieveAllOrders);

    // PUT /api/v1/order/:id
    this.router.put("/:id", this.orderController.updateOrder);

    // DELETE /api/v1/order/:id
    this.router.delete("/:id", this.orderController.deleteOrder);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
