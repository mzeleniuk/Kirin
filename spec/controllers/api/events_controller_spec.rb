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
end
