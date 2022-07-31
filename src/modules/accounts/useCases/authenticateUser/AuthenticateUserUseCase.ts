import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUsersReposotory } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
export class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersReposotory
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // Verify email
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    // Verify passord
    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    // Generate token
    const token = sign({}, "59f94aebd416b70249af8baa0422df3e", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}
