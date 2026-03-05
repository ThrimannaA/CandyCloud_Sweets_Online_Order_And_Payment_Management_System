🍬 Candy Cloud Sweets - Online Order & Payment Management System

📋 Overview

A full-stack e-commerce web application for a sweet shop that enables customers to browse products, place orders, and make payments online. The system features user authentication, product management, shopping cart functionality, and secure payment processing through Stripe.

✨ Key Features

- User Authentication: Register, login, and profile management

- Product Catalog: Browse sweets with search and filter capabilities

- Shopping Cart: Add/remove items, update quantities

- Order Management: Create, view, and track orders

- Payment Integration: Secure Stripe payment gateway

- Admin Dashboard: Manage products, view orders, update order status

- Responsive Design: Mobile-friendly UI with Tailwind CSS

🛠️ Technology Stack

- Frontend	- React + Vite, Tailwind CSS, Daisy UI
- Backend	Node.js, Express.js
- Database -	MongoDB with Mongoose
- Authentication- JWT (JSON Web Tokens)
- Payments - Stripe API
- State Management - React Context API / Redux
- Styling -	Tailwind CSS, Daisy UI components

🏗️ Architecture

[Client Browser]
       ↓
[React Frontend] ←→ [Stripe API]
       ↓                    ↑
[Express Backend] ←→ [MongoDB]
       ↓
[Payment Processing]

🚀 Installation & Setup
Prerequisites
Node.js (v14+)

MongoDB (local or Atlas)

Stripe account (for payment processing)

Backend Setup
Clone the repository


git clone https://github.com/ThrimannaA/CandyCloud_Sweets_Online_Order_And_Payment_Management_System.git
cd CandyCloud_Sweets_Online_Order_And_Payment_Management_System
Install backend dependencies


cd backend
npm install
Create environment file


# Create .env file in backend directory
PORT=5000
MONGODB_URI=mongodb://localhost:27017/candycloud
JWT_SECRET=your_jwt_secret_key_here
STRIPE_SECRET_KEY=your_stripe_secret_key_here
Start backend server

npm start
# Server runs on http://localhost:5000
Frontend Setup
Navigate to frontend directory


cd ../frontend
Install frontend dependencies


npm install
Create environment file


# Create .env file in frontend directory
VITE_API_URL=http://localhost:5000/api
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key_here
Start frontend development server

npm run dev

# App runs on http://localhost:5173


💡 Key Features Explained

- User Authentication
  - JWT-based authentication
  
  - Protected routes for authenticated users
  
  - Role-based access (user/admin)

- Product Management
  - Browse products with pagination
  
  - Search by name/description
  
  - Filter by category/price
  
  - View product details

- Shopping Cart
  - Add/remove items
  
  - Update quantities
  
  - Persistent cart (local storage)
  
  - Real-time price calculation

- Order Processing
  - Checkout with address and payment
  
  - Order summary and confirmation
  
  - Order history for users

- Status tracking (pending, processing, delivered)

- Payment Integration
  - Secure Stripe payment processing
  
  - Test mode for development
  
  - Payment confirmation emails
  
  - Transaction records

- Admin Features
  - Product CRUD operations
  
  - View all orders
  
  - Update order status
  
  - User management

🎯 API Endpoints
- Authentication
  - POST /api/auth/register - User registration
  
  - POST /api/auth/login - User login
  
  - GET /api/auth/profile - Get user profile (protected)

- Products
  - GET /api/products - Get all products
  
  - GET /api/products/:id - Get single product
  
  - POST /api/products - Create product (admin)
  
  - PUT /api/products/:id - Update product (admin)
  
  - DELETE /api/products/:id - Delete product (admin)

- Cart
  - GET /api/cart - Get user cart
  
  - POST /api/cart/add - Add to cart
  
  - PUT /api/cart/update - Update quantity
  
  - DELETE /api/cart/remove/:id - Remove from cart

- Orders
  - POST /api/orders - Create order
  
  - GET /api/orders - Get user orders
  
  - GET /api/orders/:id - Get order details
  
  - PUT /api/orders/:id/status - Update status (admin)

- Payments
  - POST /api/payments/create-payment-intent - Create Stripe payment
  
  - POST /api/payments/webhook - Stripe webhook handler

🚦 Running Tests
bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test

📦 Deployment

Backend Deployment (Render/Heroku)
bash
# Set environment variables on hosting platform
MONGODB_URI=production_mongodb_uri
JWT_SECRET=production_jwt_secret
STRIPE_SECRET_KEY=production_stripe_key
Frontend Deployment (Vercel/Netlify)
bash
# Set environment variables
VITE_API_URL=production_backend_url
VITE_STRIPE_PUBLIC_KEY=production_stripe_public_key

📝 License
- This project is for educational and portfolio purposes.

📧 Contact
- Anuji Thrimanna
- Email: thrimanna2000@gmail.com

## Demo Video

https://github.com/user-attachments/assets/62a40ecd-7122-4f77-91ed-b82e7bc6735a

⭐ If you find this project useful, please consider giving it a star on GitHub!
