class AddToUser < ActiveRecord::Migration
	def change
		add_column :users, :first_name, :string
		add_column :users, :last_name, :string
	    add_column :users, :image, :string
	    add_column :users, :fb_token, :string
	    add_column :users, :location, :string
	    add_column :users, :fb_url, :string
	    add_column :users, :username, :string
	end
end