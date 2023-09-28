const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

const db = mysql.createPool ({
    host: "localhost",
    user: "root",
    password: "",
    database: "gulong"
})

app.get("/customers", ( req, res) =>{
    const sqlSelect  = "SELECT * FROM customers" ;

    db.query (sqlSelect, (err, result) => {
        if (err) {
            console.log("error");
        } else {
            res.send(result);
        }
    })
} )


app.post("/customers/add", (request, response) => {

    const firstName = request.body.first_name;
    const lastName = request.body.last_name;
    const email = request.body.email;
    const contactno = request.body.contact_no;
    const address = request.body.address;

    const sqlInsert = "INSERT INTO customers (first_name, last_name, email, contact_no, address) VALUES (?, ?, ?, ?, ?)";


    db.query(sqlInsert, [firstName, lastName, email, contactno, address], (err, result) =>{
        if(err){
            console.log("error")
        } else {
            response.send(result)
        }
    })
 })


app.listen(PORT, () => {
    console.log(`running on server ${PORT}`);
})