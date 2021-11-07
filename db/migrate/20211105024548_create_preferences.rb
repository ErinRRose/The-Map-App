class CreatePreferences < ActiveRecord::Migration[6.1]
  def change
    create_table :preferences do |t|
      t.string :go_to
      t.string :been_to
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
