import pkg from 'pg';  // Importa el módulo completo

// Conexión a la base de datos
const pool = new pkg.Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    allowExitOnIdle: true,
});

// se consulta por los post existentes GET
const obtenerPosts = async () => {
    const { rows } = await pool.query("SELECT * FROM posts");
    console.log(rows);
    return rows;
};


//se agrega un nuevo post POST
const agregarPosts = async (titulo, img, descripcion, like) => {
    const consulta = 'INSERT INTO posts VALUES (Default, $1, $2, $3, $4)';
    const values = [titulo, img, descripcion, like];
    const result = await pool.query(consulta, values);
    console.log("Posts creado");
    console.log(result);
};





export {agregarPosts, obtenerPosts};