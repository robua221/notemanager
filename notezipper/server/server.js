const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./config/db");
const notes = require("./data/notes");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

connectDB();

const app = express();
app.use(cors());

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/api/notes", (req, res) => {
  res.send(notes);
});

app.use("/api/users", userRoutes);
const PORT = process.env.PORT || 5000;
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
