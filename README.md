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

# Backend tests
- cd backend
- npm test

# Frontend tests
- cd frontend
- npm test


📝 License
- This project is for educational and portfolio purposes.

📧 Contact
- Anuji Thrimanna
- Linkedin: https://www.linkedin.com/in/anuji-thrimanna-6389392a9/

## Demo Video

https://github.com/user-attachments/assets/62a40ecd-7122-4f77-91ed-b82e7bc6735a

⭐ If you find this project useful, please consider giving it a star on GitHub!
