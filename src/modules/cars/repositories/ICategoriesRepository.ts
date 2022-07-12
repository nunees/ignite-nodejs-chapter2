import { Category } from "../entities/Category";

// DTO - Data trasnfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Contract
interface ICategoriesRepository {
  findByName(name: string): Promise<Category>;
  list(): Promise<Category[]>;
  create({ name, description }: ICreateCategoryDTO): Promise<void>;
}

export { ICategoriesRepository, ICreateCategoryDTO };
