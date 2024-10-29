class basicController {
  constructor(service) {
    this.service = service;
  }
  fetch = async (data, res) => {
    const response = await fetch(data.url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data.body),
    });

    res.render(data.view, response);
  };
}

export default basicController;
