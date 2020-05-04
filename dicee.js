// for first image
var randomNumber=Math.floor(Math.random()*6+1);
function selectRandomimages(randomNumber){
  if (randomNumber===1){
    document.querySelector(".img1").setAttribute("src","images/dice1.png");
  }
  else if (randomNumber===2){
    document.querySelector(".img1").setAttribute("src","images/dice2.png");
  }
  else if (randomNumber===3){
    document.querySelector(".img1").setAttribute("src","images/dice3.png");
  }
  else if (randomNumber===4){
    document.querySelector(".img1").setAttribute("src","images/dice4.png");
  }
  else if (randomNumber===5){
    document.querySelector(".img1").setAttribute("src","images/dice5.png");
  }
  else{
    document.querySelector(".img1").setAttribute("src","images/dice6.png");
  }

}
selectRandomimages(randomNumber);

// for second image



var randomNumber1=Math.floor(Math.random()*6+1);


function selectRandomimages2(randomNumber){
  if (randomNumber1===1){
    document.querySelector(".img2").setAttribute("src","images/dice1.png");
  }
  else if (randomNumber1===2){
    document.querySelector(".img2").setAttribute("src","images/dice2.png");
  }
  else if (randomNumber1===3){
    document.querySelector(".img2").setAttribute("src","images/dice3.png");
  }
  else if (randomNumber1===4){
    document.querySelector(".img2").setAttribute("src","images/dice4.png");
  }
  else if (randomNumber1===5){
    document.querySelector(".img2").setAttribute("src","images/dice5.png");
  }
  else{
    document.querySelector(".img2").setAttribute("src","images/dice6.png");
  }

}
selectRandomimages2(randomNumber1);



// changing title for showing winner


if (randomNumber>randomNumber1){
  document.querySelector("h1").innerHTML="<strong>🚩🚩PLAYER 1 WINS</strong>🚩🚩";
}
else if(randomNumber1>randomNumber){
  document.querySelector("h1").innerHTML="<strong>🚩🚩PLAYER 2 WINS</strong>🚩🚩";
}
else{
  document.querySelector("h1").innerHTML="<strong>IT's a tie</strong>";
}
