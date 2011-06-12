require 'rubygems'
require 'sinatra'
require 'lib/cliche_generator'

get '/' do
  @cliche = Cliche.random_cliche
  erb :index
end

get '/cliche/:index' do
  @cliche = Cliche.find(params[:index].to_i)
  erb :index
end