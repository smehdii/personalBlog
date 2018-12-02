import styled from "styled-components";

const StyledHeader = styled.header``;

import React, { Component } from "react";

export default class Header extends Component {
  // state = {
  //   opened: false
  // };
  // toggle = () => {
  //   this.setState({
  //     opened: !this.state.opened
  //   });
  // };
  render() {
    return (
      <StyledHeader>
        <div className="header">
          <h2>Header</h2>
        </div>
        {/* {this.state.opened ? <h1>Opened</h1> : <h1>Closed</h1>}
        <button onClick={this.toggle}> Toogle</button> */}
      </StyledHeader>
    );
  }
}
