var randomPick = [];
var logoImg = "url(assets/logo-mw.png)"
var firstcardImg;
var secondcardImg;
var turnCount = 0;
var firstCardshowed;
var pairs = 6;
//StartGame
function startGame(){
  var images =['1.png','2.png','3.png','4.png','5.png','6.png','1.png','2.png','3.png','4.png','5.png','6.png'];
  randomPick = [];
  for(i= 0 ;i < 12; i++){
    var randomSelected = images[Math.floor(Math.random()*images.length)];
    var index = images.indexOf(randomSelected);
    randomPick.push(randomSelected);
    images.splice(index,1);
  }
  $('.board').css('display','block');
  $('.startBtn').css('display','none');
};
//Clicked card
$('.card').click(function(event) {
    var clicked = $(event.target);
    showCard(clicked);
});
//Show card
function showCard(clicked){
  if($(clicked).hasClass('card')){
    clickedCard = clicked.attr('id');
    var displayCard = "url(assets/" + randomPick[clickedCard] + ")";
    $('#'+ clickedCard).css('background-image',displayCard);
    if(!firstCardshowed){
      firstcardImg = displayCard;
      firstCard = clicked.attr('id')
      firstCardshowed = true;
      turnCount++;
    }else if(firstCardshowed){
      secondcardImg = displayCard;
      secondCard = clicked.attr('id')
      firstCardshowed = false;
      $(".turn").html('<h2>Your turn : '+ turnCount + '</h2>');
      turnCount++;
    }
    hideCards(displayCard,clickedCard)
  }
}
//hideCards
function hideCards(displayCard,clickedCard){
  if(firstCardshowed === false){
    if(firstcardImg === secondcardImg){
      setTimeout(function(){
          $('#'+ firstCard).removeClass('card');
          $('#'+ firstCard).addClass('showncard');
          $('#'+ secondCard).removeClass('card');
          $('#'+ secondCard).addClass('showncard');
          pairs--;
          if(pairs===0){
            newGame();
          }
      },600)
    }else {
      setTimeout(function(){
        $('#'+ firstCard).css('background-image','url(assets/logo-mw.png)');
        $('#'+ secondCard).css('background-image','url(assets/logo-mw.png)');
      },600)
    }
  }
}
$('.resetBtn').click(function(){
    newGame();
});
//newGame
function newGame(){
  $('.board').css('display','none');
  $('.turn').html('<h2>You won ! You did it in '+ turnCount +' turns </h2>');
  var btn = document.createElement('button');
  btn.textContent = "Try again"
  $(btn).addClass('againBtn');
  $('.turn').append(btn);
  btn.onclick = function(){
    $('.turn').html(' ');
    $(btn).remove();
    pairs = 6;
    turnCount = 0;
    firstcardImg;
    secondcardImg;
    firstCardshowed;
    for(i = 0 ;i <= 12 ;i++){
      $('#'+ i).removeClass('showncard');
      $('#'+ i).addClass('card');
      $('#'+ i).css('background-image',logoImg);
    }
    startGame();
  }
};
//Start game init
$('.startBtn').click(startGame);
