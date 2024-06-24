import React, { useEffect, useState } from "react";
import countries from "country-flag-emoji-json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
import { faRefresh } from "@fortawesome/free-solid-svg-icons";
export default function Name() {
  const [randomCountries, setRandomCountries] = useState("");
  const [textlength, setTextLength] = useState("");
  const [filledIndices, setFilledIndices] = useState([]);
  const [classNames, setClassNames] = useState(Array(26).fill(""));
  const [correctCountries, setCorrectCountries] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [trueattemp, settrueattemp] = useState(0);
  useEffect(() => {
    const num = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[num];
    setRandomCountries(randomCountry.image);
    setTextLength(randomCountry.name.toLowerCase());
  }, []);

  function lose() {
    Swal.fire({
      title: "Game Over",
      text: "You have lost the game!",
      icon: "error",
      confirmButtonText: "Try Again",
    }).then(() => {
      resetGame();
    });
  }

  function win() {
    settrueattemp((old) => old + 1);
    Swal.fire({
      title: "Congratulations!",
      text: "You have won the game!",
      icon: "success",
      confirmButtonText: "Play Again",
    }).then(() => {
      resetGame();
    });
  }

  function resetGame() {
    setIncorrectCount(0);
    setFilledIndices([]);
    setClassNames(Array(26).fill(""));
    setCorrectCountries(0);
    setTextLength("");
    const num = Math.floor(Math.random() * countries.length);
    const randomCountry = countries[num];
    setRandomCountries(randomCountry.image);
    setTextLength(randomCountry.name.toLowerCase());
  }
  function showanother() {
    resetGame();
  }
  function handleLetterClick(letter, index) {
    if (filledIndices.length === textlength.length) {
      win();
      return;
    }

    const updatedClassNames = [...classNames];
    updatedClassNames[index] = "stop";
    setClassNames(updatedClassNames);

    if (textlength.includes(letter)) {
      const indicesToUpdate = textlength
        .split("")
        .map((char, i) => (char === letter ? i : -1))
        .filter((index) => index !== -1 && !filledIndices.includes(index));

      if (indicesToUpdate.length > 0) {
        setFilledIndices([...filledIndices, ...indicesToUpdate]);
        setCorrectCountries(correctCountries + indicesToUpdate.length);
        if (correctCountries + indicesToUpdate.length === textlength.length) {
          win(); // Check if the game has been won
        }
      }
    } else {
      setIncorrectCount(incorrectCount + 1);
      if (incorrectCount + 1 >= 6) {
        lose();
      }
    }
  }

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var realletters = letters.split("");

  return (
    <div className="cont">
      <div className="navii">
        <div>
          <p>back</p>
          <Link to="/">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} />
          </Link>
        </div>
        <div>
          <p>Show another flag</p>
          <FontAwesomeIcon icon={faRefresh} onClick={showanother} />
        </div>
      </div>
      <img src={randomCountries} alt="not" />
      <div className="cont2">
        {textlength.split("").map((e, i) => (
          <div
            className="aa"
            key={i}
            style={{
              borderBottom: e === " " ? "none" : "2px black solid",
            }}
          >
            {filledIndices.includes(i) ? e : null}
          </div>
        ))}
      </div>
      <div className="letters">
        {realletters.map((e, i) => (
          <div
            className={classNames[i]}
            key={i}
            onClick={() => handleLetterClick(e, i)}
          >
            {e}
          </div>
        ))}
      </div>
      <p>InCorrect letters:{incorrectCount}</p>
      <p>Correct countries:{trueattemp}</p>
    </div>
  );
}
