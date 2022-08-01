import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import swaggerUi from "swagger-ui-express";

import "express-async-errors";
import { AppError } from "./error/AppError";
import { router } from "./routes";
import swaggerFile from "./swagger.json";

import "./database";
import "./shared/container";

const app = express();

// Tell express that we will use JSON
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
// Setting the categories argument, all the paths will start with "categories"
app.use(router);

app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({ message: err.message });
    }
    return response.status(500).json({
      status: "error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333, () => console.log("server is running..."));
