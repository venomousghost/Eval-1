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







// // Function to get score from localStorage or set a default value
// function getScore(team) {
//     return localStorage.getItem(team) ? parseInt(localStorage.getItem(team)) : 0;
// }

// // Function to update score in localStorage
// function setScore(team, score) {
//     localStorage.setItem(team, score);
// }

// // Function to update scores with localStorage persistence
// function updateScore(cardTeamOne, cardTeamTwo, cardTeamName1, cardTeamName2, teamOneKey, teamTwoKey, interval) {
//     let teamOneScore = getScore(teamOneKey);
//     let teamTwoScore = getScore(teamTwoKey);

//     // Set initial scores on the DOM from localStorage
//     cardTeamOne.innerHTML = teamOneScore;
//     cardTeamTwo.innerHTML = teamTwoScore;

//     setInterval(() => {
//         const teamTurn = Math.floor(Math.random() * 2); 
//         const score = Math.floor(Math.random() * 3 + 1); 

//         if (teamTurn === 0) {
//             teamOneScore += score;
//             cardTeamOne.innerHTML = teamOneScore;
//             setScore(teamOneKey, teamOneScore);  // Save score in localStorage
//         } else {
//             teamTwoScore += score;
//             cardTeamTwo.innerHTML = teamTwoScore;
//             setScore(teamTwoKey, teamTwoScore);  // Save score in localStorage
//         }

//         // Color logic for leading team
//         if (teamOneScore > teamTwoScore) {
//             cardTeamName1.style.color = "green";
//             cardTeamName2.style.color = "white";
//         } else if (teamOneScore < teamTwoScore) {
//             cardTeamName2.style.color = "green";
//             cardTeamName1.style.color = "white";
//         } else {
//             cardTeamName2.style.color = "white";
//             cardTeamName1.style.color = "white";
//         }

//     }, interval);
// }

// // Card 1 
// const card1teamOne = document.getElementById('team1-score');
// const card1teamTwo = document.getElementById('team2-score');
// const card1teamName1 = document.getElementById('team1-name');
// const card1teamName2 = document.getElementById('team2-name');

// // Card 2 
// const card2teamOne = document.getElementById('team2-1-score');
// const card2teamTwo = document.getElementById('team2-2-score');
// const card2teamName1 = document.getElementById('team2-1-name');
// const card2teamName2 = document.getElementById('team2-2-name');

// // Card 3 
// const card3teamOne = document.getElementById('team3-1-score');
// const card3teamTwo = document.getElementById('team3-2-score');
// const card3teamName1 = document.getElementById('team3-1-name');
// const card3teamName2 = document.getElementById('team3-2-name');

// // Call updateScore for each card with unique keys for localStorage
// updateScore(card1teamOne, card1teamTwo, card1teamName1, card1teamName2, 'team1score', 'team2score', 5000);
// updateScore(card2teamOne, card2teamTwo, card2teamName1, card2teamName2, 'team2-1score', 'team2-2score', 4000);
// updateScore(card3teamOne, card3teamTwo, card3teamName1, card3teamName2, 'team3-1score', 'team3-2score', 4500);








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








// carousal



// let nextDom = document.getElementById('next');
// let prevDom = document.getElementById('prev');
// let carouselInnerDom = document.querySelectorAll('.carousel-inner');

// // Add currentIndex to track the active slide
// let currentIndex = 0;

// // Set a function to update the visibility of carousel items
// function updateCarousel() {
//     carouselInnerDom.forEach((item, index) => {
//         if (index === currentIndex) {
//             item.style.display = 'block'; // Show the current slide
//         } else {
//             item.style.display = 'none'; // Hide the other slides
//         }
//     });
// }

// // Show the first slide initially
// // updateCarousel();

// nextDom.onclick = function () {
//     currentIndex = (currentIndex + 1) % carouselInnerDom.length; // Increment index and loop
//     updateCarousel(); // Update the carousel after increment
// }

// prevDom.onclick = function () {
//     currentIndex = (currentIndex - 1 + carouselInnerDom.length) % carouselInnerDom.length; // Decrement index and loop
//     updateCarousel(); // Update the carousel after decrement
// }




