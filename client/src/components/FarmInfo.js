import React from "react";
import { PropTypes } from "prop-types";

const FarmInfo = props => {
  return (
    <div>
      <div className="card" style={{ width: "40%" }}>
        <div className="card-body">
          <h4 className="card-title">{props.name}</h4>
          <p>
            Culture: {props.culture}
            <br />
            Variety: {props.variety}
            <br />
            Yield Estimation: {props.estimation}
            <br />
            Total: {props.variety}
            <br />
            Price: {props.price}
            <br />
          </p>
        </div>
        <div
          className="card-footer justify-content-between"
          style={{ aligncontent: "flex-end", display: "flex" }}
        >
          <button
            className="btn btn-success"
            style={{ width: "auto", marginright: "5%" }}
          >
            Buy now
          </button>
          <button className="btn btn-danger" style={{ width: "auto" }}>
            Bid
          </button>
        </div>
      </div>
    </div>
  );
};

FarmInfo.propTypes = {
  name: PropTypes.string,
  culture: PropTypes.string,
  variety: PropTypes.string,
  estimation: PropTypes.number,
  price: PropTypes.number
};

export default FarmInfo;
