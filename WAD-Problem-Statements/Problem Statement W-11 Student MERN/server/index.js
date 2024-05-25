import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import StudentModel from './models/student.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb url');

app.get('/',(req,res)=>{
    StudentModel.find({})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.post('/addstudent',(req,res)=>{
    StudentModel.create(req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.put('/updatestudent/:id',(req,res)=>{
    const id = req.params.id;
    StudentModel.findByIdAndUpdate({_id:id},req.body)
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.get('/getstudent/:id',(req,res)=>{
    const id = req.params.id;
    StudentModel.findById({_id:id})
    .then(student => res.json(student))
    .catch(err => res.json(err))
})

app.delete('/deletestudent/:id', (req, res) => {
  const id = req.params.id;
  StudentModel.findByIdAndDelete({_id: id})
    .then(student => res.json(student))
    .catch(err => res.json(err))
});


app.listen(3001,()=>{
    console.log('listening on port 3001');
})

// app.get("/getMarks", (req, res) => {
//   console.log(req.query);
//   Student.find(req.query)
//     .then((student) => {
//       res.render("table", { student: student });
//     })
//     .catch((err) => {
//       res.json({ message: "err" });
//     });
// });
// app.get("/dsbdaGreaterThan20", (req, res) => {
//   Student.find({ dsbda_marks: { $gt: 20 } })
//     .then((student) => {
//       res.render("table", { student: student });
//     })
//     .catch((err) => {
//       res.json({ message: "err" });
//     });
// });

// app.get("/wadccGreaterThan40", (req, res) => {
//   Student.find({ wad_marks: { $gt: 40 }, cc_marks: { $gt: 40 } })
//     .then((student) => {
//       res.render("table", { student: student });
//     })
//     .catch((err) => {
//       res.json({ message: "err" });
//     });
// });