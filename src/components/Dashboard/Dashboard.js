import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Dashboard extends Component {
  constructor () {
    super ()
    this.state = {
      houses: []
    };
    this.deleteHouse = this.deleteHouse.bind(this)
  }
  
  componentDidMount() {
    axios.get("/api/houses").then(res => {
      this.setState({
        houses: res.data
      });
    });
  }
  deleteHouse = async id => {
    let result = await axios.delete(`/api/houses/${id}`)
    console.log(result.data)
      this.setState({
        houses: result.data
      })
  }
  render() {
    return (
      <div>
        <div>
          <Link to="/wizard/step1">
            <button>Add New Property</button>
          </Link>
        </div>
        {this.state.houses.map(el => {
          return <House deleteHouse={this.deleteHouse} el={el} key={el.id} />;
        })}
      </div>
    );
  }
}
