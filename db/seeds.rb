# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

=begin
# CardClass用マスタデータ
CardClass.create(:name => 'normal', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'mage', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'shaman', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'priest', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'warlock', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'warrior', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'rogue', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'hunter', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'druid', :created_at => '2017-07-04', :updated_at => '2017-07-04')
CardClass.create(:name => 'paladin', :created_at => '2017-07-04', :updated_at => '2017-07-04')
=end

=begin
# rariry
Rarity.create(:name => 'common', :created_at => '2017-07-04', :updated_at => '2017-07-04')
Rarity.create(:name => 'rare', :created_at => '2017-07-04', :updated_at => '2017-07-04')
Rarity.create(:name => 'epic', :created_at => '2017-07-04', :updated_at => '2017-07-04')
Rarity.create(:name => 'legend', :created_at => '2017-07-04', :updated_at => '2017-07-04')
=end
