class Event < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2, maximum: 500 }
  validates :event_date, presence: true
  validates :description, presence: true, length: { minimum: 2, maximum: 1500 }
  validates :place, presence: true, length: { minimum: 2, maximum: 500 }

  class << self
    def per_page
      10
    end

    def pages(per_page = self.per_page)
      pages = count / per_page.to_f
      pages += 1 if (pages % 1).positive?
      pages.to_i
    end

    def paginate(page: 1, per_page: self.per_page)
      page = page.to_i
      per_page = per_page.to_i

      offset = (page - 1) * per_page
      limit(per_page).offset(offset)
    end
  end
end
