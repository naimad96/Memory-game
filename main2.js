var images =['1.png','2.png','3.png','4.png','5.png','6.png','1.png','2.png','3.png','4.png','5.png','6.png'];
var firstCardshowed = false;
var firstCard;
var secondCard;
$('.card').click(function(event) {
    var clicked = $(event.target);
    showCard(clicked.attr('id'));
});
//Show
function showCard(clicked){
   var displayedCard = "url(assets/" + images[clicked] + ")";
   $('#'+ clicked).css('background-image',displayedCard);
   if(!firstCardshowed){
      firstCard = displayedCard;
      firstCardshowed = true;
   }
}
