let uscore = 0;
let cscore = 0;
const userScore = document.querySelector("#user");
const compScore = document.querySelector("#comp");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
// console.log(msg.innerText);

const genComputerChoice = () => {
    let options = ['rock', 'paper', 'scissors'];
    let randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
    // Math.random();
    //Math.random()*3 ->out put will be from (0-2)
    // Math.floor(Math.random() *10);
    // console.log("computer choice", options[randIdx]);
}

const drawGame = () => {
    msg.innerText = "It was a draw..";
    msg.style.backgroundColor='#081b31';

    // console.log("game was draw");
}

const showWinner = (userWin) => {
    if (userWin) {
        msg.innerText = "You Win !!"
        msg.style.backgroundColor='green';
        uscore++;
        // console.log('You win!');
    }
    else {
        msg.innerText = "You lose.";
        msg.style.backgroundColor='red';
        cscore++;
        // console.log("you lose");
    }

}

const playGame = (userChoice) => {
    // console.log("user choice = " , userChoice);
    const compChoice = genComputerChoice();
    // console.log("comp choice = " , compChoice);
    if (userChoice === compChoice) {
        // draw game;
        drawGame();
    }

    else {
        let userWin = true;
        if (userChoice === 'rock') {
            //scissors,paper
            userWin = compChoice === 'paper' ? false : true;
        }
        else if (userChoice === 'paper') {
            //rock , scissors
            userWin = compChoice === 'scissors' ? false : true;
        }
        else if (userChoice === 'scissors') {
            //rock, paper
            userWin = compChoice === 'rock' ? false : true;
        }
        showWinner(userWin);
    }
    userScore.innerText = uscore;
    compScore.innerText = cscore;
    // console.log("your score",uscore);
    // console.log("comp score",cscore);
}



choices.forEach((choice) => {
    // console.log(choice);
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
        genComputerChoice();
    })
})

