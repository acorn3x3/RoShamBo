/* Imports */
import { getRandomItem } from './utils.js';

/* State */
let  gameState = 'choose'; //'choose' or 'results'
let pick = ''; //batman,badman,barman
let fight = '' ;//batman beats badman, badman beats barman, barman beats batman 
let result = ''; //win lose tie 

let fights = 0;
let wins = 0;
let losses = 0;

//probability array
const bbb = [0,1,2,3,4,5,6,7,8];



/* Actions */
function loadPage() {
        displayRosham();
        displayResults();
        displayScoreboard();
}


function fightBBB(userFight) {
    gameState = 'results'; 
    fight = userFight;
    battle = getRandomItem(sides);
    battles++;
        if (userFight === 0
        }
        loadPage();

        
    function playAgain() {
        gameState = 'guess';
        loadPage();
    }}



/* Components */
const totalDisplay = document.getElementById('total-display');
const winsDisplay = document.getElementById('wins-display');
const lossesDisplay=  document.getElementById('losses-display');

function displayScoreboard() {
    
    winsDisplay.textContent = wins;
   lossesDisplay.textContent = losses;
    totalDisplay.textContent = flips;

}
/* Component */
// get DOM
const batmanChoose = document.getElementById('batman');
const badmanChoose = document.getElementById('2');
const barmanChoose = document.getElementById('3');


// display
function displayGuess() {
    flipShell1.classList.remove('win','lose','fade-out');
    flipShell2.classList.remove('win','lose','fade-out');
    flipShell3.classList.remove('win','lose','fade-out');
}

    if (gameState === 'results') {
         if (guess === shell) {
            
        //flipShell1.classList.add('win');
        //flipShell2.classList.add('win');
        //flipShell3.classList.add('win');
    }

    else {
        //flipShell1.classList.add('lose');
        //flipShell2.classList.add('lose');
        //flipShell3.classList.add('lose');
    }};

        



       

// event listeners
//playAgainButton.addEventListener('click', () => {
    //playAgain();
//});
Batman.addEventListener('click', () => {
    batmanChoose('batman-choose');
    });
badman.addEventListener('click', () => {
    batmanChoose('badman-choose');
    });
barman.addEventListener('click', () => {
    batmanChoose('barman-choose');
    });


//results
//const totalImage = document.getElementById('');
//const totalDisplay = document.getElementById('total-display');
const resultsSection = document.getElementById('results-section');
const playAgainButton = document.getElementById('play-again-button');

function displayResults() {
        if (gamestate === 'results') {
       resultsSection.classList.remove('fade-out');}
        else{
        }};

            


/* Run page load code */
loadPage();
