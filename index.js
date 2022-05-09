$(document).ready(function() {
    var random = Math.floor(Math.random()*102+19);
     var crystalValues = {};
     crystalValues[1] = Math.floor(Math.random()*12+1);
     crystalValues[2] = Math.floor(Math.random()*12+1);
     crystalValues[3] = Math.floor(Math.random()*12+1);
     crystalValues[4] = Math.floor(Math.random()*12+1);
     var userTotal= 0;
      var wins = 0;
      var losses = 0;
    function reset() {
    
    $("#random-area").text("Random:"+" "+random);
   
crystalValues[1] = Math.floor(Math.random()*12+1);
    crystalValues[2] = Math.floor(Math.random()*12+1);
    crystalValues[3] = Math.floor(Math.random()*12+1);
    crystalValues[4] = Math.floor(Math.random()*12+1);
    userTotal = 0;
    
}

function winner() {
    alert("You Won!!");
    wins++;
     $("#win-area").text("Wins:" + " " + wins);
    reset();
}

function loser() {
    alert("You Lose!!");
    losses++;
     $("#los-area").text("Losses:" + " "  + losses);
    reset();
}
 function getCrystalHandler(crystalKey) {
        return function() {
         userTotal = userTotal + crystalValues[crystalKey];
         $("#crystal-area").text ("New userTotal :"+" " + userTotal);
         
         $("#random-area").text("Random:"+" "+random);
   
         if (userTotal === random) {
             winner()
         }
     
         else if (userTotal > random) {
             loser()
         } 
     }
     }
     
     $("#image1").on("click", getCrystalHandler(1));
     $("#image2").on("click", getCrystalHandler(2));
     $("#image3").on("click", getCrystalHandler(3));
     $("#image4").on("click", getCrystalHandler(4));
})