import * as React from "react";

export default class Home extends React.Component {
  render() {
    return (
      <a href="http://localhost:4000/auth/github">
        <button>login with github</button>
      </a>
    );
  }
}
