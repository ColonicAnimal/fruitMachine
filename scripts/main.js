//get elements
const spin = document.getElementById("spin");
const reels = document.getElementsByName("reels");
const winningsCounter = document.getElementById("winnings");
const creditCounter = document.getElementById("credit");
const creditButton = document.getElementById("creditButton");
const collect = document.getElementById("collect");
const message = document.getElementById("message");

//event listners
spin.addEventListener("click", spinThisShizzle);
creditButton.addEventListener("click", addCredit);
collect.addEventListener("click", collectWinnings);
//on page load

let prize = [];
let credit=0;
let winnings = 0;
winningsCounter.innerText = winnings;
creditCounter.innerText = credit;

//functions

function addCredit() {
credit ++;
creditCounter.innerText = credit;
}


function spinThisShizzle() {
    //for loop rolls a score for each item in the array
    if (credit == 0) {
        message.innerText = `Please insert more credits`;

    }
    else {
    prize = [];
    credit --;
    creditCounter.innerText = credit;
    let i;
    for (i=0; i<reels.length; i++) {
        let score = Math.floor(Math.random() * 3) + 1;
        reels[i].setAttribute("src", "images/fruit" + score + ".png");
        prize.push(score);
        
    }
 
    if (prize[0]==1 && prize[1] == 1 && prize[2]== 1) {
        winner = 10;
        message.innerText = `We have a winner!!! You have won 10 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
       
    }

    else if (prize[1] == 1 && prize[2]== 1) {
        winner = 5;
        message.innerText = `We have a winner!!! You have won 5 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
        
       
    }

    else if (prize[0]==2 && prize[1] == 2 && prize[2]== 2) {
        winner = 10;
        message.innerText = `We have a winner!!! You have won 10 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
       
        
       
    }

    else if (prize[1] == 2 && prize[2]== 2) {
        winner = 5;
        message.innerText = `We have a winner!!! You have won 5 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
        
       
    }

    
    else if (prize[0]==3 && prize[1] == 3 && prize[2]== 3) {
        winner = 10;
        message.innerText = `We have a winner!!! You have won 10 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
       
        
       
    }

    else if (prize[1] == 3 && prize[2]== 3) {
        winner = 5;
        message.innerText = `We have a winner!!! You have won 5 Credits!!`;
        totalWinnings = winnings + winner;
        winningsCounter.innerText = totalWinnings;
        return winnings = totalWinnings;
       
        
       
    }

    else {
        message.innerText = ``;
    }
}


}

function collectWinnings () {
    if (winnings == 0){

    }
    
    else{
    message.innerText = `You have collected your winnings which totalled ${winnings} Credits!`;
    winnings = 0;
    winningsCounter.innerText = winnings;
}
    
    

}