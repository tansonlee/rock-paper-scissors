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

function changeBorderAndResult(userChoice, compChoice, winner) {
	switch (winner) {
		case "user":
			result_p.innerHTML = `${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}! You WIN!! 🤩`;
			break;
		case "comp":
			result_p.innerHTML = `${userChoice.toUpperCase()} loses to ${compChoice.toUpperCase()} You lose...`;
			break;
		case "tie":
			result_p.innerHTML = `You both picked ${userChoice.toUpperCase()}. It's a tie.`;
			break;
	}

	// IF YOU WANT TO ACCESS ALL CASES
	// switch (userChoice) {
	// 	case "rock":
	// 		switch (winner) {
	// 			case "user":
	// 				result_p.innerHTML = "rock user";
	// 				break;
	// 			case "comp":
	// 				result_p.innerHTML = "rock comp";
	// 				break;
	// 			case "tie":
	// 				result_p.innerHTML = "tie";
	// 				break;
	// 		}
	// 		break;
	// 	case "paper":
	// 		switch (winner) {
	// 			case "user":
	// 				result_p.innerHTML = "paper user";
	// 				break;
	// 			case "comp":
	// 				result_p.innerHTML = "paper comp";
	// 				break;
	// 			case "tie":
	// 				result_p.innerHTML = "tie";
	// 				break;
	// 		}
	// 		break;
	// 	case "scissors":
	// 		switch (winner) {
	// 			case "user":
	// 				result_p.innerHTML = "scissor user";
	// 				break;
	// 			case "comp":
	// 				result_p.innerHTML = "scissor comp";
	// 				break;
	// 			case "tie":
	// 				result_p.innerHTML = "tie";
	// 				break;
	// 		}
	// 		break;
	// }
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
