const express = require("express");
const app = express();

const mysql = require('mysql');
const cors = require('cors')

app.use(express.urlencoded({extended:true}))

app.use(cors());

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'quizWeb',
    port:'3308'
})


app.post('/login', (req, res)=>{
    console.log(req.body);

    // const sqlInsert = `INSERT INTO user VALUES(${req.body.username}, ${req.body.password});`;
    // db.query(sqlInsert, (err, result)=>{
    //     console.log(result);
    // })

    db.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = `INSERT INTO user VALUES('${req.body.username}', '${req.body.password}');`;
        db.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });

    res.redirect('/');
})



const PORT =  8000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
