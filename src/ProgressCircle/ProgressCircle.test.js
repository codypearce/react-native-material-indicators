import React from "react";
import ProgressCircle from "./ProgressCircle.js";

import renderer from "react-test-renderer";

test("ProgressCircle Renders", () => {
  const tree = renderer.create(<ProgressCircle />).toJSON();
  expect(tree).toMatchSnapshot();
});
