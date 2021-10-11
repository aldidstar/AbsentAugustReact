import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import UserItem from "./UserItem";
import { loadUser } from "../actions/users";

export default function UserList(props) {

  const { users } = useSelector(
    (state) => ({
      users: state.users,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  let nodeList = users.map((item, index) => <UserItem {...item} key={index} index={index + 1} />);

  return (
    <div id="table-data">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Emp_No</th>
            <th>Name</th>
            <th>Date</th>
            <th>On_duty</th>
            <th>Off_duty</th>
            <th>Clock_In</th>
            <th>Clock_Out</th>
            <th>Late</th>
            <th>Early</th>
            <th>Absent</th>
           
          </tr>
        </thead>
        <tbody>{nodeList}</tbody>
      </table>
    </div>
  );
}
