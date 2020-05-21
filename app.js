let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_p = document.querySelector(".result > p");

function main() {
	// listen for a click on each of the divs and execute the game
	rock_div.addEventListener("click", () => game("rock"));
	paper_div.addEventListener("click", () => game("paper"));
	scissors_div.addEventListener("click", () => game("scissors"));
}

function game(userChoice) {
	// get a computer choice
	compChoice = getCompChoice();

	// check who wins
	const winner = whoWins(userChoice, compChoice);

	// change border colour and the result_p content
	changeBorderAndResult(userChoice, compChoice, winner);

	// change the scoreboard
	updateScoreBoard(winner);
}

main();
