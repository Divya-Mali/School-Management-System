const express= require('express');
const cors = require("cors");
require('./db/config');
const Teacher =require("./db/Teacher");
const Admin = require("./db/AdminSchema");
const Student = require("./db/studentSchema");
const Notice =require("./db/NoticeSchema");
const Leave =require("./db/LeaveSchema");
const Homework =require("./db/HomeworkSchema");
const app= express();

const Jwt = require('jsonwebtoken');
const jwtKey='school-manage'

app.use(express.json());
app.use(cors());

app.post("/teacher", async (req,resp)=>
{
    let teacher= new Teacher(req.body);
    let result = await teacher.save();
    resp.send(req.body)

});

app.post("/student", async (req,resp)=>{
    let student= new Student(req.body);
    let result = await student.save();
    resp.send(req.body)

});

app.post("/notice", async (req,resp)=>{
    let notice= new Notice(req.body);
    let result = await notice.save();
    resp.send(req.body)

});

app.post("/leave", async (req,resp)=>{
    let leave= new Leave(req.body);
    let result = await leave.save();
    resp.send(req.body)
    

});

app.post("/homework",  async (req,resp)=>{
    let homework= new Homework(req.body);
    let result = await homework.save();
    resp.send(req.body)

});

app.post("/login", async (req,resp)=>{
    
    if(req.body.email && req.body.password && req.body.category)
    {
        if( Admin.findOne(req.body))
        {
            let admin= await Admin.findOne(req.body).select("-password");
                if(admin)
                {
                    Jwt.sign({admin}, jwtKey, {expiresIn:"2h"},(err,token)=>
                    {
                    if(err)
                    {
                        resp.send("Something went wrong")  
                    }
                    resp.send({user:admin,auth:token})
                    })
                    
                }

             else( Teacher.findOne(req.body))
                {
                    let teacher= await Teacher.findOne(req.body).select("-password");
                    if(teacher){
                        Jwt.sign({teacher}, jwtKey, {expiresIn:"2h"},(err,token)=>
                        {
                        if(err)
                        {
                            resp.send("Something went wrong")  
                        }
                        resp.send({user:teacher,auth:token})
                        })
                    }
                    else
                    {
                        let student= await Student.findOne(req.body).select("-password");
                        if(student){
                            Jwt.sign({student}, jwtKey, {expiresIn:"2h"},(err,token)=>
                            {
                            if(err)
                            {
                                resp.send("Something went wrong")  
                            }
                            resp.send({user:student,auth:token})
                            })
                        }
                    }
                }
        }
        else
        {
            resp.send({resut:'no userfound'})
        }
    }
});

app.get("/students-list",verifyToken, async(req,resp)=>{
    let students= await Student.find();
    if(students.length>0){
        resp.send(students)
    }else{
        resp.send({result:"No Student data found"})
    }

});

app.get("/teachers-list",  async(req,resp)=>{
    let teachers= await Teacher.find();
    if(teachers.length>0){
        resp.send(teachers)
    }else{
        resp.send({result:"No Student data found"})
    }

});

app.get("/leave-list",  async(req,resp)=>{
    let leave= await Leave.find();
    if(leave.length>0){
        resp.send(leave)
    }else{
        resp.send({result:"No Leave data found"})
    }

});
app.get("/notice-list",  async(req,resp)=>{
    let notice= await Notice.find();
    if(notice.length>0){
        resp.send(notice)
    }else{
        resp.send({result:"No Notice found"})
    }

});

app.get("/homework-list",  async(req,resp)=>{
    let homework= await Homework.find();
    if(homework.length>0){
        resp.send(homework)
    }else{
        resp.send({result:"No homework found"})
    }

});

 app.delete("/student/:id",   async(req,resp)=>{
     const result =await Student.deleteOne({_id:req.params.id })
     resp.send(result);
 });

 app.delete("/homework/:id",   async(req,resp)=>{
    const result =await Student.deleteOne({_id:req.params.id })
    resp.send(result);
});

app.delete("/leave/:id",   async(req,resp)=>{
    const result =await Leave.deleteOne({_id:req.params.id })
    resp.send(result);
});

 app.delete("/notice/:id",   async(req,resp)=>{
    const result =await Notice.deleteOne({_id:req.params.id })
    resp.send(result);
});

 app.delete("/teacher/:id",  async(req,resp)=>{
    const result =await Teacher.deleteOne({_id:req.params.id })
    resp.send(result);
});

app.get("/student/:id",  async(req,resp)=>{
    const result =await Student.findOne({_id:req.params.id });
   if(result){
     resp.send(result)
    }
   else{ resp.send({result:"No Record Found"})
}
});



app.put("/teacher/:id",  async(req,resp)=>{
   let result= await Teacher.updateOne(
    { _id: req.params.id } ,
    {$set : req.body}
   )
   resp.send(result)
});

app.get("/teacher/:id",  async(req,resp)=>{
    const result =await Teacher.findOne({_id:req.params.id });
   if(result){
     resp.send(result)
    }
   else{ resp.send({result:"No Record Found"})
}
});



app.put("/student/:id",  async(req,resp)=>{
   let result= await Student.updateOne(
    { _id: req.params.id } ,
    {$set : req.body}
   )
   resp.send(result)
});


function verifyToken(req,resp,next){
    let token =req.headers['authorization'];
    token = token.split(' ')[1];
    if(!token)return null;
        
        try{
         Jwt.verify(token,jwtKey);
         next();
        }
         catch{
            return resp.send({result: "somthing wrong"});
         }
   
    
}

app.listen(5000);