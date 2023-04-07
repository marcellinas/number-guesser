let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
// new secret target number
const getAbsoluteDistance = (a, b) => 
 Math.abs(a - b) 

// getting absolute distance

const compareGuesses = (userGuess, compGuess, secretNum) => {
  if (userGuess < 0 || userGuess > 9) {
        alert("Your guess is out of range. Please enter a number between 0 and 9.");
    }
  const humanDifference = getAbsoluteDistance(secretNum, userGuess)
  const computerDifference = getAbsoluteDistance(secretNum, compGuess)
  return humanDifference <= computerDifference;
}
// comparing guesses

const updateScore = winner => {
if (winner === 'human') {
   humanScore++;
} else {
   computerScore++;
}
}
// updating score

const advanceRound = () => currentRoundNumber++;

// advancing round number

  