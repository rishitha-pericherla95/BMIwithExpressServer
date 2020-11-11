const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(request,response){
  response.sendFile(__dirname + "/index.html");

});


app.post("/",function(request,response){
  var height = Number(request.body.height);
  var weight = Number(request.body.weight);
  var bmi = (weight)/(height*height);
  response.send("your BMI is "+bmi);

});
app.listen(3000,function(){
  console.log("Server had started on port 3000");
});
