import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import store, {STEP_ONE} from '../../store'


class StepOne extends Component {
    constructor () {
        const reduxState = store.getState ()
        super()
            this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zipcode: reduxState.zipcode
            }
        

    }
    handleChange = e => {
        this.setState({
            [e.target.placeholder]: e.target.value
        })
    }
    submit = () => {
        store.dispatch({
            type: STEP_ONE,
            payload: this.state
        })
    }
render() {
    return (
        <div className="StepOne">
 <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="name"
          value={this.state.name}
        />
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="address"
          value={this.state.address}
        />
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="city"
          value={this.state.city}
        />
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="state"
          value={this.state.state}
        />
        <input
          onChange={e => this.handleChange(e)}
          type="text"
          placeholder="zipcode"
          value={this.state.zipcode}
        />
            <div>
                <Link to='/'>
                <button>Go Back</button>
                </Link>
                <Link to={{pathname:'/wizard/step2', state:{}}}>
                    <button onClick={this.submit}>Next</button>
                </Link>
            </div>
        </div>
    );
}
}

export default StepOne;