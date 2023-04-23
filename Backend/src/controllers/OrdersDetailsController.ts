import { RequestHandler, Request, Response } from "express";

export default class OrdersDetailsController {
  retrieveAllOrdersDetails: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  updateOrderDetails: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };

  deleteOrderDetails: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    return res;
  };
}
