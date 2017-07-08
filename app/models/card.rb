class Card < ApplicationRecord
  belongs_to :card_class
  belongs_to :rarity
  belongs_to :image_file
end
