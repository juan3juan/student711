import React, { useState } from "react";


function Student() {

  const [student, setStudent] = useState({
    firstName:"",
    lastName:"",
    age:""
  });
  const [students, setStudents] = useState([]);
  
  const handleChange = e =>{
      e.preventDefault();
        setStudent({...student,[e.target.name]: e.target.value});
  }
  
  const handleClick = e =>{
      e.preventDefault();
      setStudents([...students, student]);
  }

  console.log(students);

  return (
    <>
    <h3>Student Form</h3>
    <input id="firstName" name="firstName" value={student.firstName} placeHolder="first Name" onChange={handleChange}/>
    <br/>
    <input id="lastName" name="lastName" value={student.lastName} placeHolder="last Name" onChange={handleChange}/>
    <br/>
    <input id="age" name="age" value={student.age} placeHolder="age" onChange={handleChange}/>
    <br/>
    <input type="submit" value="Register" onClick={handleClick} />

    </>
  );
}

export default Student;
