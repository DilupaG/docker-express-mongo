const express = require("express");
const app = express();
const routes = require("./routes/todoRoutes");
const { connectDB } = require("./db/connect");

const port = 3000;
app.use(express.json());
app.use("/api/v1/todo", routes);

const start = async () => {
  try {
    await connectDB("");
    app.listen(port, () => {
      console.log(`Server is up and running on port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start()