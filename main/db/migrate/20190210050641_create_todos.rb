class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string :title, null: false, unique: false
      t.string :body, null: false, unique: false
      t.boolean :done
    end
  end
end
