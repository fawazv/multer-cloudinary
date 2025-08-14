import express from 'express'
import cors from 'cors'
import roomRoutes from './routes/room.routes'

const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/rooms', roomRoutes)

import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
