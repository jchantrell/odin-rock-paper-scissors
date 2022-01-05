
        
        //  -- game logic --
 
        function decideOutcome(){
            if (playerSelection == "rock" && computerSelection == "rock"){
                draw()
            }
            if (playerSelection == "rock" && computerSelection == "paper"){
                loss()
            }
            if (playerSelection == "rock" && computerSelection == "scissors"){
                win()
            }
            if (playerSelection == "paper" && computerSelection == "rock"){
                win()
            }
            if (playerSelection == "paper" && computerSelection == "paper"){
                draw()
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
            if (playerSelection == "scissors" && computerSelection == "scissors"){
                draw()
            }
          }
  
          // -- game functions --
  
  
          function replay(){
              playerSelection = null // 
              computerSelection = null // is this necessary?
              printScore()

              userPrompt = prompt("Play again - y/n?");
  
              while (userPrompt !== 'y' && userPrompt !== 'n') {
                userPrompt= prompt('Play again?');
                }
              if (userPrompt == "n"){
                  return
              }
              if (userPrompt == "y"){
                scoreboard.wins(0);
                scoreboard.losses(0);
                scoreboard.draws(0);
              }
          }
  
          function win(){
              console.log("Player wins.")
              scoreboard.wins += 1;
              printScore()
              //replay()
          } 
  
          function draw(){
              console.log("Draw.")
              scoreboard.draws += 1;
              printScore()
              //replay()
          }
  
          function loss(){
              console.log("Player loses.")
              scoreboard.losses += 1;
              printScore()
              //replay()
          }
  
          let scoreboard = {
              wins: 0,
              losses: 0,
              draws: 0
          };
  
          function printScore() {
              console.log(`Wins: ${scoreboard.wins} || Losses: ${scoreboard.losses} || Draws: ${scoreboard.draws} `)

              document.querySelector('.wins').textContent = `Wins: ${scoreboard.wins}`;

              document.querySelector('.draws').textContent = `Draws: ${scoreboard.draws}`;

              document.querySelector('.losses').textContent = `Losses: ${scoreboard.losses}`; 
          }
  
          let playerSelection = "no selection" 
          let computerSelection = "no selection" 

          function playGame(userPrompt){

              if (userPrompt == "rock"){
                playerSelection = "rock";
                computerPlay();
            }
              if (userPrompt == "paper"){
                playerSelection = "paper";
                computerPlay();
            }
              if (userPrompt == "scissors"){
                playerSelection = "scissors";
                computerPlay();
            }
            console.log("Player chose " + playerSelection)
            } 
  
          function computerPlay(){
              randomNumber = Math.floor(Math.random() * 3) + 1; 
              {
                  if (randomNumber == 1) {
                      computerSelection = "rock";
                      decideOutcome();
                      console.log("Computer chose " + computerSelection);
              }
                  if (randomNumber == 2) {
                      computerSelection = "paper";
                      decideOutcome();
                      console.log("Computer chose " + computerSelection);
              }    
                  if (randomNumber == 3) {
                      computerSelection = "scissors";
                      decideOutcome();
                      console.log("Computer chose " + computerSelection);
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
  
          function logText(e) {
              console.log(this.classList.value);}
  
  
              
  