import React, { useState } from 'react'
import {  loadUser,  } from "../../actions/users";
import { useDispatch } from 'react-redux';


export default function UserSearch () {
  const dispatch = useDispatch();

    const initialUserState = {
      Name:"", Start:"", End:""
    };

    const [{ Name, Start, End }, setState] = useState(initialUserState);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setState((prevState) => ({ ...prevState, [name]: value }));
    };
  
  
    const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(loadUser(Name, Start, End));
    };
    // console.log(Emp_No, Name,Date,On_duty,Off_duty,Clock_In,Clock_Out,Late,Early,Absent)



 

    return (
      <div >
      <div className="container-add">
        <div className="text-add">
        <p>Searching Form</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div id="form-add">
          <label  className=" col-form-label d-inline">Name</label>
            <input
              type="text"
              value={Name}
              onChange={handleChange}
              name="Name"
            />
            <br/><br/>
            <label  className=" col-form-label d-inline">Date</label>
            <input
            type="date"
              className="user-input"
              name="Start"
              value={Start}
              onChange={handleChange}
            /> to 
            <input
            type="date"
              className="user-input"
              name="End"
              value={End}
              onChange={handleChange}
            />
          </div>
          <button
      
            className="w-5 btn btn-lg btn-success"
            type="submit"
            value="save"
          >
            Search
          </button>
         
        </form>
      </div>
     
      <script>
        
      </script>
      </div>
    );
  
    }
