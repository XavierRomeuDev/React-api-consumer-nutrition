import React from "react";

export const EmptyDatabase = () => {
  return (
    <div className="col-md-16">
      <div className="card mb-1">
        <div className="card-body">
          <div className="empty-data">
            <h2> Sorry, there's no data to retrieve on the program database</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
