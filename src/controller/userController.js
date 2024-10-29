import fetch from "node-fetch";
import basicController from "./basicController.js";

export class UserController extends basicController {
  constructor() {
    super(userService);
  }

  register = async (req, res) => {
    const response = await fetch(
      "http://localhost:8080/api/sessions/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      }
    );

    res.render("profile", response);
  };
}
