import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const PORT = process.env.PORT || 5000

app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({message: 'Server running!'})
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})