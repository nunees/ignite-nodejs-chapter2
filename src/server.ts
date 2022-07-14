import "reflect-metadata";
import express from "express";
import swaggerUi from "swagger-ui-express";

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

app.listen(3333, () => console.log("server is running..."));
