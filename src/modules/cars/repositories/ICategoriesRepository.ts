import { Category } from "../entities/Category";

// DTO - Data trasnfer object
interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Contract
interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
