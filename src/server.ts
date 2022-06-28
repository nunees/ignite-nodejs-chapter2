import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";
import { specificationsRoutes } from "./routes/specifications.routes";

const app = express();

// Tell express that we will use JSON
app.use(express.json());

// Routes
// Setting the categories argument, all the paths will start with "categories"
app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3333, () => console.log("server is running..."));
