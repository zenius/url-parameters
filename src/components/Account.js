import React from "react";

const Account = ({ match }) => {
  console.log(match);
  return (
    <div>
      <span>{match.params.id}</span>
    </div>
  );
};
export default Account;
