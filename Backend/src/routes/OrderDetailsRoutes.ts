import express, { Router } from "express";
import OrdersDetailsController from "../controllers/OrdersDetailsController";

export default class OrderDetailsRoutes {
  private router: Router = express.Router();
  private ordersDetailsController: OrdersDetailsController =
    new OrdersDetailsController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // GET /api/v1/ordersDetails
    this.router.get("/", this.ordersDetailsController.retrieveAllOrdersDetails);

    // PUT /api/v1/ordersDetails/:id
    this.router.put("/:id", this.ordersDetailsController.updateOrderDetails);

    // DELETE /api/v1/ordersDetails/:id
    this.router.delete("/:id", this.ordersDetailsController.deleteOrderDetails);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
