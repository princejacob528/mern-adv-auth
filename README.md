# Advanced Authentication - MERN

A robust authentication system built using the **MERN stack** (MongoDB, Express.js, React, Node.js). This project provides a secure user authentication workflow with features like login, registration, password reset, email verification, and JWT-based authentication.

## Features

- **User Registration**: New users can register by providing their details (name, email, password).
- **Email Verification**: Users receive a verification email to confirm their account.
- **User Login**: Registered users can log in using their credentials.
- **Password Reset**: Users can reset their password via an email link.
- **Token-based Authentication**: Secure login with JSON Web Tokens (JWT) for authorization across protected routes.
- **Role-based Access Control**: Assign user roles (e.g., admin, user) for route protection.

## User Interaction

1. **Registering a New User**: Fill out the registration form and confirm your email address to activate the account.
2. **Logging In**: Enter your email and password to log in. The system will authenticate the credentials and provide a JWT for secure access.
3. **Email Verification**: After registration, check your inbox for a verification email, and click the link to confirm your account.
4. **Resetting Password**: If you forget your password, click on "Forgot Password", enter your email, and follow the link sent to your inbox to reset the password.
5. **Protected Routes**: Once logged in, you can access protected resources (e.g., profile page, dashboard) based on your role (e.g., user, admin).

## Technologies Used

- **Frontend**: React, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token), bcrypt for password hashing
- **Email Service**: Nodemailer for sending verification and password reset emails

## Security Features

- **Password Hashing**: User passwords are securely hashed using **bcrypt** before being stored in the database.
- **JWT Authentication**: JWTs are used for stateless authentication, with tokens stored securely to protect user sessions.
- **Secure Routes**: Role-based access control ensures that only authorized users can access certain routes.

## Installation

To run this app locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/your-username/advanced-auth-mern.git
```
2. Install backend dependencies:
```bash
cd server
npm install
```
3.Set up environment variables:
```bash
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
```
4.Run the backend server:
```bash
npm run server
```
5.Navigate to the frontend directory:
```bash
cd ../client
```
6.Install frontend dependencies:
```bash
npm install
```
7.Run the React frontend:
```bash
npm start
```
