# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding Instructors >:^("
# adam_johnson = Instructor.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     years_worked:
# )

# greg_dwyer = Instructor.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     years_worked:
# )

dickhead_mcgee = Instructor.create(
    name: "Dickhead McGee",
    age: 69,
    description: "Fucking loser fuck",
    song: "Idiot - Dumbbitch",
    current_location: "Texas",
    location_from: "Fairfax, Virginia",
    interesting_fact: "I'm actually a dumb bastard",
    hobbies: "dumb, fucking, cunt",
    picture: "https://ih1.redbubble.net/image.403079332.1072/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
    favorite_food: "McDonald's",
    github: "https://www.google.com/",
    years_worked: 2
)

dumb_bitch = Instructor.create(
    name: "Dumb Bitch",
    age: 69,
    description: "Fucking Dumb bitch",
    song: "Real You - Twice",
    current_location: "Texas",
    location_from: "Fairfax, Virginia",
    interesting_fact: "I'm actually a dumb bitch",
    hobbies: "dumb, fucking, cunt",
    picture: "https://ih1.redbubble.net/image.403079332.1072/flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg",
    favorite_food: "McDonald's",
    github: "https://www.google.com/",
    years_worked: 2
)


puts "Seeding Section A Students >:^)"
brice_jokung = Student.create(
    name: "Brice Jokung",
    age: 34,
    description: "Fun, social, Entrepreneurial Mindset, Family man!",
    song: "All of Me - John Legend",
    current_location: "Maryland",
    location_from: "Cameroon, Africa",
    interesting_fact: "I used to be an R&B Singer and I had a band called M4B",
    hobbies: "Music, Soccer, Movies, Video games, Travelling",
    picture: "https://i.imgur.com/4VGBynL.png",
    favorite_food: "Fried Plantains, Stew and Steak",
    github: "https://github.com/delwis2000",
    flatiron_rating: 7.5,
    instructor_id: dickhead_mcgee.id
)

charlie_gaereminck = Student.create(
    name: "Charlie Gaereminck",
    age: 28,
    description: "Love my two dogs, Rusty and Freya",
    song: "Say You Won't Let Go - James Arthur",
    current_location: "Michigan",
    location_from: "Detroit, Michigan",
    interesting_fact: "I have Celiac Disease",
    hobbies: "Gaming, Anime, Being better than Eric at League",
    picture: "https://i.imgur.com/dRW92LA.png",
    favorite_food: "New York Strip Steak",
    github: "https://github.com/ggaereminck",
    flatiron_rating: 9,
    instructor_id: dickhead_mcgee.id
)

cody_chaffin = Student.create(
    name: "Cody Chaffin",
    age: 24,
    description: "I'm a dad of 2 kids and finally started looking for a better career to provide for the family. I love to do really anything that makes you grind until you're happy which if you're a grinding fanatic it never stops lol.",
    song: "I Get the Bag (feat Migos) - Gucci Mane",
    current_location: "Texas",
    location_from: "Virginia",
    interesting_fact: "I watch/read a lot of informational videos, posts, and facts so most of my friends and family call me a walking Google search for random facts",
    hobbies: "Gaming, Blacksmithing, building epoxy tables, watching movies, and smoking cigars",
    picture: "https://scontent.fhou1-2.fna.fbcdn.net/v/t39.30808-6/257460555_2500213560123178_1657978109400121861_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=NLIRZm4kAxAAX-02bUi&_nc_ht=scontent.fhou1-2.fna&oh=2253b313046b1b44da503dff6aadc9b5&oe=61A3CBD2",
    favorite_food: "Sweet Spicy Chili Doritos",
    github: "https://github.com/CodyChaffin",
    flatiron_rating: 10,
    instructor_id: dickhead_mcgee.id
)

# david_evangelista = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

dilshan_mudali = Student.create(
    name: "Dilshan Mudali",
    age: 26,
    description: "I am Sri Lankan, idk what else",
    song: "Chop Suey! - System Of A Down`",
    current_location: "Virginia",
    location_from: "Sri Lanka",
    interesting_fact: "I like turtles",
    hobbies: "Currently none, but played some PUBG and CS:GO when I had time before bootcamp",
    picture: "https://i.imgur.com/QlyMGTA.jpg",
    favorite_food: "Rice and Curry",
    github: "https://github.com/dilshanmudali",
    flatiron_rating: 8,
    instructor_id: dickhead_mcgee.id
)

