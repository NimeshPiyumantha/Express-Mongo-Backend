import express, { Router } from "express";
import PostController from "../controllers/PostController";

export default class PostRoutes {
  private router: Router = express.Router();
  private postController: PostController = new PostController();

  constructor() {
    this.configRoutes();
  }

  private configRoutes = (): void => {
    // POST /api/v1/post
    this.router.post("/", this.postController.createPost);

    // GET /api/v1/post
    this.router.get("/", this.postController.retrieveAllPosts);

    // PUT /api/v1/post/:id
    this.router.put("/:id", this.postController.updatePost);

    // DELETE /api/v1/post/:id
    this.router.delete("/:id", this.postController.deletePost);

    // GET /api/v1/post/category/:id
    this.router.get("/category/:id", this.postController.searchPostByCategory);
  };

  public getRouter = (): Router => {
    return this.router;
  };
}
