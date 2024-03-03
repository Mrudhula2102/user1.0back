const express = require("express");
const cors = require("cors")
const usermodel= require("./model/user");
const trainmodel = require("./model/training");
const recruitmodel = require("./model/recruitment");
const employeemodel = require("./model/employee");
const grimodel = require("./employeeside/grievance");
const loginemodel = require("./model/logine");





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
/
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

//grievance
///save data button
app.post('/grievance',(request,response)=>{
  console.log(request.body)
  new grimodel(request.body).save();
  response.send("Record Sucessfully Saved")
  })
 
 
  //dashboard
//   const getEmployeeStatusCount = async () => {
//   try {
//       return 6;
//   } catch (error) {
//       console.error('Error fetching employee status count:', error);
//       return null;
//   }
// };

// const getTrainingCount = async () => {
//   try {
//     return 5;
//   } catch (error) {
//       console.error('Error fetching training count:', error);
//       return null;
//   }
// };

// const getProfileCount = async () => {
//   try {
//       // Your logic to fetch profile count from database
//       return 33; // For example
//   } catch (error) {
//       console.error('Error fetching profile count:', error);
//       return null;
//   }
// };

// // Endpoint to fetch dashboard data
// app.get('/dashboarddata', async (req, res) => {
//   try {
//       const EmployeeStatusCount = await getEmployeeStatusCount();
//       const TrainingCount = await getTrainingCount();
//       const profileCount = await getProfileCount();
//       res.json({ EmployeeStatusCount,TrainingCount, profileCount });
//   } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });
// //employee dashboard
// //dashboard
//   const getleaveCount= async () => {
//   try {
//       return 6;
//   } catch (error) {
//       console.error('Error fetching employee status count:', error);
//       return null;
//   }
// };

// const getgrievanceCountt = async () => {
//   try {
//     return 5;
//   } catch (error) {
//       console.error('Error fetching training count:', error);
//       return null;
//   }
// };

// const getProfileCountt = async () => {
//   try {
//       // Your logic to fetch profile count from database
//       return 33; // For example
//   } catch (error) {
//       console.error('Error fetching profile count:', error);
//       return null;
//   }
// };

// // Endpoint to fetch dashboard data
// app.get('/dashboarddata', async (req, res) => {
//   try {
//       const leaveCount = await getleaveCount();
//       const grievanceCountt = await getgrievanceCountt();
//       const profileCountt = await getProfileCountt();
//       res.json({ leaveCount, grievanceCountt, profileCountt });
//   } catch (error) {
//       console.error('Error fetching dashboard data:', error);
//       res.status(500).json({ error: 'Internal server error' });
//   }
// });

app.get('/grievanceview',async(request,response)=>{
    var data = await grimodel.find();
    response.send(data)
    })
