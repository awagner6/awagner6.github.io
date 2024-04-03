import { puzzles } from './constants.js';
import * as Popups from './popups.js';
import { saveGameState} from './gameState.js';



// Assume puzzles are released daily at 6:30 PM PST
const releaseTime = { hours: 18, minutes: 30 };

// Calculate the current puzzle index based on the time
function getCurrentPuzzleIndex() {
    const now = new Date();
    const releaseDateTime = new Date(now);
    releaseDateTime.setHours(releaseTime.hours, releaseTime.minutes, 0, 0);

    // Adjust for time zone (assuming PST)
    const timezoneOffset = 8 * 60; // 8 hours in minutes
    releaseDateTime.setMinutes(releaseDateTime.getMinutes() - timezoneOffset);

    // Calculate the number of days since the start date (e.g., the launch date of the game)
    const startDate = new Date('2024-03-29T18:30:00-07:00'); // Example start date
    const daysSinceStart = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

    // Use modulo to cycle through the puzzles if there are more days than puzzles
    return daysSinceStart % puzzles.length;
}

let currentPuzzleIndex = getCurrentPuzzleIndex();
const currentPuzzle = puzzles[currentPuzzleIndex];
const correctOrder = currentPuzzle.solution;
const theme = currentPuzzle.theme;
const draggableContainer = document.querySelector('.draggable-container');
const submitBtn = document.getElementById('submitBtn');
const instructionsElement = document.getElementById('instructions');

let lastOffset = Number.NEGATIVE_INFINITY;
let gameWon = false;
let reverseWon = false;
let ghostElement = null;
let originalParent = null;
let originalNextSibling = null;
let lastAfterElement = null;
let lastY = 0; // Initialize lastY outside of the function
let boardStates = [];
let boardOrders = [];
let gameEnded = false;
let resultsShown = false;
let lightbulbUsed = false;
let streakCount = 0;

export function timeUntilNextRelease() {
    const now = new Date();
    const releaseTime = new Date(now);
    releaseTime.setHours(18, 30, 0, 0); // Set to 6:30 PM

    // If the release time has already passed today, set it for the next day
    if (now > releaseTime) {
        releaseTime.setDate(releaseTime.getDate() + 1);
    }

    // Convert both times to UTC
    const nowUTC = now.getTime() + (now.getTimezoneOffset() * 60000);
    const releaseTimeUTC = releaseTime.getTime() + (releaseTime.getTimezoneOffset() * 60000);

    return releaseTimeUTC - nowUTC; // Time remaining in milliseconds
}
document.addEventListener('DOMContentLoaded', () => {
  const startInstructions = document.getElementById('start-instructions');
  const playBtn = document.getElementById('playBtn');
  const startScreen = document.querySelector('.start-screen');
  const puzzleNumberElement = document.getElementById('puzzleNumber');

  const savedState = restoreGameState();
  if (savedState && getCurrentPuzzleIndex() === savedState.currentPuzzleIndex) {
      if (savedState.gameEnded) {
          startInstructions.innerHTML = "Welcome back!<br>You've already played today's puzzle.";
          playBtn.textContent = "Results";
          playBtn.onclick = () => { // Use onclick instead of addEventListener
              startScreen.style.display = 'none';
              if (savedState.gameWon) {
                  setTimeout(() => {
                      Popups.showWinPopup(savedState.boardStates, currentPuzzle, savedState.reverseWon, savedState.lightbulbUsed, savedState.streakCount);
                  }, 100); // Delay to ensure transition
              } else {
                  setTimeout(() => {
                      Popups.showLosingPopup(savedState.boardStates, currentPuzzle, lightbulbUsed);
                  }, 100); // Delay to ensure transition
              }
          };
      } else {
          const correctDraggablesCount = savedState.boardStates.length > 0 ? savedState.boardStates[savedState.boardStates.length - 1].filter(state => state === '🟢').length : 0;
          const guessesUsed = savedState.boardStates.length;
          startInstructions.innerHTML = `Welcome back! You've used ${guessesUsed} ${guessesUsed === 1 ? 'guess' : 'guesses'}<br>and correctly ordered ${correctDraggablesCount} ${correctDraggablesCount === 1 ? 'item' : 'items'}.`;
          playBtn.textContent = "Continue";
      }

      // Restore the game state for the current puzzle
      boardStates = savedState.boardStates;
      boardOrders = savedState.boardOrders;
      gameWon = savedState.gameWon;
      reverseWon = savedState.reverseWon;
      gameEnded = savedState.gameEnded;
      lightbulbUsed = savedState.lightbulbUsed;
  } else {
      // New puzzle or no saved state, start fresh
      startInstructions.innerHTML = "Put a list of items in order<br>based on a hidden theme!";
      gameWon = false;
      reverseWon = false;
      gameEnded = false;
      boardStates = [];
      boardOrders = [];
      localStorage.removeItem('gameState');
      lightbulbUsed = false;
  }

  playBtn.addEventListener('click', () => {
      startScreen.style.display = 'none';
  });

  // Set up the current puzzle
  const currentPuzzle = puzzles[currentPuzzleIndex];
  if (puzzleNumberElement) {
      puzzleNumberElement.textContent = currentPuzzleIndex + 1; // Add 1 to make it human-readable
  }
  instructionsElement.innerHTML = `Put these items in order!<br><span>Theme: <strong>${currentPuzzle.hint}</strong></span>`;
  setupDraggables(currentPuzzle);
  if (savedState && savedState.gameEnded) {
    submitBtn.textContent = 'Results';
}
});



