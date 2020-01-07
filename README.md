# React Static Components

## Objectives

- Practice rendering static children components
- Have some fun with the rendered components in the browser

## Instructions

In this lab, we will be rendering a few children components in our top-most
component: `App`. All of our work will be done in `src/App.js`, the rest of the
components/source files shouldn't need any alterations.

Begin with `npm install`. Examine what is rendering in the browser
with `npm start`. You should see an error we need to fix!

Once we properly render the other three components: `CatComponent`,
`EinsteinQuoteComponent`, and `MouseComponent` in `App`, we will have the flag of
the [Bundesrepublik Deutschland][deutschland]. The birthplace of the first fully
automatic, programmable, digital computer!

## Deliverables

- Two components have not been properly imported in `src/App.js`. Identify and debug
  the issue. The stack trace when running `npm test` should point you in
  the right direction! **HINT**: take a look at the component files. One of these components is exported by `default`, but the other is _not_. How does this change importing?

- Once you have the first two components importing correctly, import and render
  a third component, `MouseComponent`. In total, `App` needs to render three
  children components:

  1. `CatComponent`
  2. `EinsteinQuoteComponent`
  3. `MouseComponent`

- Once the tests are passing, make sure to check out the fun animation in the
  browser by running `npm start`!

[deutschland]: https://de.wikipedia.org/wiki/Deutschland
