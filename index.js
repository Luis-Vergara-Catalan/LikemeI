import "dotenv/config";
import express from 'express';
import { agregarPosts, obtenerPosts } from './db.js';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
});


app.get('/posts', async (req, res) =>{
    const posts = await obtenerPosts();
    res.json(posts);
});

app.post('/posts', async (req, res)=> {
    const {titulo, img, descripcion, like} = req.body;
    await agregarPosts(titulo, img, descripcion, like);
    res.send("Post agregado");
});