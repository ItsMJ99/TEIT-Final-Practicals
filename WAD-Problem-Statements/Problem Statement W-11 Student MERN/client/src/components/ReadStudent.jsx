import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../bootstrap-4.0.0-dist/css/bootstrap.min.css";
import './style.css';

export default function ReadStudent() {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [filter, setFilter] = useState({
    name: '',
    Roll_No: '',
    WAD_Marks: '',
    CC_Marks: '',
    DSBDA_Marks: '',
    CNS_Marks: '',
    AI_Marks:'',
  });

  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => {
        setStudents(res.data);
        setFilteredStudents(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    let filtered = students.filter(student => {
      // Check if all filter criteria are satisfied for the current student
      return Object.keys(filter).every(key => {
        // If filter value is empty, skip this key
        if (!filter[key]) return true;
        // Check if student property contains filter value (case insensitive)
        if (!isNaN(filter[key])) {
          // For numeric fields, perform exact match
          return student[key] === parseFloat(filter[key]);
        } else {
          // For non-numeric fields, perform case-insensitive partial match
          return student[key]?.toString().toLowerCase().includes(filter[key].toLowerCase());
        }
      });
    });

    setFilteredStudents(filtered);
  };

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/deletestudent/' + id)
      .then(res => {
        console.log(res);
        setFilteredStudents(filteredStudents.filter(student => student._id !== id));
      })
      .catch(err => console.error(err));
  };

  return (
    <div className="container">
      <div className="row">
        <form className="filter-form mt-5" onSubmit={handleFilterSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="student name"
              name="name"
              value={filter.name}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="roll no"
              name="Roll_No"
              value={filter.Roll_No}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="wad marks"
              name="WAD_Marks"
              value={filter.WAD_Marks}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="cc marks"
              name="CC_Marks"
              value={filter.CC_Marks}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="dsbda marks"
              name="DSBDA_Marks"
              value={filter.DSBDA_Marks}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="cns marks"
              name="CNS_Marks"
              value={filter.CNS_Marks}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control"
              placeholder="ai marks"
              name="AI_Marks"
              value={filter.AI_Marks}
              onChange={handleFilterChange}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">Filter</button>
          </div>
        </form>
        <Link to="/add">
          <button className="btn btn-success mt-3 mb-3">Add +</button>
        </Link>
        <h5 className='mt-4 ml-4'>Total Records Found : {filteredStudents.length}</h5>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Roll No</th>
              <th>WAD Marks</th>
              <th>CC Marks</th>
              <th>DSBDA Marks</th>
              <th>CNS Marks</th>
              <th>AI Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.Roll_No}</td>
                <td>{student.WAD_Marks}</td>
                <td>{student.CC_Marks}</td>
                <td>{student.DSBDA_Marks}</td>
                <td>{student.CNS_Marks}</td>
                <td>{student. AI_Marks}</td>
                <td>
                  <Link to={`/update/${student._id}`}>
                    <button className="btn btn-primary edit-btn">Edit</button>
                  </Link>
                  <button className="btn btn-danger delete-btn" onClick={(e) => handleDelete(student._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
