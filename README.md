# ExpressLibraryManagement
This project is an Express.js-based backend for a Library Management System.

## Features

- [ ] Authentication (JWT-based)
- [ ] CRUD Operations for Books, Users, and Transactions
- [ ] Role-based Access Control (Admin, User)
- [ ] Logging and Error Handling

## Technologies Used

- Node.js
- Express.js
- MongoDB (or your preferred database)
- JWT (JSON Web Tokens) for authentication

## Setup Instructions

### Prerequisites

- Node.js installed
- MongoDB installed and running

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd ExpressLibraryManagement

2. Install dependencies (if package.json exists)
   ```bash
   npm install
   
4. Generating JWT Secret Key Locally

   You can generate a JWT secret key using Node.js. Open your terminal or command prompt and run the following command:

   ```bash
     node -e "console.log(require('crypto').randomBytes(32).toString('hex'));"

5. Add and update .env file
   DB_URI=mongodb://localhost:27017/your_database_name
   PORT=5000
   JWT_SECRET=<paste-your-generated-jwt-secret-key> // from above command
   
6. Run the Seeder Script
    ```bash
      node seeder.js
    
7. Start the Express server:

      ```bash
      npm start
      
8. Login for user and admin
   only add username for ## user privilage username: user1
   for ## admin privilage username: admin1 password: admin1pass


