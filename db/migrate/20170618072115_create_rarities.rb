class CreateRarities < ActiveRecord::Migration[5.1]
  def change
    create_table :rarities do |t|
      t.string :name

      t.timestamps
    end
  end
end
