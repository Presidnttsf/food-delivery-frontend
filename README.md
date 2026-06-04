# 🍔 Food Delivery Order Management System

A full-stack Food Delivery Order Management application built as part of a Senior Full Stack Developer Assessment.

The application allows users to browse menu items, add products to a cart, place food orders, and track order status in real time through a modern and responsive user interface.

---

## 👨‍💻 Author

**Tauseef Akhtar**

* Full Stack Developer
* React.js | Node.js | Express.js | MongoDB
* GitHub: [Add your GitHub profile link]
* LinkedIn: [Add your LinkedIn profile link]

---

# 🚀 Project Overview

This project simulates a real-world food delivery platform similar to Zomato or Swiggy.

Users can:

* View available food items
* Search menu items
* Add items to cart
* Manage item quantities
* Place orders
* Enter delivery information
* Track order status
* Receive simulated real-time order updates

---

# 🏗️ Tech Stack

## Frontend

* React.js
* Vite
* React Router DOM
* Axios
* Context API
* CSS3

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Deployment

### Frontend

* Vercel / Netlify

### Backend

* Render

---

# ✨ Features

## Menu Management

* Fetch menu items from API
* Responsive food card layout
* Food image display
* Search functionality
* Debounced search optimization
* Loading states
* Error handling

## Cart Management

* Add items to cart
* Increase quantity
* Decrease quantity
* Remove items
* Cart summary
* Total amount calculation

## Checkout

* Customer Name
* Delivery Address
* Phone Number
* Form validation
* Order placement

## Order Tracking

* Order ID generation
* Order status timeline
* Real-time status polling
* Automatic status progression

Statuses:

1. ORDER_RECEIVED
2. PREPARING
3. OUT_FOR_DELIVERY
4. DELIVERED

## UI/UX

* Modern card-based design
* Mobile responsive layout
* Smooth hover effects
* Food delivery inspired theme
* Skeleton loading for images
* Reusable component architecture

---

# 📂 Frontend Folder Structure

```text
src/
│
├── assets/
│
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── FoodCard/
│   ├── CartItem/
│   ├── Footer/
│   ├── Loader/
│   ├── OrderTimeline/
│   └── ChatWidget/
│
├── context/
│   └── CartContext.jsx
│
├── hooks/
│   └── useDebounce.js
│
├── pages/
│   ├── MenuPage/
│   ├── CartPage/
│   ├── CheckoutPage/
│   └── OrderStatusPage/
│
├── services/
│   ├── api.js
│   ├── menuService.js
│   └── orderService.js
│
├── styles/
│
├── App.jsx
└── main.jsx
```

---

# 🔌 API Endpoints

## Menu

### Get Menu

```http
GET /menu
```

Returns all available menu items.

---

## Orders

### Create Order

```http
POST /orders
```

Request Body:

```json
{
  "customerName": "John Doe",
  "address": "Nagpur",
  "phone": "9876543210",
  "items": [
    {
      "menuItemId": "123",
      "quantity": 2
    }
  ]
}
```

---

### Get Order By ID

```http
GET /orders/:id
```

---

### Update Order Status

```http
PUT /orders/:id/status
```

Request Body:

```json
{
  "status": "PREPARING"
}
```

---

# ⚡ Real-Time Order Simulation

To simulate real-time delivery tracking, the backend automatically updates order status using scheduled transitions:

```text
ORDER_RECEIVED
      ↓
PREPARING
      ↓
OUT_FOR_DELIVERY
      ↓
DELIVERED
```

The frontend polls the API every few seconds and updates the timeline automatically.

---

# 🧠 State Management

The application uses React Context API.

Cart features:

* Add item
* Remove item
* Update quantity
* Clear cart after successful order placement

---

# 🔍 Search Optimization

Implemented a custom debounce hook:

```javascript
useDebounce(search, 300);
```

Benefits:

* Reduced unnecessary re-renders
* Better user experience
* Improved performance

---

# 🧪 Testing Strategy

The project follows Test-Driven Development principles.

Areas covered:

* API endpoint validation
* Order creation
* Input validation
* Order status updates
* Cart functionality
* Component rendering

Suggested tools:

* Jest
* React Testing Library
* Supertest

---

# 🛠️ Installation

## Clone Repository

```bash
git clone <repository-url>
```

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

Runs on:

```text
http://localhost:5000
```

---

# 🌐 Deployment

## Frontend

Deploy using:

* Vercel
* Netlify

## Backend

Deploy using:

* Render

---

# 📈 Future Improvements

* JWT Authentication
* User Accounts
* Payment Gateway Integration
* WebSocket Real-Time Tracking
* Push Notifications
* Order History
* Admin Dashboard
* Favorites/Wishlist
* Advanced Search Filters

---

# 🤖 AI Usage

AI tools were used during development for:

* Architecture planning
* Component generation
* API integration guidance
* Debugging assistance
* UI/UX improvements
* Test case suggestions
* Code optimization

All generated code was reviewed, customized, integrated, and tested manually.

---

# 📄 License

This project was created for assessment and educational purposes.

---

## Thank You

Thank you for reviewing this project.

Developed with ❤️ by **Tauseef Akhtar**
