import express from 'express'
import { RoomController } from '../controllers/room.controller'
import { upload } from '../middleware/upload.middleware'

const router = express.Router()
const roomController = new RoomController()

router.post(
  '/upload',
  upload.single('image'),
  roomController.uploadImage.bind(roomController)
)

export default router
