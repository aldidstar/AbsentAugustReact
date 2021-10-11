import {
  DRAW_LOAD_USER,
  FAILED_LOAD_USER,
 
} from "../constants";

import axios from "axios";

const drawLoadUser = (users) => ({
  type: DRAW_LOAD_USER,
  users,
});



const failedLoadUser = () => ({
  type: FAILED_LOAD_USER,
});

export const loadUser = (Name, Start, End) => {
  
   
  return (dispatch) => {
    return axios
      .get("http://localhost:3000/users",{
        params: {
          Name, Start, End
        }
      })
      
      .then((users) => {
      
        dispatch(drawLoadUser(users.data.nama));
        
      })
      .catch(() => {
        dispatch(failedLoadUser());
      });
  };
};


