var imgsrc = '/card-templates/card_minion_';
var templateName = 'normal';
var gemsrc = '/gems/gem_';
var gemName = 'common';
var extention = '.png';

var cost = null;
var attack = null;
var health = null;

$(document).ready(function() {
  drawCard();
});

// クラス、レア度を選択した場合の処理
$(function(){
  $('.cardclass, .rarity').change(function(){
    drawCard();
  });
});

// テキストエリアを入力した場合の処理
$(function(){
  $('.inputarea').keyup(function(){
    drawCard();
  });
});

function drawCard(){
  var canvas = document.getElementById('card');
  var ctx = canvas.getContext('2d');

  var templateName = $('.cardclass option:selected').text();
  var gemName = $('.rarity option:selected').text();

  var imgArray = new Array();

  // card-template
  var cardTemplate = new Image();
  cardTemplate.src = imgsrc + templateName + extention;
  imgArray.push(cardTemplate.src);

  // gem
  var gem = new Image();
  gem.src = gemsrc + gemName + extention;
  imgArray.push(gem.src);

  var cost = $("#card_cost").val();
  var attack = $("#card_attack").val();
  var health = $("#card_health").val();

  // 読み込んだ画像数カウント
  var imgCnt = 0;
  // イメージオブジェクト
  var Img = new Array();
  // カード枠とジェム画像が読み込まれたら、canvas描画
  for(i = 0; i < imgArray.length; i++){
    var img = new Image();
    img.src = imgArray[i];
    img.onload = function() {
      // 読み込んだカウントアップ
      imgCnt++;
      if(imgCnt == imgArray.length){
        ctx.drawImage(cardTemplate, 0 , 0);
        ctx.drawImage(gem, 195, 310, 30, 35);
        ctx.font='normal bold 60px sans-serif';
        ctx.fillStyle = '#fff';
        if(cost.length > 1){
          ctx.fillText(cost, 25,80);
        }else{
          ctx.fillText(cost, 45,80);
        }

        ctx.font='normal bold 48px sans-serif';
        if(attack.length > 1){
          ctx.fillText(attack, 35,505);
        }else{
          ctx.fillText(attack, 50,505);
        }
        if(health.length > 1){
          ctx.fillText(health, 320,510);
        }else{
          ctx.fillText(health, 335,510);
        }
      }
    }
  }
}