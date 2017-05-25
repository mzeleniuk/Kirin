require 'rails_helper'

RSpec.describe Event, type: :model do
  let(:event) { create :event }

  describe 'Validations' do
    it 'is valid with valid attributes' do
      expect(event).to be_valid
    end

    context 'when name is invalid' do
      it 'is not valid if name is blank' do
        event.name = nil

        expect(event).to_not be_valid
        expect(event.errors[:name]).to eq(["can't be blank", 'is too short (minimum is 2 characters)'])
      end

      it 'is not valid if name is too short' do
        event.name = '1'

        expect(event).to_not be_valid
        expect(event.errors[:name]).to eq(['is too short (minimum is 2 characters)'])
      end

      it 'is not valid if name is too long' do
        event.name = 'name' * 140

        expect(event).to_not be_valid
        expect(event.errors[:name]).to eq(['is too long (maximum is 500 characters)'])
      end
    end

    context 'when event date is invalid' do
      it 'is not valid if event date is blank' do
        event.event_date = nil

        expect(event).to_not be_valid
        expect(event.errors[:event_date]).to eq(["can't be blank"])
      end
    end

    context 'when description is invalid' do
      it 'is not valid if description is blank' do
        event.description = nil

        expect(event).to_not be_valid
        expect(event.errors[:description]).to eq(["can't be blank", 'is too short (minimum is 2 characters)'])
      end

      it 'is not valid if description is too short' do
        event.description = '1'

        expect(event).to_not be_valid
        expect(event.errors[:description]).to eq(['is too short (minimum is 2 characters)'])
      end

      it 'is not valid if description is too long' do
        event.description = 'description' * 140

        expect(event).to_not be_valid
        expect(event.errors[:description]).to eq(['is too long (maximum is 1500 characters)'])
      end
    end

    context 'when place is invalid' do
      it 'is not valid if place is blank' do
        event.place = nil

        expect(event).to_not be_valid
        expect(event.errors[:place]).to eq(["can't be blank", 'is too short (minimum is 2 characters)'])
      end

      it 'is not valid if place is too short' do
        event.place = '1'

        expect(event).to_not be_valid
        expect(event.errors[:place]).to eq(['is too short (minimum is 2 characters)'])
      end

      it 'is not valid if place is too long' do
        event.place = 'description' * 140

        expect(event).to_not be_valid
        expect(event.errors[:place]).to eq(['is too long (maximum is 500 characters)'])
      end
    end
  end
end
