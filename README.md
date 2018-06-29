# React Static Components

## Objectives

- Practice rendering static children components
- Have some fun with the rendered components in the browser

## Instructions

In this lab, we will be rendering a few children components in our top-most
component: `App`. All of our work will be done in `src/App.js`, the rest of the
components/source files shouldn't need any alterations. 

Begin with `npm install`ing and examining what we have rendering in the browser
with `npm start`. You should see an error we need to fix!

Once we properly render the other three components: `CatComponent`,
`FordQuoteComponent`, and `MouseComponent` in `App`, we will have the flag of
the [Bundesrepublik Deutschland][deutschland]. The birthplace of the first fully
automatic, programmable, digital computer!


<p align="center">
  <img src='https://media.giphy.com/media/JuIjpev9L5mlG/giphy.gif'/>
</p>


## Deliverables
- One component has not been properly imported in `src/App.js`. Identify and debug the issue (_hint_: the stack strace when running `npm test` should point you in the right direction!)
- `App` needs to render three children components:
  1. `CatComponent`
  2. `FordQuoteComponent`
  3. `MouseComponent`
- Once the tests are passing, make sure to check out the fun animation in the browser!


[deutschland]: https://de.wikipedia.org/wiki/Deutschland
