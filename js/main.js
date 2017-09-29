  const pics = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'];

  const game = {
    deck: [],
    board: [],
    playedCards: [],

    buildDeck: function() {
      // looping through the pics array to create two identical cards for each pic
      for(let p = 0; p < pics.length; p += 1) {
          // creating two identical object with 4 properties
          let tile1 = {'data-id': 0, 'data-img': pics[p], 'data-flipped': false, class: 'tile'};
          this.deck.push(tile1);
          let tile2 = {'data-id': 0, 'data-img': pics[p], 'data-flipped': false, class: 'tile'};
          this.deck.push(tile2);
        }
        return this.deck;
    },



    shuffleTiles: function() {
      // looping through the tiles in the deck array
      for(let t = this.deck.length -1; t > 0; t--) {
        // taking a random index
        let j = Math.floor(Math.random() * (t + 1));
        // switching the index of every tile in the deck with the new randomized index
        let tempTile = this.deck[t];
        this.deck[t] = this.deck[j];
        this.deck[j] = tempTile;
      }

      return this.deck;
    },


    displayBoard: function() {
      // reference the board
      const container = document.getElementById('board');
      // looping through the deck array
      for(let t = 0; t < this.deck.length; t += 1) {
        // create a new div for each tile
        const div = document.createElement('div');

        div.className += 'tile';
        // set the data-id of the objects to the divs
        div.setAttribute('data-id', t);
        // update data-it in object tile
        this.deck[t]['data-id'] = t;

        div.addEventListener('click', this.flip);
        div.setAttribute('data-img', 'resources/'+this.deck[t]['data-img']);
        div.setAttribute('data-flipped', this.deck[t]['data-flipped']);

        const img = document.createElement('img');
        img.setAttribute('src','resources/back.png');
        div.appendChild(img);

        container.appendChild(div);
        console.log(this.deck[t]);
      }

    },

    checkForMatch: function() {
      if (game.playedCards.length === 2) {
      // check with debugger and tried to access attribute following the scope instructions
      let img1 = game.playedCards[0].attributes['data-img'].value;
      let img2 = game.playedCards[1].attributes['data-img'].value;
        if(img1 === img2) {
          game.playedCards[0].attributes['data-flipped'].value = true;
          game.playedCards[1].attributes['data-flipped'].value = true;
          console.log('It is a match!');
          game.playedCards = [];
          game.checkForWin();
        } else {
          setTimeout(function() {
            game.playedCards[0].firstChild.src = 'resources/back.png';
            game.playedCards[1].firstChild.src = 'resources/back.png';
            game.playedCards = [];
          }, 500);
        }
      }
    },


    flip: function() {
      var flipped = this.getAttribute('data-flipped');
         console.log(flipped);

      if(flipped === 'false') {
        let tileId = this.getAttribute('data-id');

        console.log("Flipped tile n: " + tileId)
        this.firstChild.src = this.getAttribute('data-img');

        game.playedCards.push(this);
        console.log(game.playedCards);
      }
      game.checkForMatch();
    },


    checkForWin: function() {
      const tiles = document.querySelectorAll('.tile');
        for(let t = 0; t < tiles.length; t += 1) {
          let flipped = tiles[t].getAttribute('data-flipped');
          if(flipped === 'false') {
            // console.log('Next turn!');
            // get out before finishing the loop
            return;
          }
        }
        alert('You won!');
    }

    // updateScore() {

    // }

  };


const button = document.querySelector('button');
button.onclick = function startGame() {
  document.getElementById("page_1").style.display = "none";
  document.getElementById("page_2").style.display = "block";
  game.buildDeck();
    console.log("Build a board");
    game.shuffleTiles();
    console.log("Shuffled deck")
    game.displayBoard();
    console.log("Board is ready!")


// source: http://bit.ly/JScounter
var initialTime = Date.now();

function checkTime(){
  var timeDifference = Date.now() - initialTime;
  var formatted = convertTime(timeDifference);
  document.getElementById('timer').innerHTML = '' + formatted;
}

function convertTime(miliseconds) {
  var totalSeconds = Math.floor(miliseconds/1000);
  var minutes = Math.floor(totalSeconds/60);
  var seconds = totalSeconds - minutes * 60;
  return 'TIME  |  ' + minutes + ':' + seconds;
}

window.setInterval(checkTime, 100);


// Displaying player name
function displayName() {
        var input = document.getElementById('playername')
        var div = document.getElementById('displayedname');
        div.innerHTML = div.innerHTML + ' ' + input.value;
    }
  displayName();
};

