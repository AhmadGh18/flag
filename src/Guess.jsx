import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import countries from "country-flag-emoji-json";
export default function Guess() {
  const [randomCountries, setRandomCountries] = useState(generateRandomFlags());
  const [wantedIndex, setWantedIndex] = useState(Math.floor(Math.random() * 4));
  const wanted = randomCountries[wantedIndex];
  const [message, setmessage] = useState("");
  const [correct, setcorrect] = useState(0);
  const [wrong, setwrong] = useState(0);
  const [heightscore, sethightsscore] = useState(0);
  function generateRandomFlags() {
    const shuffledCountries = countries.sort(() => Math.random() - 0.5);
    return shuffledCountries.slice(0, 4);
  }

  useEffect(() => {
    setRandomCountries(generateRandomFlags());
    setWantedIndex(Math.floor(Math.random() * 4));
    setmessage("");
  }, []);

  function handleclick(e, countryIndex) {
    const clickedCountry = randomCountries[countryIndex];
    setRandomCountries(generateRandomFlags()); // Generate new random flags
    setWantedIndex(Math.floor(Math.random() * 4)); // Generate new "wanted" index
    if (clickedCountry.name === wanted.name) {
      setcorrect(correct + 1);
      window.localStorage.setItem("heightscore", correct);
    } else {
      setwrong(wrong + 1);
    }
  }

  return (
    <div className="App">
      <div>
        <p>back</p>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowAltCircleLeft} />
        </Link>
      </div>
      <div className="hold">
        {randomCountries.map((country, i) => (
          <div key={i} className="cont" onClick={(e) => handleclick(e, i)}>
            <img src={country.image} alt={country.name} />
          </div>
        ))}
      </div>
      <div className="wantedpart">
        <p>Which one is {wanted.name}</p>
      </div>
      <div className="scrores">
        <p>correct: {correct}</p>

        <p>wrong is :{wrong}</p>
      </div>
    </div>
  );
}
