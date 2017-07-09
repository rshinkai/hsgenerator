  var presrc = "/card-templates/card_minion_";
  var extention = ".png";

  $(function(){
    $('#class_id_0').change(function(){
      // 選択されている表示文字列を取り出す
      var txt = $('#class_id_0 option:selected').text();
      // 画像パス
      var src = presrc + txt + extention;
      $(".card_template").attr("src",src);
    });
  });
