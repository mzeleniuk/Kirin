class Event < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2, maximum: 500 }
  validates :event_date, presence: true
  validates :description, presence: true, length: { minimum: 2, maximum: 1500 }
  validates :place, presence: true, length: { minimum: 2, maximum: 500 }
end