eric_yi = Student.create(
    name: "Eric Yi",
    age: 26,
    description: "An idiot trying to learn how to not be an idiot.",
    song: '<iframe src="https://open.spotify.com/embed/track/51Ful1v7b81FchIFFTAQ05?utm_source=generator&theme=0" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>',
    current_location: "New York",
    location_from: "New York City, New York",
    interesting_fact: "I have a polydactyl cat named Henri who has 7 fingers on both of his front two paws!",
    hobbies: "Video games, reading, walking around with my cat, ",
    picture: "https://i.imgur.com/T3Dnjf6.jpg",
    favorite_food: "Sushi, Korean BBQ, Noodles",
    github: "https://github.com/Kanginyi",
    flatiron_rating: 9,
    instructor_id: dickhead_mcgee.id
)

# hashem_gray = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

jon_pilarski = Student.create(
    name: "Jon Pilarski",
    age: 28,
    description: "Reformed Finance Bro who is grateful for opportunity to 
    build software products that will define what tomorrow looks like",
    song: "We Gon Make It (feat. Meek Mill) - Cordae",
    current_location: "Illinois",
    location_from: "Chicago, Illinois",
    interesting_fact: "Told Richard Thaler he had to pay to 
    take a picture with me when he asked if I wanted a picture with him",
    hobbies: "College basketball, playing basketball, keyboard, golf",
    picture: "https://i.imgur.com/qvzOq95.png",
    favorite_food: "Rice",
    github: "https://github.com/jonpilarski777",
    flatiron_rating: 9,
    instructor_id: dickhead_mcgee.id
)

# joshua_allford = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

kevin_lutz = Student.create(
    name: "Kevin Lutz",
    age: 35,
    description: "Always down for adventure and I love learning about any topic",
    song: "Cruise- Florida Georgia Line",
    current_location: "Georgia",
    location_from: "Atlanta, Georgia",
    interesting_fact: "Have visited 14 countries and speak German",
    hobbies: "Working out, watching football, cooking, hanging with friends, reading",
    picture: "https://i.imgur.com/i5MQIO0.png",
    favorite_food: "Lasagna",
    github: "https://github.com/kevinlutz",
    flatiron_rating: 9,
    instructor_id: dickhead_mcgee.id
)

# matt_blank = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

# nicholas_aguirre = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

paul_davidson = Student.create(
    name: "Paul Davidson",
    age: 39,
    description: "Rap game Alan Cinsavich",
    song: "Books Are Fun - Barney the Dinosaur",
    current_location: "New York",
    location_from: "Washington DC",
    interesting_fact: "If you ask someone if they're a cop, they have to tell you",
    hobbies: "Home Automation, Docker, Board Games",
    picture: "https://i.imgur.com/NE2j19R.png",
    favorite_food: "Indian",
    github: "https://github.com/pashovski",
    flatiron_rating: 1,
    instructor_id: dickhead_mcgee.id
)

quang_do = Student.create(
    name: "Quang Do",
    age: 26,
    description: "asian boi",
    song: "Feel Special - Twice",
    current_location: "Texas",
    location_from: "Japan",
    interesting_fact: "I was an aeronautical engineer at Texas A&M before",
    hobbies: "I like to sleep",
    picture: "https://i.imgur.com/P6B1PYk.png",
    favorite_food: "barbeque",
    github: "https://github.com/QD11",
    flatiron_rating: 8,
    instructor_id: dickhead_mcgee.id
)

sam_lee = Student.create(
    name: "Sam Lee",
    age: 24,
    description: "I am a 24 year old Asian male",
    song: "At My Worst - Pink Sweat$",
    current_location: "Virginia",
    location_from: "USA USA USA",
    interesting_fact: "I was studying abroad in Singapore for a year",
    hobbies: "I enjoy deep talks, running, playing basketball, traveling the world, and gaming with the goons!",
    picture: "https://i.imgur.com/DADySeM.png",
    favorite_food: "Korean",
    github: "https://github.com/samlee1097",
    flatiron_rating: 9,
    instructor_id: dickhead_mcgee.id
)

