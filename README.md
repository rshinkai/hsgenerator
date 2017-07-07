# README

## このアプリについて
ハースストーンのオリジナルカードジェネレーター（日本語版）です。

## Ruby on Rails 環境構築（Mac）
http://qiita.com/gash717/items/3ab2e79d3f387f03a998

## Ruby on Rails 環境構築 (Windows)
http://www.bitcrew.co.jp/tips/post-284

## Git準備
http://qiita.com/furusin_oriver/items/974a7b7fb8c56ad88d6e  
http://qiita.com/2m1tsu3/items/6d49374230afab251337  

## プロジェクト準備  
#### 適当なフォルダをワークスペースとして作成  
例）デスクトップに、rubyworkspaceフォルダを作成  

#### コンソールを開いて、ワークスペースに移動
例）  
cd desktop  
cd rubyworkspace  

#### プロジェクトをクローン    
git clone https://github.com/misomber/hsgenerator.git  

#### ブランチ作成  
下記の【適応な名前】は機能名を入れる。  
ログイン機能を作るなら、　feature/login　など  
開発ブランチから、フィーチャーブランチができる  	

git checkout -b feature/適当な名前 develop  

## エディタ準備 Atomを使用（実際なんでもいいけど）
#### Atomのインストール  
https://atom.io/  

#### Atomのパッケージのインストール
http://qiita.com/nishina555/items/d3690b057f4624d39d77

#### プロジェクトフォルダの設定
Atomを開く  
「ファイル」の「プロジェクトフォルダの追加」から、rubyworkspaceを選択  

## ソース編集時の作業
#### フェッチ
ワークスペースに移動  
git fetch　を入力し、リモートブランチを確認  
作業が重複しないことを確認  

#### ブランチの確認
git branch  
自分のブランチに * がついていればおｋ  

## ソース編集後の作業
#### プッシュ対象のファイルを確認  
git status  

#### 対象ファイルをステージングにあげる  
git add .  

#### コミット  
git commit -m "コメント書いてね（例：ログイン画面まで作成）"  

#### プッシュ  
git pull origin develop  
git push origin feature/適当な名前　←　自分の開発しているブランチ  

## アプリ構築
### 最初のライブラリとかのインストール
'gem install bundler'
'bundle install --without production'
エラーが起きたら一個ずつ頑張って解消する
macOS環境だとnokogiriのインストールで失敗するかもしれない。

## ライブラリとかの更新
'budnle update'
