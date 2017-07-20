var imgsrc = '/card-templates/card_minion_';
var templateName = 'normal';
var gemsrc = '/gems/gem_';
var gemName = 'common';
var extention = '.png';

$(document).ready(function() {
  drawCard(templateName,gemName);
});

function drawCard(templateName, gemName){
  var canvas = document.getElementById('card');
  var ctx = canvas.getContext('2d');

  // card-template
  var cardTemplate = new Image();
  cardTemplate.src = imgsrc + templateName + extention;

  // gem
  var gem = new Image();
  gem.src = gemsrc + gemName + extention;

  cardTemplate.onload = function(){
    ctx.drawImage(cardTemplate, 0 , 0);
    ctx.drawImage(gem, 195, 310, 30, 35);
  }
  gem.onload = function(){
    ctx.drawImage(cardTemplate, 0 , 0);
    ctx.drawImage(gem, 195, 310, 30, 35);
  }
}

$(function(){
  $('#class_id_0').change(function(){
    // 選択されている表示文字列を取り出す
    var templateName = $('#class_id_0 option:selected').text();
    var gemName = $('#rarity_id_0 option:selected').text();
    drawCard(templateName,gemName);
  });
});

$(function(){
  $('#rarity_id_0').change(function(){
    // 選択されている表示文字列を取り出す
    var templateName = $('#class_id_0 option:selected').text();
    var gemName = $('#rarity_id_0 option:selected').text();
    drawCard(templateName,gemName);
  });
});
