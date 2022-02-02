function play(){
    const dice1=document.getElementById('dice1');
    const dice2=document.getElementById('dice2');
    const number1=parseInt(Math.floor(Math.random()*6)+1);
    const number2=parseInt(Math.floor(Math.random()*6)+1);
    const url1=`./dice/dice${number1}.png`;
    const url2 =`./dice/dice${number2}.png`;
    dice1.setAttribute('src',url1);
    dice2.setAttribute('src',url2)
    const result = document.querySelector('h1');
    if(number1>number2){
       result.innerHTML="Player 1 is winner ";
    }
    else if(number1==number2){
        result.innerHTML='Draw';
    }
    else{
        result.innerHTML='Player 2 is winner'
    }
    
}