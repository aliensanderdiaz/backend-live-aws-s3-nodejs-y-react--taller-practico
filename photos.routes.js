const { Router } = require('express')
const { uploadFile, readFile } = require('./s3')

const router = Router()

router.get('/', (req, res) => res.send('Welcome'))

router.post('/posts/upload', async (req, res) => {
    console.log({'req.files': req.files})
    const result = await uploadFile(req.files['image'])
    console.log({ result })
    res.send('Archivo Subido')
})

router.get('/archivo/:fileName', async (req, res) => {
    try {
        const result = await readFile(req.params.fileName)
        console.log({ result })
        res.send('Tu Archivo se ha descargado')
    } catch (error) {
        res.send(error.message)
    }
})

module.exports = router
