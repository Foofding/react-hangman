import { useEffect, useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import words from "./wordList.json"
import { HangmanDrawing } from "./HangmanDrawing"
import { HangmanWord } from './HangmanWord'
import { Keyboard } from './Keyboard'

//Chooses random word from list to use for user to guess
function getWord() {
  return words[Math.floor(Math.random() * words.length)]
}


function App() {
  //Get word to guess
  const [wordToGuess, setWordToGuess] = useState(getWord())

  //Create empty array for guessed letters to be stored in
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  //Create array that is filled with letters that are not in word to guess.
  const incorrectLetters = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  //function for adding guessed letters to array
  const addGuessedLetter = useCallback((letter: string) => {
    if (guessedLetters.includes(letter) || isWinner || isLoser)
    return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }, guessedLetters)

  //booleans that are true if all limbs of hangman are revealed (6 total), and when word is guessed
  const isLoser = incorrectLetters.length >= 6;

  const isWinner = wordToGuess
  .split("")
  .every(letter => guessedLetters.includes(letter));

  //function that enables user to use keyboard input to guess letters
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      //add pressed-key's letter to array of guessed letters
      addGuessedLetter(key);
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])


  //Allows user to start new game with the press of the "Enter" key.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      //clears array of guessed letters for new game
      setGuessedLetters([]);
      //sets new word
      setWordToGuess(getWord());
    }

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  }, [guessedLetters])

 //main game component rendered here:
  return <div
    style={{
      maxWidth: "800px",
      display: "flex",
      flexDirection: "column",
      gap: "2rem",
      margin: "0 auto",
      alignItems: "center"
    }}
  >
    <div style={{ fontSize: "2rem", textAlign: "center" }}>
      {/* Write win or lose message based on either boolean*/}
      {isLoser && "You lose! - Refresh page for new game"}
      {isWinner && "You win! - Refresh page for new game"}
    </div>
    
    {/* for each incorrect letter guessed, a new limb will appear from the HangmanDrawing component */}
    <HangmanDrawing numberOfGuesses={incorrectLetters.length}
    />
    
    {/* HangmanWord component is given the word to guess as well as letters guessed by user to display in props */}
    <HangmanWord 
     guessedLetters={guessedLetters}
     wordToGuess={wordToGuess}
     reveal={isLoser}
    />
    
    <div style={{ alignSelf: "stretch" }}>
      <Keyboard 
      disabled = {isWinner || isLoser}
      activeLetters={guessedLetters.filter(letter=>wordToGuess.includes(letter))}
      inactiveLetters={incorrectLetters}
      addGuessedLetter={addGuessedLetter}
      />
    </div>

  </div>
}

export default App