let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselInnerDom = document.querySelectorAll('.carousel-inner');

let currentIndex = 0;
let isAnimating = false; // Prevent multiple clicks during animation

// Initialize: Make sure only the first slide is visible
carouselInnerDom.forEach((slide, index) => {
    if (index === 0) {
        slide.style.display = 'block'; // Show the first slide
    } else {
        slide.style.display = 'none'; // Hide other slides
    }
});

// Function to handle the sliding animation
function slideCarousel(direction) {
    if (isAnimating) return; // Prevent action if an animation is already running
    isAnimating = true;

    let nextIndex;
    if (direction === 'next') {
        nextIndex = (currentIndex + 1) % carouselInnerDom.length;
    } else if (direction === 'prev') {
        nextIndex = (currentIndex - 1 + carouselInnerDom.length) % carouselInnerDom.length;
    }

    const currentSlide = carouselInnerDom[currentIndex];
    const nextSlide = carouselInnerDom[nextIndex];

    // Prepare the next slide for animation
    nextSlide.style.display = 'block';
    nextSlide.style.position = 'absolute';
    nextSlide.style.transform = `translateX(${direction === 'next' ? '100%' : '-100%'})`;

    // Trigger animation after a short delay to allow the initial transform to take effect
    setTimeout(() => {
        currentSlide.style.transition = 'transform 0.5s ease';
        nextSlide.style.transition = 'transform 0.5s ease';
        currentSlide.style.transform = `translateX(${direction === 'next' ? '-100%' : '100%'})`;
        nextSlide.style.transform = 'translateX(0)';

        // After the animation ends, reset styles and update the current slide index
        setTimeout(() => {
            currentSlide.style.display = 'none';
            currentSlide.style.transform = ''; // Reset transform
            currentSlide.style.transition = ''; // Remove transition for smooth reset
            nextSlide.style.position = ''; // Reset positioning
            nextSlide.style.transition = ''; // Remove transition after it's done
            currentIndex = nextIndex; // Update current index
            isAnimating = false; // Allow further animations
        }, 500); // Match the transition duration
    }, 20); // Small delay to ensure initial transform is applied
}

nextDom.onclick = function () {
    slideCarousel('next');
};

prevDom.onclick = function () {
    slideCarousel('prev');
};

















// button


let btn = document.getElementById('register-btn');
let con = document.querySelector('.container');
let overlay = document.querySelector('.overlay');
let submitBtn =document.querySelector('#submit-btn')
let submitmsg = document.querySelector('.submit-msg')
let register = false

// Function to disable scrolling
function disableScroll() {
    document.body.style.overflow = 'hidden';
}

// Function to enable scrolling
function enableScroll() {
    document.body.style.overflow = 'auto';
}

btn.onclick = function () {
    con.style.opacity = 1;
    con.style.zIndex = 5; // Show form
    overlay.style.opacity = 1;
    overlay.style.zIndex = 4; // Show overlay behind the form
    disableScroll(); // Disable page scroll when form is opened
};

// Close button functionality
let closeBtn = document.querySelector('.close-btn');

closeBtn.onclick = function () {
    con.style.opacity = 0;
    con.style.zIndex = -1; // Hide form
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1; // Hide overlay
    enableScroll(); // Re-enable scrolling when form is closed
};

submitBtn.onclick = function (event) {
    con.style.opacity = 0;
    con.style.zIndex = -1; // Hide form
    overlay.style.opacity = 0;
    overlay.style.zIndex = -1; // Hide overlay
    submitmsg.style.zIndex = 5
    submitmsg.style.opacity = 1
    overlay.style.opacity = 1;
    overlay.style.zIndex = 4; // Show overlay behind the form
    btn.innerHTML = 'Registered'

    btn.onclick = null;

    setTimeout(() => {
        submitmsg.style.zIndex = -2
        submitmsg.style.opacity = 0
        overlay.style.opacity = 0;
        overlay.style.zIndex = -1; // Hide overlay
    }, 2000);
    enableScroll(); // Re-enable scrolling when form is closed
    event.preventDefault();
}
















// add 


let add1 = 