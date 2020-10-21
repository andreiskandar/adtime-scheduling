import React, { useEffect, useState } from "react";
import "./styles.scss";
import { auth, manager as managerService } from "services";

export default () => {
  const [managers, setManagers] = useState([]);
  
  useEffect(() => {
    async function invoke() {
      setManagers(await managerService.list());
    }
    invoke()
  }, []);
  
  return (
    <>
      <h1>Manager Page</h1>
      {managers.map((manager) => {
        return (
          <div>
            {manager.firstName}
            {manager.lastName}
          </div>
        );
      })}
      <button
        {...{
          onClick: () => auth.logout(),
          type: "submit",
        }}
      >
        Logout
      </button>
    </>
  );
};
