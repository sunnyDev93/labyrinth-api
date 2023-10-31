# Labyrinth REST Service Documentation

## Overview

The Labyrinth REST service provides a structured API to create, modify, and solve labyrinths. Developed with Express and MongoDB, this service is designed for both scalability and ease of use.

## Setup

### Prerequisites

Before starting, ensure you have:
- Node.js and npm installed
- MongoDB set up and running

### Installation & Execution

1. **Clone the Repository**:
```bash
git clone https://github.com/sunnyDev93/labyrinth-api.git
```

2. **Navigate to the Directory & Install Dependencies**:
```bash
cd labyrinth-api
npm install
```

3. **Start MongoDB**:
```bash
mongod
```

4. **Run the Server**:
```bash
npm start
```

## API Endpoints

### User Endpoints

- **Automatic User Creation**:
  When a user makes a request using BasicAuth, a user is created on-the-fly if they don't exist already.

### Labyrinth Endpoints


- **Get All Labyrinths for a User**:
  - Endpoint: `GET /labyrinth`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Get Specific Labyrinth by ID**:
  - Endpoint: `GET /labyrinth/:id`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Create an Empty Labyrinth**:
  - Endpoint: `POST /labyrinth`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Set a Block Type in the Labyrinth**:
  - Endpoint: `PUT /labyrinth/:id/playfield/:x/:y/:type`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Set the Starting Block of the Labyrinth**:
  - Endpoint: `PUT /labyrinth/:id/start/:x/:y`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Set the Ending Block of the Labyrinth**:
  - Endpoint: `PUT /labyrinth/:id/end/:x/:y`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

- **Get a Solution for the Labyrinth**:
  - Endpoint: `GET /labyrinth/:id/solution`
  - Headers: 
    - Authorization: Basic [base64-encoded username:password]

## Testing Using Postman

1. **Start the Server**.
2. **Launch Postman**.
3. Set up Basic Authentication:
   - Choose the "Authorization" tab.
   - Select "Basic Auth" from the TYPE dropdown.
   - Enter your desired username and password.
4. Use the provided API endpoints to create, modify, and solve labyrinths.
5. If you encounter SSL issues, navigate to Postman's settings (top-right gear icon). Under 'General', disable "SSL certificate verification".
