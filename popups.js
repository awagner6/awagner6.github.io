import { timeUntilNextRelease, getCurrentPuzzleIndex, getSavedPuzzleIndex } from './game.js';
import { saveGameState } from './gameState.js';

export function togglePopup(popupId) {
    var popup = document.getElementById(popupId);
    var isVisible = popup.style.display === "block";
    document.querySelectorAll('.popup').forEach(p => p.style.display = "none");
    if (!isVisible) {
        popup.style.display = "block";
    }
}

export function closeAllPopups() {
    document.querySelectorAll('.popup').forEach(popup => {
        popup.style.display = "none";
    });
    isLightbulbPopupVisible = false;
    isHelpPopupVisible = false;
    isInfoPopupVisible = false;
}

export function showWinPopup(boardStates, revBoardStates, currentPuzzle, reverseWon, lightbulbUsed, streakCount) {

    const winPopup = document.createElement('div');
    winPopup.classList.add('popup', 'win-popup');

    // Use the appropriate board state based on whether the game was won in reverse
    const finalBoardStates = reverseWon ? revBoardStates : boardStates;


    // Construct the post-solve content
    const postSolveContent = (reverseWon ? currentPuzzle.post_solve.slice().reverse() : currentPuzzle.post_solve)
        .map(item => `<p style="font-size: 1em;">${item}</p>`)
        .join('');

    winPopup.innerHTML = `<p>You solved Order Up<br>in ${finalBoardStates.length} ${finalBoardStates.length === 1 ? 'guess' : 'guesses'}!<br><br>Theme description:<br><strong>${currentPuzzle.theme}</strong><br><br></p><div class="post-solve">${postSolveContent}<br></div><p>Streak: ${streakCount}</p><br><div id="countdown-clock"></div>`;
    addButtons(winPopup, finalBoardStates, currentPuzzle, lightbulbUsed, reverseWon);

    document.body.appendChild(winPopup);
    winPopup.style.display = 'block';

    // Update the countdown clock every second
    const countdownInterval = setInterval(updateCountdownClock, 1000);
    updateCountdownClock(); // Initial update
}





export function showLosingPopup(boardStates, revBoardStates, currentPuzzle, lightbulbUsed, revSolve) {
    // Set a timeout to display the losing popup after a delay
    closeAllPopups();
    const losingPopup = document.createElement('div');
    losingPopup.classList.add('popup', 'losing-popup');
    const finalBoardStates = revSolve ? revBoardStates : boardStates;

    
    const postSolveContent = (revSolve ? currentPuzzle.post_solve.slice().reverse() : currentPuzzle.post_solve)
        .map(item => `<p style="font-size: 1em;">${item}</p>`)
        .join('');

    losingPopup.innerHTML = `<p>Order Up got the<br>best of you today!</p><br><p>Theme description:<br><strong>${currentPuzzle.theme}</strong><br><br></p><div class="post-solve">${postSolveContent}<br></div><div id="countdown-clock"></div>`;
    addButtons(losingPopup, finalBoardStates, currentPuzzle, lightbulbUsed, revSolve);

    document.body.appendChild(losingPopup);
    losingPopup.style.display = 'block';

    // Update the countdown clock every second
    const countdownInterval = setInterval(updateCountdownClock, 1000);
    updateCountdownClock(); // Initial update
}


function addButtons(popup, boardStates, currentPuzzle, lightbulbUsed, revSolve) {
    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const gameWon = popup.classList.contains('win-popup');
    const directionIndicator = revSolve ? 'v' : '^'; // Add "v" if revSolve is true, "^" otherwise


    // Add Share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    shareButton.classList.add('popup-button');
    shareButton.onclick = () => {
        const numberOfGuesses = gameWon ? boardStates.length : 'X';
        const transposedBoardStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
        const emojiBoard = transposedBoardStates.map(column => column.join('    ')).join('\n');
        const lightbulbEmoji = lightbulbUsed ? '💡' : ''; // Add the lightbulb emoji if used
        const shareText = `Order Up ${currentPuzzle.id}\n${numberOfGuesses}/5${lightbulbEmoji}${directionIndicator}\n\n${emojiBoard}`;

        if (navigator.share) {
            // Use Web Share API on supported devices
            navigator.share({
                text: shareText
            });
        } else {
            // Fallback for browsers that do not support the Web Share API
            navigator.clipboard.writeText(shareText)
                .then(() => {
                    console.log('Text copied to clipboard');
                    const copiedPopup = document.createElement('div');
                    copiedPopup.classList.add('copied-popup');
                    copiedPopup.textContent = 'Copied';
                    document.body.appendChild(copiedPopup);
        
                    const buttonRect = shareButton.getBoundingClientRect();
                    copiedPopup.style.left = `${buttonRect.left + (buttonRect.width/5)}px`;
        
                    // Move the popup higher above the button
                    const popupOffset = 10; // Adjust this value as needed
                    copiedPopup.style.top = `${buttonRect.top - copiedPopup.offsetHeight - (3*popupOffset)}px`;
        
                    copiedPopup.style.display = 'block';
        
                    setTimeout(() => {
                        copiedPopup.style.display = 'none';
                        document.body.removeChild(copiedPopup);
                    }, 500);
                })
                .catch((error) => {
                    console.error('Failed to copy text to clipboard:', error);
                });
        }
    };
    
    // Add Patreon button
    const patreonButton = document.createElement('button');
    patreonButton.textContent = 'Patreon';
    patreonButton.classList.add('popup-button');
    patreonButton.onclick = () => {
        window.open('https://www.patreon.com/anigrams', '_blank');
    };

    // Append buttons to the container
    buttonContainer.appendChild(shareButton);
    buttonContainer.appendChild(patreonButton);

    // Append the container to the popup
    popup.appendChild(buttonContainer);
}




