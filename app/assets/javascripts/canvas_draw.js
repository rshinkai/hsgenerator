$(document).ready(function() {
  var canvas = document.getElementById('card');
  var ctx = canvas.getContext('2d');

  // card-template
  var cardTemplate = new Image();
  cardTemplate.src = presrc + 'normal' + extention;;

  // gem
  var gem = new Image();
  gem.src = '/gems/gem_common.png';

  ctx.drawImage(cardTemplate, 0 , 0);
  ctx.drawImage(gem, 195, 310, 30, 35);

});
