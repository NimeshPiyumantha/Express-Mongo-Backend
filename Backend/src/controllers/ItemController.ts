import { RequestHandler, Request, Response } from "express";

export default class ItemController {
  addNewItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  retrieveAllItems: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updateItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deleteItem: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
