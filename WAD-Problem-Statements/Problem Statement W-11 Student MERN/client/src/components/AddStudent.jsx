import React, { useState } from "react";
import "../bootstrap-4.0.0-dist/css/bootstrap.min.css";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddStudent() {
  const [student, setStudent] = useState({
    name: "",
    Roll_No: "",
    WAD_Marks: "",
    CC_Marks: "",
    DSBDA_Marks: "",
    CNS_Marks: "",
    AI_Marks: "",
  });

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    console.log(student);
    if (
      student.name.trim() === "" ||
      student.Roll_No.trim() === "" ||
      student.WAD_Marks.trim() === "" ||
      student.CC_Marks.trim() === "" ||
      student.DSBDA_Marks.trim() === "" ||
      student.CNS_Marks.trim() === "" ||
      student.AI_Marks.trim() === ""
    ) {
      alert("Please fill all the fields");
    } else {
      axios
        .post("http://localhost:3001/addStudent", student)
        .then((res) => {
          alert("Student Added Successfully");
          navigate("/");
        })
        .catch((err) => alert("Error Occurred while adding student"));
    }
  };

  return (
    <div className="container">
      <h1 className="mt-5">Add Student</h1>
      <div className="row cust-align mt-5">
        <form className="add-student-form" onSubmit={submit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="student name"
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="roll no"
              onChange={(e) => setStudent({ ...student, Roll_No: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="wad marks"
              onChange={(e) => setStudent({ ...student, WAD_Marks: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="cc marks"
              onChange={(e) => setStudent({ ...student, CC_Marks: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="dsbda marks"
              onChange={(e) => setStudent({ ...student, DSBDA_Marks: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="cns marks"
              onChange={(e) => setStudent({ ...student, CNS_Marks: e.target.value })}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="ai marks"
              onChange={(e) => setStudent({ ...student, AI_Marks: e.target.value })}
            />
          </div>
          <div className="form-group">
            <Link to="/">
              <input
                type="button"
                className="btn btn-primary mr-4"
                value="Go Back"
              />
            </Link>
            <input
              type="submit"
              className="btn btn-success ml-4"
              value="Submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
