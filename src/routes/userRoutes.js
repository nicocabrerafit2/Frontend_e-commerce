import { Router } from "express";
import fetch from "node-fetch";
const app = Router();

app.get("/", (req, res) => {
  res.render("register");
});
app.post("/register", async (req, res) => {
  const response = await fetch("http://localhost:8080/api/sessions/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(req.body),
  });

  res.render("profile", response);
});
export default app;
