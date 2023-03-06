class AddTagsToAlerts < ActiveRecord::Migration[7.0]
  def change
    add_column :alerts, :tags, :string, array: true, default: []
  end
end
