// React
import { useCallback, useState, useEffect } from "react";

// CSS
import "./App.css";

// Data
import { wordsList } from "./data/word";

// Componentes
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

const stages = [
  {
    id: 1,
    name: "start",
  },
  {
    id: 2,
    name: "game",
  },
  {
    id: 3,
    name: "end",
  },
];

const guessesQty = 3;

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(guessesQty);
  const [score, setScore] = useState(0);

  const pickWordAndCategory = useCallback(() => {
    const categories = Object.keys(words); //Pegando todas as chaves do meu objeto words.
    const category =
      categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // Math floor para arredondar para baixo o numero aleatório que irá gerar com a quantidade de chaves do
    // objeto words.

    const word =
      words[category][Math.floor(Math.random() * words[category].length)];

    return { word, category };
  }, [words]);

  //start the secret word game
  const startGame = useCallback(() => {
    //clear all letters
    clearLetterStates();

    const { word, category } = pickWordAndCategory();

    //Array de letras
    let wordLetters = word.split("");

    wordLetters = wordLetters.map((letra) => letra.toLowerCase());

    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);

  //process the letter input
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();

    // check if letter has already been utilized
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }

    // push guessed letter or remove a guess
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);

      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };

  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };

  // check if guesses ended
  useEffect(() => {
    if (guesses <= 0) {
      //reset all states
      clearLetterStates();

      setGameStage(stages[2].name);
    }
  }, [guesses]);

  // check win condition

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // win condition
    if (guessedLetters.length === uniqueLetters.length && gameStage === stages[1].name) {
      //addScore
      setScore((actualScore) => actualScore += 100);

      // start game with new word
      startGame();
    }
  }, [guessedLetters, letters, startGame, gameStage]);

  //reset the game
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name);
  };
  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
