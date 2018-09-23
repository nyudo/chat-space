class GroupUser < ApplicationRecord
  brlongs_to :group
  belongs_to :user
end