xinyi_yao = Student.create(
    name: "Xinyi Yao",
    age: 24,
    description: "Wife, corgi mama, chill af, introverted sometimes, thoughtful with a smart mouth and I love to EAT",
    song: "Astronaut in the Ocean - Masked Wolf",
    current_location: "Texas",
    location_from: "Wuhan, China",
    interesting_fact: "I was born with two thumbs on my left hand",
    hobbies: "Watching tv/movies, cooking, baking, tennis",
    picture: "https://i.imgur.com/FaqREvQ.png",
    favorite_food: "Noodles and pizza, but not together",
    github: "https://github.com/xinyiyao823",
    flatiron_rating: 6.9,
    instructor_id: dickhead_mcgee.id
)


seneiya_cooke = Student.create(
    name: "Seneiya Cooke",
    age: 55,
    description: "woman",
    song: "Uncover - LOONA",
    current_location: "Maryland",
    location_from: "Washington DC",
    interesting_fact: "I'm Immortal in Valorant and I have a dog named Kali",
    hobbies: "Sleeping",
    picture: "https://i.ibb.co/1RMGwmZ/IMG-1229.jpg",
    favorite_food: "Sushi",
    github: "https://github.com/seneiya0",
    flatiron_rating: 8.73,
    instructor_id: dickhead_mcgee.id
)

joseph_fulkerson = Student.create(
    name: "Joseph Fulkerson",
    age: 26,
    description: "Software engineering student or something",
    song: "Oceans - Hillsong",
    current_location: "Tennessee",
    location_from: "Tennessee",
    interesting_fact: "Certified teacher in gifted education, special education, and Economics.",
    hobbies: "Axes, Ford Trucks, Reading, Stock Market, Basketball",
    picture: "https://i.imgur.com/7VQl99M.png",
    favorite_food: "Sushi",
    github: "https://github.com/josephafulkerson",
    flatiron_rating: 11,
    instructor_id: dickhead_mcgee.id
)

# mohammad_hasan = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )

# alan_cinsavich = Student.create(
#     name: "Alan L. Cinsavich",
#     age: ,
#     description: ,
#     song: ,
#     current_location: "Maryland",
#     location_from: "Maryland",
#     interesting_fact: "I really enjoy photography",
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dickhead_mcgee.id
# )


puts "Seeding Section B Students >:^("
# alex_aguirre = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

alex_mandalar = Student.create(
    name: "Alex Mandalar",
    age: 28,
    description: "I love traveling, eating and playing video games!",
    song: "Juicy - The Notorious B.I.G.",
    current_location: "New York",
    location_from: "Yangon, Myanmar",
    interesting_fact: "I am a sushi chef",
    hobbies: "Gaming, Travelling, Riding Bicycle",
    picture: "https://i.imgur.com/sKti6yf.png",
    favorite_food: "Nan-gyi Thoke",
    github: "https://github.com/mandalarian93",
    flatiron_rating: 8,
    instructor_id: dumb_bitch.id
)

# ben_yang = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

# chris_aguirre = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

devin_mullin = Student.create(
    name: "Devin Mullin",
    age: 31,
    description: "cool guy, fun times. Software engineer / IT guy that loves gaming, basketball, and horror movies :)",
    song: "SAY GOODBYE - Hiroshi Sato",
    current_location: "Texas",
    location_from: "New Orleans, Louisiana",
    interesting_fact: "hosted a monthly live comedy show and weekly podcast for 2 years",
    hobbies: "gaming, cooking, writing, hiking, chilling",
    picture: "https://media-exp1.licdn.com/dms/image/C4D03AQFH_5wpXedUnw/profile-displayphoto-shrink_200_200/0/1635884991711?e=1643241600&v=beta&t=hGmT2jcj3qne_qC-N71yLQgGxu1ES0rhk_vMGWLwjvg",
    favorite_food: "Lasagna or Gumbo",
    github: "https://github.com/devin-mullin",
    flatiron_rating: 8,
    instructor_id: dumb_bitch.id
)

# duvly_simeon = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

# hathor_hamilton = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

# jon_courtier = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

