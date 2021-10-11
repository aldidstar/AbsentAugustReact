import React, { useState } from "react";
// import { loadUser } from "../actions/users";
import { useDispatch } from "react-redux";
import moment from "moment";



export default function UserItem(props) {
  const initialUserState = {
    name: "",
    phone: "",
    edit: true,
  };

  const [user, setUser] = useState(initialUserState);

  // const dispatch = useDispatch();

  const handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setUser({...user, [name]: value})
   
  };


  

  return (
    <tr>
      <td>{props.index}</td>
      <td>{props.Emp_No}</td>
      <td>{props.Name}</td>
      <td>{moment(props.Date).format('MM/DD/YYYY')}</td>
      <td>{props.On_duty}</td>
      <td>{props.Off_duty}</td>
      <td>{props.Clock_In}</td>
      <td>{props.Clock_Out}</td>
      <td>{props.Late}</td>
      <td>{props.Early}</td>
      <td>{props.Absent}</td>

    </tr>
  );
}
