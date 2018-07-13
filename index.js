const express = require("express");
const app = express();
const path = require("path");
app.use(express.static('asset'));

app.get("/",function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

// app.get("/submit",function(req,res){
//     res.json(todos);
// })

var hello = "hello";
var todos =[{
    id: 1,
    description: 'Build a simple API - nodejs',
    completed: false
   }, {
    id: 2,
    description: 'Go to T-beer - team building',
    completed: false
   }, {
    id: 3,
    description: 'Feed the dog ',
    completed: true
   }];


// get 1 phần tử trong json 

app.get('/submit/:id', function(req, res) {

var idMuonQuery = parseInt(req.params.id);

    todos.forEach( function (moiGoiJson){
        if(idMuonQuery == moiGoiJson.id){
            var result = moiGoiJson;
            res.json(result);
        }else {
            res.status(404).send();
        }
    })
});

//tạo 1 object mới trong json

app.post('/create',function(req,res) {
    var JsonLength = Object.keys(todos).length;
    console.log(JsonLength);
    var body = req.body;
    body.id = JsonLength++;
    todos.push(body);
    res.json(body);
    
})
app.listen(3000,function(){
    console.log("server has started");
});

