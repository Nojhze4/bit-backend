import { Router } from "express";
const userRouter = Router();


userRouter.get("/", (req, res) => {
  res.json({ message: "Users endpoint works!" });
});

userRouter.put("/", (req, res) => {
  res.json({ message: "PUT /users endpoint works!" });
});

userRouter.delete("/", (req, res) => {
  res.json({ message: "DELETE /users endpoint works!" });
});


export default userRouter;