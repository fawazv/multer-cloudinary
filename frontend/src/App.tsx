import { useState } from 'react'
import axios from 'axios'

function App() {
  const [file, setFile] = useState<File | null>(null)
  const [imageUrl, setImageUrl] = useState<string>('')

  const handleUpload = async () => {
    if (!file) return alert('Please select a file')

    const formData = new FormData()
    formData.append('image', file)

    try {
      const res = await axios.post(
        'http://localhost:5000/api/rooms/upload',
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' },
        }
      )
      console.log(res.data.imageUrl)

      setImageUrl(res.data.imageUrl)
    } catch (error) {
      console.error(error)
      alert('Upload failed')
    }
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Room Image Upload</h1>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
      />
      <button onClick={handleUpload}>Upload</button>

      {imageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <img src={imageUrl} alt="Room" style={{ width: '300px' }} />
        </div>
      )}
    </div>
  )
}

export default App
