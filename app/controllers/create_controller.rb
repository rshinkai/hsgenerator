class CreateController < ApplicationController
  def index
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

end
