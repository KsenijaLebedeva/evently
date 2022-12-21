const express = require("express");
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db= mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "evently",
    authProtocol: 'MYSQL40'
});


app.post("/signup", (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone_number = req.body.phone_number;
    const name = req.body.name;
    const date_of_birth = req.body.date_of_birth;

    db.query(
        "INSERT INTO user (username, password, email, phone_number, name, date_of_birth) VALUES (?,?,?,?,?,?)",
        [username, password, email, phone_number, name, date_of_birth],
        (err, result) => {
            console.log(err);
            console.log(result);
        }  
    );
});

app.post("/login", (req,res)=>{
    const username = req.body.username;
    const email = req.body.email
    var password = req.body.password;

    // trim password value to remove leading and trailing white spaces
    password = password.trim(); 

    db.query(
        "SELECT * FROM user WHERE (username = ? OR email = ?) AND password = ?",
        [username, email, password],(result,err) => {
            if (err){
                res.send({err:err});
            }else {
                // check if results are empty
                if (result.length > 0) {
                  // username or email found in database
                  // check if password is correct
                  if (result[0].password === password) {
                    // password is correct, login successful
                    res.send(result[0].username);
                    
                  } else {
                    // password is incorrect
                    res.send({ message: "Incorrect password" });
                  }
                } else {
                  // username or email not found in database
                  res.send({ message: "Username or email not found" });
                }
            }
        }
    );
});

app.listen(3006, () =>{
    console.log("your server is running on port 3006")
});
