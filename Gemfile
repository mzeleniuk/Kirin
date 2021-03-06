source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?('/')
  "https://github.com/#{repo_name}.git"
end

ruby '2.5.7'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '5.0.7.2'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.18'
# Use Puma as the app server
gem 'puma', '3.12.4'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'

# HTML, CSS, and JS framework
gem 'bootstrap-sass', '~> 3.3.7'

# Integrate React.js with Rails
gem 'react-rails', '~> 2.2'

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger
  # console
  gem 'byebug', platform: :mri

  # Testing framework for Rails
  gem 'rspec-rails', '~> 3.6'

  # Fixtures replacement
  gem 'factory_girl_rails', '~> 4.8.0'
end

group :development do
  # A static analysis security vulnerability scanner
  gem 'brakeman', '~> 3.6.2', require: false

  # Access an IRB console on exception pages or by using <%= console %> anywhere
  # in the code.
  gem 'listen', '~> 3.0.5'
  gem 'web-console', '>= 3.3.0'

  # A Ruby static code analyzer
  gem 'rubocop', '~> 0.49.1', require: false

  # Spring speeds up development by keeping your application running in the
  # background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :test do
  # A code coverage analysis tool for Ruby
  gem 'simplecov', '~> 0.14.1', require: false
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
