import fetch from "node-fetch";

app.get("/register", (req, res) => {
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
