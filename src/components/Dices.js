import React from "react";
import Box from "./Box";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
// import useWindowSize from "react-use/lib/useWindowSize";
function Dices() {
  const [rollDice, setRollDice] = React.useState(newRollDice());
  const [tenzies, setTenzies] = React.useState(false);
  // const { width, height } = useWindowSize();
  React.useEffect(() => {
    const isAllisHeld = rollDice.every((data) => data.isheld);
    const firstValue = rollDice[0].value;
    const isAllisValue = rollDice.every((data) => data.value === firstValue);
    if (isAllisHeld & isAllisValue) {
      alert("You Won !!!");
      setTenzies(true);
    }
    console.log("Dice is chanded!!");
  }, [rollDice]);

  function newRollDice() {
    const random = [];
    for (let i = 1; i < 11; i++) {
      random.push(randomDice());
    }
    return random;
  }

  function randomDice() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isheld: false,
      id: nanoid(),
    };
  }

  function rollTheDice() {
    if (!tenzies) {
      setRollDice((old) =>
        old.map((data) => {
          return data.isheld ? data : randomDice();
        })
      );
    } else {
      setTenzies(false);
      setRollDice(newRollDice());
    }
  }

  function holdDice(id) {
    // console.log(id);
    setRollDice((old) =>
      old.map((data) => {
        return data.id === id ? { ...data, isheld: !data.isheld } : data;
      })
    );
  }

  const dicesElement = rollDice.map((box) => (
    <Box
      value={box.value}
      key={box.id}
      isheld={box.isheld}
      holdDice={() => holdDice(box.id)}
    />
  ));

  return (
    <div className="Dies-main">
      <div className="Dices">{dicesElement}</div>
      <button className="btn" onClick={rollTheDice}>
        {tenzies ? "New game" : "Roll Dice"}
      </button>
      {tenzies && <Confetti />}
    </div>
  );
}

export default Dices;
