import React, { Component } from "react";
import M from "../../components/Map";
//import { getFarms } from "../../services/farmsServices";
// import { logout } from "../../auth";
import FarmInfo from "../../components/FarmInfo";
class Home extends Component {
  state = {
    isloading: true,
    farms: []
  };
  componentDidMount() {
    fetch("http://localhost:5000/api/farms/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          farms: data,
          isloading: false
        })
      );
  }
  render() {
    if (this.state.farms === null) return null;
    return (
      <div className="row">
        <div className="col ">
          <M />
        </div>
        <div className="col ">
          <FarmInfo
            name={!this.state.isloading ? this.state.farms[1].name : "Loading"}
            culture={
              !this.state.isloading ? this.state.farms[1].culture : "Loading"
            }
            variety={
              !this.state.isloading ? this.state.farms[1].variety : "Loading"
            }
            estimation={
              !this.state.isloading ? this.state.farms[1].estimation : "Loading"
            }
            total={
              !this.state.isloading ? this.state.farms[1].total : "Loading"
            }
            price={
              !this.state.isloading ? this.state.farms[1].price : "Loading"
            }
          />
        </div>
      </div>
    );
  }
}

export default Home;
