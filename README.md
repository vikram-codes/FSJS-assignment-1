# User Management CRUD App - Full Stack JavaScript Assignment

## Overview

This is a Full Stack JavaScript CRUD application built with Node.js, Express, MongoDB (Atlas), and Pug.  
It allows users to Create, Read, Update, and Delete user information including:

- Last Name, First Name
- Date of Birth
- Address1, Address2
- City, Postal Code, Country
- Phone Number, Email
- Notes

The application uses Bootstrap 5 for a clean, responsive UI with modern styling.

---

## Features

- Add new users with all required fields
- Display all users in a responsive, styled table
- Edit existing users via a dedicated update page
- Delete users with confirmation
- Fully connected to MongoDB Atlas via an environment variable
- Modern UI/UX with cards, gradients, and icons

---

## Screenshots (screenshots/)

1. screenshots/add-user.png

   - Filled form with all fields
   - Submit button visible

2. screenshots/users-list.png

   - Table populated with multiple users
   - Edit and Delete buttons visible

3. screenshots/update-user.png

   - Prefilled form for an existing user
   - Save Changes and Delete buttons visible

4. screenshots/delete-user.png

   - Gives warning to the user
   - Deletes the user data from list

---

## Prerequisites

- Node.js (v16+ recommended)
- npm
- MongoDB Atlas cluster (you must provide your cluster URI in .env)

---

## Setup & Usage

1. Clone the project and enter the folder:

   ```bash
   git clone https://github.com/vikram-codes/FSJS-assignment-1
   cd user-management
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file from the example and set your MongoDB Atlas URI and optional PORT:

   ```
   cp .env.example .env
   # .env
   MONGO_URI=mongodb+srv://vikramjitpersonal_db_user:323ySikevxqW1n67@user-crud-cluster.t6xyn6h.mongodb.net/?appName=user-crud-cluster
   PORT=3000
   ```

4. Start the app:

   ```bash
   npm run dev
   ```

   - Default app URL: http://localhost:3000

5. Common folders:
   - views/ — Pug templates (add, list, update)
   - public/ — CSS, JS, images (including screenshots/)
   - routes/ — Express route handlers
   - models/ — Mongoose user schema
   - app.js or index.js — application entry point

---

## Developer Notes

- Express used for server and routing
- Mongoose for MongoDB ORM and schema validation
- Pug for templating and dynamic HTML rendering
- Method-Override middleware used for DELETE operations via forms
- Bootstrap 5 + Bootstrap Icons used for styling and UI consistency
- MongoDB Atlas connected through .env for security
- Comments added in index.js and routes/users.js for clarity

## ✅ Development Checklist

| Step | Task                                                                                     | Status       |
| ---- | ---------------------------------------------------------------------------------------- | ------------ |
| 1    | Initialize Node.js project with Express and Pug setup                                    | ✅ Completed |
| 2    | Install dependencies (`express`, `mongoose`, `dotenv`, `method-override`, `body-parser`) | ✅ Completed |
| 3    | Set up MongoDB Atlas cluster and connected via `.env`                                    | ✅ Completed |
| 4    | Created `User` model with all fields (name, DOB, address, contact info, notes)           | ✅ Completed |
| 5    | Built routes for CRUD operations in `routes/users.js`                                    | ✅ Completed |
| 6    | Created Pug templates for Add, List, and Update pages                                    | ✅ Completed |
| 7    | Implemented `method-override` for DELETE operations                                      | ✅ Completed |
| 8    | Styled all pages with Bootstrap 5 and custom gradients                                   | ✅ Completed |
| 9    | Tested full CRUD flow (Add → List → Update → Delete)                                     | ✅ Completed |
| 10   | Verified connection and data persistence with MongoDB Atlas                              | ✅ Completed |
| 11   | Added proper comments and documentation across code                                      | ✅ Completed |
| 12   | Created screenshots for each page (add, list, update, delete)                            | ✅ Completed |
| 13   | Wrote README with setup, screenshots, and verification instructions                      | ✅ Completed |
| 14   | Zipped final project excluding `node_modules`                                            | ✅ Completed |

### Notes

- The app was developed incrementally — backend first, then views and UI styling.
- Each step was tested locally using MongoDB Atlas connection before moving to the next.
- Extra attention was given to UI/UX (colors, fonts, icons, responsive layout).
- Code comments have been added to assist instructors during review.
