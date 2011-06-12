require 'rubygems'
require 'sinatra'
require 'lib/cliche_generator'

get '/' do
  select = rand(Cliche.list.length)
  @cliche = Cliche.find(select.to_i)
  erb :index
end

get '/cliche/:index' do
  @cliche = Cliche.find(params[:index].to_i)
  erb :index
end