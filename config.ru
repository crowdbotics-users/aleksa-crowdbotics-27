use Rack::Static,
  urls: ["/images", "/js", "/css", "/slick"],
  root: "public"

headers = {
  'Content-Type'  => 'text/html',
  'Cache-Control' => 'public, max-age=86400'
}

map "/" do
  run lambda { |env|
    [
      200, headers,
      File.open('public/index.html', File::RDONLY)
    ]
  }
end

map "/landing2" do
  run lambda { |env|
    [
      200, headers,
      File.open('public/landing2.html', File::RDONLY)
    ]
  }
end

map "/landing3" do
  run lambda { |env|
    [
      200, headers,
      File.open('public/landing3.html', File::RDONLY)
    ]
  }
end