mary_aninzo = Student.create(
    name: "Mary Aninzo",
    age: 33,
    description: "Competitive board games player, wine enthusiast, avid foodie, and cook in training (meaning I like learning and trying out new recipes when cooking",
    song: "Don't Stop Believin' - Journey",
    current_location: "Maryland",
    location_from: "Philippines",
    interesting_fact: "Use to play co-ed flag football for 10 years and loved it.",
    hobbies: "bike, tennis, hike, golf, collecting house plants",
    picture: "https://i.imgur.com/n2bUykv.png",
    favorite_food: "Sushi or Korean BBQ",
    github: "https://github.com/maninzo1",
    flatiron_rating: 8,
    instructor_id: dumb_bitch.id
)

matt_law = Student.create(
    name: "Matt Law",
    age: 43,
    description: "Father, husband, product manager who was curious about what engineers do all day.",
    song: "Tweezer - Phish",
    current_location: "New York",
    location_from: "Bronx, New York",
    interesting_fact: "I wore the same t-shirt for every code challenge except for the first one, aka the one I didn't pass the first time it was given. It's now considered my lucky shirt. The shirt say 'Tell me what you want, what you really, really, really want' on it, which is one more 'really' than the Spice Girls song.",
    hobbies: "running, playing music, listening to music, Phish, poker",
    picture: "https://avatars.githubusercontent.com/u/41380326?v=4",
    favorite_food: "Chicken and Broccoli with Garlic Sauce",
    github: "https://github.com/aboutmattlaw",
    flatiron_rating: 8,
    instructor_id: dumb_bitch.id
)

nicholas_ruzicka = Student.create(
    name: "Nicholas Ruzicka",
    age: 31,
    description: "A guy who is trying to escape sales",
    song: "Lord Pretty Flacko Jodye 2 - A$AP Rocky",
    current_location: "New York",
    location_from: "Cupertino, California",
    interesting_fact: "Used to be a production assistant and have met many celebrities and professional athletes.",
    hobbies: "Crypto investing, rock climbing, lifting, guitar, and reading philosophy",
    picture: "https://media-exp1.licdn.com/dms/image/C5603AQGCV35VxBZI5g/profile-displayphoto-shrink_800_800/0/1558841451347?e=1643241600&v=beta&t=kfC4kHPqGflywZixFRA1KYHfnQjsfJg6nzEpa21xgQk",
    favorite_food: "Chicken Curry",
    github: "https://github.com/nick-ruzicka",
    flatiron_rating: 8.5,
    instructor_id: dumb_bitch.id
)

patrick_wu = Student.create(
    name: "Patrick Wu",
    age: 27,
    description: "I like animals, anti-humor, and alliteration",
    song: "Cloudy Sky - Tundra Beats",
    current_location: "Maryland",
    location_from: "American Born Chinese",
    interesting_fact: "Bboyed in high school",
    hobbies: "Golf, video games, bass heavy con",
    picture: "https://i.imgur.com/0CDrQUF.png",
    favorite_food: "Salmon",
    github: "https://github.com/UncleDadMom",
    flatiron_rating: 9,
    instructor_id: dumb_bitch.id
)

# pranay_sankineni = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

# scott_donnan = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )

yewei_chen = Student.create(
    name: "Yewei Chen",
    age: 27,
    description: "An interior designer who's ready to code.",
    song: "Stay - Justin Bieber",
    current_location: "Illinois",
    location_from: "China",
    interesting_fact: "Afraid of riding airplanes",
    hobbies: "Singing, weight lifting",
    picture: "https://i.imgur.com/IRyWjym.png",
    favorite_food: "Hotpot",
    github: "https://github.com/hyzr0525",
    flatiron_rating: 8,
    instructor_id: dumb_bitch.id
)

# xee = Student.create(
#     name: ,
#     age: ,
#     description: ,
#     song: ,
#     current_location: ,
#     location_from: ,
#     interesting_fact: ,
#     hobbies: ,
#     picture: ,
#     favorite_food: ,
#     github: ,
#     flatiron_rating: ,
#     instructor_id: dumb_bitch.id
# )


puts "Missing fuckers"
# jui_hsu = ":("
# jason_brown = ":("
# jose_lanza = ":("
# justin_sohn = ":("



puts "Done seeding data!"