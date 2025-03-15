# ERP Solution

A modern Enterprise Resource Planning (ERP) solution built with React, TypeScript, Node.js, and MongoDB.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Authentication](#authentication)
- [Sales Management](#sales-management)

## Features  

- User Authentication (Register, Login, Role-based access)
- Sales Management
- Modern UI with Tailwind CSS
- Responsive Design
- Secure API Integration
- Role-based Access Control

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/erp_db
JWT_SECRET=your_jwt_secret_key
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on http://localhost:5000

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend/ERPClient
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend application will run on http://localhost:5173

## Usage

### User Registration and Login

1. Access the application at http://localhost:5173
2. Click "Create Account" to register a new user
3. Provide your full name, email, and password
4. After registration, you'll be automatically logged in
5. For subsequent visits, use the "Sign In" option

### Sales Management

1. After logging in, you'll be redirected to the sales dashboard
2. View existing sales in the table
3. Click "New Sale" to create a new sale
4. Fill in the customer details and sale information
5. Submit the form to record the sale

## API Documentation

### Authentication Endpoints

#### Register User
- **URL**: `/auth/register`
- **Method**: `POST`
- **Body**:
```json
{
  "username": "string",
  "email": "string",
  "password": "string",
  "role": "string" (optional, defaults to "cashier")
}
```
- **Response**:
```json
{
  "message": "User registered successfully",
  "user": {
    "username": "string",
    "email": "string",
    "role": "string"
  }
}
```

#### Login
- **URL**: `/auth/login`
- **Method**: `POST`
- **Body**:
```json
{
  "email": "string",
  "password": "string"
}
```
- **Response**:
```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN"
}
```

### Sales Endpoints

#### Create Sale
- **URL**: `/sales/add`
- **Method**: `POST`
- **Authentication**: Required (Bearer Token)
- **Body**:
```json
{
  "productId": "string",
  "customerId": "string",
  "quantity": "number"
}
```
- **Response**:
```json
{
  "message": "Sale recorded successfully",
  "sale": {
    "id": "string",
    "product": "object",
    "customer": "object",
    "quantity": "number",
    "total": "number",
    "date": "string"
  }
}
```

#### List Sales
- **URL**: `/sales`
- **Method**: `GET`
- **Authentication**: Required (Bearer Token)
- **Response**:
```json
{
  "sales": [
    {
      "id": "string",
      "product": "object",
      "customer": "object",
      "quantity": "number",
      "total": "number",
      "date": "string"
    }
  ]
}
```

#### Get Sales Report
- **URL**: `/sales/report`
- **Method**: `GET`
- **Authentication**: Required (Bearer Token)
- **Response**:
```json
{
  "totalSales": "number",
  "totalRevenue": "number"
}
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. After logging in, you'll receive a token that should be included in subsequent requests as a Bearer token in the Authorization header:

```
Authorization: Bearer <your_token_here>
```

## Error Handling

All endpoints return appropriate HTTP status codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 401: Unauthorized
- 403: Forbidden
- 404: Not Found
- 500: Internal Server Error

Error responses include a message explaining what went wrong:
```json
{
  "error": "Error message description"
}
```

## Development

### Available Scripts

Backend:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm start`: Start production server

Frontend:
- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build
- `npm run lint`: Run ESLint

## Security

- Password hashing using bcrypt
- JWT token authentication
- CORS enabled
- Input validation
- Role-based access control

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
