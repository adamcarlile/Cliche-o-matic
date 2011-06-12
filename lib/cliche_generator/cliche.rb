class Cliche
  
  @@array = YAML::load(File.open('data/cliches.yml'))[:cliches]
  
  def self.list
    @@array
  end
  
  def self.random_cliche
    select = rand(list.length)
    return {:quote => list[select], :index => select}
  end
  
  def self.find(index)
    return {:quote => list[index], :index => index}
  end
  
end