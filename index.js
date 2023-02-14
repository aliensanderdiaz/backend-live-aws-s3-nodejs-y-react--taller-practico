const express = require('express')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const photosRoutes = require('./photos.routes')

const app = express()

// app.use(cors({
//     origin: 'http://127.0.0.1:5173'
// }))

app.use(cors())

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './archivos'
}));

app.use(photosRoutes)

app.use(express.static('images'))

app.listen(3000)
console.log('Servidor 3000')