import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

export interface IUsersReposotory {
  create(data: ICreateUserDTO): Promise<void>;
}
