import express from "express";
import userRouter from "./routes/userRoutes.js";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import path from "node:path";
//import productRouter from "./routes/productRoutes.js";
//import cartRouter from "./routes/cartRoutes.js";
const app = express();
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", userRouter);
//app.use("/products", productRouter);
//app.use("/carts", cartRouter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server run http://localhost:" + PORT);
});
