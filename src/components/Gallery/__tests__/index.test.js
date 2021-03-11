import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Gallery from "..";

afterEach(cleanup);

const portrait = {
  name: "portraits",
  description: "Portraits of people in my life",
};

describe("Gallery is rendering", () => {
  it("renders", () => {
    render(<Gallery currentCategory={portrait} />);
  });

  // snapshot test
  it("matches snapshot", () => {
    const { asFragment } = render(<Gallery currentCategory={portrait} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("title for h1 is rendered correclty based on input", () => {
  const { getByTestId } = render(<Gallery currentCategory={portrait} />)
  expect(getByTestId("h1tag")).toHaveTextContent("Portraits")
})