import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Get authorization token from request
  const authHeader = request.headers.authorization;
  if (!authHeader) throw new Error("Token missing!");

  // Bearer ac87b9f97d56
  // [0] - Bearer
  // [1] - ac87b9f97d56
  const [, token] = authHeader.split(" ");

  // If there is an error it launch a exception
  try {
    const { sub: user_id } = verify(
      token,
      "59f94aebd416b70249af8baa0422df3e"
    ) as IPayload;
    const userRepository = new UsersRepository();
    const user = userRepository.findById(user_id);
    if (!user) throw new Error("User does not exists!");
    next();
  } catch {
    throw new Error("Invalid token!");
  }
}
