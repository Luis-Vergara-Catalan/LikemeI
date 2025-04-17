import { actualizarDescripcion, actualizarTitulo, agregarPosts, borrarPresupuesto, obtenerPosts,  } from "../models/postModels.js";

//Función para ver un post
const getAllPosts = async (req, res) =>{
    const posts = await obtenerPosts();
    res.status(200).json(posts);
}

// Función para crear un post
const createPosts = async (req, res)=> {
    const {titulo, img, descripcion, like} = req.body;
    
    try {
        const postsInsertados = await agregarPosts(titulo, img, descripcion, like);
    
        if (postsInsertados > 0)
            res.status(201).json({message: "Posts insertado con éxito"});
        else 
        res.status(400).send({message:"Error en postear"})
    } catch (error) {
        if (error.code ==='500'){
            res.status(500).json({mensaje: "Tabla no encontrada"});
        } else{
        res.status(500).json(error);
        }
    };
}

//función para actulizar el titulo de un post
const updateTitulo = async (req, res) => {
    const { id } = req.params;
    const {titulo} = req.query;
   try {
     const resultado = await actualizarTitulo(id, titulo);
 
     if (resultado.rowCount > 0)
         res.status(206).json({message: "Titulo actualizado con éxito"});
     else
     res.status(400).send({message:"Error en actualizar el post"});
   } catch (error) {
        if (error.code ==='500'){
            res.status(500).json({mensaje: "Tabla no encontrada"});
        } else{
        res.status(500).json(error);
        }
   }
}


//función para actulizar descripcion de un post
const updateDescripcion = async (req, res) => {
    const { id } = req.params;
    const {descripcion} = req.query;
   try {
     const resultado = await actualizarDescripcion(id, descripcion);
 
     if (resultado.rowCount > 0)
         res.status(206).json({message: "Descripcion actualizado con éxito"});
     else
     res.status(400).send({message:"Error en actualizar el post"});
   } catch (error) {
        if (error.code ==='500'){
            res.status(500).json({mensaje: "Tabla no encontrada"});
        } else{
        res.status(500).json(error);
        }
   }
}

//función para eliminar un post
const deletePost = async (req, res) =>{
    const {id} = req.params;
    try {
        const resultado = await borrarPresupuesto(id);
    
        if (resultado.rowCount > 0)
            res.status(206).json({message: "Post eliminado con éxito"});
        else
        res.status(400).send({message:"Error en eliminar post"});
    } catch (error) {
        if (error.code ==='500'){
            res.status(500).json({mensaje: "Tabla no encontrada"});
        } else{
        res.status(500).json(error);
        }
    }
};


export {
    getAllPosts, 
    createPosts, 
    updateTitulo, 
    deletePost,
    updateDescripcion
    };