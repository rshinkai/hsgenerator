var gemsrc = "/gems/gem_";
var extention = ".png";

$(function(){
  $('#rarity_id_0').change(function(){
    // 選択されている表示文字列を取り出す
    var txt = $('#rarity_id_0 option:selected').text();
    // 画像パス
    var src = gemsrc + txt + extention;
    $('.gem').attr("src",src);
  });
});
