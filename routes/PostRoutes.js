import { Router } from 'express';
import { createPosts, deletePost, getAllPosts, updateTitulo, updateDescripcion } from '../controllers/postsControllers.js';

const routes = Router();

routes.get('/', getAllPosts); //ver post
routes.post('/', createPosts); //crear post
routes.put('/:id', updateTitulo); //actualizar titulo
routes.put('/:id', updateDescripcion); // actualizar descripcion modificar ruta por choque con titulo
routes.delete('/:id', deletePost) //eliminar post

export default routes;