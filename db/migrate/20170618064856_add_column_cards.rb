class AddColumnCards < ActiveRecord::Migration[5.1]
  def change
    add_column :cards, :card_name, :string
    add_column :cards, :race, :string
    add_column :cards, :class_cd, :integer
    add_column :cards, :cost, :integer
    add_column :cards, :attack, :integer
    add_column :cards, :health, :integer
    add_column :cards, :rarity_cd, :integer
    add_column :cards, :ability, :string
    add_column :cards, :file_id, :integer
  end
end
