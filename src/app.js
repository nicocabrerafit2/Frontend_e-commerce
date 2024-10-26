import express from "express";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
import cartRouter from "./routes/cartRoutes.js";

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use("/users", userRouter);
app.use("/products", productRouter);
app.use("/carts", cartRouter);

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
  console.log("Server run port: ", PORT);
});
