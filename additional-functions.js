function getCompChoice() {
	const choices = [ "rock", "paper", "scissors" ];
	const randIndex = Math.floor(Math.random() * 3);
	return choices[randIndex];
}

function whoWins(user, comp) {
	switch (user + comp) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			return "user";
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			return "comp";
		default:
			return "tie";
	}
}

function changeBorderAndResult(userChoice, winner) {
	console.log(winner);
	switch (userChoice) {
		case "rock":
			switch (winner) {
				case "user":
					result_div.innerHTML = "rock user";
					break;
				case "comp":
					result_div.innerHTML = "rock comp";
					break;
				case "tie":
					result_div.innerHTML = "tie";
					break;
			}
			break;
		case "paper":
			switch (winner) {
				case "user":
					result_div.innerHTML = "paper user";
					break;
				case "comp":
					result_div.innerHTML = "paper comp";
					break;
				case "tie":
					result_div.innerHTML = "tie";
					break;
			}
			break;
		case "scissors":
			switch (winner) {
				case "user":
					result_div.innerHTML = "scissor user";
					break;
				case "comp":
					result_div.innerHTML = "scissor comp";
					break;
				case "tie":
					result_div.innerHTML = "tie";
					break;
			}
			break;
	}
}

function updateScoreBoard(winner) {
	switch (winner) {
		case "user":
			userScore++;
			userScore_span.innerHTML = userScore;
			break;
		case "comp":
			compScore++;
			compScore_span.innerHTML = compScore;
			break;
	}
}
