import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function StudentList() {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3010/students")
      .then(res => {
        setStudents(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [students]);

  return (
    <div>
      <h3>Students List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>Responsible</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => {
            return (
              <tr key={i}>
                <td>{student.firstName}</td>
                <td>{student.lastName}</td>
                <td>{student.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
