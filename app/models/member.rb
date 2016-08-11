class Member < ApplicationRecord
  validates :first_name, :last_name, :street_address, :zip, :email, :phone, :membership, presence: true
end
