# Ecommerce Fullstack Project

This is a fullstack ecommerce application built with React for the frontend and Node.js/Express for the backend. It includes features like product listing, shopping cart, checkout, and order management.

## Features

- Product catalog with search and filtering
- Shopping cart functionality
- User authentication (if implemented)
- Order tracking
- Responsive design

## Tech Stack

### Frontend
- React
- Vite (build tool)
- Vitest (testing)
- React Router (routing)
- Axios (HTTP client)
- Testing Library (testing utilities)

### Backend
- Node.js
- Express.js
- SQLite (database)
- JWT (authentication, if used)

## Project Structure

```
ecommerce-project/  # Frontend (React)
├── public/
│   ├── images/
│   │   ├── icons/
│   │   ├── products/
│   │   └── ratings/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   └── Header.jsx
│   ├── pages/
│   │   ├── checkout/
│   │   ├── home/
│   │   │   ├── HomePage.jsx
│   │   │   ├── HomePage.test.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Product.test.jsx
│   │   │   ├── ProductsGrid.jsx
│   │   │   └── HomePage.css
│   │   ├── orders/
│   │   └── tracking/
│   ├── utils/
│   │   ├── money.js
│   │   └── money.test.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
├── setupTest.js
├── vitest.config.js
└── README.md

ecommerce-backend/  # Backend (Node.js)
├── backend/
│   ├── cart.json
│   ├── deliveryOptions.json
│   ├── orders.json
│   └── products.json
├── defaultData/
│   ├── defaultCart.js
│   ├── defaultDeliveryOptions.js
│   ├── defaultOrders.js
│   └── defaultProducts.js
├── exercise-solutions/
├── images/  # Static images
├── models/
│   ├── CartItem.js
│   ├── DeliveryOption.js
│   ├── Order.js
│   └── Product.js
├── patches/
├── routes/
│   ├── cartItems.js
│   ├── deliveryOptions.js
│   ├── orders.js
│   ├── paymentSummary.js
│   └── products.js
├── .eslintignore
├── .eslintrc.json
├── .gitignore
├── documentation.md
├── package.json
├── README.md
├── server.js
├── troubleshooting.md
└── zipFiles.js

starting-files/  # Initial files for the project
├── backend/
├── data/
└── styles/
```

## Setup Instructions

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Backend Setup
1. Navigate to the backend directory:
   ```
   cd ecommerce-backend
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```
   The backend will run on `http://localhost:3000` (or as configured).

### Frontend Setup
1. Navigate to the frontend directory:
   ```
   cd ecommerce-project
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```
   The frontend will run on `http://localhost:5173` (default Vite port).

### Running Tests
- For frontend tests:
  ```
  cd ecommerce-project
  npm test
  ```
- For backend tests (if any):
  ```
  cd ecommerce-backend
  npm test
  ```

## API Endpoints

### Products
- GET /api/products - Get all products

### Cart
- GET /api/cart-items - Get cart items
- POST /api/cart-items - Add item to cart

### Orders
- GET /api/orders - Get user orders
- POST /api/orders - Create new order

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests
5. Submit a pull request

## License

This project is licensed under the MIT License.
