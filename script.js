let check = document.querySelector(".check");
let message = document.querySelector(".startg");
let number = document.querySelector(".questionmark");
let score = 20;
let highscore = 0;
let hiddenNumber = Math.trunc(Math.random() * 20 + 1);
console.log(hiddenNumber);

check.addEventListener("click", function () {
    let guess = Number(document.querySelector(".guessinput").value);

    if (!guess) {
        message.textContent = "No number!";
    } else if (hiddenNumber === guess) {
        message.textContent = "😜 Correct number!";
        number.textContent = hiddenNumber;
        document.querySelector("body").style.backgroundColor = "#60b347";
        number.style.width = "25rem";
        if(score > highscore){
            document.querySelector(".highscore").textContent = score;
        }
    } else if (guess > hiddenNumber) {
        if (score > 1) {
            message.textContent = "📈 Too high!";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "You lose!";
            document.querySelector(".score").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    } else if (guess < hiddenNumber) {
        if (score > 1) {
            message.textContent = "📉 Too low!";
            score--;
            document.querySelector(".score ").textContent = score;
        } else {
            message.textContent = "You lose";
            document.querySelector(".score ").textContent = 0;
            document.querySelector("body").style.backgroundColor = "red";
        }
    }
});













