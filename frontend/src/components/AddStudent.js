import React,{useState} from "react"
import axios from "axios";

export default function AddStudent(){


  const[name,setName]=useState("");
  const[age,setAge]=useState("");
  const[gender,setGender]=useState("");

  function sendData(e){
    e.preventDefault();
     
    const newStudent={
      name,
      age,
      gender
    }
    
    axios.post("http://Localhost:400/student/add",newStudent).then(()=>{
      alert("student added")
      setName("");
      setAge("");
      setGender("")
  }).catch((err)=>{
       alert(err)
  })
  }
    return(
        <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={sendData}>
            <div className="form-group">
              <label htmlFor="name">Student Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter student name"
                onChange={(e)=>{
                    setName(e.target.value)
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Student Age</label>
              <input
                type="text"
                className="form-control"
                id="age"
                placeholder="Enter student age"
                onChange={(e)=>{
                  setAge(e.target.value)
              }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="gender">Student Gender</label>
              <input
                type="text"
                className="form-control"
                id="gender"
                placeholder="Enter student gender"
                onChange={(e)=>{
                  setGender(e.target.value)
              }}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    )
}