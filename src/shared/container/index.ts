import { container } from "tsyringe";

import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersReposotory } from "../../modules/accounts/repositories/IUsersRepository";
import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/cars/repositories/implementations/SpecificationRepository";
import { ISpecificationsRepository } from "../../modules/cars/repositories/ISpecificationsRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  // Name of container
  "CategoriesRepository",
  // Class we want to call
  CategoriesRepository
);

container.registerSingleton<ISpecificationsRepository>(
  // Name of container
  "SpecificationsRepository",
  // Class we want to call
  SpecificationsRepository
);

container.registerSingleton<IUsersReposotory>(
  "UsersRepository",
  UsersRepository
);
