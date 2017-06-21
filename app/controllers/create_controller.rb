class CreateController < ApplicationController
  # 初期画面表示用のメソッド
  def index
    # フォームの値を詰める用のオブジェクト
    @card = Card.new
  end

# ここから、フォームのサンプル（一応コメントアウトして残す）
=begin
  protect_from_forgery


  def form_sample
      if request.post? then
        @title = 'Result'
        @msg = 'you typed:' + params['input1'] + '.'
        @value = params['input1']
      else
        @title = 'Index'
        @msg = 'type text...'
        @value = ''
      end
  end
=end
# ここまで

  # カード作成ボタン押下後の処理
  def createCard
  end

end
