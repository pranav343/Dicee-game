var randomnumber1;
randomnumber1=Math.floor(Math.random()*6)+1;
var randomdice1;
randomdice1="dice"+randomnumber1+".png";
var diceimgsrc1="images/"+randomdice1;

document.querySelectorAll("img")[0].setAttribute("src", diceimgsrc1);



// for 2nd dice

var randomnumber2;
randomnumber2=Math.floor(Math.random()*6)+1;
var randomdice2;
randomdice2="dice"+randomnumber2+".png";
var diceimgsrc2="images/"+randomdice2;

document.querySelectorAll("img")[1].setAttribute("src", diceimgsrc2);

// winner

if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 Wins!!";
}
else if (randomnumber1==randomnumber2)
{
    document.querySelector("h1").innerHTML="Its a tie!!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!!";   
}

