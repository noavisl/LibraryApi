Here’s the updated README in English for your **LibraryApi** project:

---

# LibraryApi

**LibraryApi** is a RESTful API built with Node.js and MongoDB. It supports CRUD (Create, Read, Update, Delete) operations for managing books, authors, and categories.

## Technologies Used

- **Node.js**: Server-side JavaScript runtime.
- **Express**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing information on books, authors, and categories.
- **Mongoose**: Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Swagger**: API documentation and testing tool.

## Installation and Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/noavisl/LibraryApi.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd LibraryApi
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Configure environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   ```

5. **Run the server:**

   ```bash
   npm start
   ```

   The API will be accessible at `http://localhost:3000`.

## Using Swagger

To explore and test the API, visit the Swagger UI at:
```
http://localhost:3000/swagger
```

## API Endpoints

### Books:
- `GET /api/books` - Retrieve all books.
- `GET /api/books/{id}` - Retrieve a specific book by ID.
- `POST /api/books` - Add a new book.
- `PUT /api/books/{id}` - Update an existing book by ID.
- `DELETE /api/books/{id}` - Delete a book by ID.

### Authors:
- `GET /api/authors` - Retrieve all authors.
- `GET /api/authors/{id}` - Retrieve a specific author by ID.
- `POST /api/authors` - Add a new author.
- `PUT /api/authors/{id}` - Update an existing author by ID.
- `DELETE /api/authors/{id}` - Delete an author by ID.

### Categories:
- `GET /api/categories` - Retrieve all categories.
- `GET /api/categories/{id}` - Retrieve a specific category by ID.
- `POST /api/categories` - Add a new category.
- `PUT /api/categories/{id}` - Update an existing category by ID.
- `DELETE /api/categories/{id}` - Delete a category by ID.