export function showOhNoPopup() {
    const ohNoPopup = document.createElement('div');
    ohNoPopup.classList.add('popup', 'oh-no-popup');
    ohNoPopup.innerHTML = '<p>Oh no!</p>';
    document.body.appendChild(ohNoPopup);
    ohNoPopup.style.display = 'block';
  
    ohNoPopup.onclick = function(event) {
      if (event.target === ohNoPopup) {
        document.body.removeChild(ohNoPopup);
      }
    };
  }

  let isLightbulbPopupVisible = false;
  let isHelpPopupVisible = false;
  let isInfoPopupVisible = false;


  export function showLightbulbPopup(currentPuzzle) {
      const lightbulbPopup = document.getElementById('lightbulb-popup');
      if (lightbulbPopup) {
          if (isLightbulbPopupVisible) {
                lightbulbPopup.style.display = 'none';
          } else {
                lightbulbPopup.style.display = 'block';
                lightbulbPopup.innerHTML = `<p><span style="font-size: larger;">Theme hint:<br><span style="font-size: larger;"><strong>${currentPuzzle.hint2}</strong></p>`;
          }
          isLightbulbPopupVisible = !isLightbulbPopupVisible;

      }
  }
  

export function showDuplicatePopup() {
    const duplicatePopup = document.createElement('div');
    duplicatePopup.classList.add('popup', 'duplicate-popup');
    duplicatePopup.innerHTML = '<p>You tried that already!</p>';
    document.body.appendChild(duplicatePopup);
    duplicatePopup.style.display = 'block';

    // Set a timeout to remove the popup after 500 milliseconds
    setTimeout(() => {
        document.body.removeChild(duplicatePopup);
    }, 700);
}

export function showHelpPopup() {
    const helpPopup = document.getElementById('help-popup');
    if (helpPopup) {
        if (isHelpPopupVisible) {
            helpPopup.style.display = 'none';
        } else {
            helpPopup.innerHTML = `<p><span style="font-size: larger;">How to play:</span><br><br></p>
                <p style="font-size: larger;">Arrange the items provided in the correct order within 5 guesses. The correct order is based on a hidden theme that's up to you to figure out.<br><br></p>
                <p style="font-size: larger;">Tap/click and drag to rearrange items. Hit Submit to guess. When you hit Submit, any correctly placed items will turn green and lock in place.<br><br></p>
                <p style="font-size: larger;">The game ends when you either find the correct order, or run out of guesses.<br><br></p>
                <p style="font-size: larger;">A theme hint is provided at the top of your screen, and a second, bigger hint is available by tapping the lightbulb icon.<br><br></p>
                <p style="font-size: larger;">If you submit a fully correct order in either direction, it will count as being correct.<br><br></p>`;
            helpPopup.style.display = 'block';
        }
        isHelpPopupVisible = !isHelpPopupVisible;
    }
}

export function showInfoPopup() {
    const infoPopup = document.getElementById('info-popup');
    if (infoPopup) {
        if (isInfoPopupVisible) {
            infoPopup.style.display = 'none';
        } else {
            infoPopup.innerHTML = `<p><span style="font-size: larger;">Info</span><br><br></p>
                <p style="font-size: larger;">Created by: Adam Wagner<br><br></p>
                <p style="font-size: larger;">Developed by: Adam Wagner<br><br></p>
                <p style="font-size: larger;">Special thanks: Anna Wagner<br><br></p>
                <p style="font-size: larger;">Contact: info@OrderUp.com<br><br></p>`;
            infoPopup.style.display = 'block';
        }
        isInfoPopupVisible = !isInfoPopupVisible;
    }
}

function updateCountdownClock() {
    const countdownClock = document.getElementById('countdown-clock');
    if (!countdownClock) return;

    const timeRemaining = timeUntilNextRelease();

    if (timeRemaining <= 0) {
        countdownClock.innerHTML = "Refresh for a new puzzle!";
    } else {
        const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownClock.innerHTML = `${hours}h ${minutes}m ${seconds}s`;
    }
}




setInterval(updateCountdownClock, 1000);



