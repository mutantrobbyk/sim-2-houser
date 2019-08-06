import React, { Component } from "react";

export default class House extends Component {
  render() {
    const { el } = this.props;
    return (
      <div className='housebox'>
        <img className="realimage" src={el.img} alt="" />
        <div>
          <p>{el.name}</p>
          <p>{el.address}</p>
          <p>{el.city}</p>
          <p>{el.state}</p>
          <p>{el.zip}</p>
          <p>${el.mortgage}</p>
          <p>${el.rent}</p>
          <button onClick={() => {
            this.props.deleteHouse(el.id)
          }}>delete</button>
        </div>
      </div>
    );
  }
}
