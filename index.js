const express = require('express');
const port = 5050;
const app = express();
app.use(express.json());

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

const path = require('path');
// app.use(express.static(path.join(__dirname, "css")));
//------------------------------------------------

let AllData=[];
app.get("/",(req, res) => {
    res.send(AllData);
    // res.send(calls_data).json();
});
app.get("/List",(req, res) => {
     res.send(AllData).json();
});

app.post("/ADD",(req, res) => {
    let line={};
    line.name = req.body.name;
    line.phone = req.body.phone;
    line.pobox = req.body.pobox;
    AllData.push(line);
    res.send("ready to add");
});

//------------------------------------------------
app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`);
});