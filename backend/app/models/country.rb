class Country < ApplicationRecord
    has_many :preferences
    has_many :users, through: :preferences
end
