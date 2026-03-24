import React, { Component } from "react";

export default class Value extends Component {

  render(){
    return(
      <div>

        <h1>{this.props.x}</h1>
        <h1>{this.props.z}</h1>

      </div>
    )
  }

}