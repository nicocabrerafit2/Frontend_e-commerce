import { Router } from "express";
import fetch from "node-fetch";
const app = Router();

app.get("/", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  const response = await fetch("http://localhost:3001/users/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });
  const data = await response.json();
  res.render("registerSuccess", { data });
});
export default app;
