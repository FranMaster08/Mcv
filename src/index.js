require('dotenv').config()
const conn = require('./database/conexion')
const app = require('./app')


conn.sync({force:false})
  .then(() => {
    console.log('Conectado a la base de datos');
    app.listen(process.env.PORT);
    console.log('Servidor escuchando en el puerto 3000');
  })
  .catch(err=>console.log(err));
