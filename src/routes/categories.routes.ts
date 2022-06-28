import { Router } from "express";

import { Category } from "../model/Category";

const categoriesRoutes = Router();

// Array that will hold our categories
const categories: Category[] = [];

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const category = new Category();

  /**
   * Assign atributes to an object that was created early.
   * This way we dont need to manually assign values to objects,
   * like category.name = name.
   */
  Object.assign(category, {
    name,
    description,
    created_at: new Date(),
  });

  categories.push(category);

  return response.status(201).json(categories);
});

export { categoriesRoutes };
