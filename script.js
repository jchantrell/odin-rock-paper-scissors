
        
        //  -- game logic --
 
        function decideOutcome(){
            if (playerSelection == "rock" && computerSelection == "paper"){
                loss()
            }
            if (playerSelection == "rock" && computerSelection == "scissors"){
                win()
            }
            if (playerSelection == "paper" && computerSelection == "rock"){
                win()
            }
            if (playerSelection == "paper" && computerSelection == "scissors"){
                loss()
            }
            if (playerSelection == "scissors" && computerSelection == "rock"){
                loss()
            }
            if (playerSelection == "scissors" && computerSelection == "paper"){
                win()
            }
            if (playerSelection == computerSelection){
                draw()
            } 
          }
  
          // -- game functions --

          function gameEnd(){
              if (scoreboard.total >= 5){
                  if (scoreboard.wins > scoreboard.losses){
                      victor = "Player wins."
                  }
                  if (scoreboard.wins < scoreboard.losses){
                      victor = "Computer wins."
                  }
                  if (scoreboard.wins == scoreboard.losses){
                      victor = "It's a draw."
                  }
                  replay();
              }
          }

          function replay(){
              scoreboard.wins = 0,
              scoreboard.losses = 0,
              scoreboard.draws = 0,
              scoreboard.total = 0,
              document.querySelector('.wins').textContent = `Win: 0`; 
              document.querySelector('.draws').textContent = `Draws: 0`; 
              document.querySelector('.losses').textContent = `Losses: 0`;
              document.querySelector('.total').textContent = `Total: 0`;
              document.querySelector('.victor').textContent = victor;
          }
  
          function win(){
              console.log("Player wins.")
              scoreboard.wins += 1;
              scoreboard.total += 1;
              printScore();
              gameEnd();
              //replay()
          } 
  
          function draw(){
              console.log("Draw.")
              scoreboard.draws += 1;
              scoreboard.total += 1;
              printScore();
              gameEnd();
              //replay()
          }
  
          function loss(){
              console.log("Player loses.")
              scoreboard.losses += 1;
              scoreboard.total += 1;
              printScore();
              gameEnd();
              //replay()
          }

          function resetScoreboard(){
                scoreboard.wins = 0,
                scoreboard.losses = 0,
                scoreboard.draws = 0,
                scoreboard.total = 0
            }
  
          let scoreboard = {
              wins: 0,
              losses: 0,
              draws: 0,
              total: 0
          };

  
          function printScore() {
              document.querySelector('.wins').textContent = `Wins: ${scoreboard.wins}`;

              document.querySelector('.draws').textContent = `Draws: ${scoreboard.draws}`;

              document.querySelector('.losses').textContent = `Losses: ${scoreboard.losses}`; 

              document.querySelector('.total').textContent = `Total: ${scoreboard.total}`; 
          }
  

          function playGame(userPrompt){

              if (userPrompt == "rock"){
                playerSelection = "rock";
                document.querySelector('.playerChoice').textContent = `Player chooses 🪨 !`;
                computerPlay();           
            }
              if (userPrompt == "paper"){
                playerSelection = "paper";
                document.querySelector('.playerChoice').textContent = `Player chooses 📜 !`;
                computerPlay();
            }
              if (userPrompt == "scissors"){
                playerSelection = "scissors";
                document.querySelector('.playerChoice').textContent = `Player chooses ✂️ !`;
                computerPlay();
            }
            } 
  
          function computerPlay(){
              randomNumber = Math.floor(Math.random() * 3) + 1; 
              {
                  if (randomNumber == 1) {
                      computerSelection = "rock";
                      document.querySelector('.computerChoice').textContent = `Computer chooses 🪨 !`;
                      decideOutcome();
              }
                  if (randomNumber == 2) {
                      computerSelection = "paper";
                      document.querySelector('.computerChoice').textContent = `Computer chooses 📜 !`;
                      decideOutcome();
              }    
                  if (randomNumber == 3) {
                      computerSelection = "scissors";
                      document.querySelector('.computerChoice').textContent = `Computer chooses ✂️ !`;
                      decideOutcome();
              }
          }
  }
  

          // -- ui functionality --

          const rock = document.querySelector('.rock').addEventListener("click", function(){
              playGame("rock")
          });
          const paper = document.querySelector('.paper').addEventListener("click", function(){
            playGame("paper")
          });
          const scissors = document.querySelector('.scissors').addEventListener("click", function(){
            playGame("scissors")
          });
              
  