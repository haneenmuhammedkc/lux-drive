# 🚗 LuxDrive – Car Rental Management System

LuxDrive is a full-stack MERN application built to practice and understand backend architecture, RESTful APIs, and CRUD operations.

The project includes both **User Interface** and **Admin Dashboard** with complete Car and Booking management.

---

## 🔥 Features

### 👤 User Side
- View all available cars
- Filter cars by brand and fuel type
- View detailed car information
- Create booking requests

### 🛠 Admin Side
- Dashboard overview
- Add new cars
- Update car details
- Delete cars
- Approve or cancel bookings
- Manage all bookings

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🧠 Key Concepts Practiced

- RESTful API design
- Full CRUD operations
- MVC architecture
- State management in React
- Conditional rendering
- Filtering and UI logic
- Error handling
- Protected route structure (Admin panel)

---

## 📁 Project Structure

LUX-DRIVE/
│
├── backend/
│ ├── config/
│ │ └── db.js
│ │
│ ├── controllers/
│ │ ├── carController.js
│ │ └── bookingController.js
│ │
│ ├── models/
│ │ ├── Car.js
│ │ └── Booking.js
│ │
│ ├── routes/
│ │ ├── carRoutes.js
│ │ └── bookingRoutes.js
│ │
│ ├── server.js
│ ├── package.json
│ └── .env
│
├── frontend/
│ ├── public/
│ └── src/
│ ├── assets/
│ ├── components/
│ │ ├── CarCard.jsx
│ │ ├── Navbar.jsx
│ │ ├── Footer.jsx
│ │ ├── StatusBadge.jsx
│ │ └── ...
│ │
│ ├── modals/
│ │ ├── AddCarModal.jsx
│ │ ├── EditCarModal.jsx
│ │ └── BookingModal.jsx
│ │
│ ├── pages/
│ │ ├── HomePage.jsx
│ │ ├── CarsPage.jsx
│ │ ├── CarDetails.jsx
│ │ ├── AdminDashboard.jsx
│ │ ├── AdminCars.jsx
│ │ └── AdminBookings.jsx
│ │
│ ├── App.jsx
│ └── main.jsx
│
├── .gitignore
└── README.md