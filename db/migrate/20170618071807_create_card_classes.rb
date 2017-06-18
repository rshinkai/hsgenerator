class CreateCardClasses < ActiveRecord::Migration[5.1]
  def change
    create_table :card_classes do |t|
      t.string :name

      t.timestamps
    end
  end
end
