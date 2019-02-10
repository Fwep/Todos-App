# == Schema Information
#
# Table name: todos
#
#  id    :integer          not null, primary key
#  title :string           not null
#  body  :string           not null
#  done  :boolean
#

class Todo < ApplicationRecord
  validates :title, presence: true, uniqueness: true, length: { maximum: 25 }
  validates :body, length: { maximum: 250 }
  validates :done, inclusion: { in: [true, false]}, default: false
end
