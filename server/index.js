const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require("cors");

app.use(cors());
app.use(express.json());
const db = mysql.createConnection({
    user: 'root',
    host: "localhost",
    password: '',
    database: "react"
});

app.post('/addUsers', (req, res) => {
    console.log(req.body)
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;
    const country = req.body.country;
    const image = req.body.image;

    db.query("INSERT INTO users (name, email, dob, country, photo) VALUES (?,?,?,?,?)",
        [name, email, dob, country, image], (err, result) => {
            if (err && err != "ER_DUP_ENTRY") {

                res.send("Taken");
            }
            else {

                res.send("Inserted");
            }
        })

});

app.get('/viewUsers', (req, res) => {
    db.query("SELECT id,name,email,dob FROM users WHERE deleted = 0",
        (err, result) => {
            if (err) {
                console.log(err)
            }
            else {
                res.send(result);
            }
        })
});


app.put('/updateUsers', (req, res) => {

    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const dob = req.body.dob;


    db.query("UPDATE users SET name= ?, email=?, dob=? WHERE id = ?",
        [name, email, dob, id],
        (err, result) => {
            if (err && err != "ER_DUP_ENTRY") {

                res.send("Taken");
            }
            else {

                res.send("Inserted");
            }
        })
});


app.put('/deleteUser', (req, res) => {

    const id = req.body.id;
    db.query("UPDATE users SET deleted= 1 WHERE id = ?",
        id,
        (err, result) => {
            if (err) {

                res.send("Deleted");
            }
            else {

                res.send("Done");
            }
        })
});


app.listen(3020, () => {
    console.log("Server running on 3020");
});