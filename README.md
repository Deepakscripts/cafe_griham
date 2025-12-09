# Cafe Griham - Full Stack MERN Project

This is a full stack MERN (MongoDB, Express, React, Node.js) application for Cafe Griham.

## Project Structure

The project is divided into two main folders:

- **client**: The frontend React application (Vite).
- **server**: The backend Node.js/Express application.

### Folder Structure Overview

```
cafe_griham/
├── client/                 # Frontend React App
│   ├── src/
│   │   ├── api/            # Axios setup and API calls
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── constants/      # Global constants
│   │   ├── context/        # React Context for state management
│   │   ├── hooks/          # Custom React hooks
│   │   ├── layouts/        # Page layouts
│   │   ├── lib/            # Utility libraries
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   └── ...
├── server/                 # Backend Node.js App
│   ├── config/             # Configuration (DB, etc.)
│   ├── controllers/        # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── index.js            # Server entry point
│   └── .env                # Environment variables
├── package.json            # Root scripts for concurrent execution
└── README.md               # Project documentation
```

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB installed and running (or a MongoDB Atlas URI)

### Installation

1.  **Install dependencies for both client and server:**

    ```bash
    npm run install-all
    ```

    Or manually:

    ```bash
    npm install
    cd client && npm install
    cd ../server && npm install
    ```

2.  **Environment Variables:**

    - Go to the `server` folder.
    - Create a `.env` file (if not exists) and add:

      ```env
      PORT=5000
      MONGO_URI=mongodb://localhost:27017/cafe_griham
      NODE_ENV=development
      ```

### Running the Application

To run both the client and server concurrently:

```bash
npm run dev
```

- Client will run on: `http://localhost:5173` (default Vite port)
- Server will run on: `http://localhost:5000`

## Collaboration Guidelines

- **Modularity**: Keep components small and reusable. Use the `components` folder.
- **API Calls**: All API calls should be defined in the `client/src/api` folder.
- **State Management**: Use React Context or custom hooks for shared state.
- **Styling**: Follow the existing styling conventions (CSS/Tailwind).
- **Backend**: Keep controllers logic separate from routes. Use models for DB interactions.

## License

ISC
