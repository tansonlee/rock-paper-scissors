let userScore = 0;
let compScore = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const result_div = document.querySelector(".result");

function main() {
	rock_div.addEventListener("click", () => game("rock"));
	paper_div.addEventListener("click", () => game("paper"));
	scissors_div.addEventListener("click", () => game("scissors"));
}

function game(userChoice) {
	// get a computer choice
	compChoice = getCompChoice();

	// check who wins
	const winner = whoWins(userChoice, compChoice);

	// change boarder colour
	changeBorderAndResult(userChoice, winner);

	// change the result_div content

	// change the scoreboard
}

main();
