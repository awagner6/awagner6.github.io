export function saveGameState(boardStates, boardOrders, gameWon, reverseWon, currentPuzzleIndex, gameEnded, lightbulbUsed, streakCount) {
    const gameState = {
        boardStates: boardStates,
        boardOrders: boardOrders,
        gameWon: gameWon,
        reverseWon: reverseWon,
        currentPuzzleIndex: currentPuzzleIndex,
        gameEnded,
        lightbulbUsed,
        streakCount
    };
    console.log(gameState)
    localStorage.setItem('gameState', JSON.stringify(gameState));
}
