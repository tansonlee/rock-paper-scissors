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
	let workingElement;
	let interval = 300;
	switch (winner) {
		case "user":
			result_p.innerHTML = `${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}! You WIN!! 🤩`;
			workingElement = document.getElementById(userChoice);
			highlight(workingElement, "green-glow", interval);
			break;
		case "comp":
			result_p.innerHTML = `${userChoice.toUpperCase()} loses to ${compChoice.toUpperCase()} You lose... 🐟`;
<<<<<<< HEAD
			workingElement = document.getElementById(userChoice);
			highlight(workingElement, "red-glow", interval);
			break;
		case "tie":
			result_p.innerHTML = `You both picked ${userChoice.toUpperCase()}. It's a tie. 🐒`;
			workingElement = document.getElementById(userChoice);
			highlight(workingElement, "grey-glow", interval);
=======
			break;
		case "tie":
			result_p.innerHTML = `You both picked ${userChoice.toUpperCase()}. It's a tie. 🐒`;
>>>>>>> 19d17f5... added emojis to the result message
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

function highlight(element, design, interval) {
	element.classList.add(design);
	console.log(design);
	setInterval(() => element.classList.remove(design), interval);
}
