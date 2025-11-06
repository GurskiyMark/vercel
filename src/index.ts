import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/timer", async (req: Request, res: Response) => {
  try {
    return res.status(200).json({ message: "Таймер работает!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
