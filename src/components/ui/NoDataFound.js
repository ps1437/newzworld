import React from "react";

export const NoDataFound = props => {
  const { data } = props;
  return data && data.length === 0 ? (
    <div className="container alert alert-info fade-in">No News Found </div>
  ) : null;
};

