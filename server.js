var express = require("express");
var path = require("path")

var app  = express();
var PORT = 5000;

app.use(express.urlencoded({extended : true}))
app.use(express.json())

app.get("/", function(req,res){
    res.send('You are on the homepage')
});

app.listen(PORT, () => {
    console.log("Server on port :" + PORT);
});

app.post("/post", (req, res) =>{

    var user = req.body.vUser
    res.send(`Welcome ${user}`)

});

app.delete("/delete", (req, res) => {

    res.send(JSON.stringify({delete: true}));

});


app.put("/put/:ID", (req, res) =>{

    res.send(`Task ${req.params.ID} has been updated`)

})







