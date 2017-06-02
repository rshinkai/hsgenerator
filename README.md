# README

## このアプリについて
ハースストーンのオリジナルカードジェネレーター（日本語版）です。

## Ruby on Rails 環境構築（Mac）
http://qiita.com/gash717/items/3ab2e79d3f387f03a998

## Git準備
http://qiita.com/furusin_oriver/items/974a7b7fb8c56ad88d6e

## プロジェクト準備  
#### 適当なフォルダをワークスペースとして作成  
例）デスクトップに、rubyworkspaceフォルダを作成  

#### コンソールを開いて、ワークスペースに移動
例）  
cd desktop  
cd rubyworkspace  

#### プロジェクトをクローン    
git clone   https://github.com/misomber/hsgenerator.git  

#### ブランチ作成  
下記の【適応な名前】は機能名を入れる。  
ログイン機能を作るなら、　feature/login　など  
開発ブランチから、フィーチャーブランチができる  	
git checkout -b feature/適当な名前 develop  

#### プッシュ対象のファイルを確認  
git status  

#### 対象ファイルをステージングにあげる  
git add .  

#### コミット  
git commit -m "コメント書いてね（例：ログイン画面まで作成）"  

#### プッシュ  
git pull origin develop  
git push origin feature/適当な名前　←　自分の開発しているブランチ  
