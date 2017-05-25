FactoryGirl.define do
  factory :event do
    sequence(:name) { |n| "Event #{n}" }
    event_date Date.current
    description 'Test event.'
    place 'Silent Hill'
  end
end
