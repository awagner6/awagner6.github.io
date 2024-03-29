// popups.js

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
}

export function showWinPopup(boardStates, theme) {
    const winPopup = document.createElement('div');
    winPopup.classList.add('popup', 'win-popup');

    const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
    const emojiSequence = transposedStates.map(state => state.join('  ')).join('\n');

    winPopup.innerHTML = `<p style="font-size: .75em;">You solved Order Up<br>in ${boardStates.length} ${boardStates.length === 1 ? 'guess' : 'guesses'}!<br><br><p style="font-size: .75em;">Today's theme:<br><strong>${theme}</strong></p><pre>${emojiSequence}</pre>`;
    addButtons(winPopup, boardStates);

    document.body.appendChild(winPopup);
    winPopup.style.display = 'block';

    winPopup.onclick = function(event) {
        if (event.target === winPopup) {
            document.body.removeChild(winPopup);
        }
    };
}

export function showLosingPopup(boardStates, theme) {
    showOhNoPopup();

    // Set a timeout to display the losing popup after a delay
    setTimeout(() => {
        closeAllPopups();
        const losingPopup = document.createElement('div');
        losingPopup.classList.add('popup', 'losing-popup');

        const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
        const emojiSequence = transposedStates.map(state => state.join(' ')).join('\n');

        losingPopup.innerHTML = `<p style="font-size: .75em;">Order Up got the<br>best of you today!</p><br><p style="font-size: .75em;">Today's theme:<br><strong>${theme}</strong></p><pre>${emojiSequence}</pre>`;
        addButtons(losingPopup, boardStates);

        document.body.appendChild(losingPopup);
        losingPopup.style.display = 'block';
    }, 750); // Adjust the delay (in milliseconds) as needed
}


function addButtons(popup, boardStates) {
    // Create a container for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-container');
    const gameWon = popup.classList.contains('win-popup');
    // Add Share and Patreon buttons
    const shareButton = document.createElement('button');
    shareButton.textContent = 'Share';
    shareButton.classList.add('popup-button');
    shareButton.onclick = () => {
        // Define the content to share
        const numberOfGuesses = gameWon ? boardStates.length : 'X';
        const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
        const emojiBoard = transposedStates.map(state => state.join(' ')).join('\n');
        const shareText = `Order Up ${numberOfGuesses}/5\n\n${emojiBoard}`;
    
        const shareData = {
            title: 'Order Up',
            text: shareText,
            url: 'https://orderup.games' // Replace with your puzzle's URL
        };
    
        // Check if the Web Share API is supported
        if (navigator.share) {
            // Use the Web Share API
            navigator.share(shareData)
                .then(() => console.log('Share successful'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Fallback for browsers that don't support the Web Share API
            navigator.clipboard.writeText(shareText)
                .then(() => {
                    console.log('Share text copied to clipboard');
                    // Optionally, show a confirmation message to the user
                })
                .catch((error) => {
                    console.error('Failed to copy share text to clipboard:', error);
                    // Optionally, handle errors (e.g., clipboard access denied)
                });
        }
    }

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