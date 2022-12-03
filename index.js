/* Définition des variables d'initialisation pour l'interface du jeu : */

let player1Score = 0;
let player2Score = 0;
let player1Turn = true;

const player1Dice = document.getElementById("player1Dice")
const player2Dice = document.getElementById("player2Dice")
const player1Scoreboard = document.getElementById("player1Scoreboard")
const player2Scoreboard = document.getElementById("player2Scoreboard")
const message = document.getElementById("message")
const rollBtn = document.getElementById("rollBtn")
const resetBtn = document.getElementById("resetBtn")

/* Fonction pour la gestion de l'aperçu des différents boutons : */

function showDisplayButton(){
    rollBtn.style.display = "none"
	holdBtn.style.display = "none"
    resetBtn.style.display = "block"
}

/* Partie fonctionnelle pour le jeu du dé : */

rollBtn.addEventListener("click", function(){
    const rondomNumber = Math.floor(Math.random() * 6) + 1
	
	holdBtn.style.display = "block"
	
	switch (rondomNumber) 
	{
		case 1:
			document.getElementById("diceFace").src="dice_face_1.png";
			break               
		case 2:
			document.getElementById("diceFace").src="dice_face_2.png";
			break             
		case 3:
			document.getElementById("diceFace").src="dice_face_3.png";
			break             
		case 4:
			document.getElementById("diceFace").src="dice_face_4.png";
			break               
		case 5:
			document.getElementById("diceFace").src="dice_face_5.png";
			break               
		case 6:
			document.getElementById("diceFace").src="dice_face_6.png";
			break
		default:
			break
	}
	
    if(player1Turn)
    {
		if(rondomNumber === 1)
		{
			player1Score += 0
			player1Turn = !player1Turn;
		}
		else
		{
			player1Score += rondomNumber
		}
		player1Scoreboard.textContent = player1Score
		player1Dice.textContent = rondomNumber
		player1Dice.classList.remove("active")
		player2Dice.classList.add("active")
		message.textContent = "Player 1"
    }
	else
	{
		if(rondomNumber === 1)
		{
			player2Score += 0
			player1Turn = !player1Turn;
		}
		else
		{
			player2Score += rondomNumber
		}
		player2Scoreboard.textContent = player2Score
		player2Dice.textContent = rondomNumber
		player2Dice.classList.remove("active")
		player1Dice.classList.add("active")
		message.textContent = "Player 2"
    }

    if(player1Score >= 100)
	{
        message.textContent = "Player 1 won !"
        showDisplayButton()
    }
	else if(player2Score >= 100)
	{
        message.textContent = "Player 2 won !"
        showDisplayButton()
    }
})

holdBtn.addEventListener("click", function(){
    player1Turn = !player1Turn;
})

resetBtn.addEventListener("click", function(){
    reset()
})

function reset(){
    message.textContent = "Player 1 turn !"
    player1Scoreboard.textContent = 0 
    player2Scoreboard.textContent = 0;
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0 
    player1Turn = true
    resetBtn.style.display = "none"
    rollBtn.style.display = "block"
    player2Dice.classList.remove("active")
    player1Dice.classList.add("active")
}