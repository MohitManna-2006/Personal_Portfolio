import express from "express";
import cors from "cors";

const app = express();
const PORT = 6500;

app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
