User Management Application
A React application that integrates with the Reqres API to perform basic user management functions including authentication, listing users, and editing/deleting user data.
Features
Level 1: Authentication

Login screen with email/password validation
Token storage in localStorage
Redirection to user list after successful login

Level 2: User List

Displays a paginated list of users with avatars and details
Implements pagination controls
Shows user information in card format
Client-side search functionality

Level 3: Edit & Delete Users

Edit functionality with pre-filled form
Delete functionality with confirmation
Success/error notifications

Technologies Used

React for the frontend
React Router for navigation
Context API for state management
Axios for API requests
Tailwind CSS for styling

Live Demo
View the live demo <!-- Replace with your deployed app URL -->
Installation and Setup
Prerequisites

Node.js (v14+ recommended)
npm or yarn

Installation Steps

Clone the repository

bashCopygit clone https://github.com/AmbikaMandhaniya/user-management-app.git
cd user-management-app

Install dependencies

bashCopynpm install
# or
yarn install

Start the development server

bashCopynpm start
# or
yarn start

Open http://localhost:3000 to view the app in your browser

Login Credentials

Email: eve.holt@reqres.in
Password: cityslicka

Project Structure
Copysrc/
 ├── components/
 │   ├── Auth/
 │   │   └── Login.js
 │   ├── Users/
 │   │   ├── UserList.js
 │   │   ├── UserCard.js
 │   │   └── EditUserForm.js
 │   ├── UI/
 │   │   ├── Navbar.js
 │   │   ├── Pagination.js
 │   │   ├── Spinner.js
 │   │   └── Alert.js
 │   └── ProtectedRoute.js
 ├── services/
 │   └── api.js
 ├── context/
 │   └── AuthContext.js
 ├── App.js
 └── index.js
API Integration
This application integrates with the Reqres API, utilizing the following endpoints:

POST /api/login - Authentication
GET /api/users?page=<page_number> - Fetch users
GET /api/users/<id> - Fetch specific user
PUT /api/users/<id> - Update user
DELETE /api/users/<id> - Delete user

Deploying to Production
Build the application
bashCopynpm run build
# or
yarn build
The build folder will be created in the project directory with production-ready files.

Vercel(deployment link) - https://vercel.com/ambika-mandhaniyas-projects/user-management-app


License
MIT
Acknowledgements

Reqres API for providing a test API
Tailwind CSS for styling
React Router for navigation
