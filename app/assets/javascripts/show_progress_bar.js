
  function move() {
      var elem = document.getElementById("myBar");
      var width = 1;
      var id = setInterval(frame, 30);
      function frame() {
          if (width >= 100) {
              clearInterval(id);
          } else {
              width++;
              elem.style.width = width + '%';
          }
      }
  }

  //modal
  $(function(){

    //ボタンをクリックしたら
   $(".bt_create").click(function(){
        //body内の最後に<div id="modal-bg"></div>を挿入
       $("body").append('<div id="modal-bg"></div>');

      //画面中央を計算する関数を実行
      modalResize();

      //モーダルウィンドウを表示
          $("#modal-bg,#modal-main").fadeIn("slow");

      //画面のどこかをクリックしたらモーダルを閉じる
        $("#modal-bg,#modal-main").click(function(){
            $("#modal-main,#modal-bg").fadeOut("slow",function(){
           //挿入した<div id="modal-bg"></div>を削除
                $('#modal-bg').remove() ;
           });

          });

      //画面の左上からmodal-mainの横幅・高さを引き、その値を2で割ると画面中央の位置が計算できます
       $(window).resize(modalResize);
        function modalResize(){

              var w = $(window).width();
            var h = $(window).height();

              var cw = $("#modal-main").outerWidth();
             var ch = $("#modal-main").outerHeight();

          //取得した値をcssに追加する
              $("#modal-main").css({
                  "left": ((w - cw)/2) + "px",
                  "top": ((h - ch)/2) + "px"
            });
       }
     });
  });
