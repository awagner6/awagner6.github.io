const container = document.getElementById('container');
const draggableContainer = document.querySelector('.draggable-container');
const draggables = document.querySelectorAll('.draggable');
const correctOrder = ["FIRE TRUCK", "PUMPKIN", "BLONDE", "CROCODILE", "SKY", "DENIM", "LAVENDER"];
const submitBtn = document.getElementById('submitBtn');
const puzzleNumber = 1;

let lastOffset = Number.NEGATIVE_INFINITY;
let gameWon = false;
let ghostElement = null;
let originalParent = null;
let originalNextSibling = null;
let lastAfterElement = null;
let lastY = 0; // Initialize lastY outside of the function
let boardStates = [];

function handleDragStart(e) {
  if (gameWon || e.target.classList.contains('correct')) return;
  e.target.classList.add('dragging');
  originalParent = e.target.parentNode;
  originalNextSibling = e.target.nextElementSibling;
  lastY = e.clientY;
}

function handleTouchStart(e) {
  if (gameWon || e.target.classList.contains('correct')) return;
  const draggable = e.target;
  draggable.classList.add('dragging');
  originalParent = draggable.parentNode;
  originalNextSibling = draggable.nextElementSibling;
  ghostElement = draggable.cloneNode(true);
  ghostElement.classList.add('ghost');
  document.body.appendChild(ghostElement);
  const touch = e.touches[0];
  ghostElement.style.top = touch.clientY - ghostElement.offsetHeight / 2 + 'px';
  ghostElement.style.left = touch.clientX - ghostElement.offsetWidth / 2 + 'px';
  lastY = touch.clientY;
  e.preventDefault();
}


function handleDragEnd(e) {
    if (e.target.classList.contains('correct')) return;
    e.target.classList.remove('dragging');
}


function handleTouchEnd(e) {
  if (e.target.classList.contains('correct')) return;
  const draggable = e.target;
  draggable.classList.remove('dragging');
    if (ghostElement) {
        ghostElement.remove();
        ghostElement = null;
    }
}



function handleSwap(draggingElement, touchY) {
  const afterElement = getDragAfterElement(draggableContainer, touchY);

  if (!afterElement || afterElement.classList.contains('correct')) {
      // If there is no element to swap with or it is correct, do nothing
      //("correct - no swap")
      return;
  }

  const afterElementCenter = afterElement.getBoundingClientRect().top + afterElement.offsetHeight / 2;
  const offset = touchY - afterElementCenter;
  //console.log(offset)

  if (lastOffset === null) {
      //console.log("null issue")
      lastOffset = offset;
      return;
  }

  // Define a threshold for the offset change
  const threshold = 25; // You can adjust this value based on your needs

  // Check if the offset change is within the threshold
  if ((lastOffset < 0 && offset > 0 && Math.abs(lastOffset) < threshold && Math.abs(offset) < threshold) ||
      (lastOffset > 0 && offset < 0 && Math.abs(lastOffset) < threshold && Math.abs(offset) < threshold)) {
      // If the offset changes sign within the threshold, initiate a swap
      //console.log("swap!")
      swapElements(draggingElement, afterElement);
  }

  lastOffset = offset;
}


function swapElements(element1, element2) {
  // Check if either element is marked as correct
  if (element1.classList.contains('correct') || element2.classList.contains('correct')) {
    return; // Do not perform the swap
  }

  // Remove any bulge animation before swapping
  element1.style.animation = 'none';
  element2.style.animation = 'none';

  // Create a temporary placeholder element
  const placeholder = document.createElement('div');

  // Replace element1 with the placeholder
  element1.replaceWith(placeholder);

  // Replace element2 with element1
  element2.replaceWith(element1);

  // Replace the placeholder with element2
  placeholder.replaceWith(element2);
}



function handleTouchMove(e) {
  e.preventDefault();
  if (e.target.classList.contains('correct')) return;
  const touch = e.touches[0];
  const draggingElement = document.querySelector('.dragging');

  // Update the position of the ghost element
  if (ghostElement) {
      ghostElement.style.top = touch.clientY - ghostElement.offsetHeight / 2 + 'px';
      ghostElement.style.left = touch.clientX - ghostElement.offsetWidth / 2 + 'px';
  }

  // Check for swap conditions more frequently
  const interval = 10; // Adjust this value as needed
  for (let i = 0; i < Math.abs(lastY - touch.clientY); i += interval) {
      const newY = lastY < touch.clientY ? lastY + i : lastY - i;
      //console.log(newY)
      handleSwap(draggingElement, newY);
  }
  lastY = touch.clientY;
}


draggableContainer.addEventListener('dragover', e => {
  e.preventDefault();
  if (e.target.classList.contains('correct')) return;
  const draggingElement = document.querySelector('.dragging');
  const clientY = e.clientY;

  // Check for swap conditions more frequently
  const interval = 10; // Adjust this value as needed
  for (let i = 0; i < Math.abs(lastY - clientY); i += interval) {
      const newY = lastY < clientY ? lastY + i : lastY - i;
      handleSwap(draggingElement, newY);
  }
  lastY = clientY;
}, { passive: false });



draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', handleDragStart, { passive: false });
    draggable.addEventListener('dragend', handleDragEnd);
    draggable.addEventListener('touchstart', handleTouchStart, { passive: false });
    draggable.addEventListener('touchend', handleTouchEnd);
    draggable.addEventListener('touchmove', handleTouchMove, { passive: false });
});


function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging):not(.correct)')];
  let closest = null;
  let closestOffset = Number.POSITIVE_INFINITY; // Start with positive infinity to find the minimum absolute offset

  draggableElements.forEach(child => {
      const box = child.getBoundingClientRect();
      const cent = (box.top + box.height / 2);
      const offset = y - (box.top + box.height / 2); // Keep the sign of the offset
      //console.log("Candidate:", child ? child.textContent : "None");
      //console.log(y)
      //console.log(cent)
      //console.log(offset)
      if (Math.abs(offset) < Math.abs(closestOffset)) { // Compare absolute values to find the closest
          closest = child;
          closestOffset = offset;
      }
  });
  //console.log("Closest element:", closest ? closest.textContent : "None");
  //console.log(closestOffset)
  return closest;
}

function deactivateDraggable(draggable) {
  draggable.removeEventListener('dragstart', handleDragStart);
  draggable.removeEventListener('dragend', handleDragEnd);
  draggable.removeEventListener('touchstart', handleTouchStart);
  draggable.removeEventListener('touchend', handleTouchEnd);
  draggable.removeEventListener('touchmove', handleTouchMove);
  draggable.setAttribute('draggable', 'false');
}


function deactivateDraggables() {
  const correctDraggables = document.querySelectorAll('.draggable.correct');
  correctDraggables.forEach(draggable => {
    draggable.removeEventListener('dragstart', handleDragStart);
    draggable.removeEventListener('dragend', handleDragEnd);
    draggable.removeEventListener('touchstart', handleTouchStart);
    draggable.removeEventListener('touchend', handleTouchEnd);
    draggable.removeEventListener('touchmove', handleTouchMove);
    // Remove the draggable attribute to prevent further dragging
    draggable.removeAttribute('draggable');
  });

  // Remove any ghost elements that might still be present
  if (ghostElement) {
    ghostElement.remove();
    ghostElement = null;
  }
}


function checkOrder() {
  const currentDraggables = document.querySelectorAll('.draggable');
  const currentOrder = Array.from(currentDraggables).map(el => el.textContent.trim());

  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder)) {
      gameWon = true; // Set the gameWon flag to true
      deactivateDraggables();
  }
}

submitBtn.addEventListener('click', (e) => {
  // Prevent default action and event propagation
  e.preventDefault();
  e.stopPropagation();

  // Disable the Submit button
  submitBtn.disabled = true;

  const currentDraggables = document.querySelectorAll('.draggable');
  const currentOrder = Array.from(currentDraggables).map(el => el.textContent.trim());
  const boardState = currentOrder.map((word, index) => (word === correctOrder[index] ? '🟢' : '⚪'));

  // Store the board state
  boardStates.push(boardState);

  // Animate the draggables and mark them as correct if they are in the correct place
  animateDraggables(currentDraggables, () => {
    // Check if the game is won after all animations are done
    checkOrder();
    if (gameWon) {
      setTimeout(() => { // Add a pause before the popup appears
        showWinPopup();
      }, 900); // Adjust the timing as needed
    }
  // Re-enable the Submit button
  submitBtn.disabled = false;
  }, currentOrder);
});

function animateDraggables(draggables, callback, currentOrder) {
  let i = 0;
  setTimeout(() => { // Add a pause before the animation starts
    const interval = setInterval(() => {
      if (i >= draggables.length) {
        clearInterval(interval);
        setTimeout(() => {
          // Remove a circle after the animation is done
          const circles = Array.from(document.querySelectorAll('.circle'));
          const usedCircles = circles.filter(circle => circle.classList.contains('used'));
          if (usedCircles.length < circles.length) {
            circles[circles.length - 1 - usedCircles.length].classList.add('used');
          }

          // Check for losing condition
          if (usedCircles.length + 1 === circles.length && !gameWon) {
            // Show losing popup
            showLosingPopup();
          } else {
            // Call the callback function if provided
            if (callback) {
              callback();
            }
          }
        }, 375); // Add a pause before the popup appears
        return;
      }

      // Force reflow to reset the animation
      draggables[i].style.animation = 'none';
      void draggables[i].offsetWidth; // Trigger reflow

      // Start the bulge animation
      draggables[i].style.animation = 'bulge 0.375s ease'; // 25% faster animation

      // Mark the draggable as correct if it's in the correct place
      if (currentOrder[i] === correctOrder[i]) {
        draggables[i].classList.add('correct');
      }

      i++;
    }, 120); // Start the next bulge sooner
  }, 500); // Pause before the animation starts
}



