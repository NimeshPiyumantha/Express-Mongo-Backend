import express, { Router } from "express";
import UserController from "../controllers/UserController";

export default class UserRoutes {
  private router: Router = express.Router();
  private userController: UserController = new UserController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/user
    this.router.post("/", this.userController.createUser);

    //POST /api/v1/user/sign-in
    this.router.post("/sign-in", this.userController.signIn);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}