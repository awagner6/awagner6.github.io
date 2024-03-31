

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
}

export function showWinPopup(boardStates, theme, currentPuzzle) {
    const winPopup = document.createElement('div');
    winPopup.classList.add('popup', 'win-popup');

    const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
    const emojiSequence = transposedStates.map(state => state.join('  ')).join('\n');

    winPopup.innerHTML = `<p style="font-size: .75em;">You solved Order Up<br>in ${boardStates.length} ${boardStates.length === 1 ? 'guess' : 'guesses'}!<br><br><p style="font-size: .75em;">Theme description:<br><strong>${theme}</strong></p><pre>${emojiSequence}</pre>`;
    addButtons(winPopup, boardStates, currentPuzzle);

    document.body.appendChild(winPopup);
    winPopup.style.display = 'block';

    winPopup.onclick = function(event) {
        if (event.target === winPopup) {
            document.body.removeChild(winPopup);
        }
    };
}

export function showLosingPopup(boardStates, theme, currentPuzzle) {
    // Set a timeout to display the losing popup after a delay
    setTimeout(() => {
        closeAllPopups();
        const losingPopup = document.createElement('div');
        losingPopup.classList.add('popup', 'losing-popup');

        const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
        const emojiSequence = transposedStates.map(state => state.join(' ')).join('\n');

        losingPopup.innerHTML = `<p style="font-size: .75em;">Order Up got the<br>best of you today!</p><br><p style="font-size: .75em;">Theme description:<br><strong>${theme}</strong></p><pre>${emojiSequence}</pre>`;
        addButtons(losingPopup, boardStates, currentPuzzle);

        document.body.appendChild(losingPopup);
        losingPopup.style.display = 'block';
    }, 750); // Adjust the delay (in milliseconds) as needed
}

function addButtons(popup, boardStates, currentPuzzle) {
    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const gameWon = popup.classList.contains('win-popup');

    // Add Share button
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    shareButton.classList.add('popup-button');
    shareButton.onclick = () => {
        const numberOfGuesses = gameWon ? boardStates.length : 'X';
        const transposedBoardStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
        const emojiBoard = transposedBoardStates.map(column => column.join('    ')).join('\n');
        const shareText = `Order Up ${currentPuzzle.id}\n${numberOfGuesses}/5\n\n${emojiBoard}`;
    
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

  export function showLightbulbPopup(currentPuzzle) {
      const lightbulbPopup = document.getElementById('lightbulb-popup');
      if (lightbulbPopup) {
          if (isLightbulbPopupVisible) {
              lightbulbPopup.style.display = 'none';
          } else {
              lightbulbPopup.innerHTML = `<p><span style="font-size: larger;">Theme hint:<br><span style="font-size: larger;"><strong>${currentPuzzle.hint2}</strong></p>`;
              lightbulbPopup.style.display = 'block';
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

