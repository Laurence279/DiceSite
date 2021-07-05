

function rollNumber()
{
   var randomNumber1 = Math.floor(Math.random() * 6 + 1);
   return randomNumber1;
}

function changeImg()
{
  var dice1 = rollNumber();
  var dice2 = rollNumber();
  document.querySelector("#dice1").setAttribute("src","images/dice"+dice1+".png");
  document.querySelector("#dice2").setAttribute("src","images/dice"+dice2+".png");
  document.querySelector("#result").textContent = "Your number is "+(dice1 + dice2);
}
