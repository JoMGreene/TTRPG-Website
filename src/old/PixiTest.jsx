import { DisplacementFilter } from "pixi.js";
import { Stage, Container, Sprite, withPixiApp } from "@pixi/react";
import React from "react";

const image = '../src/assets/david-marcu-1.jpg'

const width = 1000;
const height = 1000;

const PixiTest = withPixiApp(
  class extends React.Component {
    i = 0;

    state = {
      x: 0,
      rotate: 0,
      scale: 1
    };

    componentDidMount() {
      this.props.app.ticker.add(this.tick);
    }

    componentWillUnmount() {
      this.props.app.ticker.remove(this.tick);
    }

    tick = (delta) => {
      this.i += 0.05 * delta;
      this.setState((state) => ({
        x: Math.sin(this.i) * (width / 10),
        rotate: (Math.cos(this.i) * width) / 100,
        scale: 1 + Math.sin(this.i) * 0.5
      }));
    };

    render() {
      const { x, rotate, scale } = this.state;
      return (
        <Container
          rotation={rotate}
          pivot={50}
          width={width}
          height={height}
          position={[width / 2, height / 2]}
          scale={scale}
        >
          <Sprite anchor={0.5} image={image} x={0} y={0} />
          <Sprite anchor={0.5} image={image} x={50} y={50} />
          <Sprite anchor={0.5} image={image} x={100} y={100} />
        </Container>
      );
    }
  }
);

export default PixiTest