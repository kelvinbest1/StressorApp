class CreateStressors < ActiveRecord::Migration[6.1]
  def change
    create_table :stressors do |t|
      t.string :name
      t.boolean :overcamed
      t.integer :user_id

      t.timestamps
    end
  end
end
