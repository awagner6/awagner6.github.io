export function saveGameState(boardStates, revBoardStates, boardOrders, gameWon, reverseWon, currentPuzzleIndex, gameEnded, lightbulbUsed, streakCount, revSolve) {
    const gameState = {
        boardStates: boardStates,
        revBoardStates: revBoardStates,
        boardOrders: boardOrders,
        gameWon: gameWon,
        reverseWon: reverseWon,
        currentPuzzleIndex: currentPuzzleIndex,
        gameEnded: gameEnded,
        lightbulbUsed: lightbulbUsed,
        streakCount: streakCount,
        revSolve: revSolve
    };
    console.log(gameState)
    localStorage.setItem('gameState', JSON.stringify(gameState));
}
