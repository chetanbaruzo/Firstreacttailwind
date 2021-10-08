import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UserInput = () => {
  // useContext hook, subscribe to the context data. Update the name displayed to use the data from context.
  const user = useContext(UserContext);

  return (
    <div>
      <input className="Contextinputtext" onChange={(e) => user.setName(e.target.value)} placeholder="write anything..."/>
    </div>
  );
};

export default UserInput;