function restoreGameState() {
  const gameStateString = localStorage.getItem('gameState');
  if (gameStateString) {
      const gameState = JSON.parse(gameStateString);
      return {
          ...gameState,
          latestBoardState: gameState.boardStates[gameState.boardStates.length - 1],
          streakCount: gameState.streakCount || 0, // Default to 0 if winStreak is not in the saved state
      };
  }
  return null;
}



function generateInitialOrder(puzzle) {
    const initialOrder = [];
    for (const char of puzzle.initialOrderSequence) {
        const index = parseInt(char, 10) - 1;
        initialOrder.push(puzzle.solution[index]);
    }
    return initialOrder;
}

function setupDraggables(puzzle) {
  const orderToUse = boardOrders.length > 0 ? boardOrders[boardOrders.length - 1].split(', ') : generateInitialOrder(puzzle);

  draggableContainer.innerHTML = ''; // Clear existing draggables

  orderToUse.forEach((item, index) => {
      const draggableElement = document.createElement('p');
      draggableElement.classList.add('draggable');
      draggableElement.setAttribute('draggable', 'true');
      draggableElement.textContent = item;

      // Check if the item was previously marked as correct
      if (boardStates.length > 0 && boardStates[boardStates.length - 1][index] === '🟢') {
          draggableElement.classList.add('correct');
      }

      draggableContainer.appendChild(draggableElement);
      requestAnimationFrame(() => adjustFontSize(draggableElement));
      draggableElement.addEventListener('dragstart', handleDragStart, { passive: false });
      draggableElement.addEventListener('dragend', handleEnd);
      draggableElement.addEventListener('touchend', handleEnd);
      draggableElement.addEventListener('touchstart', handleTouchStart, { passive: false });
      draggableElement.addEventListener('touchmove', handleTouchMove, { passive: false });
  });

  document.body.classList.remove('hidden');
}



// Define the event handlers (handleDragStart, handleTouchStart, handleEnd, handleSwap, swap

// Define the event handlers (handleDragStart, handleTouchStart, handleEnd, handleSwap, swap

function handleDragStart(e) {
  if (gameWon || e.target.classList.contains('correct')) {
      e.preventDefault(); // Prevent the drag from starting
      return;
  }
  e.target.classList.add('dragging', 'dragging-original');
  originalParent = e.target.parentNode;
  originalNextSibling = e.target.nextElementSibling;
  lastY = e.clientY;
}

function handleTouchStart(e) {
  if (gameWon || e.target.classList.contains('correct')) return;
  const draggable = e.target;
  draggable.classList.add('dragging', 'dragging-original');
  originalParent = draggable.parentNode;
  originalNextSibling = draggable.nextElementSibling;
  ghostElement = draggable.cloneNode(true);
  ghostElement.classList.remove('dragging', 'dragging-original','draggable.dragging');
  ghostElement.classList.add('ghost');
  document.body.appendChild(ghostElement);
  const touch = e.touches[0];
  ghostElement.touchOffsetY = touch.clientY - draggable.getBoundingClientRect().top;
  ghostElement.touchOffsetX = touch.clientX - draggable.getBoundingClientRect().left;
  ghostElement.style.top = (touch.clientY - ghostElement.touchOffsetY) + 'px';
  ghostElement.style.left = (touch.clientX - ghostElement.touchOffsetX) + 'px';
  lastY = touch.clientY;
  e.preventDefault();
}


