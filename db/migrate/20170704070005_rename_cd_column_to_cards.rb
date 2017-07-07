class RenameCdColumnToCards < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :class_cd, :class_id
    rename_column :cards, :rarity_cd, :rarity_id
  end
end
