require("dotenv").config();
const express = require("express");
const cors = require("cors");
const userRouter = require("./router/auth-router");
const contectRouter = require("./router/contect-router");
const servicesRouter = require("./router/services-router");
const adminRouter = require("./router/admin-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const app = express();

// const URI = "";
const PORT = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/contect", contectRouter);
app.use("/api/data", servicesRouter);
app.use("/api/admin", adminRouter);

app.use(errorMiddleware);
connectDB(process.env.MONGO_URI).then(() => {
  console.log(`Database is connected`);
  app.listen(PORT, () => console.log(`server is running on ${PORT}`));
});
