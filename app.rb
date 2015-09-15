# require 'erb/tilt'

get "/" do
  @time = Time.now
  erb :index
end