function handleEnd(e) {
  if (e.target.classList.contains('correct')) return;
  e.target.classList.remove('dragging', 'dragging-original');
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

  if (lastOffset === null) {
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
      ghostElement.style.top = (touch.clientY - ghostElement.touchOffsetY) + 'px';
      ghostElement.style.left = (touch.clientX - ghostElement.touchOffsetX) + 'px';
  }

  // Check for swap conditions more frequently
  const interval = 10; // Adjust this value as needed
  for (let i = 0; i < Math.abs(lastY - touch.clientY); i += interval) {
      const newY = lastY < touch.clientY ? lastY + i : lastY - i;
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



function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging):not(.correct)')];
  let closest = null;
  let closestOffset = Number.POSITIVE_INFINITY; // Start with positive infinity to find the minimum absolute offset

  draggableElements.forEach(child => {
      const box = child.getBoundingClientRect();
      const cent = (box.top + box.height / 2);
      const offset = y - (box.top + box.height / 2); // Keep the sign of the offset
      if (Math.abs(offset) < Math.abs(closestOffset)) { // Compare absolute values to find the closest
          closest = child;
          closestOffset = offset;
      }
  });
  return closest;
}

function deactivateDraggable(draggable) {
  draggable.removeEventListener('dragstart', handleDragStart);
  draggable.removeEventListener('dragend', handleEnd);
  draggable.removeEventListener('touchstart', handleTouchStart);
  draggable.removeEventListener('touchend', handleEnd);
  draggable.removeEventListener('touchmove', handleTouchMove);
  draggable.setAttribute('draggable', 'false');
}

function checkOrder() {
  const currentDraggables = document.querySelectorAll('.draggable');
  const currentOrder = Array.from(currentDraggables).map(el => el.textContent.trim());
  const reverseOrder = [...correctOrder].reverse(); // Create a reversed version of the correct order

  if (JSON.stringify(currentOrder) === JSON.stringify(correctOrder) || JSON.stringify(currentOrder) === JSON.stringify(reverseOrder)) {
      gameWon = true; // Set the gameWon flag to true
      gameEnded = true;
      if (JSON.stringify(currentOrder) === JSON.stringify(reverseOrder)){
        reverseWon = true;
      }
  }
}

submitBtn.addEventListener('click', (e) => {
  // Prevent default action and event propagation
  e.preventDefault();
  e.stopPropagation();

  if (gameEnded) {
      if (!resultsShown) {
          // Show results
          if (gameWon) {
              Popups.showWinPopup(boardStates, currentPuzzle, reverseWon, lightbulbUsed, streakCount);
          } else {
              Popups.showLosingPopup(boardStates, currentPuzzle, lightbulbUsed);
          }
          resultsShown = true;
          submitBtn.disabled = true; // Disable the button
      }
  } else {
      const currentDraggables = document.querySelectorAll('.draggable');
      const currentOrder = Array.from(currentDraggables).map(el => el.textContent.trim()).join(', '); // Join the order as a string
      const boardState = currentOrder.split(', ').map((word, index) => (word === correctOrder[index] ? '🟢' : '⚪'));

      // Check if the current order has already been submitted
      const isDuplicate = boardOrders.includes(currentOrder);

      if (isDuplicate) {
          // Show a popup with the message "You tried that already!"
          Popups.showDuplicatePopup();
      } else {
          // Store the board state and order, then proceed with the game
          boardStates.push(boardState);
          boardOrders.push(currentOrder); // Store the current order as a string
          animateDraggables(currentDraggables, () => {
              checkOrder();
              if (gameWon) {
                  gameEnded = true; // Set gameEnded flag immediately after winning
                  setTimeout(() => {
                      streakCount = streakCount + 1;
                      saveGameState(boardStates, boardOrders, gameWon, reverseWon, currentPuzzleIndex, gameEnded, lightbulbUsed, streakCount); // Save the gameEnded state
                      Popups.showWinPopup(boardStates, currentPuzzle, reverseWon, lightbulbUsed, streakCount);
                      resultsShown = true;
                      submitBtn.textContent = 'Results';
                  }, 900);
              } else {
                  saveGameState(boardStates, boardOrders, gameWon, reverseWon, currentPuzzleIndex, gameEnded, lightbulbUsed, streakCount); // Save the gameEnded state
                  // Re-enable the Submit button only if there is at least one circle remaining
                  const circles = document.querySelectorAll('.circle');
                  const usedCircles = circles.length - document.querySelectorAll('.circle.used').length;
                  if (usedCircles > 0) {
                      submitBtn.disabled = false;
                  } else {
                      gameEnded = true;
                      streakCount = 0;
                  }
              }
          }, currentOrder.split(', ')); // Convert the current order string back to an array
      }
  }
});







