import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the correct child components", () => {
  const { container } = render(<App />);
  expect(container.querySelector("nav")).toBeInTheDocument();
  expect(container.querySelector("#home")).toBeInTheDocument();
  expect(container.querySelector("#about")).toBeInTheDocument();
});
