require('dotenv').config()
const conn = require('./database/conexion')
const app = require('./app')
conn.sync({ force: true }).then(() => {
    app.listen(process.env.PORT,
        () => console.log(`Server is running in Port ${process.env.PORT}`))
})
