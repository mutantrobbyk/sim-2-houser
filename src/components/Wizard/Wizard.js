import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Switch, Route } from 'react-router-dom'
import StepOne from "./StepOne"
import StepTwo from './StepTwo'
import StepThree from './StepThree'
import store from '../../store'

export default class Wizard extends Component {
    constructor(props) {
        super(props);
        const reduxState = store.getState()
        this.state = {
          houses: reduxState.houses
        };
      }
//   componentDidMount() {
//     store.subscribe(() => {
//         const reduxState = store.getState()
//         this.setState({
//           houses: reduxState.houses
//         })
//       })
//   }
  render() {
    return (
      <div>
        Wizard
        <Switch>
          <Route path="/wizard/step1" component={StepOne} />
          <Route path="/wizard/step2" component={StepTwo} />
          <Route path="/wizard/step3" component={StepThree} />
        </Switch>
      </div>
    );
  }
}
