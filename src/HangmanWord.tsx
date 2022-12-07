type HangmanWordProps = {
    reveal?: boolean
    guessedLetters: string[]
    wordToGuess: string
}


export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {

    return <div style={{ display: "flex", gap: ".25em", fontSize: "6em", fontWeight: "bold", textTransform: "capitalize", fontFamily: "monospace" }}>

        {/* seperate each letter of the word to guess and reveal each character as they or guessed or 
        or the remaining all at once in red at gameover */}
        {wordToGuess.split("").map((letter, index) => (
            <span style={{ borderBottom: ".1em solid black" }} key={index}>
                <span
                    style={{
                        visibility: guessedLetters.includes(letter) || reveal
                            ? "visible"
                            : "hidden",
                        //reveals the remaining letters in red after "reveal" is set to true
                        color: 
                            !guessedLetters.includes(letter) && reveal ?
                            "red" : "black",
                    }}
                >
                    {letter}

                </span>

            </span>
        ))}

    </div>



}