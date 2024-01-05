import React, { useState, useEffect } from "react";
import axios from "axios";

export default function AllStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      try {
        const response = await axios.get("http://localhost:400/student/");
        setStudents(response.data);
      } catch (error) {
        console.error("Error fetching students:", error);
        alert("An error occurred while fetching students.");
      }
    }

    getStudents();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:400/delete/${id}`);
      alert(response.data.message);
  
      if (response.data.success) {
        // Update the state by excluding the deleted student
        setStudents((prevStudents) => prevStudents.filter((student) => student.id !== id));
      }
    } catch (error) {
      console.error("Error deleting student:", error); // Log the actual error
      alert(`An error occurred while deleting the student. Details: ${error.message}`);
    }
  };

  return (
    <div className="container">
      <h1>All Students</h1>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Gender</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                <button className="btn btn-edit">EDIT</button>
                <button
                  className="btn btn-delete"
                  onClick={() => handleDelete(student.id)}
                >
                  DELETE
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}