import express, { Router } from "express";
import ItemController from "../controllers/ItemController";

export default class ItemRoutes {
  private router: Router = express.Router();
  private itemController: ItemController = new ItemController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/post
    this.router.post("/", this.itemController.addNewItem);

    // GET /api/v1/post
    this.router.get("/", this.itemController.retrieveAllItems);

    // PUT /api/v1/post/:code
    this.router.put("/:code", this.itemController.updateItem);

    // DELETE /api/v1/post/:code
    this.router.delete("/:code", this.itemController.deleteItem);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
