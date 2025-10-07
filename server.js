import express from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
let app = express()
const __dirname = import.meta.dirname

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', {title: 'FLuX Inc.'})
})

app.listen(process.env.PORT, () => {
  console.log(`THREE.js Starter listening on port ${process.env.PORT}`)
})