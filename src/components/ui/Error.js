import React from "react";

export const Error = props => {
  const { errorMsg } = props;
  return errorMsg ? (
    <div className="container alert alert-danger">{errorMsg} </div>
  ) : null;
};

