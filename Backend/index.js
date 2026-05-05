const express = require("express");
const mySql = require("mysql2");
const app = express();
const cors = require("cors");

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());

const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "pw_praktikum_db",
    port: 3306,
    
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database");
});
    
app.get("/", (req, res) => {
    res.send("server berjalan");
});

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
app.get("/api/info", (req, res) => {
  res.json({
    message: "API MERN Stack Build by Express JS",
    version: "1.0.0",
    status: "active",
    timestamp: new Date()
  });
});

