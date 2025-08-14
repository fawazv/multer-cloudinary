import cloudinary from '../config/cloudinary'

export class RoomService {
  async uploadRoomImage(fileBuffer: Buffer) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ folder: 'rooms' }, (error, result) => {
          if (error) return reject(error)
          resolve(result)
        })
        .end(fileBuffer)
    })
  }
}
