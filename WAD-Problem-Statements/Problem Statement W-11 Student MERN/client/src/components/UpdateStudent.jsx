import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function UpdateStudent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: '',
    Roll_No: '',
    WAD_Marks: '',
    CC_Marks: '',
    DSBDA_Marks: '',
    CNS_Marks: '',
    AI_Marks: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/getstudent/${id}`)
      .then(res => {
        setStudent(res.data);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updatestudent/${id}`, student)
      .then((res) => {
        alert('Student Updated Successfully');
        navigate('/');
      })
      .catch((err) => alert('Error Occurred while updating student'));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="container">
      <h1 className="mt-5">Update Student</h1>
      <div className="row mt-5 justify-content-center">
        <form className="add-student-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              value={student.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="Roll No"
              name="Roll_No"
              value={student.Roll_No}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="WAD Marks"
              name="WAD_Marks"
              value={student.WAD_Marks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="CC Marks"
              name="CC_Marks"
              value={student.CC_Marks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="DSBDA Marks"
              name="DSBDA_Marks"
              value={student.DSBDA_Marks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="CNS Marks"
              name="CNS_Marks"
              value={student.CNS_Marks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="AI Marks"
              name="AI_Marks"
              value={student.AI_Marks}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Link to="/">
              <button type="button" className="btn btn-primary mr-4">Go Back</button>
            </Link>
            <button type="submit" className="btn btn-success ml-4">Update Student</button>
          </div>
        </form>
      </div>
    </div>
  );
}
