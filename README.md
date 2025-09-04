# 🏠 Room Image Upload App

A **MERN Stack application** that allows uploading and storing **room images** using **Cloudinary**.  
This project demonstrates a clean **backend (Express + TypeScript)** and **frontend (React + Vite + TypeScript)** setup with secure file uploads via **Multer**.

---

## 📌 Features

- 📤 Upload room images securely to Cloudinary
- ⚡ Backend with **Express + TypeScript**
- 🎨 Frontend with **React + Vite + TypeScript**
- 🗄️ Store files in memory buffer before upload (Multer)
- 🌐 REST API with clean controller-service architecture
- 🔐 Environment variable support with dotenv
- 🚀 Modern developer tooling (ESLint, TypeScript, Nodemon, Vite)

---

## 🛠 Tech Stack

**Frontend:**

- React 19 + Vite
- Axios (API calls)
- TypeScript

**Backend:**

- Express 5 + TypeScript
- Multer (file upload middleware)
- Cloudinary SDK (image storage)
- dotenv, cors

**Other Tools:**

- ESLint + TypeScript ESLint
- Nodemon / ts-node-dev
- Cloudinary for image hosting

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/fawazv/multer-cloudinary.git
cd room-upload-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file inside `backend/`:

```env
PORT=5000
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Run development server:

```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Visit frontend at: [http://localhost:5173](http://localhost:5173)  
Backend runs at: [http://localhost:5000](http://localhost:5000)

---

## 🔗 API Endpoints

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| POST   | `/api/rooms/upload` | Upload a room image |

**Example Request (POST `/api/rooms/upload`)**

- Body: `multipart/form-data` with field `image`
- Response:

```json
{
  "imageUrl": "https://res.cloudinary.com/demo/image/upload/v123456789/rooms/xyz.png"
}
```

---

## 📸 Screenshots

### 🔼 Upload Page

User selects a file and uploads to backend:

```
[ Upload button + Preview ]
```

### ✅ Successful Upload

Uploaded image is displayed with Cloudinary URL.

---

## 🤝 Contributing

1. Fork this repo
2. Create your feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request 🎉

---

## 📜 License

This project is licensed under the **ISC License**.

---

## 🙌 Acknowledgements

- [Cloudinary](https://cloudinary.com/) for image hosting
- [Express](https://expressjs.com/) for backend framework
- [React](https://react.dev/) for frontend UI
- [Vite](https://vitejs.dev/) for blazing fast dev server
- [Multer](https://github.com/expressjs/multer) for file handling

---

Made with ❤️ using MERN + TypeScript
