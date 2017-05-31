require 'rails_helper'

RSpec.describe Api::EventsController, type: :controller do
  describe 'GET #index' do
    it 'responds successfully with an HTTP 200 status code' do
      get :index, format: :json

      expect(response).to be_success
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq('application/json')
    end

    it 'sends a list of events' do
      FactoryGirl.create_list(:event, 5)
      get :index, format: :json

      json = JSON.parse(response.body)

      expect(json.length).to eq(5)
    end
  end

  describe 'POST #create' do
    context 'with valid event params' do
      it 'responds successfully with JSON format' do
        post :create, params: {
          event: {
            name: 'Test Event',
            description: 'Some description.',
            event_date: Date.current,
            place: 'Test place'
          }
        }, format: :json

        expect(response).to be_success
        expect(response.content_type).to eq('application/json')
      end

      it 'creates a new Event' do
        post :create, params: {
          event: {
            name: 'Test Event',
            description: 'Some description.',
            event_date: Date.current,
            place: 'Test place'
          }
        }, format: :json

        expect(Event.count).to eq(1)
        expect(Event.first.name).to eq('Test Event')
      end
    end

    context 'with invalid event params' do
      it 'responds successfully with HTTP 400 status' do
        post :create, params: {
          event: {
            name: nil,
            description: 'Some description.',
            event_date: Date.current,
            place: 'Test place'
          }
        }, format: :json

        expect(response).to have_http_status(400)
      end

      it 'does not create a new Event' do
        post :create, params: {
          event: {
            name: nil,
            description: 'Some description.',
            event_date: Date.current,
            place: 'Test place'
          }
        }, format: :json

        expect(Event.count).to eq(0)
      end
    end
  end

  describe 'PATCH #update' do
    let(:event) { create :event }

    context 'with valid event params' do
      it 'responds successfully with JSON format' do
        patch :update, params: {
          id: event.id,
          event: { name: 'React course' }
        }, format: :json

        expect(response).to be_success
        expect(response.content_type).to eq('application/json')
      end

      it 'updates the Event' do
        patch :update, params: {
          id: event.id,
          event: { name: 'React course' }
        }, format: :json

        json = JSON.parse(response.body)
        expect(json['name']).to eq('React course')

        event.reload
        expect(event.name).to eq('React course')
      end
    end

    context 'with invalid event params' do
      it 'responds successfully with HTTP 422 status' do
        patch :update, params: {
          id: event.id,
          event: { name: nil }
        }, format: :json

        expect(response).to have_http_status(422)
      end

      it 'does not update the Event record' do
        patch :update, params: {
          id: event.id,
          event: { name: nil }
        }, format: :json

        event.reload
        expect(event.name).to_not eq(nil)
      end
    end
  end

  describe 'GET #search' do
    before { FactoryGirl.create_list(:event, 5) }

    let!(:event) { create :event, name: 'Ruby Conf' }

    it 'responds successfully with an HTTP 200 status code' do
      get :search, params: { query: 'Ruby' }

      expect(response).to be_success
      expect(response).to have_http_status(200)
      expect(response.content_type).to eq('application/json')
    end

    it 'finds correct event' do
      get :search, params: { query: 'Ruby' }

      json = JSON.parse(response.body)

      expect(json.length).to eq(1)
      expect(json[0]['name']).to eq('Ruby Conf')
    end
  end

  describe 'DELETE #destroy' do
    let!(:event) { create :event }

    it 'deletes the Event record' do
      expect { delete :destroy, params: { id: event.id } }.to change(Event, :count).by(-1)
      expect(response).to have_http_status(204)
    end
  end
end
