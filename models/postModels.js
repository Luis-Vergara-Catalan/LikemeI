import { pool } from '../db.js';
// se consulta por los posts existentes GET
const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    return rows;
};

//se agrega un nuevo posts POST
const agregarPosts = async (titulo, img, descripcion, like) => {
    const values = [titulo, img, descripcion, like];
    const consult = 'INSERT INTO posts VALUES (Default, $1, $2, $3, $4)';
    const result = await pool.query(consult, values);
    return result.rowCount;
};

// actualiza el titulo de posts PUT
const actualizarTitulo = async (id, titulo) => {
    const values = [titulo, id];
    const consult = "UPDATE posts SET titulo = $1 WHERE id = $2";
    const result = await pool.query(consult, values);
    return result;
}

// actualiza el descripcion de posts PUT
const actualizarDescripcion = async (id, descripcion) => {
    const values = [descripcion, id];
    const consult = "UPDATE posts SET descripcion = $1 WHERE id = $2";
    const result = await pool.query(consult, values);
    return result;
}


//eliminar un posts
const borrarPresupuesto = async (id)=>{
    const values = [id];
    const consult = "DELETE FROM posts WHERE id = $1";
    const result = await pool.query(consult, values);
    return result;
}


export {
    obtenerPosts, 
    agregarPosts, 
    actualizarTitulo, 
    borrarPresupuesto,
    actualizarDescripcion
    };