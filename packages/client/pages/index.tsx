import * as React from "react";
import { Button } from "@personalblog/ui";

export default class Index extends React.Component {
  render() {
    return (
      <a href="http://localhost:4000/auth/github">
        <Button>login with github</Button>
      </a>
    );
  }
}
