import express from 'express';
import dotenv from "dotenv";
dotenv.config();
import connectDb from './lib/connectDB.js';
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
const app = express();

app.use(express.json());

app.use("/users",userRouter);
app.use("/posts",postRouter);
app.use("/comments",commentRouter);


app.listen(3000,()=>{
    connectDb();
    console.log('Server is running on port 3000');
})