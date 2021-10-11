import {
  DRAW_LOAD_USER,
 
} from "../constants";

const users = (state = [], action) => {
  switch (action.type) {
    case DRAW_LOAD_USER:
      return action.users.map((item) => {
        return {
          id: item.id,
          Emp_No: item.Emp_No,
          Name: item.Name,
          Date: item.Date,
          On_duty: item.On_duty,
          Off_duty: item.Off_duty,
          Clock_In: item.Clock_In,
          Clock_Out: item.Clock_Out,
          Late: item.Late,
          Early: item.Early,
          Absent: item.Absent,
         
        };
      });


    default:
      return state;
  }
};

export default users;
