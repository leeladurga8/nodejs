const express = require('express');
const bodyparser = require('body-parser');

const app = express();
app.use(bodyparser.json());


const users = [{
  id:1,
  emailId:"student1@gmail.com",
  location: "Hyderabad"
},
{
    id:2,
    emailId:"student2@gmail.com",
    location: "PUNE"
},
{
    id:3,
    emailId:"student3@gmail.com",
    location: "MUMBAI"
}
]

 app.get('/',(req,res)=>{
    res.send(JSON.stringify(users));
})

app.get('/users/:id',(req,res)=>{
    console.log(req.params);
    const user =users.find(item=>item.id===parseInt(req.params.id));
    console.log(user);

if(user){
    res.status(200).send(JSON.stringify(user));
}
else{
    res.status(404).send("not found");
}

})

app.post('/users',(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.status(200).send("user has been added successfully");
})
app.put('/users/:id',(req,res)=>{
    const user =users.find(item=>item.id===Number(req.params.id));
    if(user){
        user.location=req.body.location;
        res.status(200).send("updated successfully");
    }
    else{
        res.status(404).send("not found");
    }
})
app.listen(3800,()=>{
    console.log("server is up and running at http://localhost:3800");
})

