puts 'Creating restaurants and reviews...'
12.times do
  restaurant = Restaurant.create!({
    name: Faker::Restaurant.name,
    address: Faker::Address.full_address,
  })
  print '>'

  rand(10).times do
    Review.create!({
      content: Faker::Restaurant.review,
      restaurant: restaurant
    })
    print '>'
  end
end
puts
puts 'Finished!'
