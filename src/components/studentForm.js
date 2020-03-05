import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

function Student() {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    age: ""
  });
  const [created, setCreated] = useState(false);

  const handleChange = e => {
    e.preventDefault();
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleClick = e => {
    e.preventDefault();
    const newStudent = {
      firstName: student.firstName,
      lastName: student.lastName,
      age: student.age
    };

    axios
      .post("http://localhost:3010/add", newStudent)
      .then(res => console.log(res.data));

    setStudent({
      firstName: "",
      lastName: "",
      age: ""
    });
    setCreated(true);
  };
  console.log("created");

  console.log(created);
  return created ? (
    <Redirect to="/list" />
  ) : (
    <div className="container">
      <h3>Student Form</h3>
      <div className="form-group">
        <label>First Name</label>
        <input
          className="form-control"
          id="firstName"
          name="firstName"
          value={student.firstName}
          placeHolder="first Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Last Name</label>
        <input
          className="form-control"
          id="lastName"
          name="lastName"
          value={student.lastName}
          placeHolder="last Name"
          onChange={handleChange}
        />
      </div>
      <div className="form-group">
        <label>Age</label>
        <input
          className="form-control"
          id="age"
          name="age"
          value={student.age}
          placeHolder="age"
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="btn btn-primary"
        value="Register"
        onClick={handleClick}
      />
    </div>
  );
}

export default Student;
