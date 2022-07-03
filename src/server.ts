import express from "express";
import swaggerUi from "swagger-ui-express";

import { router } from "./routes";
import swaggerFile from "./swagger.json";

const app = express();

// Tell express that we will use JSON
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));

// Routes
// Setting the categories argument, all the paths will start with "categories"
app.use(router);

app.listen(3333, () => console.log("server is running..."));
