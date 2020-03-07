import React from "react";
import PropTypes from "prop-types";
const FarmForm = ({ farms }) => {
  return (
    <div>
      <center>
        <h1>Contact List</h1>
      </center>
      {farms.map(farm => (
        <div className="card" key={farm.id}>
          <div className="card-body">
            <h5 className="card-title">{farm.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};
FarmForm.propTypes = {
  farms: PropTypes.array
};

export default FarmForm;
