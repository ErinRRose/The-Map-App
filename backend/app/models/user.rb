class User < ApplicationRecord
    has_many :preferences
    has_many :countries, through: :preferences
end