function showWinPopup() {
  const winPopup = document.createElement('div');
  winPopup.classList.add('popup', 'win-popup');

  // Transpose the boardStates array to arrange guesses side by side
  const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));

  // Generate the emoji sequence based on the transposed board states
  const emojiSequence = transposedStates.map(state => state.join(' ')).join('\n');

  winPopup.innerHTML = `<p>You solved Order Up<br>in ${boardStates.length} ${boardStates.length === 1 ? 'guess' : 'guesses'}!</p><pre>${emojiSequence}</pre>`;
  
  addButtons(winPopup);

  document.body.appendChild(winPopup);
  winPopup.style.display = 'block';

  winPopup.onclick = function(event) {
    if (event.target === winPopup) {
      document.body.removeChild(winPopup);
    }
  };
}

function showOhNoPopup() {
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

function showLosingPopup() {
  showOhNoPopup();

  // Wait a moment before starting the losing animation
  setTimeout(() => {
    const currentDraggables = document.querySelectorAll('.draggable');
    animateLosingDraggables(currentDraggables, () => {
      // Hide the "Oh no" popup
      const ohNoPopup = document.querySelector('.oh-no-popup');
      if (ohNoPopup) {
        ohNoPopup.remove();
      }

      // Show the social shareout popup with a different message
      const losingSharePopup = document.createElement('div');
      losingSharePopup.classList.add('popup', 'losing-popup');
      const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
      const emojiSequence = transposedStates.map(state => state.join(' ')).join('\n');
      losingSharePopup.innerHTML = `<p>Order Up got the<br>best of you today!</p><pre>${emojiSequence}</pre>`;
      addButtons(losingSharePopup);
      
      document.body.appendChild(losingSharePopup);
      losingSharePopup.style.display = 'block';
    });
  }, 1000); // Adjust the timing as needed
}


function animateLosingDraggables(draggables, callback) {
  setTimeout(() => { // Add a pause before the animation starts
    draggables.forEach((draggable, index) => {
      // Force reflow to reset the animation
      draggable.style.animation = 'none';
      void draggable.offsetWidth; // Trigger reflow

      // Apply the bulge animation and update the background color and text simultaneously
      draggable.style.animation = 'bulge 0.375s ease forwards';
      draggable.style.backgroundColor = 'yellow';
      draggable.textContent = correctOrder[index];
      deactivateDraggable(draggable); // Deactivate the draggable
    });

    setTimeout(() => {
      // Call the callback function if provided
      if (callback) {
        callback();
      }
    }, 375 + 500); // Adjust the timing to wait for the animation to complete
  }, 500); // Pause before the animation starts
}


function addButtons(popup) {
  // Create a container for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('button-container');

  // Add Share and Patreon buttons
  const shareButton = document.createElement('button');
  shareButton.textContent = 'Share';
  shareButton.classList.add('popup-button');
  shareButton.onclick = () => {
    // Implement share functionality
    const puzzleNumber = 1; // Change this as needed for different puzzles
    const transposedStates = boardStates[0].map((_, colIndex) => boardStates.map(row => row[colIndex]));
    const emojiSequence = transposedStates.map(state => state.join(' ')).join('\n');
    const shareText = `Order Up Puzzle ${puzzleNumber}\nGuesses: ${boardStates.length}\n${emojiSequence}\nOrderUp.xyz`;
    navigator.clipboard.writeText(shareText)
      .then(() => {
        console.log('Share text copied to clipboard');
        // Optionally, show a confirmation message to the user
      })
      .catch(err => {
        console.error('Failed to copy share text to clipboard:', err);
        // Optionally, handle errors (e.g., clipboard access denied)
      });
  };

  const patreonButton = document.createElement('button');
  patreonButton.textContent = 'Patreon';
  patreonButton.classList.add('popup-button');
  patreonButton.onclick = () => {
    // Open the Patreon link in a new tab
    window.open('https://www.patreon.com/anigrams', '_blank');
  };

  // Append buttons to the container
  buttonContainer.appendChild(shareButton);
  buttonContainer.appendChild(patreonButton);

  // Append the container to the popup
  popup.appendChild(buttonContainer);
}




function togglePopup(popupId) {
  var popup = document.getElementById(popupId);
  var isVisible = popup.style.display === "block";
  document.querySelectorAll('.popup').forEach(p => p.style.display = "none");
  if (!isVisible) {
    popup.style.display = "block";
  }
}

window.onclick = function(event) {
  if (!event.target.matches('.help-icon, .lightbulb-icon, .popup, .share-btn, .patreon-btn') && !event.target.closest('.popup')) {
    document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = "none";
    });
  }
}


window.ontouchstart = window.onclick; // Use the same handler for touchend
