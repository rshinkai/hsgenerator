class CreateImageFiles < ActiveRecord::Migration[5.1]
  def change
    create_table :image_files do |t|
      t.string :name
      t.binary :file

      t.timestamps
    end
  end
end
