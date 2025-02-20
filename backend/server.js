import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import contactRouter from './routes/contactRoutes.js'
import errorHandler from './middleware/errorHandler.js'
import connectToDB from './connection/dbConnection.js'

dotenv.config()

connectToDB()

const app = express()

const PORT = process.env.PORT || 5000


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Server running!' })
})

app.use('/api/contacts', contactRouter)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})