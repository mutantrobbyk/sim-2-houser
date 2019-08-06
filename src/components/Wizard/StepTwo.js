import React, { Component } from "react";
import { Link } from "react-router-dom";
import store, { STEP_TWO } from "../../store";

class StepTwo extends Component {
    constructor () {
        const reduxState = store.getState ()
        super ()
        this.state = {
         img: reduxState.img
        };
    }
  handleChange = e => {
    this.setState({
      [e.target.placeholder]: e.target.value
    });
  };
  submit = () => {
    store.dispatch({
      type: STEP_TWO,
      payload: this.state
    });
  };
  render() {
    return (
      <div className="StepTwo">
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="img"
          value={this.state.img}
        />
        <div>
          <Link to="/wizard/step1">
            <button>Go Back</button>
          </Link>
          <Link to="/wizard/step3">
            <button onClick={this.submit}>Next</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default StepTwo;
