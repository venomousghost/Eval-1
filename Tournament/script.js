// Date logic
const today = new Date();
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const year = today.getFullYear();
const month = monthNames[today.getMonth()];
const day = today.getDate();

const dateElements = Array.from(document.getElementsByClassName('date'));
dateElements.forEach((ele) => {
    ele.innerHTML = `${day} ${month} ${year}`;
});

// Score logic

function updateScore(cardTeamOne, cardTeamTwo, cardTeamName1, cardTeamName2, initialTeamOneScore, initialTeamTwoScore, interval) {
    let teamOneScore = initialTeamOneScore;
    let teamTwoScore = initialTeamTwoScore;

    setInterval(() => {
        const teamTurn = Math.floor(Math.random() * 2); 
        const score = Math.floor(Math.random() * 3 + 1); 

        if (teamTurn === 0) {
            teamOneScore += score;
            cardTeamOne.innerHTML = teamOneScore;
        } else {
            teamTwoScore += score;
            cardTeamTwo.innerHTML = teamTwoScore;
        }

        if (teamOneScore > teamTwoScore) {
            cardTeamName1.style.color = "green";
            cardTeamName2.style.color = "white";
        } else if (teamOneScore < teamTwoScore) {
            cardTeamName2.style.color = "green";
            cardTeamName1.style.color = "white";
        } else {
            cardTeamName2.style.color = "white";
            cardTeamName1.style.color = "white";
        }

    }, interval);
}

// Card 1 
const card1teamOne = document.getElementById('team1-score');
const card1teamTwo = document.getElementById('team2-score');
const card1teamName1 = document.getElementById('team1-name');
const card1teamName2 = document.getElementById('team2-name');

// Card 2 
const card2teamOne = document.getElementById('team2-1-score');
const card2teamTwo = document.getElementById('team2-2-score');
const card2teamName1 = document.getElementById('team2-1-name');
const card2teamName2 = document.getElementById('team2-2-name');

// Card 3 
const card3teamOne = document.getElementById('team3-1-score');
const card3teamTwo = document.getElementById('team3-2-score');
const card3teamName1 = document.getElementById('team3-1-name');
const card3teamName2 = document.getElementById('team3-2-name');


updateScore(card1teamOne, card1teamTwo, card1teamName1, card1teamName2, 10, 12, 5000);
updateScore(card2teamOne, card2teamTwo, card2teamName1, card2teamName2, 15,18, 4000);
updateScore(card3teamOne, card3teamTwo, card3teamName1, card3teamName2, 25, 19, 4500);






// collapse 



let hiddenDiv = document.getElementById('hidden-content')
let hideBtn = document.getElementById('show-btn')


console.log(hiddenDiv);


hideBtn.addEventListener('click',()=>{
    hiddenDiv.classList.toggle('hidden-class-content')
})

hideBtn.addEventListener('click',()=>{
    hideBtn.classList.toggle('btn-style')
})