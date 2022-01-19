# React Components Basics Lab

## Learning Goals

- Write basic React components
- Return one React component from another component

## Instructions

In the labs throughout this section, we'll be working on building a small
portfolio site in React.

Our goal for the first lesson is to get the basic components for our app — the
`<Navbar>`, `<Home>`, and `<About>` components — to be returned from the `<App>`
component.

Once we're done, we should get something like this:

![app demo](https://curriculum-content.s3.amazonaws.com/react/demo.png)

For this lab, we will be rendering a few children components in our top-most
component: `App`. All of our work will be done in `src/components/App.js`. The
rest of the files shouldn't need any changes.

To set up the app and run it in the browser, run:

```console
$ npm install
$ npm start
```

To start, work on getting the app to match the screenshot above. Then, open up a
second terminal (open to the same directory), and run `learn test` or `npm test`
to check your work.

## Deliverables

- Two components, `<Navbar>` and `<Home>`, are already defined in the `App.js`
  file. Add both of these components as _child_ components of `<App>` by
  including them in the return statement for the `App` function.

- Create a third component, `<About>`. The `<About>` component should also be a
  _child_ component of `<App>`.

  - The `<About>` component should return a `<div>` with an id of `about`. To
    match the screenshot, the div should contain an `<h2>` element with the text
    "About." However, as long as it has an id of `about`, it will pass the test!

**Hint**: If you're stuck, try using the `screen.debug` method in the test file
to see what DOM elements are being returned by your `<App>` component. If you
still need help, this lab (and others) have a [solution branch][] on GitHub
where you can see one possible solution to this lesson.

## Resources

- [React Components](https://reactjs.org/docs/components-and-props.html)

[solution branch]:
  https://github.com/learn-co-curriculum/react-hooks-running-tests/tree/solution
