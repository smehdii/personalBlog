import _ from "lodash";
import React, { Component } from "react";
import { Container, Icon, Image, Menu, Visibility } from "semantic-ui-react";
import Layout from "../components/Layout";

const overlayStyle = {
  float: "left",
  margin: "0em 3em 1em 0em"
};

const fixedOverlayStyle = {
  ...overlayStyle,
  position: "fixed",
  top: "80px",
  zIndex: 10
};

const overlayMenuStyle = {
  position: "relative",
  left: 0,
  transition: "left 0.5s ease"
};

const fixedOverlayMenuStyle = {
  ...overlayMenuStyle,
  left: "800px"
};

const LeftImage = () => (
  <Image
    floated="left"
    size="medium"
    src="/images/wireframe/square-image.png"
    style={{ margin: "2em 2em 2em -4em" }}
  />
);

const RightImage = () => (
  <Image
    floated="right"
    size="medium"
    src="/images/wireframe/square-image.png"
    style={{ margin: "2em -4em 2em 2em" }}
  />
);

const Paragraph = () => (
  <p>
    {[
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ",
      "tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ",
      "semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ",
      "ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ",
      "fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ",
      "Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ",
      "neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ",
      "accumsan porttitor, facilisis luctus, metus"
    ].join("")}
  </p>
);

export default class StickyLayout extends Component {
  state = {
    overlayFixed: false
  } as any;

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
    }
  };

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  stickOverlay = () => this.setState({ overlayFixed: true });

  render() {
    const { overlayFixed, overlayRect } = this.state;

    return (
      <Layout>
        <Container text>
          {_.times(3, i => (
            <Paragraph key={i} />
          ))}

          {/* Example with overlay menu is more complex, SUI simply clones all elements inside, but we should use a
              different approach.
              An empty Visibility element controls the need to change the fixing of element below, it also uses height
              and width params received from its ref for correct display.
            */}
          <Visibility
            offset={80}
            once={false}
            onTopPassed={this.stickOverlay}
            onTopVisible={this.unStickOverlay}
            style={overlayFixed ? { ...overlayStyle, ...overlayRect } : {}}
          />

          <div
            ref={this.handleOverlayRef}
            style={overlayFixed ? fixedOverlayStyle : overlayStyle}
          >
            <Menu
              icon="labeled"
              style={overlayFixed ? fixedOverlayMenuStyle : overlayMenuStyle}
              vertical
            >
              <Menu.Item>
                <Icon name="twitter" />
                Twitter
              </Menu.Item>

              <Menu.Item>
                <Icon name="facebook" />
                Share
              </Menu.Item>

              <Menu.Item>
                <Icon name="mail" />
                Email
              </Menu.Item>
            </Menu>
          </div>

          {_.times(3, i => (
            <Paragraph key={i} />
          ))}
          <LeftImage />

          <Paragraph />
          <RightImage />

          {_.times(4, i => (
            <Paragraph key={i} />
          ))}
          <LeftImage />

          <Paragraph />
          <RightImage />

          {_.times(2, i => (
            <Paragraph key={i} />
          ))}
        </Container>
      </Layout>
    );
  }
}
