window.onload = function () {
  const containerDiv = document.createElement("div");
  containerDiv.className = "container ";
  document.body.appendChild(containerDiv);

  const heading = document.createElement("h1");
  heading.textContent = "Dice Game";
  heading.className = "heading";
  containerDiv.appendChild(heading);

  const desc = document.createElement("p");
  desc.textContent = "Let's Play A Dice Game";
  desc.className = "description";
  containerDiv.appendChild(desc);

  const playArea = containerDiv.appendChild(document.createElement("div"));
  playArea.className = "play";

  const playerOneArea = playArea.appendChild(document.createElement("div"));
  playerOneArea.className = "players";

  const diceArea = playArea.appendChild(document.createElement("div"));
  const playerTwoArea = playArea.appendChild(document.createElement("div"));
  playerTwoArea.className = "players";

  const playerOneHeading = playerOneArea.appendChild(
    document.createElement("h2")
  );
  playerOneHeading.innerText = "Player 1";
  playerOneHeading.className = "playerOneHeading";

  const playerTwoHeading = playerTwoArea.appendChild(
    document.createElement("h2")
  );
  playerTwoHeading.innerText = "Player 2";
  playerTwoHeading.className = "playerTwoHeading";

  const playerOneScore = playerOneArea.appendChild(document.createElement("p"));
  playerOneScore.innerText = "0";
  playerOneScore.className = "playerOneScore";
  const playerTwoScore = playerTwoArea.appendChild(document.createElement("p"));
  playerTwoScore.innerText = "0";
  playerTwoScore.className = "playerTwoScore";

  const playerOneButton = playerOneArea.appendChild(
    document.createElement("button")
  );
  playerOneButton.innerText = "Roll Now";
  playerOneButton.className = "playerOneButton";

  const playerTwoButton = playerTwoArea.appendChild(
    document.createElement("button")
  );
  playerTwoButton.innerText = "Roll Now";
  playerTwoButton.className = "playerTwoButton";
  playerTwoButton.disabled = true;

  const diceImage = diceArea.appendChild(document.createElement("img"));
  diceImage.className = "diceImage";
  diceImage.src = "./public/1.png";

  const announcement = containerDiv.appendChild(document.createElement("p"));
  announcement.innerText = "";
  announcement.className = "hidden allow";

  const resetButton = containerDiv.appendChild(
    document.createElement("button")
  );
  resetButton.innerText = "Reset Game";
  resetButton.className = "resetButton";
  playerOneButton.focus();

  function rollDice() {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    diceImage.src = `./public/${diceValue}.png`;
    diceImage.scrollIntoView({ behavior: "smooth", block: "center" });
    return diceValue;
  }
  function checkWinner(score, player) {
    if (score > 30) {
      announcement.textContent = `Congrats! ${player} You won the game`;
      announcement.classList.remove("hidden");
      return true;
    } else {
      return false;
    }
  }

  playerOneButton.addEventListener("click", () => {
    playerOneButton.disabled = true;
    const diceValue = rollDice();
    playerOneScore.innerText = parseInt(playerOneScore.innerText) + diceValue;
    if (!checkWinner(parseInt(playerOneScore.innerText), "Player 1")) {
      playerTwoButton.disabled = false;
      playerTwoButton.focus();
    }
  });

  playerTwoButton.addEventListener("click", () => {
    playerTwoButton.disabled = true;
    const diceValue = rollDice();
    playerTwoScore.innerText = parseInt(playerTwoScore.innerText) + diceValue;
    if (!checkWinner(parseInt(playerTwoScore.innerText), "Player 2")) {
      playerOneButton.disabled = false;
      playerOneButton.focus();
    }
  });

  resetButton.addEventListener("click", () => {
    playerOneScore.innerText = 0;
    playerTwoScore.innerText = 0;
    playerOneButton.disabled = false;
    playerTwoButton.disabled = true;
    announcement.classList.add("hidden");
    announcement.innerText = "";
    diceImage.src = "./public/1.png";
    playerOneButton.focus();
  });

  const hiddenContainer = document.body.appendChild(
    document.createElement("div")
  );
  for (let imageNo = 1; imageNo < 7; imageNo++) {
    const hiddenImage = hiddenContainer.appendChild(
      document.createElement("img")
    );
    hiddenImage.src = `./public/${imageNo}.png`;
    hiddenImage.className = "allowed";
  }
  hiddenContainer.className = "allowed";
};
