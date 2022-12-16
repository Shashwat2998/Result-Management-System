//importing student model
//const Student = require('../models/student');
const database = require('../database')
const student_login_get = (req, res) => {
       res.render("student/login");
    };

const student_login_post = async (req, res) => {

        const Sturoll = req.body.roll;   
        const query = "select * from student_details where rollno = "+Sturoll;
        database.query(query,function(err,individualStudent){
          if(err){
            throw err
          }
          else{
            console.log("Student view")
            console.log(individualStudent)
            res.render("student/view", { one : individualStudent});
          }
        })

        
        
    };

//exporting student controller functions
module.exports={
    student_login_get,
    student_login_post
}