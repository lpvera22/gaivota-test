import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
// import L from "leaflet";
//import farm_221 from "../farm_221.GeoJSON";
//import farm_231 from "../../../data/farm_231.GeoJSON";
//import farm_271 from "../../../data/farm_271.GeoJSON";

const styles = {
  wrapper: {
    height: 400,
    width: "80%",
    margin: "0 auto",
    display: "flex"
  },
  map: {
    flex: 1
  }
};

class M extends Component {
  state = {
    url:
      " https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.png",
    center: [27.9361805667694, -15.589599609374998],
    zoom: 10
  };
  render() {
    return (
      <div style={styles.wrapper}>
        <Map 
          style={styles.map} center={this.state.center} zoom={this.state.zoom}>
          <TileLayer url={this.state.url} />
        </Map>
      </div>
    );
  }
}
 
export default M;

