# React Components Basics Lab

## Objectives

- Practice rendering static children components
- Have some fun with the rendered components in the browser

## Instructions

In the labs throughout this section, we'll be working on building a small
portfolio site in React.

Our goal for the first lesson is to get the basic components for our app &mdash; the
`<Navbar>`, `<Home>`, and `<About>` components &mdash; to be returned from the
`<App>` component.

Once we're done, we should get something like this:

![app demo](https://curriculum-content.s3.amazonaws.com/react/demo.png)

For this lab, we will be rendering a few children components in our top-most
component: `App`. All of our work will be done in `src/components/App.js`, the rest of the
source files shouldn't need any alterations.

Begin with `npm install`. Examine what is rendering in the browser with
`npm start`. To start, work on getting the app to match the screenshot above. Then, open up a second terminal (open to the same directory), and run `learn test` or `npm test` to check your work.

## Deliverables

- Two components, `<Navbar>` and `<Home>`, are already defined in the `App.js`
  file. Display both of these components as _child_ components of `<App>`.

- Create a third component, `<About>`. The `<About>` component should also be a
  _child_ component of `<App>`.

  - The `<About>` component should return a `<div>` with an id of `about`. The
    div can also optionally have some additional text content and other elements
    inside &mdash; as long as it has an id of `about`, it will pass the test!


## Resources

- [React Components](https://reactjs.org/docs/components-and-props.html)
