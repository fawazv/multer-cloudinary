import { Request, Response } from 'express'
import { RoomService } from '../services/room.service'

const roomService = new RoomService()

export class RoomController {
  async uploadImage(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ message: 'No file uploaded' })
      }

      const result = await roomService.uploadRoomImage(req.file.buffer)
      res.status(201).json({ imageUrl: (result as any).secure_url })
    } catch (error) {
      res.status(500).json({ message: 'Image upload failed', error })
    }
  }
}
