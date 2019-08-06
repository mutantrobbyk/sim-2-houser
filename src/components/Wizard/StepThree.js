import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { STEP_THREE, RETURN_TO_STATE } from "../../store";
import axios from "axios";

class StepThree extends Component {
    constructor () {
        const reduxState = store.getState ()
        super ()
        this.state = {
          mortgage: reduxState.mortgage,
          rent: reduxState.rent
        };
    }
  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };
  goBackStoreState = () => {
      store.dispatch({
          type: STEP_THREE,
          payload: this.state
      })
  }
  submit = () => {
    store.dispatch({
      type: STEP_THREE,
      payload: this.state
    });
    let reduxState = store.getState();
    axios.post("/api/houses", reduxState).catch(err => alert(err));
    store.dispatch({
      type: RETURN_TO_STATE,
      payload: this.state
    });
  };
  getThings() {
    axios.get("/api/houses").then(res => {
      this.setState({
        inventory: res.data
      });
    });
  }
  backToDashboard() {
    const { history } = this.props;
    history.push("/");
  }
  render() {
    return (
      <div className="StepThree">
        <Link to="/wizard/step2">
          <button onClick={this.goBackStoreState}>Go Back</button>
        </Link>
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="mortgage"
          value={this.state.mortgage}
        />
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="rent"
          value={this.state.rent}
        />
        <button
          onClick={() => {
            this.submit();
            this.getThings();
            this.setState({
              name: "",
              address: "",
              city: "",
              state: "",
              zipcode: 0,
              img: "",
              mortgage: 0,
              rent: 0
            });
            this.backToDashboard();
          }}
        >
          Submit
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default StepThree;
