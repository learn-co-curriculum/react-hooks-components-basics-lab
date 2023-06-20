import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}

const About = () => <div id='about'><h2>About</h2></div>


function App() {
  return (
    <div>
      <NavBar />
      <Home/>
      <About/>     
    </div>
  );
}

export default App;
