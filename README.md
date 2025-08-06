# BPAPITestApp / E_Directory

A Node.js RESTful API for managing employee directory information, backed by a PostgreSQL database. This project enables you to perform full CRUD operations for employee data with enriched organizational references like designations, divisions, and branches.

---

## 🚀 Features

- Add new employee records
- Fetch all employee details with related information
- Retrieve a specific employee by PF number
- Update employee data
- Delete employee records

---

## 🧰 Tech Stack

- Node.js
- Express.js
- PostgreSQL
- pg (node-postgres)
- RESTful API

---

## 🔧 Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/ashen1438/BPAPITestApp.git
cd BPAPITestApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure your PostgreSQL database

Edit your database connection settings in `src/config/db.js`:

```js
const pool = new Pool({
  user: 'your_db_user',
  host: 'localhost',
  database: 'your_db_name',
  password: 'your_db_password',
  port: 5432
});
```

### 4. Start the server

```bash
npm start
```

The server will start on the port specified in your `.env` file or default to port 3000.

---

## 📬 API Endpoints

| Method | Endpoint           | Description               |
|--------|--------------------|---------------------------|
| GET    | /api/users         | Get all employees         |
| GET    | /api/users/:epf    | Get employee by PF number |
| POST   | /api/users         | Add a new employee        |
| PUT    | /api/users/:epf    | Update employee details   |
| DELETE | /api/users/:epf    | Delete an employee        |

---

## 🧑‍💻 Author

**Ashen Eranga**  
GitHub: [@ashen1438](https://github.com/ashen1438)

---

## 📄 License

This project is licensed under the MIT License.
