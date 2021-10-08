import React, { useContext } from "react";
import { UserContext } from "./UserContext";

// This component displays name from Context
const UserOutput = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2 className="Contextoutputtext">
        <strong>Output</strong>: {user.name}
      </h2>
    </div>
  );
};

export default UserOutput;
