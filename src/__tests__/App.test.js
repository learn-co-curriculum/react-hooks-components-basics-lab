import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import App from "../components/App";

test("renders without errors", () => {
  expect(() => render(<App />)).not.toThrow();
});

test("renders the child component <Home />", () => {
  const { container } = render(<App />);

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
  // screen.debug();

  expect(container.querySelector("#home")).toBeInTheDocument();
});

test("renders the child component <About />", () => {
  const { container } = render(<App />);

  /*
    Uncomment the line below to see the DOM elements being returned
    by the App component in your terminal when you run the tests
  */
  // screen.debug();

  expect(container.querySelector("#about")).toBeInTheDocument();
});

test("renders the child component <About /> with id='about'", () => {
  const { container } = render(<App />);

  expect(container.querySelector("#about")).toHaveAttribute('id', 'about')
});


test("renders <About /> component with child h2 HTML element", () => {
  const { container } = render(<App />);

  const About = container.querySelector("#about")

  expect(About.querySelector("h2")).toBeInTheDocument();
  expect(About.querySelector("h2")).toHaveTextContent("About")
})