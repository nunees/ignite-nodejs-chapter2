import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../error/AppError";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersReposotory } from "../../repositories/IUsersRepository";

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private userRepository: IUsersReposotory
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) throw new AppError("User already exist!");
    const passwordHash = await hash(password, 8);
    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
    });
  }
}
