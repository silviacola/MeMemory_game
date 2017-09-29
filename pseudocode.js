// The landing page will be loaded first.
    // The elements displayed will be:
    // a welcome message 
    // an input field where the player will be asked to type his name
    // a start button
    // the start button will load the main game page
        // if the input field is still empty and start button is clicked, an alert will be displayed, asking the player to type his name 
        // if the input field has at least one letter typed in, the start button will work

// The main game page will display:
    //  a score set to 0
        // call a function displayScore()
    // the board tiles with their back image up
        // call a function createBoard()
        // then, call a function randomBoard()

        // Check if all the tiles have already been flipped: call a function checkForWinner()
            // if true, display a 'you won' message
                // display a 'play again' button
            // if false, go on with the next steps

        // the player clicks on the first tile (event)
            // call function flip() => show the front image

        // the player clicks on the second tile (event)
            // call again function flip() => show the front image

      // call a function checkForMatch() 
          // if the front images of the two tiles are ===
            // then, keep the tiles flipped up
            // call a function updateScore(). 1 right match = 1 point
            // the player can click again and repeat the previous steps

            // if the front images are not identical,
            // then call a function flipBack() to show the back image again
            // the player can play another turn, repeating the previous steps

        // call the checkForWinner()




// QUESTIONS
// 1. Do I have to check all the time if all the tiles have been flipped? 
// 2. Data-id reference position? 

// NOTES
// - document.get....('div').dataset.index
