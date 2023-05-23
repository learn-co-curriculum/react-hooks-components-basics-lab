import React from "react";

const NavBar = () => {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

const Home = () => {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

{/* write an <About> component here */}


const App = () => {
  return (
    <div>
      <NavBar />
      {/* add the <Home> component here */}
      {/* add your <About> component here */}
    </div>
  );
}

export default App;