function getTextWidth(text, fontSize, fontFamily) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = `${fontSize} ${fontFamily}`;
  const metrics = context.measureText(text);
  return metrics.width;
}

function adjustFontSize(element) {
  const parentWidth = element.parentNode.clientWidth;
  const fontFamily = window.getComputedStyle(element, null).getPropertyValue('font-family');
  let fontSize = parseFloat(window.getComputedStyle(element, null).getPropertyValue('font-size'));

  let textWidth = getTextWidth(element.textContent, fontSize + 'px', fontFamily);

  while (textWidth > parentWidth * 0.8 && fontSize > 10) {
      fontSize -= 1;
      textWidth = getTextWidth(element.textContent, fontSize + 'px', fontFamily);
      element.style.fontSize = fontSize + 'px';
  }
}

function animateDraggables(draggables, callback, currentOrder) {
  // Check if the game is won before starting the animation
  checkOrder();

  let i = draggables.length - 1; // Start from the last element
  setTimeout(() => { // Add a pause before the animation starts
      const interval = setInterval(() => {
          if (i < 0) { // Check if all elements have been animated
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
                      // Animate the losing draggables before showing the popup
                      animateLosingDraggables(draggables, () => {
                          // Show losing popup after the animation is complete
                          gameEnded = true;
                          Popups.showLosingPopup(boardStates, currentPuzzle);
                          resultsShown = true;
                          submitBtn.textContent = 'Results';
                      });
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

          if (currentOrder[i] === correctOrder[i] || gameWon) {
            // Start the bulge animation
            draggables[i].style.animation = 'correct-bulge 0.375s'; // 25% faster animation
            // Add an event listener for the end of the animation
            draggables[i].addEventListener('animationend', function animationEndHandler() {
                this.classList.add('correct');
                // Remove the event listener to avoid adding the class multiple times
                this.removeEventListener('animationend', animationEndHandler);
            });
        } else {
            draggables[i].style.animation = 'bulge 0.375s ease';
        }        
        

          i--; // Move to the previous element
      }, 120); // Start the next bulge sooner
  }, 500); // Pause before the animation starts
}



function animateLosingDraggables(draggables, callback) {

  Popups.showOhNoPopup()
  // Deactivate all draggables immediately
  draggables.forEach(deactivateDraggable);

  setTimeout(() => { // Add a pause before the animation starts
    draggables.forEach((draggable, index) => {
      // Force reflow to reset the animation
      draggable.style.animation = 'none';
      void draggable.offsetWidth; // Trigger reflow

      // Apply the bulge animation and update the background color and text simultaneously
      draggable.style.animation = 'bulge 0.375s ease forwards';
      draggable.style.backgroundColor = '#6c6c6c';
      draggable.style.cursor = 'default';
      if (!draggable.classList.contains('correct')) {
        draggable.style.color = '#f0f0f0';
      }
      draggable.textContent = correctOrder[index];
    });

    setTimeout(() => {
      // Call the callback function if provided
      if (callback) {
        callback();
      }
    }, 375 + 500); // Adjust the timing to wait for the animation to complete
  }, 500); // Pause before the animation starts
}



window.onclick = function(event) {
  if (!event.target.matches('.help-icon, .lightbulb-icon, .popup, .share-btn, .patreon-btn') && !event.target.closest('.popup')) {
    document.querySelectorAll('.popup').forEach(popup => {
      popup.style.display = "none";
    });
  }
}



window.togglePopup = Popups.togglePopup;  // Expose the function to the global scope for use in HTML

window.onclick = function(event) {
    if (!event.target.matches('.help-icon, .lightbulb-icon, .popup, .share-btn, .patreon-btn') && !event.target.closest('.popup')) {
        Popups.closeAllPopups();
        resultsShown = false;
        submitBtn.disabled = false; // Disable the button
    }
}

window.ontouchstart = window.onclick; // Use the same handler for touchend

document.addEventListener('DOMContentLoaded', () => {
  const helpIcon = document.querySelector('.help-icon');
  if (helpIcon) {
      helpIcon.addEventListener('click', () => Popups.showHelpPopup());
  }
  const lightbulbIcon = document.querySelector('.lightbulb-icon');
  if (lightbulbIcon) {
      lightbulbIcon.addEventListener('click', () => Popups.showLightbulbPopup(currentPuzzle));
      lightbulbUsed = true;
      saveGameState(boardStates, boardOrders, gameWon, reverseWon, currentPuzzleIndex, gameEnded, lightbulbUsed, streakCount);
      console.log(lightbulbUsed);
  }

});
