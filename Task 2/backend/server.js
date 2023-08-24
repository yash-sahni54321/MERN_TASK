const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
dotenv.config({ path: "config.env" });

const bodyParser = require("body-parser");
const database = require("./DbConnect");

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, // Allow cookies and other credentials
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
database();

const user = require("./routes/userRoutes");
app.use(morgan("dev"));
app.use("/api/v1", user);

app.listen(process.env.PORT, () => {
  console.log(`Listeing to port ${process.env.PORT}`);
});
