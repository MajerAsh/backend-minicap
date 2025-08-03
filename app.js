import morgan from "morgan";
import express from "express";
const app = express();
export default app;

import departmentsRouter from "#api/departments";
import facultyRouter from "#api/faculty";
import usersRouter from "#api/users";
import getUserFromToken from "#middleware/getUserFromToken";

app.use(express.json());
app.use(morgan("dev"));

app.use(getUserFromToken);

app.use("/api/users", usersRouter);
app.use("/api/departments", departmentsRouter);
app.use("/api/faculty", facultyRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Sorry! Something went wrong.");
});
