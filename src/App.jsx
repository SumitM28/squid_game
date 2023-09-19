import { useState } from "react";
import GreenLightRedLight from "./components/GreenLightRedLight"; // Import your GreenLightRedLight component

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    mobile: "",
    mode: "easy",
  });

  const startGame = () => {
    if (!userData.name) {
      alert("Please enter your name");
      return;
    }
    if (!userData.email) {
      alert("Please enter your email");
      return;
    }
    if (!userData.mobile) {
      alert("Please enter your mobile");
      return;
    }
    if (!userData.mode) {
      alert("Please select a mode");
      return;
    }
    setGameStarted(true);
  };

  const handleGameEnd = () => {
    setGameStarted(false);
  };

  console.log(userData);
  return (
    <div className="h-screen w-full flex justify-center items-center">
      {!gameStarted ? (
        <div className="mx-2 w-[420px] h-[500px] bg-gray-200 rounded-xl px-3 py-5 flex flex-col">
          <h1 className=" text-xl font-semibold">User Registration</h1>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={(e) =>
                setUserData({ ...userData, ["name"]: e.target.value })
              }
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">Eamil:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={(e) =>
                setUserData({ ...userData, ["email"]: e.target.value })
              }
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Mobile Number:
            </label>
            <input
              type="phone"
              id="phone"
              name="phone"
              onChange={(e) =>
                setUserData({ ...userData, ["mobile"]: e.target.value })
              }
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-sm text-gray-600">
              Difficulty Level:
            </label>

            <select
              onChange={(e) =>
                setUserData({ ...userData, ["mode"]: e.target.value })
              }
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>

          <button
            onClick={startGame}
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div>
          <GreenLightRedLight
            difficulty={userData.mode}
            onGameEnd={handleGameEnd}
          />
        </div>
      )}
    </div>
  );
}

export default App;
