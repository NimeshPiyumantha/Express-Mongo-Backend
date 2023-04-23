import express, { Router } from "express";
import CustomerController from "../controllers/CustomerController";

export default class CustomerRoutes {
  private router: Router = express.Router();
  private customerController: CustomerController = new CustomerController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/customer
    this.router.post("/", this.customerController.addNewCustomer);

    // GET /api/v1/customer
    this.router.get("/", this.customerController.retrieveAllCustomers);

    // PUT /api/v1/customer/:id
    this.router.put("/:id", this.customerController.updateCustomer);

    // DELETE /api/v1/customer/:id
    this.router.delete("/:id", this.customerController.deleteCustomer);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
