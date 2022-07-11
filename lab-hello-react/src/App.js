// src/App.js
import './App.css';
import iconLogo from "./images/ironhack-logo-xs.png";
import iconMenu from "./images/menu-top-xs.png";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";

function App() {
  return (
    <div className="App">
      <header class="fondo">
        <div class="h-icons">
          <img src={iconLogo} alt="logo-icon"></img>
          <img src={iconMenu} alt="menu-icon"></img>
        </div>

        <div class="text-h">
          <h1>Say hello to <br></br> ReactJS</h1>
          <p class="w-text">You will learn how to use <br></br>the most popular frontend library,<br></br> and become a super Ninja developer.</p>
          <a href="https://imgflip.com/i/5qikpc"><button>Awesome!</button></a>
        </div>
      </header>

      <body>
        <div class="b-icons">
          <div>
            <img src={icon1} alt="icon1"></img>
            <h5>Declarative</h5>
            <p>React makes it paintless to create interactive UIs.</p>
          </div>

          <div>
            <img src={icon2} alt="icon2"></img>
            <h5>Components</h5>
            <p>Build encapsulated components that manage their state.</p>
          </div>

          <div>
            <img src={icon3} alt="icon3"></img>
            <h5>Single-Way</h5>
            <p>A set of immutable values are passed to the component's.</p>
          </div>

          <div>
            <img src={icon4} alt="icon4"></img>
            <h5>JSX</h5>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </body>
    </div>

  );
}
export default App;