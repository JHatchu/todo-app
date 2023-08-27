const express = require('express');
const emprouter = require('./emprouter/emprouter');
const cors = require('cors');
const app = express()

app.use(cors({methods:['GET','POST','DELETE','UPDATE','PUT','PATCH']}))
app.use(express.json())

app.use("/emp",emprouter)

app.get("/",(req,res) => {
    res.send("api")
})

app.listen(4500,() => {
    console.log("server started in port 4500");
});