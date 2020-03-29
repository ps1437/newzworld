import React from "react";

export const NoDataFound = props => {
  const { data } = props;
  return data && data.length === 0 ? (
    <div className="alert alert-info">No News Found </div>
  ) : null;
};

