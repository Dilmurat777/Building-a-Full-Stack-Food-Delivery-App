import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())

// // Статические файлы для изображений
// app.use('/images', express.static('uploads'))

//db config
connectDB()

// api endpoints
app.use('/api/food', foodRouter)
app.use('/images', express.static('uploads'))


app.get('/', (req, res) => {
	res.send('Hello world')
})


app.listen(port, () => {
	console.log(`Server Started on http://localhost:${port}`);
})