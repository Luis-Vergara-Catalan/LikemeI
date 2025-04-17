import "dotenv/config";
import express from 'express';
import cors from 'cors';
import routerPosts from "./routes/PostRoutes.js"

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});


app.use('/posts', routerPosts)