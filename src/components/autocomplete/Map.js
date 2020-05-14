import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_API_KEY } from "./../../config/keys";
import { RoomRounded } from "@material-ui/icons";

const AnyReactComponent = () => (
  <div>
    <RoomRounded style={{ fontSize: 35, color: "#37ad7f" }} />
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: this.props.longLat?.lat,
      lng: this.props.longLat?.lng,
    };
  }
  static defaultProps = {
    center: {
      lat: this.state?.lat,
      lng: this.state?.lng,
    },
    zoom: 11,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      lat: nextProps.longLat?.lat,
      lng: nextProps.longLat?.lng,
    });
  }

  render() {
    return (
      <div style={{ height: "180px", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: GOOGLE_MAP_API_KEY }}
          center={{
            lat: this.state.lat || 59.95,
            lng: this.state.lng || 30.33,
          }}
          zoom={11}
        >
          <AnyReactComponent lat={this.state?.lat} lng={this.state?.lng} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
