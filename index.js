//index.js
const express = require("express");
const cors = require("cors")

// const multer = require('multer')
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const usermodel= require("./model/user");
const trainmodel = require("./model/training");
const recruitmodel = require("./model/recruitment");
const employeemodel = require("./model/employee");
// const employeeprofilemodel = require("./model/employeeprofile");
const grievancemodel = require("./model/grievance");
const loginemodel = require("./model/userlogin");




const app = new express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.use(cors());
//api creation
app.get('/', (request, response) => {
    response.send("hi database")
})
app.post('/logins', async (request, response) => {
    const { hrid, password } = request.body;
  
    try {
      const user = await usermodel.findOne({ hrid, password });
  
      if (user) {
        response.json({ success: true, message: 'Login successful' });
      } else {
        response.json({ success: false, message: 'Invalid HR ID or Password' });
      }
    } catch (error) {
      response.status(500).json({ success: false, message: 'Error during login' });
    }
  });
//login retrieving
app.get('/logins',async(request,response)=>{
    var data = await usermodel.find();
    response.send(data)
})

app.get('/trainingview',async(request,response)=>{
    var data = await trainmodel.find();
    response.send(data)
    })
app.get('/trainingview',async(request,response)=>{
     var data = await trainmodel.find();
     response.send(data)
     })

//for delete
app.put('/remove/:id',async(request,response)=>{
        let id = request.params.id
        await trainmodel.findByIdAndUpdate(id)
        response.send("Record deleted")
        })    
        
app.put('/trainingedit/:id', async(request,response)=>{
let id = request.params.id
await trainmodel.findByIdAndUpdate(id,request.body)
response.send("Record Deleted")
})
//For Submit button
app.post('/new',(request,response)=>{
    console.log(request.body)
    new trainmodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })



app.listen(4005, (request, response) => {
        console.log("port is running in 4005")
    })


//For Submit button
app.post('/new1',(request,response)=>{
    console.log(request.body)
    new recruitmodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })
app.get('/recruitmentview',async(request,response)=>{
        var data = await recruitmodel.find();
        response.send(data)
        })
app.get('/recruitmentview',async(request,response)=>{
            var data = await recruitmodel.find();
            response.send(data)
            })
app.put('/recruitmentedit/:id', async(request,response)=>{
        let id = request.params.id
         await recruitmodel.findByIdAndUpdate(id,request.body)
        response.send("Record Deleted")
         })
app.put('/remove1/:id',async(request,response)=>{
         let id = request.params.id
         await recruitmodel.findByIdAndUpdate(id)
         response.send("Record deleted")
        }) 

//employee
app.post('/new2',(request,response)=>{
    console.log(request.body)
    new employeemodel(request.body).save();
    response.send("Record Sucessfully Saved")
    })
app.get('/employeeview',async(request,response)=>{
        var data = await employeemodel.find();
        response.send(data)
        })
app.get('/employeeview',async(request,response)=>{
            var data = await employeemodel.find();
            response.send(data)
            })
app.put('/employeeedit/:id', async(request,response)=>{
        let id = request.params.id
         await employeemodel.findByIdAndUpdate(id,request.body)
         response.send("Record Deleted")
          })
app.put('/remove2/:id',async(request,response)=>{
         let id = request.params.id
         await employeemodel.findByIdAndUpdate(id)
         response.send("Record deleted")
        }) 


      //emuser

app.post('/employeelogin', async (request, response) => {
  const { hrid, password } = request.body;

  try {
    const user = await loginemodel.findOne({ hrid, password });

    if (user) {
      response.json({ success: true, message: 'Login successful' });
    } else {
      response.json({ success: false, message: 'Invalid EMP ID or Password' });
    }
  } catch (error) {
    response.status(500).json({ success: false, message: 'Error during login' });
  }
});
app.get('/employeeview',async(request,response)=>{
  var data = await loginemodel.find();
  response.send(data)
})


//employeeprofile

// app.get('/employeeprofile', async (req, res) => {
//   try {
//     const employeeprofile = await employeeprofilemodel.findOne(({}, req.body, { new: true }));
//     res.json(employeeprofile);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.put('/employeeprofile', async (req, res) => {
//   try {
//     const updatedProfile = await employeeprofilemodel.findOneAndUpdate({}, req.body, { new: true });
//     res.json(updatedProfile);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });


app.get('/grievanceview',async(request,response)=>{
  var data = await grievancemodel.find();
  response.send(data)
  })





