# React Components Basics Lab

## Objectives

- Practice rendering static children components
- Have some fun with the rendered components in the browser

## Instructions

In this lab, we will be rendering a few children components in our top-most
component: `App`. All of our work will be done in `src/App.js`, the rest of the
components/source files shouldn't need any alterations.

Begin with `npm install`. Examine what is rendering in the browser
with `npm start`. You should see an error we need to fix!

In the labs throughout this section, we'll be working on building a small portfolio site in React.

Our goal for the first lesson is to get the basic components for our app -- the
`<Navbar>`, `<Home>`, and `<About>` components -- to be returned from the
`<App>` component.

Once we're done, we should get something like this:

<!-- demo image here -->

## Deliverables

- Two components have not been properly imported in `src/App.js`. Identify and
  debug the issue. The stack trace when running `npm test` should point you in
  the right direction! **HINT**: take a look at the component files. One of
  these components is exported by `default`, but the other is _not_. How does
  this change importing? If you're stuck, check out this
  [MDN article on exporting][mdn export].

- Once you have the first two components importing correctly, import and render
  a third component, `About`. In total, `App` needs to render three
  children components:

  1. `NavBar`
  2. `Home`
  3. `About`

- Once the tests are passing, make sure to check out the result in the
  browser by running `npm start`!

## Resources

- [React Components](https://reactjs.org/docs/components-and-props.html)
- [MDN article on exporting][mdn export]

[mdn export]: https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
