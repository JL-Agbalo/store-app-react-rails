class CreateProfiles < ActiveRecord::Migration[7.1]
  def change
    create_table :profiles do |t|
      t.references :user, null: false, foreign_key: true
      t.string :phone
      t.string :avatar
      t.date :date_of_birth
      t.string :address
      t.string :city
      t.string :postal_code
      t.string :country
      t.text :bio

      t.timestamps
    end
  end
end
