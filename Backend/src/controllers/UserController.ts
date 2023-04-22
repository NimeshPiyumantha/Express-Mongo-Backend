import { Request, RequestHandler, Response } from "express";

export default class UserController {
  createUser: RequestHandler = async (
    req: Request,
    res: Response
  ): Promise<Response> => {
    // create operation
    return res;
  };

  signIn = async (req: Request, res: Response): Promise<Response> => {
    // sign-in operation
    return res;
  };
}