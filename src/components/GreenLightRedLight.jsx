import { useState, useEffect } from "react";

function GreenLightRedLight({ difficulty, onGameEnd }) {
  const [currentColor, setCurrentColor] = useState("red");
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(
    difficulty === "easy" ? 40 : difficulty === "medium" ? 30 : 20
  );

  useEffect(() => {
    const startGame = () => {
      const colorChangeInterval = setInterval(() => {
        setCurrentColor((prevColor) => (prevColor === "red" ? "green" : "red"));
      }, Math.random() * 1000 + 1000);

      const gameTimer = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1); // Change timer by 1 second
        if (timer === 0) {
          clearInterval(colorChangeInterval);
          clearInterval(gameTimer);
          endGame(false);
        }
      }, 1000); // Change timer every 1 second
    };

    startGame();
  }, []);

  useEffect(() => {
    if (timer === 0) {
      endGame(false);
    }
  }, [timer]);

  const endGame = (win) => {
    if (win) {
      alert("You win!");
      onGameEnd();
    } else {
      alert("Game Over!");
      onGameEnd();
    }
  };

  const handleBoxClick = () => {
    if (currentColor === "green") {
      setScore((prevScore) => prevScore + 1);
      if (
        score + 1 ===
        (difficulty === "easy" ? 10 : difficulty === "medium" ? 15 : 25)
      ) {
        endGame(true);
      }
    } else {
      endGame(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center">
      <h2 className="mt-5 text-3xl font-bold ">Green Light, Red Light Game</h2>
      <div className="w-[60%] py-4">
        <h1 className="text-xl font-semibold">Rules:</h1>

        <ul className="ml-5 my-5">
          <li className="text-base list-disc">
            If you click on the green box, then your score will increment by 1.
            And If you manage to click the green box{" "}
            {difficulty === "easy" ? 10 : difficulty === "medium" ? 15 : 25}{" "}
            times within{" "}
            {difficulty === "easy" ? 40 : difficulty === "medium" ? 30 : 20}{" "}
            seconds, then you can win.
          </li>
          <li className="text-base list-disc">
            If you click on the red box or if the time has expired, then you
            failed the game
          </li>
        </ul>
      </div>
      <div
        className="w-16 h-16"
        onClick={handleBoxClick}
        style={{
          background: currentColor,
        }}
      ></div>
      <p className=" text-lg font-medium">Time Remaining: {timer} seconds</p>
      <p className="text-xl font-medium">Score: {score}</p>
    </div>
  );
}

export default GreenLightRedLight;
