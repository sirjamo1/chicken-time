import chickenBottomBeak from "./images/chickenBottomBeak.png"
import chickenTopBeak from "./images/chickenTopBeak.png";
import chickenEye from "./images/chickenEye.png";
import chickenMain from "./images/chickenMain.png";
import chickenWing from "./images/chickenWing.png";
import './App.css';
import React, {useState} from "react";
import chickenSound from "./audio/chickenSound.wav"

function App() {
  const [aniActive, setAniActive] = useState(false);
  const [time, setTime] = useState(1)
  const [weightTime, setWeightTime] = useState(1)
  const [preheat, setPreheat] = useState()
  const [chickenIn, setChickenIn] = useState()
  const [veggiesIn, setVeggiesIn] = useState()
  const veggieMins = 70
  

console.log(weightTime)
const handleTimeCalc = () => {
  new Audio(chickenSound).play()
  let totalMins = parseInt(time[0]) * 60 + parseInt(time[1]);
  let totalMinsCalc = (totalMins - weightTime) / 60
  let totalMinsCalcPlusTen = (totalMins - (weightTime - 10)) / 60;
  let totalMinsCalcPlusVeggies = (totalMins - veggieMins) / 60;
  let preHour = Math.floor(totalMinsCalc)
  let chickInHour = Math.floor(totalMinsCalcPlusTen)
  let veggiesHour = Math.floor(totalMinsCalcPlusVeggies)
  let veggiesRemainder = Math.floor(totalMinsCalcPlusVeggies % 1 *60)
  let preRemainder = Math.floor(totalMinsCalc % 1 * 60)
  console.log(preRemainder)
  let chickInRemainder = Math.floor(totalMinsCalcPlusTen % 1 * 60)
  setPreheat((preHour > 12 ? preHour - 12 : preHour) + ":" + (preRemainder < 10 ? "0" + preRemainder : preRemainder));
  setChickenIn((chickInHour > 12 ? chickInHour - 12 : chickInHour) + ":" + (chickInRemainder < 10 ? "0" + chickInRemainder : chickInRemainder))
  setVeggiesIn((veggiesHour > 12 ? veggiesHour - 12 : veggiesHour) + ":" + (veggiesRemainder < 10 ? "0" + veggiesRemainder : veggiesRemainder))
}

  return (
      <div className="App">
          <h1 className="title">Chicken Time</h1>
          <form>
              <label>Weight of chicken in kg</label>
              <input
                  onChange={(e) => {
                      setWeightTime((e.target.value / 0.5) * 30);
                      setAniActive(false);
                  }}
                  type="number"
              />
              <label>Time you would like to eat</label>
              <input
                  onChange={(e) => {
                      setTime(e.target.value.split(":"));
                      setAniActive(false);
                  }}
                  type="time"
              />
              <button
                  onClick={(e) => {
                      e.preventDefault();
                      setAniActive(true);
                      handleTimeCalc();
                  }}
              >
                  Chicken Me!
              </button>
              <button
                  onClick={(e) => {
                      e.preventDefault();
                      setAniActive(false);
                  }}
              >
                  Reset
              </button>
          </form>
          <div className="chicken--container">
              <img
                  className={
                      aniActive
                          ? "chicken-main chicken-main-ani"
                          : "chicken-main"
                  }
                  src={chickenMain}
                  alt="chicken body"
              />
              <img
                  className={
                      aniActive ? "chicken-eye chicken-eye-ani" : "chicken-eye"
                  }
                  src={chickenEye}
                  alt="chicken eye"
              />
              <img
                  className={
                      aniActive
                          ? "chicken-wing chicken-wing-ani"
                          : "chicken-wing"
                  }
                  src={chickenWing}
                  alt="chicken wing"
              />
              <img
                  className={
                      aniActive
                          ? "chicken-top-beak chicken-top-beak-ani"
                          : "chicken-top-beak"
                  }
                  src={chickenTopBeak}
                  alt="chicken top beak"
              />
              <img
                  className={
                      aniActive
                          ? "chicken-bottom-beak chicken-bottom-beak-ani"
                          : "chicken-bottom-beak"
                  }
                  src={chickenBottomBeak}
                  alt="chicken bottom beak"
              />
          </div>

          <div className={aniActive ? "instructions-ani" : "instructions"}>
              <h3>Preheat oven at :<br/> {preheat}</h3>
              <h3>Put chicken in :<br/>{chickenIn} </h3>
              <h3>Put roast veggies in :<br/>{veggiesIn}</h3>
          </div>
      </div>
  );
}

export default App;


