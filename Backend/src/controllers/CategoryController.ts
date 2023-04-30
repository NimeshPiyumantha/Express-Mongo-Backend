import { RequestHandler, Request, Response } from "express";
import { Category } from "../models/Category";

export default class CategoryController {
  createCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    try {
      // destructuring assignment
      const { categoryName } = req.body;

      // check whether the relevant category already exists or not
      let category = await Category.findOne({ categoryName: categoryName });
      if (!category) {
        // save category only the category  name is not existing
        category = new Category({ categoryName: categoryName });
        category = await category.save();

        return res
          .status(200)
          .json({ message: "New category added.!", responseData: category });
      } else {
        return res.status(200).json({ message: "Already exists." });
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.status(500).json({ message: error.message });
      } else {
        return res.status(500).json({ message: "Unknown error occured." });
      }
    }
  };

  retrieveAllCategories: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updateCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deleteCategory: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
