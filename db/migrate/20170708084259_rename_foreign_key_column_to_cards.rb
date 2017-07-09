class RenameForeignKeyColumnToCards < ActiveRecord::Migration[5.1]
  def change
    rename_column :cards, :class_id, :card_class_id
    rename_column :cards, :file_id, :image_file_id
  end
end
