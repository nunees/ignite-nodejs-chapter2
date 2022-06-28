import express from "express";

import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

// Tell express that we will use JSON
app.use(express.json());

// Setting the categories argument, all the paths will start with "categories"
app.use("/categories", categoriesRoutes);

app.listen(3333, () => console.log("server is running..."));
