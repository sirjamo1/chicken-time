import chickenBottomBeak from "./images/chickenBottomBeak.png"
import chickenTopBeak from "./images/chickenTopBeak.png";
import chickenEye from "./images/chickenEye.png";
import chickenMain from "./images/chickenMain.png";
import chickenWing from "./images/chickenWing.png";
import './App.css';
import React, {useState} from "react";

function App() {
  const [aniActive, setAniActive] = useState(false);
  
console.log(aniActive)
  return (
      <div className="App">
          <h1>hello</h1>
          <div className="chicken--container">
              <img
                  className={
                      aniActive ? "chicken-main chicken-main-ani" : "chicken-main"
                  }
                  src={chickenMain}
              />
              <img
                  className={
                      aniActive ? "chicken-eye chicken-eye-ani" : "chicken-eye"
                  }
                  src={chickenEye}
              />
              <img
                  className={
                      aniActive ? "chicken-wing chicken-wing-ani" : "chicken-wing"
                  }
                  src={chickenWing}
              />
              <img
                  className={
                      aniActive
                          ? "chicken-top-beak chicken-top-beak-ani"
                          : "chicken-top-beak"
                  }
                  src={chickenTopBeak}
              />
              <img
                  className={
                      aniActive
                          ? "chicken-bottom-beak chicken-bottom-beak-ani"
                          : "chicken-bottom-beak"
                  }
                  src={chickenBottomBeak}
              />
          </div>
          <button
              onClick={() => {
                  setAniActive(true);
              }}
          >true</button>
          <button
              onClick={() => {
                  setAniActive(false);
              }}
          >false</button>
      </div>
  );
}

export default App;
