import express from "express";

import { router } from "./routes";

const app = express();

// Tell express that we will use JSON
app.use(express.json());

// Routes
// Setting the categories argument, all the paths will start with "categories"
app.use(router);

app.listen(3333, () => console.log("server is running..."));
