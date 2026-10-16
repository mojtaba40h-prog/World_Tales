/* World Tales: all story data (categories, collections, stories, chapters, credits).
   Image paths point to files in assets/images/. */
const DATA = {
 "categories": [
  {
   "id": "adventure",
   "name": "Adventure & Exploration",
   "blurb": "Voyages, daring escapes and journeys into the unknown."
  },
  {
   "id": "fantasy",
   "name": "Fantasy & Wonder",
   "blurb": "Rabbit holes, talking creatures and worlds where logic bends."
  },
  {
   "id": "nature",
   "name": "Nature & Survival",
   "blurb": "Wild landscapes, hidden gardens and the struggle to survive."
  },
  {
   "id": "folktales",
   "name": "Folktales & World Heritage",
   "blurb": "Traditional tales and fables from around the world."
  },
  {
   "id": "society",
   "name": "Society, Family & Human Experience",
   "blurb": "Stories of family, community and the human heart."
  },
  {
   "id": "mystery",
   "name": "Mystery, Horror & Science Fiction",
   "blurb": "Secrets, shadows and strange science, from detective puzzles to Gothic horror."
  }
 ],
 "stories": [
  {
   "id": "treasure-island",
   "featured": true,
   "title": "Treasure Island",
   "author": {
    "name": "Robert Louis Stevenson",
    "country": "Scotland",
    "years": "1850–1894",
    "bio": "Robert Louis Stevenson was a Scottish novelist, poet and travel writer, born in Edinburgh. Treasure Island, published in 1883, made him internationally famous; he went on to write The Strange Case of Dr Jekyll and Mr Hyde and Kidnapped, and spent his last years in Samoa."
   },
   "category": "adventure",
   "genres": [
    "Adventure",
    "Mystery",
    "Suspense"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "A dead sailor's sea chest, a black spot and a stained map: when young Jim Hawkins finds the chart to Captain Flint's buried gold, he sails on the Hispaniola with a charming one-legged cook who is not what he seems.",
   "cover": {
    "src": "assets/covers/treasure-island.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Jim Hawkins",
     "role": "Innkeeper's son, later cabin boy",
     "img": {
      "src": "assets/images/stories/treasure-island/char-jim-hawkins.webp",
      "w": 360,
      "h": 163
     }
    },
    {
     "name": "Long John Silver",
     "role": "Charming ship's cook, secret mutineer",
     "img": {
      "src": "assets/images/stories/treasure-island/char-long-john-silver.webp",
      "w": 360,
      "h": 161
     }
    },
    {
     "name": "Dr. Livesey",
     "role": "Village doctor and loyal friend",
     "img": {
      "src": "assets/images/stories/treasure-island/char-dr-livesey.webp",
      "w": 360,
      "h": 162
     }
    },
    {
     "name": "Squire Trelawney",
     "role": "Finances the expedition",
     "img": {
      "src": "assets/images/stories/treasure-island/char-squire-trelawney.webp",
      "w": 360,
      "h": 167
     }
    },
    {
     "name": "Captain Smollett",
     "role": "Strict master of the Hispaniola",
     "img": {
      "src": "assets/images/stories/treasure-island/char-captain-smollett.webp",
      "w": 360,
      "h": 166
     }
    },
    {
     "name": "Billy Bones",
     "role": "Old sailor with the heavy sea chest",
     "img": {
      "src": "assets/images/stories/treasure-island/char-billy-bones.webp",
      "w": 360,
      "h": 167
     }
    },
    {
     "name": "Ben Gunn",
     "role": "Castaway marooned on the island",
     "img": {
      "src": "assets/images/stories/treasure-island/char-ben-gunn.webp",
      "w": 360,
      "h": 158
     }
    },
    {
     "name": "Israel Hands",
     "role": "Pirate left aboard the Hispaniola",
     "img": {
      "src": "assets/images/stories/treasure-island/char-israel-hands.webp",
      "w": 360,
      "h": 157
     }
    },
    {
     "name": "Blind Pew",
     "role": "Blind beggar who brings the Black Spot",
     "img": {
      "src": "assets/images/stories/treasure-island/char-blind-pew.webp",
      "w": 360,
      "h": 158
     }
    }
   ],
   "props": {
    "title": "Props and places",
    "alt": "Illustrated sheet of twenty objects from the story, from the pirate ship and telescope to the treasure chest, lantern and pirate flag",
    "caption": "Twenty objects from the story: ship, compass, map, cutlass, lantern and more.",
    "img": {
     "src": "assets/images/stories/treasure-island/props.webp",
     "w": 560,
     "h": 695
    }
   },
   "parts": [
    {
     "title": "The Mystery",
     "chapters": [
      1,
      2,
      3
     ]
    },
    {
     "title": "The Voyage",
     "chapters": [
      4,
      5,
      6
     ]
    },
    {
     "title": "The Island",
     "chapters": [
      7,
      8,
      9
     ]
    },
    {
     "title": "The Battle",
     "chapters": [
      10,
      11,
      12
     ]
    },
    {
     "title": "The Treasure",
     "chapters": [
      13,
      14,
      15
     ]
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Mysterious Sailor",
     "text": "The story begins at the Admiral Benbow, a quiet coastal inn managed by young Jim Hawkins and his parents. One morning, an old, weather-beaten sailor named Billy Bones arrives and decides to stay. He carries a heavy wooden sea chest and keeps to himself, spending his days watching the sea through a brass telescope. Billy drinks heavily, sings terrifying sea songs, and warns Jim to watch out for a \"one-legged seafaring man.\" As weeks pass, Billy’s presence frightens the local patrons, but he refuses to leave or pay his bill. Jim’s father becomes gravely ill, adding stress to the household. The mysterious sailor’s past remains completely unknown, yet his evident paranoia suggests he is running away from dangerous enemies. Jim grows increasingly curious about what secret contents are locked inside the sailor's mysterious wooden chest.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch01.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim at the Admiral Benbow Inn door as an old sailor carries a sea chest"
    },
    {
     "n": 2,
     "title": "The Black Spot",
     "text": "Billy Bones’ past soon catches up with him. A pale, sinister man named Black Dog arrives at the inn, leading to a violent argument and a desperate sword fight. Black Dog escapes injured, but the confrontation leaves Billy weak and terrified. Shortly after, Jim’s father tragically passes away. While the family mourns, a frightening blind beggar named Pew arrives at the inn. Pew forces his way inside and presses a mysterious paper into Billy’s hand—the dreaded \"Black Spot,\" a official pirate summons marking him for death. Shocked by the terrifying warning, Billy suffers a fatal stroke and dies on the floor. Jim and his mother realize they are in extreme danger. They know that Pew and his ruthless crew will return soon to search Billy’s room and claim whatever valuable secret he was hiding.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch02.webp",
      "w": 720,
      "h": 402
     },
     "alt": "An old sailor stares at the Black Spot while Jim looks on"
    },
    {
     "n": 3,
     "title": "The Secret Treasure Map",
     "text": "Determined to claim the money Billy owed them, Jim and his mother search the dead sailor’s chest just before the pirates return. Inside, Jim finds a sealed oilcloth packet, which he quickly hides in his coat. They escape into the dark night just as Pew’s men attack and ransack the inn. Local soldiers arrive and disperse the pirates, during which Pew is accidentally trampled to death. Jim takes the mysterious packet to Squire Trelawney and Dr. Livesey, two respected gentlemen in the village. When they open it, they discover a detailed map showing an island where the legendary pirate Captain Flint hid a vast fortune in gold. Thrilled by the discovery, Squire Trelawney resolves to finance an expedition to find the gold, promising Jim a position as cabin boy on the ship. Part I — The Mystery Page 2",
     "img": {
      "src": "assets/images/stories/treasure-island/ch03.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim unfolds the treasure map beside the open sea chest as his mother watches"
    },
    {
     "n": 4,
     "title": "The Journey to Bristol",
     "text": "Squire Trelawney travels to the busy port city of Bristol to purchase a suitable ship and hire a crew for the voyage. He buys a strong schooner named the Hispaniola and begins recruiting sailors. Unfortunately, the overly enthusiastic squire speaks too openly about the hidden treasure, attracting the attention of local sailors and former pirates. Meanwhile, Jim stays at the squire's estate, eagerly anticipating the adventure ahead. When Jim finally arrives in Bristol, he is amazed by the lively harbor, the vast array of ships, and the colorful crowds. However, Dr. Livesey worries about Trelawney’s lack of discretion regarding their secret objective. Despite these subtle warnings, preparations move forward smoothly, and the excitement surrounding the upcoming voyage continues to build among the newly assembled crew.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch04.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim and the two gentlemen on the Bristol docks before the Hispaniola"
    },
    {
     "n": 5,
     "title": "The Man with One Leg",
     "text": "In Bristol, Jim meets Long John Silver, a charismatic, one-legged man hired as the ship's cook. Silver runs a local tavern where Jim briefly sees Black Dog again, though the pirate flees before he can be caught. Despite this suspicious incident, Silver’s friendly behavior and impressive knowledge of the sea win Jim’s complete trust. Captain Smollett, the strict master of the Hispaniola, expresses deep distrust regarding the crew and dislikes that the treasure secret was leaked. He demands that all weapons and gunpowder be stored safely near the officers' quarters. Although Squire Trelawney considers Captain Smollett overly suspicious and difficult, Dr. Livesey respects the captain's professional caution. With all preparations completed, the Hispaniola sets sail across the ocean toward the mysterious coordinates marked on Flint's map.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch05.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Long John Silver, with crutch and parrot, talks to Jim on deck"
    },
    {
     "n": 6,
     "title": "A Secret Plot",
     "text": "The voyage proceeds smoothly, but tension slowly grows beneath the surface. Long John Silver works hard to earn the crew’s admiration while maintaining a warm friendship with young Jim. One evening, near the end of the journey, Jim climbs inside an almost empty apple barrel on deck to fetch a piece of fruit. While hidden inside, he overhears Silver talking with several crew members. To his horror, Jim discovers that Silver was once Captain Flint’s quartermaster and that most of the crew are former pirates. Silver is planning a bloody mutiny to murder the officers and steal the treasure map once the ship reaches the island. Shocked by this terrifying discovery, Jim remains silent in the barrel until the crew disperses, waiting for the right moment to warn the captain. Part II — The Voyage Page 3",
     "img": {
      "src": "assets/images/stories/treasure-island/ch06.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim hides in the apple barrel while Silver plots with the crew by lantern light"
    },
    {
     "n": 7,
     "title": "Land Ahoy!",
     "text": "Immediately after escaping the apple barrel, Jim informs Captain Smollett, Dr. Livesey, and Squire Trelawney about Silver’s evil plan. The gentlemen realize they are heavily outnumbered, as only seven of the twenty-six men on board remain loyal. When the Hispaniola anchors at the island, Captain Smollett allows the crew to go ashore, hoping to delay the mutiny. Silver takes most of his men to the beach, but Jim makes a sudden, impulsive decision and slips into one of the landing boats. Upon reaching the shore, Jim runs quickly into the island's dense woods to hide from the pirates. From his hiding place, he watches in terror as Silver cold-bloodedly murders a loyal sailor who refused to join the mutiny. Horrified, Jim realizes that open war has begun.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch07.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim at the ship rail gazing at the island as a boat is readied"
    },
    {
     "n": 8,
     "title": "The Man in the Wilderness",
     "text": "Fleeing deeper into the island’s wilderness, Jim encounters a wild, ragged man who introduces himself as Ben Gunn. Ben was marooned on the island three years earlier by Captain Flint’s pirate crew. Living on wild goats and berries, he has grown desperate for human company and normal food, particularly cheese. Ben reveals that he knows about Flint’s buried treasure and has spent his years on the island exploring its secrets. Jim explains the current crisis on the Hispaniola and Silver’s violent mutiny. Realizing that Jim and the honest men need help, Ben offers his assistance in exchange for passage home and a fair share of the wealth. He also mentions a small handmade boat he has built and hidden near a white rock by the shore.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch08.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim meets the ragged Ben Gunn in the jungle"
    },
    {
     "n": 9,
     "title": "The Fight for Survival",
     "text": "Meanwhile, Dr. Livesey and the loyal crew members abandon the Hispaniola, taking essential supplies, food, and arms to an abandoned wooden stockade on the island. During their dangerous river crossing in a small boat, the pirates fire heavy cannon shots from the ship, sinking their boat and forcing them to wade ashore under musket fire. They manage to occupy the wooden fort, raising the British flag above the clearing. Jim eventually navigates his way through the forest and reunites with his friends inside the stockade, bringing valuable information about Ben Gunn. Shortly after his arrival, heavy gunfire breaks out as Silver’s men surround the fort. The loyal men prepare to defend their position, knowing their supplies are limited and help is far away. Part III — The Island Page 4",
     "img": {
      "src": "assets/images/stories/treasure-island/ch09.webp",
      "w": 720,
      "h": 402
     },
     "alt": "The loyal party hurries toward the stockade under musket fire"
    },
    {
     "n": 10,
     "title": "The Stockade",
     "text": "The following morning, Long John Silver approaches the stockade carrying a white flag of truce. He offers to spare the lives of Captain Smollett and his men if they surrender the treasure map. Captain Smollett firmly rejects the bargain, warning Silver that he will face justice for his treason. Furious, Silver retreats, and the pirates launch a fierce assault on the log house. A chaotic battle follows as pirates storm the wooden fence. The defenders fight bravely with muskets and cutlasses. Although the loyal crew successfully repels the attack, several men are wounded, and Captain Smollett suffers serious injuries. The pirates also suffer heavy losses, forcing them to retreat back into the swamps. The stockade remains in loyal hands, but the defenders' situation grows increasingly desperate.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch10.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Defenders inside the log stockade as pirate shadows gather outside"
    },
    {
     "n": 11,
     "title": "An Unexpected Escape",
     "text": "While his companions tend to the wounded, Jim formulates a daring and risky plan. Driven by impulse, he steals out of the stockade without telling anyone, carrying pistols and a small supply of biscuits. He searches for the hidden coracle—the small, lightweight skin boat Ben Gunn had built. Finding it tucked under a tent of canvas near the shore, Jim carries it to the water under the cover of night. He paddles quietly through the dark waves toward the anchored Hispaniola. His goal is to cut the ship's anchor cable, allowing the tide to drift the vessel away and preventing the pirates from using its heavy guns against the fort. Despite the strong currents and high risk, Jim succeeds in cutting the heavy rope.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch11.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim beside Ben Gunn's coracle at sunset, the Hispaniola in the distance"
    },
    {
     "n": 12,
     "title": "The Ship in the Night",
     "text": "As the Hispaniola drifts away in the darkness, Jim climbs aboard and finds the vessel nearly deserted. Only two pirates remain, both heavily intoxicated and engaged in a violent quarrel. One pirate lies dead, while the other, Israel Hands, is severely wounded. Jim takes control of the ship, intending to run it aground on a safe beach. However, Hands pretends to cooperate while secretly planning to murder Jim. During a sudden and dramatic confrontation, Hands corners Jim near the mast and throws a dagger at him, pinning Jim’s shoulder. Jim fires his pistols, killing Hands, who falls into the sea. Weak and injured, Jim manages to steer the ship onto the beach, securing it safely before heading back to the stockade. Part IV — The Battle Page 5",
     "img": {
      "src": "assets/images/stories/treasure-island/ch12.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim rows a small boat toward the Hispaniola under the moon"
    },
    {
     "n": 13,
     "title": "A Prisoner of the Pirates",
     "text": "Returning to the stockade late at night, Jim slips inside, only to discover that the fort has been occupied by Silver and the remaining pirates. His friends have disappeared, leaving the station behind. Silver captures Jim but protects him from the angry crew, who want to execute the boy immediately. The pirates present Silver with the \"Black Spot,\" demanding new leadership, but Silver clever manipulation wins back their confidence. To Jim's immense surprise, Silver reveals that Dr. Livesey handed over the stockade, provisions, and the treasure map voluntarily. Jim wonders why his friends would surrender their strongest position and the map. Silver keeps Jim close as a valuable hostage, realizing that his own survival now depends on maintaining a strategic truce with the boy.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch13.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim surrounded by armed pirates and Silver in the cabin"
    },
    {
     "n": 14,
     "title": "The Search for the Gold",
     "text": "The next morning, Dr. Livesey arrives at the stockade to treat the sick pirates, treating Jim kindly and whispering a message of hope. Guided by Flint's map, Silver and his crew set off into the island's interior to uncover the treasure, dragging Jim along on a leash. As they march through the dense vegetation, they discover a skeleton aligned as a pointer, creating fear among the superstitious pirates. Soon, they hear a ghostly voice singing Flint's famous sea song from the woods, which terrifies the men until Silver recognizes it as Ben Gunn's voice. When they finally reach the designated pit where the treasure was supposed to be hidden, they find it completely empty—someone had dug up the gold long before their arrival.",
     "img": {
      "src": "assets/images/stories/treasure-island/ch14.webp",
      "w": 720,
      "h": 402
     },
     "alt": "The pirates and Silver stare into the empty treasure pit"
    },
    {
     "n": 15,
     "title": "The End of the Adventure",
     "text": "Before the enraged pirates can turn on Silver and Jim, Dr. Livesey, Gray, and Ben Gunn spring an ambush from the bushes, scattering the remaining mutineers. Dr. Livesey explains that Ben Gunn had uncovered the treasure months ago and safely moved it to his cave. The party spends several days loading the massive fortune onto the Hispaniola before setting sail for home, leaving the surviving pirates stranded on the island. During a stop at a South American port, Silver sneaks off the ship with a small bag of gold, never to be seen again. The rest of the crew returns safely to England, where each man receives a generous share of the treasure. Jim resolves never to return to that cursed island, haunted by sea dreams and the echoing cries of Captain Flint's parrot. Part V — The Treasure Page 6",
     "img": {
      "src": "assets/images/stories/treasure-island/ch15.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Jim, the doctor, the squire and the captain on deck with the island behind"
    }
   ],
   "credits": {
    "published": "1883",
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "alice-in-wonderland",
   "title": "Alice’s Adventures in Wonderland",
   "author": {
    "name": "Lewis Carroll",
    "country": "England",
    "years": "1832–1898",
    "bio": "Lewis Carroll was the pen name of Charles Lutwidge Dodgson, an English writer, mathematician, photographer, and Anglican deacon born in 1832. He studied and taught mathematics at Christ Church, Oxford, where he led a quiet academic life. Carroll possessed a unique talent for wordplay, logic, and storytelling, which he used to entertain the children of his university colleagues. His most famous works, Alice’s Adventures in Wonderland (1865) and its sequel Through the Looking-Glass (1871), revolutionized children’s literature by introducing clever nonsense, imaginative fantasy, and humor instead of traditional moral lessons. His iconic characters and inventive language have made a lasting contribution to world literature, captivating readers of all ages for over a century. Carroll passed away in 1898, leaving behind a rich literary legacy."
   },
   "category": "fantasy",
   "genres": [
    "Fantasy",
    "Nonsense",
    "Humor"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "Bored by the riverbank, Alice follows a waistcoated White Rabbit down a rabbit hole and into a world where size, time and common sense keep changing. Along the way she meets a grinning cat, a hookah-smoking caterpillar, a very mad tea-party and a hot-tempered queen with a taste for executions.",
   "cover": {
    "src": "assets/covers/alice-in-wonderland.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Alice",
     "role": "Curious girl who follows the White Rabbit",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-alice.webp",
      "w": 304,
      "h": 239
     }
    },
    {
     "name": "The White Rabbit",
     "role": "Anxious rabbit with a pocket watch",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-white-rabbit.webp",
      "w": 303,
      "h": 239
     }
    },
    {
     "name": "The Cheshire Cat",
     "role": "Grinning cat who fades into air",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-cheshire-cat.webp",
      "w": 304,
      "h": 239
     }
    },
    {
     "name": "The Mad Hatter",
     "role": "Tea-party host stuck at six o’clock",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-mad-hatter.webp",
      "w": 304,
      "h": 211
     }
    },
    {
     "name": "The March Hare",
     "role": "The Hatter’s tea-party companion",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-march-hare.webp",
      "w": 303,
      "h": 211
     }
    },
    {
     "name": "The Dormouse",
     "role": "Sleepy guest at the tea table",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-dormouse.webp",
      "w": 304,
      "h": 211
     }
    },
    {
     "name": "The Queen of Hearts",
     "role": "Hot-tempered queen who orders executions",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-queen-of-hearts.webp",
      "w": 304,
      "h": 229
     }
    },
    {
     "name": "The King of Hearts",
     "role": "Judge at the trial of the Knave",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-king-of-hearts.webp",
      "w": 303,
      "h": 229
     }
    },
    {
     "name": "The Caterpillar",
     "role": "Blue hookah-smoking advisor on the mushroom",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/char-the-caterpillar.webp",
      "w": 304,
      "h": 229
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "Down the Rabbit-Hole",
     "text": "One hot afternoon, a young girl named Alice sits bored by the river with her sister. Suddenly, she notices a dressed White Rabbit checking its pocket watch and running past. Intrigued, Alice follows it down a large rabbit hole and falls into a deep, mysterious well. She lands safely on a pile of dry leaves inside a hallway filled with locked doors. On a glass table, she finds a tiny golden key and a small bottle labeled “DRINK ME.” After drinking the liquid, she shrinks dramatically. However, she realizes she left the key on the table and cannot reach it, leaving her trapped inside the passage.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch01.webp",
      "w": 720,
      "h": 539
     },
     "alt": "Alice floats down a deep, root-lined rabbit hole past shelves of jars and books"
    },
    {
     "n": 2,
     "title": "The Pool of Tears",
     "text": "Alice finds a cake marked “EAT ME” and grows into a giant, reaching nine feet tall. Overwhelmed by confusion and distress, she cries so intensely that her tears form a deep, salty pool around her feet. When the White Rabbit reappears and drops his gloves and fan in fear, Alice uses the fan and shrinks rapidly again. Slipping into her own pool of tears, she swims alongside several strange creatures, including a Mouse, a Duck, and a Dodo. Desperate to reach dry land, Alice tries to converse politely with the Mouse, though she accidentally frightens the nervous animal by discussing her domestic cat.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch02.webp",
      "w": 720,
      "h": 539
     },
     "alt": "A giant Alice crammed into a small room, one arm reaching for the window"
    },
    {
     "n": 3,
     "title": "A Caucus-Race and a Long Tale",
     "text": "After gathering on the bank, the wet animals need a way to dry themselves. The Mouse attempts to dry everyone by reciting a dull history lesson, but it fails. To solve the problem, the Dodo suggests a Caucus-Race, where everyone runs in circles without clear rules, starting and stopping whenever they like. After half an hour, the Dodo declares everyone a winner and insists that Alice must distribute prizes. She gives them mints from her pocket. Afterwards, Alice listens to the Mouse’s personal tale, but she accidentally offends the creature by mentioning her cat again, causing the Mouse and all the birds to abandon her.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch03.webp",
      "w": 720,
      "h": 402
     },
     "alt": "A Dodo leads wet animals running in circles in the Caucus-Race while Alice watches"
    },
    {
     "n": 4,
     "title": "The Rabbit Sends in a Little Bill",
     "text": "The White Rabbit mistakes Alice for his housemaid, Mary Ann, and sends her to his house to fetch his gloves and fan. Inside his room, Alice finds another potion and drinks it out of curiosity. She grows instantly, filling the entire house with her enormous body and trapping herself inside. Terrified, the Rabbit orders his lizard servant, Bill, to slide down the chimney to investigate. Alice kicks Bill away, forcing the crowd outside to throw pebbles through the window. The pebbles magically transform into small cakes. Alice eats one, shrinks down to a manageable size, and quickly escapes into the surrounding woods.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch04.webp",
      "w": 720,
      "h": 539
     },
     "alt": "Alice fills the White Rabbit’s cottage while the Rabbit and other creatures look on from outside"
    },
    {
     "n": 5,
     "title": "Advice from a Caterpillar",
     "text": "In the forest, Alice meets a large blue Caterpillar sitting on a mushroom and smoking a hookah. The Caterpillar questions her identity, which confuses Alice because her physical size has changed so frequently throughout the day. She expresses her frustration with her constant size changes. Before crawling away into the grass, the Caterpillar calmly informs her that one side of the mushroom will make her grow taller, while the other side will make her grow shorter. Alice carefully breaks off pieces from both sides and experiments with them until she successfully controls her height, preparing her for further adventures in Wonderland.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch05.webp",
      "w": 720,
      "h": 539
     },
     "alt": "Alice meets the blue Caterpillar on a giant mushroom in the forest"
    },
    {
     "n": 6,
     "title": "Pig and Pepper",
     "text": "Alice arrives at a small house where a footman delivers an invitation to the Duchess from the Queen of Hearts. Inside, Alice discovers the Duchess holding a crying baby while the Cook prepares soup heavily seasoned with pepper. A broad-grinning Cheshire Cat sits nearby. Unbothered by the chaotic, noisy room, the Duchess tosses the baby to Alice before leaving. Alice carries the child outside to save it, but the baby unexpectedly transforms into a small pig and trots away. Alice then meets the Cheshire Cat again in the forest, who directs her toward the March Hare and the Mad Hatter before fading into air.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch06.webp",
      "w": 720,
      "h": 402
     },
     "alt": "In a chaotic kitchen the Duchess holds a baby that looks like a pig while the Cook throws pans and the Cheshire Cat grins in the window"
    },
    {
     "n": 7,
     "title": "A Mad Tea-Party",
     "text": "Alice attends an outdoor tea party hosted by the March Hare and the Mad Hatter, who are sitting with a sleeping Dormouse. Alice joins them, but the hosts behave rudely and offer her nonexistent wine. The Hatter presents nonsensical riddles and complains that his watch is stuck because Time has punished him. Consequently, the group is perpetually trapped at six o’clock, forced to drink tea constantly without cleaning up. They continuously rotate around the table to clean seats. Disgusted by their rude behavior, illogical arguments, and chaotic conversation, Alice eventually leaves the party and discovers a door leading into a beautiful garden.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch07.webp",
      "w": 720,
      "h": 539
     },
     "alt": "Alice sits at a long table as the Mad Hatter and March Hare share tea beside a sleeping Dormouse"
    },
    {
     "n": 8,
     "title": "The Queen’s Croquet-Ground",
     "text": "Alice enters the royal garden and finds three gardeners painting white roses red to avoid being executed by the Queen of Hearts. Shortly after, the royal procession arrives, led by the King and Queen. The hot-tempered Queen demands executions for minor offenses, frequently shouting “Off with their head!” She invites Alice to play a bizarre game of croquet using live flamingos as mallets, rolled-up hedgehogs as balls, and playing-card soldiers as arches. The game falls into complete chaos because the animals constantly move away. Suddenly, the floating head of the Cheshire Cat appears, causing an argument over how to execute a headless creature.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch08.webp",
      "w": 720,
      "h": 539
     },
     "alt": "Alice watches card gardeners paint roses red as the Queen of Hearts and her soldiers approach across the croquet ground"
    },
    {
     "n": 9,
     "title": "The Mock Turtle’s Story",
     "text": "The Duchess returns and chats warmly with Alice, sharing strange moral lessons about everything around them. Soon, the Queen dismisses the Duchess and introduces Alice to the Gryphon, who conducts her to meet the Mock Turtle. The Mock Turtle is a deeply sorrowful creature who constantly sighs and weeps over his past. He describes his childhood education at the bottom of the sea, explaining his bizarre subjects like Seaography, Drawling, and Ancient and Modern Mystery. Although Alice finds his stories illogical, she listens patiently as he sentimentally recalls his schoolmasters and traditional sea lessons before being interrupted by an upcoming event.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch09.webp",
      "w": 720,
      "h": 402
     },
     "alt": "Alice stands beside the Gryphon as the Mock Turtle sits sadly on a rock by the sea"
    },
    {
     "n": 10,
     "title": "The Lobster Quadrille",
     "text": "The Gryphon and the Mock Turtle happily demonstrate a lively dance called the Lobster Quadrille, describing how lobsters and sea animals dance together along the shore. They sing a silly song about a whiting and a snail while demonstrating the energetic steps. Afterwards, Alice recites a poem for them, but the words come out completely wrong, leaving her listeners confused and critical. The Mock Turtle then sings a melancholic song dedicated to “Beautiful Soup.” Before he can finish his performance, a distant voice announces that a trial is beginning, prompting the Gryphon to grab Alice’s hand and rush her toward the courtroom.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch10.webp",
      "w": 720,
      "h": 402
     },
     "alt": "The Gryphon and Mock Turtle dance on a rock above the beach as lobsters gather below while Alice watches"
    },
    {
     "n": 11,
     "title": "Who Stole the Tarts?",
     "text": "Alice arrives at the court of the King and Queen of Hearts, where the Knave of Hearts stands accused of stealing the Queen’s freshly baked tarts. The King acts as the judge, while twelve animals serve as jurors, writing down meaningless notes. The White Rabbit reads the formal indictment, and the Mad Hatter is called as the first witness, nervous and holding his teacup. Meanwhile, Alice notices that she has begun growing larger again. The Cook is questioned next, refusing to give useful information. Finally, the White Rabbit calls Alice to the witness stand, surprising her as she steps forward to testify.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch11.webp",
      "w": 720,
      "h": 402
     },
     "alt": "At the trial the Knave of Hearts stands before the King and Queen as the White Rabbit reads from a scroll and Alice sits among the animal jurors"
    },
    {
     "n": 12,
     "title": "Alice’s Evidence",
     "text": "Alice steps into the witness box, accidentally knocking over the jury box with her growing skirt. She quickly replaces the confused animals. The King cites Rule Forty-two, ordering all people more than a mile high to leave the court, but Alice refuses to go. When the White Rabbit presents an unsigned, nonsensical poem as evidence, Alice boldly argues that it proves nothing about the Knave’s guilt. Furious at her defiance, the Queen orders her execution. Unafraid, Alice shouts that they are nothing more than a pack of playing cards. Instantly, the cards rise into the air and swarm around her. Alice wakes up on the riverbank, realizing her whole adventure was a dream.",
     "img": {
      "src": "assets/images/stories/alice-in-wonderland/ch12.webp",
      "w": 720,
      "h": 402
     },
     "alt": "A giant Alice in the courtroom as a storm of playing cards flies up around her"
    }
   ],
   "credits": {
    "published": "1865",
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "featured": true
  },
  {
   "id": "call-of-the-wild",
   "title": "The Call of the Wild",
   "author": {
    "name": "Jack London",
    "country": "United States",
    "years": "1876–1916",
    "bio": "Jack London was born John Griffith Chaney in San Francisco in 1876. Raised in a working-class household, he began working at ten and later served as an oyster pirate, a fish patrol member, a seal-hunting sailor and a freight-train hobo, educating himself in public libraries. In 1897 he joined the Klondike Gold Rush; the search for gold brought him little, but the frozen Yukon and its sled dogs inspired his finest writing, including The Call of the Wild (1903) and White Fang (1906). One of the first American authors to win worldwide fame through magazine fiction, he published more than fifty books exploring survival, instinct and the clash between civilization and nature."
   },
   "category": "nature",
   "genres": [
    "Adventure",
    "Survival"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "Buck, a pampered St. Bernard-Collie mix, is stolen from a sunny California estate and sold as a sled dog in the Yukon during the Klondike Gold Rush. In a world ruled by the law of club and fang, he must adapt, fight for mastership and decide where he belongs when the call of the wild grows louder than the human world.",
   "cover": {
    "src": "assets/covers/call-of-the-wild.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Buck",
     "role": "Pampered California dog turned sled dog",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-buck.webp",
      "w": 360,
      "h": 268
     }
    },
    {
     "name": "John Thornton",
     "role": "Frontiersman who rescues Buck",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-john-thornton.webp",
      "w": 250,
      "h": 357
     }
    },
    {
     "name": "Spitz",
     "role": "Ruthless white lead dog and Buck’s rival",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-spitz.webp",
      "w": 235,
      "h": 357
     }
    },
    {
     "name": "François & Perrault",
     "role": "French-Canadian mail couriers",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-fran-ois-perrault.webp",
      "w": 360,
      "h": 310
     }
    },
    {
     "name": "Hal",
     "role": "Inexperienced gold-seeker from the East Coast",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-hal.webp",
      "w": 140,
      "h": 353
     }
    },
    {
     "name": "Charles",
     "role": "Inexperienced gold-seeker from the East Coast",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-charles.webp",
      "w": 140,
      "h": 353
     }
    },
    {
     "name": "Mercedes",
     "role": "Inexperienced gold-seeker from the East Coast",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-mercedes.webp",
      "w": 140,
      "h": 353
     }
    },
    {
     "name": "Curly",
     "role": "Friendly Newfoundland killed on Dyea beach",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-curly.webp",
      "w": 100,
      "h": 170
     }
    },
    {
     "name": "Dave",
     "role": "Faithful old sled dog",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-dave.webp",
      "w": 130,
      "h": 170
     }
    },
    {
     "name": "Sol-leks",
     "role": "Experienced older sled dog",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-sol-leks.webp",
      "w": 125,
      "h": 170
     }
    },
    {
     "name": "The Wild Wolf Pack",
     "role": "The pack Buck joins and leads",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/char-the-wild-wolf-pack.webp",
      "w": 250,
      "h": 198
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "Into the Primitive",
     "text": "Buck lived at a spacious estate in the sun-kissed Santa Clara Valley, known as Judge Miller’s place. Here, he reigned supreme over a vast domain of rolling lawns, orchards, and stables. Buck was neither a house dog nor a kennel dog; the whole realm was his. Born to a powerful St. Bernard father and a Scottish shepherd mother, he possessed dignity, strength, and intelligence. For four years, he lived a life of luxury and contentment, carrying the Judge’s grandchildren on his back and resting beside the fireplace during cool autumn evenings. However, in the fall of 1897, the discovery of gold in the Klondike changed everything. Men from all over the world flooded into the frozen North, demanding heavy, strong dogs with thick coats to work as sled animals. Buck’s comfortable life came to a sudden end through the betrayal of Manuel, one of the Judge’s assistant gardeners. Driven by gambling debts, Manuel kidnapped Buck during an evening stroll and delivered him to a stranger at a railway station. Buck was beaten, choked with a thick rope, and locked inside a wooden crate. Shipped north by train and boat, he suffered for days without food or water. His rage grew steadily until he was finally released before a man dressed in a red sweater. Furious, Buck charged, only to be repeatedly struck down by a heavy wooden club. Through this painful lesson, Buck learned the fundamental rule of his new existence: the law of club and fang. He was beaten, but not broken; he understood that a man with a club was a master to be obeyed, though never loved.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Buck faces a man in a red sweater who raises a wooden club in a dim, lantern-lit barn"
    },
    {
     "n": 2,
     "title": "The Law of Club and Fang",
     "text": "Buck’s first day on the snowy beach of Dyea was a nightmare of confusion and violence. He found himself surrounded by savage husky dogs and rough men in a freezing, hostile climate. Here, civilized manners meant nothing. Buck witnessed a shocking tragedy almost immediately when Curly, a friendly Newfoundland dog, attempted to approach a husky in a friendly manner. The husky attacked without warning, knocking Curly down while a circle of thirty other dogs rushed in to tear her to pieces. Buck realized that in this brutal environment, there was no fair play; once down, that was the end of you. Buck was purchased by François and Perrault, two French-Canadian mail couriers working for the Canadian government. They placed Buck in a harness alongside experienced sled dogs, including Spitz, a fierce white husky who acted as the lead dog. Buck worked hard, quickly adapting to the demands of pulling heavy sleds over ice and snow. Under the instruction of his harness mates and the watchful eye of François, he learned to stop, go, and navigate perilous mountain trails. To survive the freezing nights, Buck discovered the secret of sleeping buried under the snow to retain his body heat. His physical transformation was rapid: his muscles hardened like iron, his sight and smell grew sharper, and his digestive system adapted to scarce, rough food rations. Primitive instincts, long buried under generations of civilized living, began to awaken within him, preparing him for the fierce struggles that lay ahead.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Buck in a sled harness stands in the snow as two men drive a husky team behind him"
    },
    {
     "n": 3,
     "title": "The Dominant Primordial Beast",
     "text": "The dominant primordial beast grew strong within Buck as the team pushed deeper into the frozen wilderness. A bitter rivalry quickly developed between Buck and Spitz, the ruthless lead dog. Spitz saw Buck as a dangerous rival who refused to show submission, while Buck openly challenged Spitz’s authority over the other dogs. Tensions reached a boiling point during a cold night when a pack of starving wild huskies attacked their camp, causing chaos and injuring several dogs in the team. Despite the constant dangers of thin ice, freezing rivers, and exhaustion, the conflict between Buck and Spitz continued to intensify. Buck deliberately undermined Spitz’s leadership by protecting younger dogs when Spitz tried to punish them. The discipline of the team began to break down, leading to frequent fights among the dogs. François noticed the growing hostility and knew that a final, deadly duel for mastership was inevitable. The decisive clash occurred late one night under the cold glow of the northern lights, after the team chased a snowshoe rabbit through the snow. Spitz caught the rabbit first, but Buck blocked his path. The two dogs faced each other in a fight to the death. Spitz was an experienced, cunning fighter, but Buck used his superior intelligence and adaptability. He feinted an attack at Spitz’s shoulder, then suddenly dove low, snapping Spitz’s leg bones. Defeated, Spitz fell into the snow, and Buck stood victorious as the undisputed leader.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Dogs snarl and fight in a snowy forest while Buck and a man beside a sled look on"
    },
    {
     "n": 4,
     "title": "Who Has Won to Mastership",
     "text": "Morning brought the realization that Spitz was gone and Buck stood ready to take his place as lead dog. However, François initially chose Sol-leks, an experienced older dog, to lead the team. Buck refused to yield; he fiercely drove Sol-leks back and insisted on taking the lead position himself. Recognizing Buck’s determination and fierce pride, François finally surrendered. Buck stepped into the lead harness, and the team immediately discovered that he was a master leader, far superior to Spitz. Buck restored strict discipline and order among the dogs with remarkable speed. He punished troublemakers, encouraged weaker dogs, and kept the team moving at an unprecedented pace. Under his leadership, the team set record times, traveling across frozen trails in record days and arriving in Dawson City ahead of schedule. François and Perrault praised Buck’s exceptional intelligence and courage to everyone they met along the route. Shortly after reaching their destination, François and Perrault received official orders that required them to sell the team. Buck was transferred to a “Scotch half-breed” mail carrier, who tasked the dogs with pulling immensely heavy loads of mail across thousands of miles. The work was exhausting and endless. As the weeks dragged on, the dogs grew worn, thin, and weary. Dave, one of the oldest and most faithful dogs, became mortally ill but refused to be removed from his harness, dying bravely while fulfilling his duty to the trail.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Buck leads the sled team across a frozen river as two men follow behind"
    },
    {
     "n": 5,
     "title": "The Toil of Trace and Trail",
     "text": "Thoroughly worn out after months of continuous travel, the dog team arrived back at Skagway. Their feet were bloody and their bodies reduced to skeletons. There, they were sold to Hal, Charles, and Mercedes—three inexperienced gold-seekers from the East Coast who understood nothing about northern survival. They overloaded the sled with useless household luxuries, mismanaged food supplies, and refused to listen to advice from experienced woodsmen. The journey under these incompetent masters became a horrific nightmare of starvation, beatings, and chaos. Hal fed the dogs improperly, running out of food halfway through the trip. One by one, the dogs died of starvation and exhaustion along the trail until only five remained alive. Spring was rapidly approaching, causing the ice over the rivers to thaw and become extremely soft and unstable. The dying team eventually stumbled into the camp of John Thornton at White River. Thornton, an experienced frontiersman, warned Hal that the ice ahead was about to break apart. Hal ignored the warning and tried to force the dogs to move by beating them brutally. Buck, sensing impending disaster, collapsed in the snow and refused to stand. As Hal raised a club to beat Buck, Thornton intervened, knocking Hal back and cutting Buck free from his harness. Hal pushed the remaining team onto the river; minutes later, the ice collapsed, swallowing the humans, sled, and remaining dogs into the freezing current.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A weary, scarred Buck stands among resting huskies beside snow-covered sleds in a winter forest"
    },
    {
     "n": 6,
     "title": "For the Love of a Man",
     "text": "As Buck recovered under John Thornton’s compassionate care during the spring, he experienced an emotion he had never known before: true, passionate love. While Judge Miller’s friendship had been formal and dignified, Thornton treated his dogs as if they were his own children. He spoke to Buck, held his head lovingly, and cared for his physical well-being. In return, Buck offered complete devotion, watching Thornton’s every move and guarding him with unwavering loyalty. Buck demonstrated his intense loyalty on numerous dramatic occasions. When an arrogant gunman attacked Thornton in a saloon, Buck instantly leaped at the man’s throat to defend his master. Later, when Thornton’s boat overturned in a roaring river, Buck dove into the churning rapids, risking his life to drag Thornton safely to shore. Buck’s legendary devotion became famous throughout the mining camps of the North. In Dawson City, Buck accomplished an astounding feat of strength out of love for Thornton. A wealthy miner bet Thornton sixteen hundred dollars that Buck could not pull a sled loaded with one thousand pounds of flour. Driven by Thornton’s gentle encouragement—“If you love me, Buck”—Buck broke the frozen runners free from the snow and pulled the enormous load one hundred yards. The crowd cheered wildly, and Thornton wept openly as he knelt beside his miraculous dog.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "John Thornton kneels beside Buck near a campfire and tent on a mountain riverbank"
    },
    {
     "n": 7,
     "title": "The Sounding of the Call",
     "text": "With the money won from the bet, Thornton paid off his debts and set off with his partners into the uncharted wilderness searching for a lost gold mine. Deep in the pristine forest, they discovered a rich valley stream brimming with gold dust. While the men labored happily, Buck had little to do. A mysterious call began to echo through the forest—a haunting sound that filled Buck with wild longings and restless desires. Buck began venturing into the forest for days at a time. He befriended a wild timber wolf, running alongside him through the moonlit woods. He hunted large game, killing a giant bull moose after a relentless multi-day pursuit. Yet, his deep love for Thornton always pulled him back to camp. However, upon returning from a hunt one day, Buck discovered a horrific scene: Yeehat indigenous raiders had attacked the camp, killing Thornton and his companions. Filled with overwhelming grief and murderous fury, Buck attacked the Yeehats, driving them away in terror. With Thornton dead, the last tie binding Buck to the human world was severed forever. Soon after, a pack of wild wolves entered the valley. After proving his strength by defeating their fiercest fighters, Buck was welcomed into the pack. He answered the call of his ancestors, becoming a legendary ghost dog who led the wolf pack through the wild northern wilderness.",
     "img": {
      "src": "assets/images/stories/call-of-the-wild/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Buck stands on a rock in a moonlit misty forest as a wolf pack approaches"
    }
   ],
   "credits": {
    "published": "1903",
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "featured": true
  },
  {
   "id": "the-tortoise-and-the-hare",
   "title": "The Tortoise and the Hare",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-tortoise-and-the-hare.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Tortoise and the Hare",
     "paras": [
      "A Hare was one day making fun of the Tortoise and laughing at his slow and clumsy walk. The Tortoise looked at him with a quiet smile and said, “Though you are as fast as the wind, I can easily beat you in a race.”",
      "The Hare, feeling quite amused by the challenge, laughed out loud and accepted the proposal. They agreed upon a route and a starting point, and then they were off.",
      "The Hare shot out like an arrow and ran quickly out of sight. Seeing that he was far ahead and feeling very confident, he decided to lie down under a shady tree to take a short nap. “Even if he creeps past me, I will easily catch up later,” he thought to himself.",
      "Meanwhile, the Tortoise kept walking steadily and slowly, step by step, never stopping for a single moment. He passed the sleeping Hare without waking him and crossed the finish line to claim the victory.",
      "When the Hare finally woke up, he ran as fast as he could, but it was too late. The Tortoise was already resting peacefully at the end of the path."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-fox-and-the-grapes",
   "title": "The Fox and the Grapes",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-fox-and-the-grapes.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Fox and the Grapes",
     "paras": [
      "One bright autumn morning, a hungry Fox was wandering through an orchard. As he walked past a high garden wall, he caught sight of some large, juicy purple grapes hanging down from a high vine.",
      "The grapes were ripe and heavy with sweet juice, and they looked wonderfully tempting in the sunlight. The Fox stepped back, took a running start, and leaped high into the air. His jaws snapped at empty space, and he landed heavily on the grass.",
      "Undeterred, he stepped back again, gathered all his strength, and jumped even higher. Still, his paws missed the lowest bunch by several inches. He tried a third and a fourth time, leaping higher and higher, but every attempt failed.",
      "At last, completely exhausted and panting heavily, the Fox sat down beneath the vine and looked at the clusters with disdain.",
      "He lifted his nose in the air and said to himself, “Those grapes are certainly sour anyway. I would never waste my time eating fruit that is not yet ripe.” With that, he turned away with his tail held high."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-lion-and-the-mouse",
   "title": "The Lion and the Mouse",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-lion-and-the-mouse.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Lion and the Mouse",
     "paras": [
      "A mighty Lion was sleeping peacefully in the warm sun when a tiny Mouse accidentally ran across his nose. Awakened from his nap, the great beast placed a huge paw over the frightened creature and opened his jaws to swallow him.",
      "The little Mouse, trembling with fear, cried out, “Please, great King, spare my life this once! If you let me go, I will never forget your kindness, and perhaps one day I can repay you.”",
      "The Lion found the idea that such a small creature could ever help him so amusing that he laughed out loud and lifted his paw, letting the Mouse run away.",
      "A few weeks later, while roaming through the forest, the Lion was caught in a strong hunter’s rope net tied to a tree. He roared with anger, but he could not break free. His mighty growls echoed through the woods.",
      "The little Mouse heard the roars, hurried to the spot, and used his sharp teeth to chew through the thick ropes. Working quickly, he set the great Lion free. The Lion smiled, realizing that even the smallest friends can be of great help."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-boy-who-cried-wolf",
   "title": "The Boy Who Cried Wolf",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-boy-who-cried-wolf.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Boy Who Cried Wolf",
     "paras": [
      "A young shepherd boy watched his village’s flock of sheep grazing on a grassy hill near the edge of the dark forest. Feeling bored and lonely during the long hours, he decided to play a trick on the villagers.",
      "He ran down the hill toward the village shouting at the top of his lungs, “Wolf! Wolf! The wolf is attacking the sheep!”",
      "Hearing the alarm, the villagers dropped their work and rushed up the hill with heavy sticks to chase the wild beast away. When they arrived, they found no wolf at all—only the boy laughing at the clever joke he had played.",
      "A few days later, the boy played the exact same trick again. Once more, the angry villagers ran up the hill to help, only to be laughed at by the mischievous shepherd.",
      "Then, late one afternoon, a real wolf crept out from the forest shadows and attacked the flock. Terrified, the boy screamed as loud as he could, “Wolf! Please help me, a real wolf is here!” But the villagers, believing it was another false alarm, ignored his cries. No one came to his rescue, and the flock was scattered."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-ant-and-the-grasshopper",
   "title": "The Ant and the Grasshopper",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-ant-and-the-grasshopper.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Ant and the Grasshopper",
     "paras": [
      "On a bright and warm summer day, a Grasshopper spent his time hopping about through the tall grass, singing cheerful songs and enjoying the sunshine without a single worry.",
      "Passing by, an industrious Ant was carrying heavy grains of wheat back to his underground home. The Ant had worked without rest from early morning until late evening, storing food for the difficult winter months ahead.",
      "The Grasshopper laughed and called out, “Why do you work so hard on such a lovely day? Come and sing with me instead!”",
      "The Ant shook his head and replied, “I am storing food for winter when the fields will be covered in deep snow. You should do the same instead of wasting these precious sunny days.”",
      "The Grasshopper scoffed and continued his merry singing. Soon, the cold winter winds arrived with freezing snow. The fields were barren, and the Grasshopper had no food left. Cold and starving, he went to the Ant’s home and begged for a small piece of grain to survive."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-crow-and-the-pitcher",
   "title": "The Crow and the Pitcher",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-crow-and-the-pitcher.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Crow and the Pitcher",
     "paras": [
      "During a severe summer drought, a thirsty Crow flew for miles across the dry landscape searching everywhere for water. After a long and exhausting search, he finally spotted a tall clay pitcher sitting near an empty garden.",
      "He landed eagerly on the rim and looked inside. To his great joy, there was water at the bottom! However, the pitcher was deep, and the water level was so low that his beak could not reach it.",
      "The disappointed Crow tried desperately to tip the heavy pitcher over, but it was firmly planted in the hard earth and would not move an inch. He felt ready to give up in despair.",
      "Looking around, he noticed several small pebbles scattered on the ground near his feet. An idea came to his clever mind. He picked up one pebble in his beak and dropped it into the pitcher.",
      "He repeated this action over and over again, dropping pebble after pebble into the water. Slowly, the water level rose higher and higher until it finally reached the brim, allowing the thirsty bird to drink his fill."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-goose-that-laid-the-golden-eggs",
   "title": "The Goose That Laid the Golden Eggs",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-goose-that-laid-the-golden-eggs.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Goose That Laid the Golden Eggs",
     "paras": [
      "A farmer and his wife owned a very special goose. Every single morning when the farmer went out to the pen, he discovered a shiny, perfect egg made of solid gold waiting in the nest.",
      "The couple sold these golden eggs in the nearby market town and quickly grew very wealthy. However, as their wealth increased, so did their greed and impatience. They were not satisfied with getting just one golden egg each day.",
      "One evening, as they sat counting their coins, the farmer said to his wife, “Why should we wait for only one egg a day? Inside the goose’s body, there must be a huge treasure of gold. If we open her up, we can have all the riches at once.”",
      "His greedy wife agreed with the foolish plan. The next morning, they killed the poor goose and cut her open, expecting to find piles of gold inside.",
      "To their horror, the inside of the goose was exactly like that of any other bird. They lost their wonderful goose forever, and with her, the daily source of their wealth."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-wind-and-the-sun",
   "title": "The Wind and the Sun",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-wind-and-the-sun.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Wind and the Sun",
     "paras": [
      "The North Wind and the Sun were having a proud argument about which of them was stronger. As they debated, they saw a traveler walking along a mountain road, wrapped tightly in a thick winter coat.",
      "The Wind boasted, “I will prove that I am stronger. Let us see who can make that traveler take off his coat first.”",
      "The North Wind blew a fierce, freezing gale that howled across the hillside. But the harder and colder the wind blew, the tighter the traveler wrapped his heavy coat around his shoulders to keep warm.",
      "Realizing his icy blasts were failing, the Wind stopped and cleared the sky. Then, the Sun stepped forward gently. He shone down with a warm, steady, and pleasant light upon the path.",
      "The traveler felt the comforting warmth immediately. He unbuttoned his coat, wiped his brow, and finally took the heavy garment off completely. The Sun proved that gentle persuasion is far more powerful than harsh force."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-dog-and-its-reflection",
   "title": "The Dog and Its Reflection",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-dog-and-its-reflection.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Dog and Its Reflection",
     "paras": [
      "A loyal dog trotted happily along a narrow path with a large, delicious piece of meat clenched firmly in his jaws. He was heading home to enjoy his prize in peace.",
      "Along the way, his journey required him to cross a narrow wooden bridge over a clear, glassy stream of water. As he walked across, the dog happened to look down into the surface of the stream.",
      "Reflected in the clear water below, he saw another dog holding an even larger piece of meat in its mouth. The foolish dog did not realize it was only his own reflection staring back at him.",
      "Greed overtook his good sense instantly. He opened his mouth wide to snatch the other piece of meat, barking loudly at the water.",
      "The moment he opened his jaws, his own piece of meat dropped out, fell straight into the rushing stream, and sank instantly out of sight. Left with nothing, the hungry dog learned a hard lesson about losing real blessings for an illusion."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-milkmaid-and-her-pail",
   "title": "The Milkmaid and Her Pail",
   "author": {
    "name": "Traditionally attributed to Aesop"
   },
   "category": "folktales",
   "genres": [
    "Fable"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-milkmaid-and-her-pail.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Milkmaid and Her Pail",
     "paras": [
      "A young milkmaid named Patty had just finished milking her cow and balanced a large pail of fresh, creamy milk securely on her head. She set off down the country lane toward the village market, her mind full of ambitious daydreams.",
      "As she walked along, Patty began to calculate in her head. “I will sell this rich milk at the market for a good price. With the coins I earn, I will buy a basket of fresh eggs from the baker.”",
      "Her excitement grew as she continued her plan. “Those eggs will hatch into a fine flock of young chickens. When they are fully grown, I will sell them and buy a beautiful new dress for the village festival.”",
      "Thinking about how the local boys would admire her new dress at the dance, she tossed her head proudly and shouted, “Oh yes, that’s what I will do!”",
      "At that exact moment, she gave her head a proud toss. The heavy pail slipped from her head and crashed to the stony ground, spilling every single drop of milk. Her chickens, dress, and dreams vanished instantly in a puddle."
     ]
    }
   ],
   "collection": "aesop"
  },
  {
   "id": "the-count-of-monte-cristo",
   "title": "The Count of Monte Cristo",
   "author": {
    "name": "Alexandre Dumas"
   },
   "category": "adventure",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "In 1815 Marseille, the young sailor Edmond Dantès is betrayed by jealous rivals and imprisoned without trial in the Château d’If. Fourteen years later, after an escape and the discovery of a hidden fortune, he returns to France as the wealthy Count of Monte Cristo to settle his scores.",
   "cover": {
    "src": "assets/covers/the-count-of-monte-cristo.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Edmond Dantès",
     "role": "Young sailor, first mate of the Pharaon",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-edmond-dant-s.webp",
      "w": 290,
      "h": 525
     }
    },
    {
     "name": "The Count of Monte Cristo",
     "role": "The wealthy nobleman Edmond becomes",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-the-count-of-monte-cristo.webp",
      "w": 160,
      "h": 440
     }
    },
    {
     "name": "Mercédès",
     "role": "Catalan woman who loves Edmond",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-merc-d-s.webp",
      "w": 235,
      "h": 265
     }
    },
    {
     "name": "Fernand Mondego",
     "role": "Fisherman who envies Edmond",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-fernand-mondego.webp",
      "w": 165,
      "h": 355
     }
    },
    {
     "name": "Danglars",
     "role": "Calculating purser of the Pharaon",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-danglars.webp",
      "w": 135,
      "h": 268
     }
    },
    {
     "name": "Gérard de Villefort",
     "role": "Deputy crown prosecutor of Marseille",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-g-rard-de-villefort.webp",
      "w": 250,
      "h": 287
     }
    },
    {
     "name": "Abbé Faria",
     "role": "Elderly Italian priest and scholar",
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/char-abb-faria.webp",
      "w": 255,
      "h": 255
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Betrayal",
     "paras": [
      "In February 1815, the merchant vessel Pharaon sailed into the bustling port of Marseille. Nineteen-year-old Edmond Dantès, the ship’s capable first mate, was greeted with admiration by the owner, Monsieur Morrel. Following the sudden death of the captain during the voyage, Morrel announced his intention to promote Dantès to captain. Edmond’s future seemed bright; he was young, successful, and deeply in love with Mercédès, a beautiful Catalan woman who had promised him her hand in marriage.",
      "However, Edmond’s sudden rise sparked bitter jealousy among those around him. Danglars, the ship’s calculating purser, resented Dantès’s rapid promotion and authority. Fernand Mondego, a fiery fisherman and Mercédès’s cousin, burned with envy because he loved Mercédès himself. Joined by Caderousse, a weak-willed neighbor, Danglars forged an anonymous letter accusing Edmond of being a Bonapartist agent carrying treasonous correspondence from Napoleon on Elba.",
      "On the very day of his betrothal feast, guards seized Edmond and dragged him before the deputy crown prosecutor, Gérard de Villefort. Villefort initially found the innocent young sailor blameless. However, when Dantès produced the letter he had sworn to deliver to Paris, Villefort turned pale. The document was addressed to Noirtier—Villefort’s own father, a prominent Bonapartist leader. Realizing that this revelation could ruin his career and destroy his prospective marriage to a wealthy royalist family, Villefort burned the letter and secretly ordered Dantès imprisoned without trial."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Edmond Dantès on the deck of the Pharaon with his rivals and the harbour of Marseille behind him"
    },
    {
     "n": 2,
     "title": "The Prisoner of Château d’If",
     "paras": [
      "Stripped of his freedom, Edmond Dantès was transported in darkness across the bay to the Château d’If, an impenetrable fortress built upon a barren island. Thrown into a damp, subterranean cell, he waited in vain for justice or mercy. Days stretched into months, and months dissolved into agonizing years. Isolated from the world, Edmond fell into deep despair, questioning why God had allowed such injustice to befall him.",
      "For fourteen long years, Edmond endured solitary confinement, slowly losing his youth and sanity. He contemplated starvation to end his suffering, but fate intervened in his darkest hour. One evening, he heard a faint, scratching sound behind his stone wall. Realizing another prisoner was digging a tunnel, Edmond renewed his desire to live and began scraping away at the mortar from his side."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Edmond sits in his stone cell at the Château d’If beside a barred window"
    },
    {
     "n": 3,
     "title": "The Secret of Abbé Faria",
     "paras": [
      "Through the broken wall appeared Abbé Faria, an elderly Italian priest and scholar whom the guards considered insane. Far from mad, Faria possessed vast knowledge in history, mathematics, philosophy, and languages. He became Edmond’s tutor, mentor, and surrogate father, transforming the uneducated young sailor into a refined, highly knowledgeable man.",
      "As they worked together on a new escape plan, Edmond recounted the circumstances surrounding his arrest. Using brilliant logical deduction, Faria reconstructed the conspiracy, identifying Danglars, Fernand, and Villefort as the architects of Edmond’s ruin. For the first time, Edmond understood the full extent of the treachery against him, and the seed of righteous vengeance took root in his heart.",
      "Before their tunnel could be completed, the elderly priest suffered a severe paralytic stroke. Realizing his death was near, Faria revealed a momentous secret: the location of a vast fortune hidden on the uninhabited island of Monte Cristo, left behind by the ancient Spada family. Faria bequeathed the entire treasure to Edmond shortly before passing away in his sleep."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Abbé Faria shows Edmond a treasure map by candlelight in the prison cell"
    },
    {
     "n": 4,
     "title": "Escape and Treasure",
     "paras": [
      "When the guards wrapped Faria’s corpse in a heavy canvas shroud, Edmond conceived a desperate plan. Replacing the priest’s body with himself inside the burial sack, he waited in darkness. The guards carried the heavy bundle to the fortress ramparts and cast it directly into the churning waves below, believing they were disposing of a deceased prisoner.",
      "Cutting himself free with a hidden knife, Edmond swam through the treacherous icy waters until he reached a nearby rocky islet. The next morning, he was rescued by a crew of smugglers aboard a vessel named the Young Amelia. Edmond earned their respect through his seamanship and managed to secure passage to the desolate island of Monte Cristo.",
      "Once ashore, Edmond feigned an injury so his companions would leave him behind briefly. Alone on the rugged island, he followed Faria’s cryptic directions to a hidden subterranean cave. Deep within the cavern, he unearthed a chest filled with gold coins, sparkling diamonds, and priceless jewels—a fortune beyond imagination. Edmond Dantès was no longer a penniless prisoner; he was wealthy beyond measure."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Edmond stands amazed before an open chest of gold and jewels in a sea cave"
    },
    {
     "n": 5,
     "title": "The Return of the Count",
     "paras": [
      "Disguised as an Italian priest named Abbé Busoni, Edmond returned to France to investigate the fates of his loved ones and enemies. He visited Caderousse, who had fallen into poverty and running a rural inn. Under the guise of fulfilling a dead comrade’s final wish, Busoni offered Caderousse a valuable diamond in exchange for the truth regarding the conspiracy of 1815.",
      "Caderousse confirmed that Danglars had become a wealthy baron and powerful banker in Paris; Fernand had risen to high military rank, assumed the title of Count de Morcerf, and married Mercédès; Villefort was now the formidable Crown Prosecutor of Paris. In contrast, Edmond’s elderly father had died of starvation and grief, while the faithful shipowner Morrel was facing complete bankruptcy.",
      "Before launching his revenge against his enemies, Edmond secretly rewarded those who had remained loyal. Operating under the persona of “Sinbad the Sailor,” he anonymously paid off all of Morrel’s debts and delivered a newly constructed replica of the Pharaon to save the honest man from ruin and dishonor."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count stands at a ship’s rail looking over the harbour of Marseille"
    },
    {
     "n": 6,
     "title": "Paris and the Past",
     "paras": [
      "Years later, a mysterious nobleman emerged in Parisian high society: the Count of Monte Cristo. Possessing immense wealth, cold aristocratic manners, and an extraordinary intellect, he quickly became the fascination of the French capital. His pale features, striking appearance, and endless fortune commanded immediate respect and curiosity.",
      "The Count purchased a grand mansion in Paris and deliberately orchestrated introductions to Danglars, Villefort, and Fernand. None of them recognized the young sailor they had betrayed fourteen years earlier, seeing only a fascinating foreign lord. However, when the Count visited the home of Fernand and Mercédès, the Countess de Morcerf looked into his dark eyes and instantly recognized her lost love, though she kept her terrible discovery hidden in silence."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count in a Paris room with a street view and a framed portrait of the young Edmond"
    },
    {
     "n": 7,
     "title": "The Enemies Revealed",
     "paras": [
      "The Count systematically gathered intelligence on the secret vices and past crimes of his three primary enemies. He purchased a country estate in Auteuil and invited Villefort and Danglars to a dinner party. There, he subtly revealed his knowledge of an illegitimate child born decades ago to Villefort and Danglars’s wife—a child Villefort had buried alive in the garden, believing it dead.",
      "Furthermore, the Count brought with him Haydée, a beautiful Greek princess whom he had rescued from slavery. Haydée was the daughter of Ali Pasha, the ruler of Yanina. She held proof that Fernand had committed treason by betraying her father to the Turks, assassinating him, and selling his wife and daughter into slavery to acquire his immense fortune.",
      "Meanwhile, the Count exploited Danglars’s insatiable greed by manipulating financial news via telegraph signals, causing the banker to suffer catastrophic stock market losses. Step by step, the trap was constructed around each man."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count faces three of his enemies in an elegant Paris salon"
    },
    {
     "n": 8,
     "title": "The Web of Revenge",
     "paras": [
      "The Count’s retribution unfolded with surgical precision. Through Haydée’s testimony delivered before the Chamber of Peers, Fernand’s disgraceful past was publicly exposed. The scandal ruined his military reputation and noble title. Despised by society and abandoned by his wife and son Albert, who had learned of his crimes, Fernand confronted the Count. When Monte Cristo revealed his true identity as Edmond Dantès, Fernand fled in terror and shot himself.",
      "Simultaneously, the Count encouraged the dark ambitions of Villefort’s second wife, Madame de Villefort, who began systematically poisoning family members with deadly toxic mixtures to secure the entire family inheritance for her biological young son, Édouard."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count reads a letter at a desk covered with papers and sealed envelopes"
    },
    {
     "n": 9,
     "title": "Secrets and Betrayals",
     "paras": [
      "Villefort’s household was consumed by terror as mysterious deaths mounted. The prosecutor discovered that his own wife was the poisoner. Fearing public execution and scandal, Villefort commanded her to consume her own poison or face immediate formal arrest.",
      "At the same time, Villefort presided over a high-profile murder trial involving Benedetto, an escaped convict. To Villefort’s horror, Benedetto revealed in open court that he was the illegitimate child buried in the garden at Auteuil years ago, publicly exposing Villefort’s hypocrisy and hidden crimes before all of Paris.",
      "Crushed by shame, Villefort rushed home to stop his wife from committing suicide. He arrived too late: Madame de Villefort had ingested the fatal dose and had also poisoned their innocent young son, Édouard, ensuring they died together."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count and a distressed woman stand beside a desk with a sealed letter"
    },
    {
     "n": 10,
     "title": "The Fall of the Guilty",
     "paras": [
      "The Count of Monte Cristo arrived at Villefort’s home just as the tragic deaths occurred. Confronted with the lifeless body of the innocent young boy Édouard, the Count suffered a profound moment of doubt, questioning whether his divine mission of vengeance had exceeded moral boundaries. He revealed his true identity to Villefort, who succumbed to complete madness upon realizing the full consequences of his past sins.",
      "Meanwhile, Danglars fled Paris to Italy with the remaining funds stolen from charities and banks. The Count arranged for the bandit Luigi Vampa to capture Danglars in Rome. Kept in a dark cell, Danglars was charged exorbitant sums—a hundred thousand francs for a single loaf of bread—until his stolen fortune was completely exhausted. Starved, humbled, and penniless, Danglars begged for mercy. Seeing that the banker had repented, Edmond spared his life, revealed his identity, and allowed him to leave with a fraction of his freedom."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A shaken prosecutor grips a courtroom table as the Count watches from the side"
    },
    {
     "n": 11,
     "title": "The Price of Revenge",
     "paras": [
      "With his vengeance completed, Edmond Dantès felt a profound sadness. His enemies were destroyed, but the innocent had suffered alongside the guilty, and his own heart remained scarred by years of bitterness. He returned to Marseille, where he met Mercédès one final time at the modest home where his father had died.",
      "Mercédès acknowledged Edmond’s justice, blaming herself for failing to wait for him. Stripped of wealth and status, she chose to live a quiet life of prayer, while her noble son Albert joined the military to restore their family honor under an assumed name. Edmond and Mercédès said a painful final farewell, accepting that their youthful love belonged to a past that could never be reclaimed."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count stands by a rain-streaked window in a room strewn with crumpled papers"
    },
    {
     "n": 12,
     "title": "Hope and Freedom",
     "paras": [
      "Edmond traveled one last time to the island of Monte Cristo to settle his worldly affairs. There, he brought together Maximilien Morrel—the noble son of his old benefactor—and Valentine de Villefort, whom Edmond had secretly saved from her stepmother’s poison. Edmond bestowed upon the young lovers his vast estate, his mansion in Paris, and his remaining fortune, granting them the bright future that had been stolen from him in his youth.",
      "As Maximilien expressed his overwhelmed gratitude, Edmond explained his final philosophy: human wisdom is contained in two words—wait and hope. Leaving the island alongside Haydée, who had confessed her deep love for him, Edmond Dantès sailed away into the open horizon, having finally earned peace and redemption."
     ],
     "img": {
      "src": "assets/images/stories/the-count-of-monte-cristo/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Count and Haydée stand at a ship’s rail at sunrise"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "the-secret-garden",
   "title": "The Secret Garden",
   "author": {
    "name": "Frances Hodgson Burnett"
   },
   "category": "nature",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "Orphaned in India, Mary Lennox is sent to live at her uncle’s gloomy manor on the Yorkshire moor. With a robin, a rusty key and two new friends, she discovers a locked garden and a hidden boy, and watches everything come back to life.",
   "cover": {
    "src": "assets/covers/the-secret-garden.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Mary Lennox",
     "role": "Orphaned girl sent to live in Yorkshire",
     "img": {
      "src": "assets/images/stories/the-secret-garden/char-mary-lennox.webp",
      "w": 190,
      "h": 670
     }
    },
    {
     "name": "Colin Craven",
     "role": "Mr. Craven’s hidden, ailing son",
     "img": {
      "src": "assets/images/stories/the-secret-garden/char-colin-craven.webp",
      "w": 170,
      "h": 670
     }
    },
    {
     "name": "Dickon Sowerby",
     "role": "Martha’s brother, a boy of the moor",
     "img": {
      "src": "assets/images/stories/the-secret-garden/char-dickon-sowerby.webp",
      "w": 225,
      "h": 670
     }
    },
    {
     "name": "Martha Sowerby",
     "role": "Cheerful Yorkshire housemaid",
     "img": {
      "src": "assets/images/stories/the-secret-garden/char-martha-sowerby.webp",
      "w": 235,
      "h": 670
     }
    },
    {
     "name": "Archibald Craven",
     "role": "Mary’s uncle, master of Misselthwaite Manor",
     "img": {
      "src": "assets/images/stories/the-secret-garden/char-archibald-craven.webp",
      "w": 220,
      "h": 670
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Orphan",
     "paras": [
      "When Mary Lennox was sent to Misselthwaite Manor to live with her uncle, everybody said she was the most disagreeable-looking child ever seen. It was true, too. She had a little thin face, a little thin body, thin light hair, and a sour expression. Her hair was yellow, and her face was yellow because she had been born in India and had always been ill in one way or another.",
      "Her father had held a position under the English Government and was always busy and ill himself. Her mother had been a great beauty, who cared only about going to parties and amusing herself with gay people. She had not wanted a little girl at all, and when Mary was born, she handed her over to the care of an Ayah—an Indian servant—who was told that she must keep the child out of sight as much as possible. So Mary was kept out of sight and given her own way in everything. By the time she was nine years old, she was as tyrannical and selfish a little creature as ever lived.",
      "Then, one terrible morning, cholera broke out in its most violent form. The servants fled, and inside the quiet house, people began dying rapidly. Mary was forgotten by everyone during those terrifying days. She hid in her nursery, playing silently with her toy soldiers, frightened and confused by the mysterious voices and sudden silences in the bungalow. When soldiers eventually entered the deserted house two days later, they found Mary sitting alone on the floor, playing with her toys.",
      "Since she was an orphan with no other close relatives, plans were quickly made to send her to England. She was placed under the care of a minister’s family for a short time, but the children disliked her immensely and made fun of her solitude. They nicknamed her “Mistress Mary, Quite Contrary,” and sang the old rhyme whenever she walked into the garden alone. Mary pretended not to care, but inside, she felt a cold, growing ache of isolation.",
      "Eventually, she was told that she was going to live with her uncle, Mr. Archibald Craven, whom she had never seen. He lived in a vast, ancient estate called Misselthwaite Manor, situated on the lonely edges of Yorkshire. Mary was sent on a long voyage across the sea to England, feeling entirely alone in a dark, unfamiliar world that offered no comfort or affection."
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary stands alone by a window in a dusty, empty room"
    },
    {
     "n": 2,
     "title": "The Mysterious Manor",
     "paras": [
      "The journey to Yorkshire was long and dreary. Mary traveled in a train carriage with Mrs. Medlock, the stern housekeeper of Misselthwaite Manor. Mrs. Medlock was a broad woman with very red cheeks and sharp, black eyes, who wore a heavy black silk dress that rustled whenever she moved.",
      "“I can tell you transformed little about your uncle,” Mrs. Medlock warned in a crisp, sharp voice. “He’s a hunchback, and he’s had a terrible life. He spent years in dark moods, and since his wife died, he’s lived alone in that huge house. He won’t want to see you, so don’t expect him to pay attention to you.”",
      "Mary looked out the window as the train rattled through the gloomy evening. When they arrived at the station, a carriage was waiting for them. The driver wrapped them in thick woollen blankets before starting the journey across the moor. The wind blew wildly around the carriage, whistling through the darkness. The moor seemed like a wide, black ocean under a stormy night sky.",
      "“It’s not the sea, is it?” asked Mary, peering out into the vast emptiness.",
      "“No, it’s the moor,” Mrs. Medlock replied. “It’s miles and miles of wild land, where nothing grows except heather and gorse, and nothing lives except wild ponies and sheep.”",
      "Finally, the carriage stopped before a huge, dark building with heavy stone walls and small, iron-barred windows. The house looked ancient and grand, but completely lifeless. Inside, a footman led them down long, dark corridors lit only by dim lamps. Mary was taken to a small room where a warm fire was burning, and a table was set with food.",
      "“This is your room,” Mrs. Medlock told her firmly. “You are to stay in these rooms and not wander around the house. Mr. Craven will not have people wandering in his home.”",
      "That night, as Mary lay in her bed listening to the wind howling across the moor, she felt more isolated than ever before. But as the house grew silent, she thought she heard a strange sound faintly echoing through the distant corridors—the sound of a child crying."
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary looks up at the stone walls of Misselthwaite Manor across the misty moor"
    },
    {
     "n": 3,
     "title": "The Hidden Key",
     "paras": [
      "When Mary woke up the next morning, she met Martha, a cheerful Yorkshire housemaid who had come to light the fire. Martha was entirely different from the quiet, obedient servants Mary had known in India. She talked openly, used broad Yorkshire dialect, and expected Mary to dress herself.",
      "“What! You don’t know how to put on your own clothes?” Martha asked, genuinely astonished.",
      "“In India, my Ayah dressed me!” Mary said indignantly, her face turning red with anger.",
      "“Well, you’re in Yorkshire now,” Martha said cheerfully, ignoring Mary’s temper. “It’ll do you good to learn to take care of yourself.”",
      "Martha spoke warmly about her large family living on the moor, especially her twelve-year-old brother, Dickon. “He’s a wonderful boy,” Martha said proudly. “He spends all his days on the moor. Birds and animals follow him everywhere because he plays sweet tunes on a wooden pipe.”",
      "Martha also mentioned something intriguing about the estate. “There’s one garden that’s been locked up for ten years,” she whispered. “Mr. Craven locked the door and buried the key after his wife died there in a tragic accident. Nobody is allowed inside.”",
      "This mystery deeply fascinated Mary. Later that day, she went out into the cold gardens. The fresh moor air began to wake her dull senses, and her appetite slowly returned. While wandering near a tall ivy-covered wall, she saw a bright little bird with a red breast perched atop a branch. It was a robin.",
      "The robin chirped merrily, tilting his head as if speaking to her. For the first time in her life, Mary felt a surge of warmth in her heart. Over the next few days, she returned to the garden every day to see the robin.",
      "One afternoon, as the bird hopped along a freshly turned flowerbed where a dog had been digging, Mary noticed a glint of metal in the soil. She reached down and pulled out an old, rusty iron key. She stared at it with a beating heart—it was the key to the secret garden."
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch03.webp",
      "w": 720,
      "h": 392
     },
     "alt": "Mary kneels beside a robin and holds up the old key she has found"
    },
    {
     "n": 4,
     "title": "A World of Green",
     "paras": [
      "With the rusty key in her hand, Mary felt a thrill of excitement. The only problem was finding the door. The outer walls of the locked garden were completely covered in thick layers of heavy ivy, hiding whatever lay beneath.",
      "The next morning, a strong gust of wind blew aside a hanging veil of ivy on the brick wall. Beneath the leaves, Mary saw the outline of a door handle. She reached out, inserted the key into the old lock, and turned it with all her strength. The lock yielded with a heavy click. Mary pushed the heavy wooden door open, stepped inside, and quickly closed it behind her.",
      "She was standing inside the secret garden. It was the most mysterious and beautiful place she had ever seen. The tall walls were covered with climbing rose vines, though they looked brown and lifeless in the winter chill. Tree branches crossed each other above, creating a natural canopy. Everything was quiet and frozen, yet there was a soft, living energy in the air.",
      "Mary noticed small green shoots poking through the dark earth. “They are alive!” she whispered to herself. She found an old garden trowel and spent hours pulling away dead weeds to give the young plants room to breathe and grow.",
      "A few days later, while working in her hidden haven, she met Dickon, who had come to the manor gardens to bring her a gardening set and seeds she had requested through Martha. Dickon was a boy with round rosy cheeks, kind blue eyes, and a magical connection with nature. A tame crow and a young fox cub followed him closely wherever he walked.",
      "Mary decided to trust him and showed him the secret garden. Dickon examined the sleeping gray trees with expert care. “They aren’t dead,” he said softly, pointing to a green stem inside a stem. “There’s lots of wood alive in them. This place will be a wilderness of green and roses by summer!”"
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary touches the ivy on a garden wall while a robin watches"
    },
    {
     "n": 5,
     "title": "The Boy in the Room",
     "paras": [
      "Working outdoors made Mary stronger, healthier, and far less contrary than before. However, the mystery of the crying child continued to disturb her. One rainy night, when the wind was howling around the corners of the manor, she clearly heard the soft, mournful weeping once again.",
      "Determined to find the source, Mary took a candle and followed the sound down silent, dark hallways she had never explored. She opened a velvet curtain and stepped into a large bedroom equipped with a fire and expensive furniture.",
      "On a luxurious canopy bed lay a boy about her own age, crying bitterly. He had pale skin, large gray eyes, and delicate features. When he saw Mary, he stopped crying and stared at her in utter astonishment.",
      "“Who are you?” he asked in a weak, high voice. “Are you a ghost?”",
      "“No, I am Mary Lennox. I am Mr. Craven’s niece,” she answered calmly. “Who are you?”",
      "“I am Colin Craven, his son,” the boy replied. “Everyone keeps me hidden because I am ill and crooked. My father cannot stand to look at me because I remind him of my dead mother. I am going to die soon.”",
      "Mary approached his bed and spoke firmly. “You don’t look like you are going to die! You are just miserable and stay inside too much.”",
      "Colin was surprised by her bluntness; everyone else always pitied him and obeyed his every whim out of fear of making him hysterical. Mary stayed with Colin for hours, talking to him about the moor, the birds, and the magical arrival of spring. She did not mention the secret garden yet, but her vivid stories comforted him, and he fell into a peaceful sleep holding her hand."
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary opens the bedroom door as Colin sits up in his four-poster bed"
    },
    {
     "n": 6,
     "title": "Friends and New Beginnings",
     "paras": [
      "Over the following days, Mary visited Colin regularly. She brought laughter and lively conversation into his quiet room. When Colin threw a temper tantrum—fearing he was developing a lump on his back—Mary stood up to him bravely, checked his spine, and assured him that there was nothing wrong with his back except weakness from lying in bed all day.",
      "“You’re just spoiled and foolish!” she told him frankly. Her honest words brought Colin out of his dramatic self-pity, and he gradually began to trust her completely.",
      "Soon, Mary introduced Dickon to Colin. Dickon brought his tame creatures—a lamb, a squirrel, and his friendly crow—into Colin’s bedroom. Colin’s eyes shone with wonder as he held the gentle lamb in his arms. The fresh stories of the outdoors filled the sick boy with an overwhelming desire to see the world outside his dark room.",
      "Finally, Mary shared the greatest secret of all: “I have found the door to the locked garden, Colin! And Dickon and I are working in it!”",
      "Colin’s heart leapt with joy. “Take me there!” he pleaded. “I want to see it more than anything in the world!”",
      "The next sunny afternoon, Colin was wrapped in warm blankets and placed in his wheeled chair. Dickon and Mary carefully pushed him down the garden paths toward the hidden door. When they brought him inside the high walls, Colin looked around at the green leaves, blooming crocus buds, and climbing vines bathed in golden sunlight.",
      "“I am going to get well!” Colin exclaimed, his face shining with hope and excitement. “I shall live forever and ever!”"
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary and Dickon stand in the garden with a robin nearby"
    },
    {
     "n": 7,
     "title": "The Magic of the Garden",
     "paras": [
      "As spring bloomed into summer, the secret garden transformed into a paradise of bright roses, lush greenery, and fragrant blossoms. The three children spent every single day inside its stone walls. They worked together, digging soil, planting flowers, and watching the birds raise their young.",
      "Colin felt a strange, joyful energy filling his body—something he called “Magic.” Every day, he practiced sitting up, then standing, and eventually taking his very first unsteady steps across the soft lawn. His legs, once thin and frail, grew stronger with every passing week.",
      "“Magic is in the air, in the earth, and in us,” Colin announced proudly to Mary and Dickon. He began exercising every afternoon, practicing deep breathing and walking back and forth along the flower borders. His sickly pale skin turned healthy and tan, his appetite grew immensely, and his eyes sparkled with vitality.",
      "To keep their progress a secret from the servants until Colin was completely cured, the children kept up his routine at the house. Colin continued to pretend to be weak when doctor came, though he found it increasingly difficult to act like an invalid when he was feeling so strong.",
      "One afternoon, Dickon’s mother, Mrs. Sowerby, visited the secret garden. She was a kind, warm-hearted woman who brought fresh milk and homemade bread for the hungry children. When she saw Colin standing tall, laughing, and running around the trees, tears of joy filled her eyes.",
      "“Your mother would be so proud, my dear lad,” she said softly, hugging Colin tightly. “You look just like her now. You must send for your father to come home soon—he needs to see this wonder with his own eyes.”"
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mary and Dickon tend flowers in the secret garden"
    },
    {
     "n": 8,
     "title": "A Family Reunited",
     "paras": [
      "While these wonderful changes were taking place at Misselthwaite Manor, Mr. Archibald Craven was traveling far away in the mountain valleys of Europe. For ten long years, he had carried a heavy weight of grief in his heart, wandering aimlessly from place to place to escape his painful memories.",
      "One quiet night, while sitting near a rushing stream in Austria, he had a vivid dream. He heard his late wife’s sweet voice calling out to him clearly: “Archibald! Come back! I am in the garden!”",
      "The dream felt so real that Mr. Craven woke up with a profound sense of peace. Shortly after, a letter arrived from Mrs. Sowerby, gently urging him to return home at once without delay. Sensing that something extraordinary was waiting for him, he immediately began his long journey back to Yorkshire.",
      "When he arrived at Misselthwaite Manor, he walked directly out into the grounds, drawn by an irresistible instinct toward the locked garden he had abandoned years ago. As he approached the ivy-covered wall, he heard the cheerful sounds of children laughing and shouting inside.",
      "Confused, he pushed open the unlocked wooden door and stepped through. What he saw filled him with complete wonder. The garden was glowing with a magnificent display of blooming roses and rich summer greenery. Suddenly, a tall, healthy, handsome boy came running fast around a corner, winning a race, and ran straight into his arms.",
      "Mr. Craven stared into the boy’s gray eyes and caught his breath. “Father!” Colin cried out joyfully. “It’s me, Colin! The Magic made me well!”",
      "Tears of happiness filled Mr. Craven’s eyes as he embraced his son tightly for the first time in his life. Together, with Mary and Dickon walking proudly alongside them, father and son walked back into Misselthwaite Manor, transformed by love, hope, and the timeless magic of the secret garden."
     ],
     "img": {
      "src": "assets/images/stories/the-secret-garden/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Colin embraces his father in the garden while Mary and Dickon look on"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "the-jungle-book",
   "title": "The Jungle Book",
   "author": {
    "name": "Rudyard Kipling"
   },
   "category": "nature",
   "genres": [
    "Classic",
    "Adventure"
   ],
   "language": "English",
   "edition": "Illustrated edition in 12 chapters.",
   "intro": "Raised by wolves in the Indian jungle, the man-cub Mowgli learns the Law of the Jungle from Baloo the bear and Bagheera the panther while the tiger Shere Khan waits for his chance. The book also tells of a white seal, a fearless mongoose and a boy who sees the elephants dance.",
   "cover": {
    "src": "assets/covers/the-jungle-book.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Mowgli",
     "role": "The man-cub raised by wolves",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-mowgli.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Baloo",
     "role": "The sleepy brown bear who teaches the Law",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-baloo.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Bagheera",
     "role": "The black panther who protects Mowgli",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-bagheera.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Shere Khan",
     "role": "The lame tiger who hunts Mowgli",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-shere-khan.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Akela",
     "role": "The great gray Lone Wolf, leader of the Pack",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-akela.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Kaa",
     "role": "The giant rock python the monkeys fear",
     "img": {
      "src": "assets/images/stories/the-jungle-book/char-kaa.webp",
      "w": 190,
      "h": 190
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "Mowgli’s Brothers",
     "paras": [
      "It was seven o’clock on a warm evening in the Seeonee hills when Father Wolf woke up from his day’s rest. He scratched himself, yawned, and spread out his paws one after the other to get rid of the sleepy feeling in their tips. Mother Wolf lay with her big gray nose dropped across her four tumbling, squeaking cubs, and the moon shone into the mouth of the cave where they all lived. “Augrh!” said Father Wolf. “It is time to hunt again.” He was about to spring down the hill when a little shadow with a bushy tail crossed the threshold and whined, “Good luck go with you, O Chief of the Wolves. And good luck and strong white teeth go with noble children that they may never forget the hungry in this world.”",
      "It was the jackal, Tabaqui, whom the wolves of India despise because he runs about making mischief, telling tales, and eating rags and pieces of leather from the village rubbish heaps. But the wolves are afraid of him too, because Tabaqui, more than anyone else in the jungle, is apt to go mad, and then he runs through the forest biting everything in his path. “Enter, then, and look,” said Father Wolf politely, “but there is no food here.” “For a wolf, no,” said Tabaqui, “but for so hateful a creature as I, a dry bone is a good feast.” He scuttled to the back of the cave, found the bone of a buck with some meat on it, and sat cracking the end merrily.",
      "“Shere Khan, the Big One, has shifted his hunting grounds,” Tabaqui said, grinning maliciously. “He will hunt among these hills for the next moon, so he has told me.” Shere Khan was the tiger who lived near the Waingunga River, twenty miles away. “He has no right!” Father Wolf said angrily. “By the Law of the Jungle he has no right to change his quarters without due warning. He will frighten every game animal within ten miles, and I have to kill for two these days.” “His mother did not call him Lungri, the Lame One, for nothing,” said Mother Wolf quietly. “He has been lame in one foot from his birth. That is why he has only killed cattle. Now the villagers of the Waingunga are angry with him, and he has come here to make our villagers angry. They will scour the jungle for him when he is far away, and we and our children must run when the grass is set alight. Indeed, we are very grateful to Shere Khan!”",
      "“Shall I tell him of your gratitude?” asked Tabaqui. “Out!” snapped Father Wolf. “Out and hunt with your master! You have done mischief enough for one night.” “I go,” said Tabaqui quietly. “You can hear Shere Khan below in the thickets. I might have saved my breath.” Father Wolf listened, and below in the valley that ran down to a little stream he heard the dry, angry, snarly, sing-song whine of a tiger who has caught nothing and does not care if all the jungle knows it. “The fool!” said Father Wolf. “To begin a night’s work with that noise! Does he think our bucks are like the fat Waingunga bullocks?” “Hsh! It is neither bullock nor buck he hunts to-night,” said Mother Wolf. “It is Man.”",
      "The whine changed to a strange humming purr that seemed to come from every quarter of the compass. It was the noise that bewilders woodcutters and gipsies sleeping in the open, and makes them run sometimes into the very mouth of the tiger. “Man!” said Father Wolf, showing all his white teeth. “Faugh! Are there not enough beetles and frogs in the tanks that he must eat Man, and on our ground too?” The Law of the Jungle, which never orders anything without a reason, forbids every beast to eat Man except when he is killing to show his children how to kill, and then he must hunt outside the hunting grounds of his pack or tribe. The real reason for this is that man-killing means, sooner or later, the arrival of white men on elephants, with guns, and hundreds of brown men with gongs and rockets and torches. Then everybody in the jungle suffers. But the beasts say among themselves that Man is the weakest and most defenceless of all living things, and that it is unsportsmanlike to touch him. They say too—and it is true—that man-eaters become mangy, and lose their teeth.",
      "The purr grew louder, and ended in the full-throated “Aaarh!” of the tiger’s charge. Then there was a howl—an un-tigerish howl—from Shere Khan. “He has missed,” said Mother Wolf. “What is it?” Father Wolf ran out a few paces and heard Shere Khan muttering and mumbling savagely as he tumbled about in the scrub. “The fool has had no more sense than to jump at a woodcutters’ camp-fire, and has burned his feet,” muttered Father Wolf with a grunt. “Tabaqui is with him.” “Something is coming uphill,” said Mother Wolf, twitching one ear. “Get ready.” The bushes rustled a little in the thicket, and Father Wolf dropped with his hind legs under him, ready for his leap. Then, if you had been watching, you would have seen the most wonderful thing in the world—the wolf checked himself in mid-spring. He made his bound before he saw what he was jumping at, and then he tried to stop himself. The result was that he shot up straight into the air for four or five feet, landing almost where he left the ground.",
      "“Man!” he snapped. “A man’s cub. Look!” Directly in front of him, holding on by a low branch, stood a naked brown baby who could just walk—as soft and as dimpled a little atom as ever came to a wolf’s cave at night. He looked up into Father Wolf’s face, and laughed. “Is that a man’s cub?” said Mother Wolf. “I have never seen one. Bring it here.” A wolf accustomed to moving his own cubs can, if necessary, mouth an egg without breaking it, and though Father Wolf’s jaws closed right on the child’s back, not a tooth even scratched the skin as he laid it down among the cubs. “How little! How naked, and—how bold!” said Mother Wolf softly. The baby was pushing his way between the cubs to get close to the warm hide. “Ah! He is taking his meal with the others. And so this is a man’s cub. Now, was there ever a wolf that could boast of a man’s cub among her children?” “I have heard now and again of such a thing, but never in our Pack or in my time,” said Father Wolf. “He is altogether without hair, and I could kill him with a touch of my foot. But look, he looks up and is not afraid.”",
      "The moonlight was blocked out of the mouth of the cave, for Shere Khan’s great square head and shoulders were thrust into the entrance. Tabaqui, behind him, was squeaking: “My lord, my lord, it went in here!” “Shere Khan does us great honor,” said Father Wolf, but his eyes were very angry. “What does Shere Khan need?” “My quarry. A man’s cub went this way,” said Shere Khan. “Its parents have run off. Give it to me.” Father Wolf knew that the cave mouth was too narrow for a tiger to come in by. Even where he was, Shere Khan’s shoulders and forepaws were cramped for want of room, as a man’s would be if he tried to fight in a barrel. “The Wolves are a free people,” said Father Wolf. “They take orders from the Head of the Pack, and not from any striped cattle-killer. The man’s cub is ours—to kill if we choose.” “Choose! What talk is this of choosing? By the bull that I killed, am I to stand nosing into your dog’s den for my rights? It is I, Shere Khan, who speak!”",
      "The tiger’s roar filled the cave with thunder. Mother Wolf shook herself clear of the cubs and sprang forward, her eyes, like two green moons in the darkness, facing the blazing eyes of Shere Khan. “And it is I, Raksha [The Demon], who answer! The man’s cub is mine, Lungri—mine to me! He shall not be killed. He shall live to run with the Pack and to hunt with the Pack; and in the end, look you, hunter of little naked cubs—frog-eater— fish-killer—he shall hunt thee! Now get hence, or by the Sambhur that I killed—for I do not eat starved cattle— thou shalt go back to thy mother, burnt beast of the jungle, lamer than thou camest into the world! Go!”",
      "Father Wolf looked on in amazement. He had almost forgotten the days when he won Mother Wolf in fair fight from five other wolves, when she ran in the Pack and was not called The Demon for compliment’s sake. Shere Khan might have faced Father Wolf, but he could not stand up against Mother Wolf, for he knew that where he was she had all the advantage of the ground, and would fight to the death. So he backed out of the cave mouth growling, and when he was clear he shouted back: “Each dog barks in his own yard! We shall see what the Pack will say to this fostering of man-cubs. The cub is mine, and to my teeth he will come in the end, O bush-tailed thieves!”",
      "Mother Wolf threw herself down panting among the cubs, and Father Wolf said to her gravely: “Shere Khan speaks this much truth. The cub must be shown to the Pack. Wilt thou still keep him, Mother?” “Keep him!” she gasped. “He came naked, by night, alone and very hungry; yet he was not afraid! Look, he has pushed one of my babes to one side already. And that lame butcher would have killed him and run off to the Waingunga while the villagers here hunted all our lairs in revenge! Keep him? Assuredly I will keep him. Lie still, little frog. O thou Mowgli—for Mowgli the Frog I will call thee—the time will come when thou wilt hunt Shere Khan as he has hunted thee.”",
      "“But what will our Pack say?” said Father Wolf. The Law of the Jungle lays down very clearly that any wolf may, when he marries, withdraw from the Pack he belongs to; but as soon as his cubs are old enough to stand on their feet he must bring them to the Pack Council, which is generally held once a month at full moon, in order that the other wolves may identify them. After that inspection the cubs are free to run where they please, and until they have killed their first buck no excuse is accepted if a grown wolf of the Pack kills one of them. The punishment is death wherever the murderer can be found; and if you think for a minute you will see that this must be so.",
      "Father Wolf waited till his cubs could run a little, and then, on the night of the Pack Meeting, he took them and Mowgli and Mother Wolf to the Council Rock—a hilltop covered with stones and boulders where a hundred wolves could hide. Akela, the great gray Lone Wolf, who led all the Pack by strength and cunning, lay out at full length on his rock, and below him sat forty or fifty wolves of every size and color. Akela had led them for a year now. He had fallen twice into a wolf-trap in his youth, and once he had been beaten and left for dead; so he knew the manners and customs of men.",
      "There was very little talking at the Rock. The cubs tumbled over each other in the center of the circle where their mothers and fathers sat, and now and then a senior wolf would go quietly up to a cub, look at him carefully, and return to his place. Sometimes a mother would push her cub far out into the moonlight, to make sure that he had not been overlooked. Akela from his rock would cry: “Ye know the Law—ye know the Law. Look well, O Wolves!” and the anxious mothers would take up the call: “Look—look well, O Wolves!” At last—and Mother Wolf’s neck bristles lifted as the time came—Father Wolf pushed “Mowgli the Frog,” as they called him, into the center, where he sat laughing and playing with some pebbles that glistened in the moonlight."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli sits among the wolf cubs in the cave while Father and Mother Wolf stand guard and Shere Khan lurks outside"
    },
    {
     "n": 2,
     "title": "The Law of the Jungle",
     "paras": [
      "Akela never raised his head from his paws, but went on with the monotonous cry: “Look well, O Wolves!” A muffled roar came up from behind the rocks—the voice of Shere Khan crying: “The cub is mine. Give him to me. What have the Free People to do with a man’s cub?” Akela never even twitched his ears; he merely said: “Look well, O Wolves! What have the Free People to do with the orders of any save the Free People? Look well!” There was a chorus of deep growls, and a young wolf in his fourth year roared back Shere Khan’s question: “What have the Free People to do with a man’s cub?” Now the Law of the Jungle lays down that if there is any dispute as to the right of a cub to be accepted by the Pack, he must be spoken for by at least two members of the Pack who are not his mother and father.",
      "“Who speaks for this cub?” said Akela. “Among the Free People who speaks?” There was no answer, and Mother Wolf got ready for what she knew would be her last fight, if things came to fighting. Then the only other creature who is allowed at the Pack Council—Baloo, the sleepy brown bear who teaches the wolf cubs the Law of the Jungle, who may come and go where he pleases because he eats only nuts and roots and honey—rose up on his hind quarters and spoke. “I speak for the man’s cub,” said Baloo. “There is no harm in a man’s cub. I have no gift of speech, but I speak the truth. Let him run with the Pack, and be entered with the others. I myself will teach him.”",
      "“We need yet another,” said Akela. “Baloo has spoken, and he is our teacher for the young cubs. Who speaks besides Baloo?” A black shadow dropped down into the circle. It was Bagheera the Black Panther, inky black all over, but with the panther markings showing under certain lights like the pattern of watered silk. Everybody knew Bagheera, and nobody cared to cross his path; for he was as bold as the wild buffalo, and as reckless as the wounded elephant. But he had a voice as soft as wild honey dripping from a tree, and a skin softer than down.",
      "“O Akela, and ye the Free People,” purred Bagheera, “I have no right in your assembly; but the Law of the Jungle says that if there is a doubt which is not a killing matter in regard to a new cub, the life of that cub may be bought at a price. And the Law does not say who may or may not pay that price. Am I right?” “Good! Good!” said the young wolves, who are always hungry. “Listen to Bagheera. The cub can be bought for a price. It is the Law.” “To kill a naked cub is a shame. Besides, he may make better sport for you when he is grown. Baloo has spoken in his behalf. Now to Baloo’s word I will add one bull, and a fat one, newly killed, not half a mile from here, if ye will accept the man’s cub according to the Law. Is it hard?”",
      "There was a clamor of scores of voices, saying: “What matter? He will die in the winter rains. He will scorch in the sun. What harm can a naked frog do us? Let him run with the Pack. Where is the bull, Bagheera? Let him be accepted.” And then came Akela’s deep bark, crying: “Look well—look well, O Wolves!” Mowgli was still deeply interested in the pebbles, and he did not notice when the wolves came up and looked at him one by one. At last they all went down the hill for the dead bull, and only Akela, Bagheera, Baloo, and Mowgli’s wolf parents were left. Shere Khan roared still in the night, for he was very angry that Mowgli had not been handed over to him. “Ay, roar well,” said Bagheera under his whiskers; “for the time comes when this naked thing will make thee roar to another tune, or I know nothing of men.”",
      "“It was well done,” said Akela. “Men and their cubs are very wise. He may be a help in time.” “Truly, a help in time of need; for none can hope to lead the Pack forever,” said Bagheera. Akela said nothing. He was thinking of the time that comes to every leader of every pack, when his strength goes from him and he gets feebler and feebler, till at last he is killed by the wolves and a new leader rises—to be killed in his turn. So Mowgli was entered into the Seeonee Wolf Pack for the price of a bull and on Baloo’s good word.",
      "Now you must be content to skip ten or eleven whole years, and only guess at all the wonderful life that Mowgli led among the wolves, because if it were written out it would fill ever so many books. He grew up with the cubs, though they of course were grown wolves almost before he was a child. Father Wolf taught him his business, and the meaning of things in the jungle, till every rustle in the grass, every breath of the warm night air, every note of the owls above his head, every scratch of a bat’s claws for a moment resting on a branch, and every splash of a little fish jumping in a pool meant just as much to him as the work of his office means to a business man. When he was not learning, he sat out in the sun and slept, and ate and went to sleep again; when he felt dirty or hot he swam in the forest pools; and when he wanted honey (Baloo told him that honey and nuts were just as pleasant to eat as raw meat) he climbed up for it, as Bagheera showed him how to do.",
      "Bagheera would lie out on a branch and call, “Come along, Little Brother,” and at first Mowgli would cling like the sloth, but afterward he would fling himself through the branches almost as boldly as the gray ape. He took his place at the Council Rock, too, when the Pack met, and there he discovered that if he stared hard at any wolf, the wolf would be forced to drop his eyes, and so he used to stare for fun. At other times he would pick the long thorns out of the pads of his friends, for wolves suffer terribly from thorns and burs in their coats. He would go down the hillside into the cultivated lands by night, and look very curiously at the villagers in their huts, but he had a mistrust of men because Bagheera showed him a square box with a drop-gate so cleverly hidden in the jungle that he walked into it almost, and told him that it was a trap. Mowgli hated Shere Khan, but as he grew up, he did not worry much about him.",
      "Baloo taught him all the Law of the Jungle—a great, complicated code that covers almost every action of jungle life. He taught him the Master Words of the Jungle that protect a stranger from the birds, the snake folk, and all the four-footed beasts. Baloo was delighted with his pupil, for Mowgli learned faster than any young wolf, since a man-cub has a quicker mind. But Baloo was a strict teacher and did not hesitate to clip Mowgli over the ears when he was careless or forgot his lessons. “A boy must know the Law of all the Jungle,” Baloo would say to Bagheera when the panther protested against the bear’s heavy paws. “There is none too small to be killed, and therefore he must learn all the rules, and be safe.”"
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli stands beside a great wolf on a mossy rock as the wolf pack and other jungle animals gather in the moonlit forest"
    },
    {
     "n": 3,
     "title": "The Tiger’s Threat",
     "paras": [
      "As the years went by, Mowgli grew strong and swift, a true child of the forest, but the quiet of the Seeonee hills was slowly being poisoned. Shere Khan had not forgotten his lost prey, nor had he forgiven the humiliation at the cave mouth. Since he could not attack Mowgli openly while the boy was protected by Akela, Baloo, and Bagheera, the tiger chose a insidious path: he made friends with the younger wolves of the Pack. He would join them on their hunts, feed them scraps from his kills, and whisper discontent into their ears. “Why do you obey an old, toothless wolf like Akela?” Shere Khan would ask them smoothly. “And why do you suffer a man’s cub to run with the Free People? A man’s cub who stares you down and makes you lower your eyes? Are you wolves, or are you dogs to be ruled by a human?”",
      "The young wolves listened. They were proud and foolish, and they liked the tiger’s flatteries. They began to murmur at the Council meetings, turning their backs on Akela and glaring sullenly at Mowgli. Bagheera, whose sharp eyes and ears saw everything that passed in the jungle, noticed the change long before Mowgli did. One warm afternoon, as Mowgli lay with his head on Bagheera’s sleek black shoulder, the panther spoke to him gravely. “Little Brother, how often have I told thee that Shere Khan is thy enemy?” “As many times as there are nuts on that palm,” said Mowgli, who was playing with his own toes. “What of it? I am sleepy, Bagheera, and Shere Khan is all long tail and loud talk, like Mor the Peacock.”",
      "“This is no time for sleep,” Bagheera warned him, striking the ground softly with his paw. “Akela is old and white. He has missed many a kill of late, and when he misses his next kill, the Pack will turn against him. Shere Khan has filled the heads of the young wolves with bad counsel. They believe that if Akela falls, they will be free to kill thee. Open thine eyes, Little Brother! Shere Khan cannot kill thee in the open jungle, for I and Baloo and the Pack would tear him to pieces. But Akela grows weak, and the day is near when he will fail.”",
      "Mowgli sat up, his dark eyes wide with surprise. “I have eaten the food of the Pack. I have slept with the Pack. I am a wolf of the Free People, though I was born without hair. Why should my brothers wish to kill me?” “Reach down under my jaw,” said Bagheera. Mowgli reached up and touched the soft black velvet of Bagheera’s throat, feeling a little bare patch where the fur had been rubbed away. “There is nothing there but a mark,” said Mowgli. “That is the mark of the collar,” said Bagheera quietly. “Little Brother, I was born among men. I was born in the cages of the king’s palace at Oodeypoor. My mother died there, and for a long time I was fed behind iron bars. But as I grew strong, I broke the lock of my cage with one blow of my paw and came away to the jungle. Because I had learned the ways of men, I became more terrible in the jungle than any panther. Am I not Bagheera?”",
      "“Yes,” said Mowgli, “all the jungle fears Bagheera—except Mowgli.” “Thou art a man’s cub,” Bagheera said softly. “And even as I returned to my jungle, so thou must go back to men at last—to thine own people—if thou art not killed in the Pack.” “But why—why should anyone wish to kill me?” asked Mowgli, his voice trembling slightly. “Look at me,” said Bagheera. Mowgli looked him full between the eyes, and the great black panther was forced to drop his head within half a minute. “That is why!” said Bagheera. “Not even I can look thee in the eyes, Little Brother. The others hate thee because thy eyes are wise; because thou art a man; because thou hast pulled the thorns from their feet. They hate thee because thou art different.”"
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Shere Khan the tiger stalks toward Mowgli while Bagheera watches from a branch"
    },
    {
     "n": 4,
     "title": "The Red Flower",
     "paras": [
      "“I did not know these things,” said Mowgli quietly, his brows drawing together in thought. “What must I do?” “Go down quickly to the men’s huts in the valley,” said Bagheera. “Take some of the Red Flower which they grow there in small pots. If thou hast that, thou wilt have a friend stronger than I, or Baloo, or anyone in the jungle. Bring the Red Flower!” By the Red Flower, Bagheera meant fire. No creature in the jungle calls fire by its right name; every beast lives in deadly fear of it, and invents all kinds of names to cover their dread. “The Red Flower?” said Mowgli. “I have seen it growing outside the mud huts at evening. I will fetch some.”",
      "“Go, then,” said Bagheera, “and remember that Akela’s time is short. To-night he hunts the sambhur buck, and he will fail. Then the Pack will assemble at the Council Rock, and Shere Khan will demand thy life.” Mowgli bounded away through the forest, running fast until he came to the edge of the cultivated fields below the Seeonee hills. He crept close to a village hut and peered through the thatched fence. A young boy was sitting by a small earthen pot filled with glowing red coals, feeding it with dry twigs. Mowgli waited until the boy got up and walked away; then he slipped over the wall, took the clay pot filled with burning embers, and wrapped it in broad green leaves to keep it safe. He carried it carefully up the hill, breathing on the embers to keep them alive as he had seen the human boy do.",
      "All that night Mowgli sat in a cave, tending his fire, feeding it with dry wood until a bright yellow flame licked at the dark. He watched the flame with delight, feeling its warmth and power. “This is indeed a master,” he whispered to himself. “Shere Khan and the young wolves will bow before this.” As dawn broke, a low howl echoed across the hills—the signal of the Pack. Akela had missed his buck! The old leader had sprung at the sambhur, but his teeth had slipped, and the buck had knocked him over and fled. The law of the pack was absolute: a leader who missed his kill was a “dead wolf,” and any member of the pack could challenge his leadership.",
      "Mowgli ran to the Council Rock, carrying his clay pot filled with live coals. Akela lay by the side of his stone, showing that his leadership was ended, and Shere Khan with his tail-wagging jackal Tabaqui walked openly up and down among the young wolves. They were shouting: “He missed! The Lone Wolf has missed his strike! Let him be killed!” “He has missed,” said Bagheera softly, sitting close to Mowgli. “They will kill Akela to-night, and then they will turn on thee. Art thou ready with the Red Flower?” “I am ready,” said Mowgli. He held the pot between his knees, protecting the embers from the wind.",
      "Shere Khan stepped forward into the center of the circle. “The leadership of the Pack is open,” the tiger roared. “And as for this man’s cub, he has lived long enough among you. Give him to me! He has stolen my game for years.” Akela raised his old gray head proudly. “Free People!” he cried. “For many moons I have led you in the hunt, and no wolf has been trapped or maimed while I was your leader. Now I have missed my kill. It is your right to kill me here on the Council Rock. But I ask, in the name of the Law, that the man’s cub be allowed to go to his own people in peace. He has eaten your food and slept among you. He is our brother.” “He is a man!” screamed the young wolves. “He is a man’s cub! Give him to Shere Khan!”"
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli crouches beside a clay pot of glowing fire while Bagheera and the wolves watch from the shadows"
    },
    {
     "n": 5,
     "title": "The Council at the Rock",
     "paras": [
      "Mowgli stood up, holding his pot of fire in his hands. He looked around the circle of angry, snarl-faced wolves and saw that only Baloo and Bagheera stood near him, while Mother and Father Wolf bristled with fury at his side. The young wolves pressed closer, their white teeth bared, encouraged by Shere Khan’s deep, triumphant purr. Mowgli felt something tighten in his chest—a strange feeling of anger and grief that he had never known before. “Listen, ye!” Mowgli cried, and his voice rang out clear and commanding across the hilltop. “There is no need for all this dog’s jabber! Ye have told me tonight that I am a man, and a man I would have been with you to my life’s end, though I was born a wolf’s brother. But ye have said I am a man, and not your brother. Well, I call ye dogs no longer, but what ye are—traitors and cowards!”",
      "He blew upon the fire pot, dropped a dry branch into it, and watched as the flame caught and blazed bright red in the moonlight. The wolves shrank back in terror, whining as the red light danced across their eyes. “Ye have said that I am a man,” Mowgli shouted, holding the burning branch high above his head. “And now ye shall see the power of a man! Look!” He thrust the burning branch into Shere Khan’s face. The tiger gave a hideous howl of fear, backing away on his haunches and covering his eyes with his forepaws as the hot sparks scorched his striped fur. “Save me! Save me!” Shere Khan whimpered, his great arrogance melting into terror before the Red Flower.",
      "“Up, dog!” Mowgli ordered, striking the tiger across the nose with the flaming branch. “Up! Sit up when a man speaks, or I will set thy coat ablaze! I leave this jungle, Shere Khan, but before I go, remember this: when next I come to the Council Rock, as a man among men, I will come with Shere Khan’s hide upon my head! As for Akela, he goes free to live as he wills. Ye shall not kill him, because that is my will. Do ye hear, ye dogs?” Mowgli struck left and right with the fire-brand, and the young wolves ran howling into the darkness, terrified by the heat and light. At last only Akela, Bagheera, and a few loyal wolves remained on the rock.",
      "Mowgli sat down on the ground, his chest heaving, and suddenly something strange happened. Big, warm drops began to roll down his cheeks, spilling onto his hands. “What is this? What is this?” he asked Bagheera, wiping his cheeks. “Am I dying, Bagheera?” “No, Little Brother,” Bagheera said softly, his own eyes dim with sadness. “Those are only tears, such as men shed. Now I know thou art a man, and no longer a wolf’s cub. The jungle is closed to thee henceforth. Let them fall, Mowgli. They are only tears.” Mowgli cried as if his heart would break, for he had never cried in all his life before.",
      "When he had finished weeping, he turned to Mother Wolf and Father Wolf and kissed their coats warmly. “I will go to the men in the valley,” he told them. “But I will come back again one day. And whenever I come, I will lie down at the mouth of the cave, and ye shall know that Mowgli is still your son.” “Come back soon, Little Frog,” Mother Wolf whispered. “For I loved thee more than any of my own cubs.” “I will come,” Mowgli promised. And so, as the first light of dawn began to redden the eastern sky, Mowgli walked down the hillside alone, carrying his fire pot, to meet the unknown world of Men."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Akela stands on the Council Rock above the wolf pack while Mowgli looks on"
    },
    {
     "n": 6,
     "title": "Kaa’s Hunting",
     "paras": [
      "To understand the fullness of Mowgli’s life in the forest, we must look back to the years before he was driven from the Pack—to a time when he was still a boy learning the Law from Baloo the bear. In those days, Mowgli loved nothing better than swinging through the high canopy of trees with the monkey people, the Bandar-log. Baloo had strictly forbidden Mowgli to have anything to do with them. “They have no Law,” Baloo would scold. “They have no speech of their own, only stolen words which they pick up when they listen to us. They have no leaders. They are foolish, filthy, and vain. They remember nothing for five minutes, and they chatter about being the great people of the jungle, but they accomplish nothing. We of the Jungle Law do not associate with the Bandar-log.”",
      "But one day, as Mowgli slept between Baloo and Bagheera in the shade of a Great Sal tree, two monkeys crept down through the branches. They saw how clever Mowgli was with his hands—how he could weave twigs into shelters to keep off the rain and tie creepers together—and they thought: “If we have this man-cub in our tribe, he can teach us how to build houses and weave basketwork, and then we shall be the wisest people in all the jungle!” So while Baloo slept, they dropped silently from the branches, seized Mowgli by his arms and legs, and dragged him up into the treetop canopy before he could shout for help.",
      "Mowgli was carried away through the tree-roads at a terrifying speed. The monkeys bounded from branch to branch, leaping across huge gaps between trees, carrying Mowgli with them. Though he was bruised and frightened, Mowgli knew he must get word to Baloo and Bagheera. Looking up into the blue sky above the tree canopy, he saw Chil the Kite soaring on wide wings. Mowgli called out in the Kite language: “We be of one blood, thou and I! Look where they carry me, Chil! Tell Baloo of the Seeonee Pack, and Bagheera of the Council Rock!” Chil nodded his sharp head, marking the direction the monkey troop was moving, and whistled back: “The mark shall be kept, Little Brother!”",
      "Meanwhile, down below, Baloo and Bagheera were almost wild with rage and grief. “Why did I not warn him against the Monkey People?” wailed Baloo, beating his head with his paws. “I have beaten him, but I have not saved him!” “They will carry him to the Cold Lairs,” Bagheera said grimly. “The monkey troop always gathers in that ruined city. But we two cannot fight the whole monkey tribe alone—there are thousands of them, and they are shameless. We need help.” “Who in the jungle does the monkey fear?” asked Baloo. Bagheera thought for a moment, his tail twitching. “Only one creature,” he said softly. “Kaa the Rock Python. He climbs as well as they can, he steals their young in the dark, and at his name their tails grow cold with fear. We must go to Kaa.”",
      "They found Kaa lying in the sun on a warm rock ledge, thirty feet of sleek, mottled brown and yellow snake, polishing his new skin after a long sleep. “Good hunting!” called Baloo. “Good hunting for us all,” answered Kaa, flicking his thin black tongue. “What brings the big bear and the black panther hunting together?” “We seek help against the Bandar-log,” said Bagheera. “Those insolent, grey-tailed tree-thieves have stolen our man-cub.” Kaa’s yellow eyes narrowed. “The Bandar-log?” he hissed. “They called me a yellow earthworm last month! They called me a fat, legless frog! I have a score to settle with those chatterers.”"
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Kaa the python coils around a branch above Mowgli, with Bagheera and Baloo nearby"
    },
    {
     "n": 7,
     "title": "The Cold Lairs",
     "paras": [
      "Just then, Chil the Kite flew down from the sky and perched on a branch above them. “I have followed the Bandar-log!” Chil cried. “They have taken the man-cub to the Cold Lairs—the ancient ruined city beyond the river! They mean to keep him there tonight.” “Good work, Chil!” shouted Baloo. “I will remember thee in my next kill!” Without losing another moment, Bagheera and Kaa set off at a rapid pace toward the ruined city, while poor heavy Baloo followed as fast as his thick legs could carry him.",
      "The Cold Lairs was an old, abandoned Indian city, buried deep in the heart of the jungle. Its palaces were broken, its marble terraces overgrown with wild vines, and its ancient temples filled with dust and weeds. No humans lived there now; only the Bandar-log inhabited the empty stone buildings. The monkeys had shut Mowgli inside a roofless stone room that had once been a queen’s pavilion. They crowded around him on the walls, screeching: “Look at us! We are great! We are wise! We are the most wonderful people in the jungle!” Mowgli tried to teach them how to weave branches together, but after two minutes the monkeys grew bored, lost interest, and began pulling each other’s tails and laughing foolishly. “Baloo was right,” Mowgli thought bitterly. “They have no Law and no memory.”",
      "As darkness fell, Bagheera reached the edge of the city first. Without waiting for Kaa or Baloo, the brave black panther bounded up the marble steps and sprang into the middle of the monkey troop. In an instant, hundreds of monkeys swarmed over Bagheera, biting, scratching, and pulling at his fur by sheer weight of numbers. Bagheera fought like a demon, striking out with his claws, but he was pinned against a wall by a sea of gray bodies. “To the tank, Bagheera!” shouted Mowgli from his stone room. “Get to the water!” Bagheera fought his way inch by inch toward a deep stone pool, diving in to shake off his attackers.",
      "Then Baloo arrived, roaring with fury, smashing monkeys right and left with his heavy paws like a thresher. But the monkey crowd was vast, and even Baloo was soon overwhelmed by scores of screeching chatterers. Mowgli was trapped inside the pavilion, unable to break through the thick stone walls to help his friends. Suddenly, a cold, dry rustle filled the terrace—a sound that made every monkey’s blood run cold. Kaa had arrived.",
      "The great serpent came pouring over the ruined wall like a rushing mountain stream. He struck left and right, his broad head striking with crushing force. At the sight of Kaa, the monkeys whimpered in pure horror. “Kaa! It is Kaa! Run!” they shrieked, scrambling up the broken pillars and hiding in the highest stone towers. Kaa struck the wall of Mowgli’s prison with his heavy snout, breaking the decayed masonry open with a single blow. Mowgli stepped out of the ruins, bruised but safe, and threw his arms around Bagheera’s neck. “Art thou hurt, Bagheera?” “I am battered, but alive,” purred the panther, licking his sore paws. “Thou owest thy life to Kaa, Little Brother.”",
      "Mowgli turned to the giant snake and spoke the Master Word: “We be of one blood, thou and I. I owe thee my life tonight, Kaa. My kill shall be thy kill if ever thou art hungry.” Kaa looked at the boy with his cold yellow eyes and nodded slowly. “Thou hast a brave heart, little frog, and a courteous tongue. Now stand back, all of you, and watch.” Kaa glided into the center of the moonlight terrace and began his famous Dance—swaying his body in mesmerizing loops and patterns. The monkeys in the walls looked down, helpless to turn their eyes away, completely spellbound by the snake’s power. Even Baloo and Bagheera felt their heads grow heavy until Mowgli pulled their ears to wake them. “Come away,” whispered Mowgli. “The night is over, and Kaa must feed.” They slipped away quietly into the jungle, leaving the Cold Lairs behind."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli stands in the ruined temple city of the Cold Lairs as monkeys close in and Baloo and Bagheera approach"
    },
    {
     "n": 8,
     "title": "The Return of Shere Khan",
     "paras": [
      "Now we return to Mowgli’s journey after he left the Council Rock with his fire pot. He walked down the mountain until he reached the cultivated plain, where he saw a village surrounded by a high thorn fence. As he approached the gate, the village children saw him and ran away screaming that a wild jungle demon had come down from the hills. Mowgli sat down near the gate, feeling lonely and confused by the strange sights and smells of human life. Soon, a group of villagers gathered at a safe distance, pointing at his scars and wild hair. A wealthy woman named Messua came forward, looked closely at Mowgli, and saw a resemblance to her own child who had been carried off by a tiger years before. “He looks like my Nathoo,” she whispered, her eyes filling with tears. She took Mowgli by the hand and led him into her mud hut, where she gave him warm milk and bread.",
      "Mowgli found life in the village strange and difficult. He hated sleeping under a wooden roof—it felt like a cage—so he slept on the grass outside the hut. He could not understand why men spoke so many lies, or why they cared so much about money. For months he worked hard to learn human speech and customs. The village elders assigned him the task of herding the village buffaloes every morning, driving them out to graze in the grassy plain near the Waingunga River and bringing them back at sunset.",
      "One afternoon, while Mowgli was resting under a tree in the pasture, a gray wolf stepped out of the tall grass. It was Gray Brother, Mother Wolf’s eldest cub! “Good hunting, Little Brother!” said Gray Brother. “I bring news. Shere Khan has gone away to heal his burned hide, but now he has returned. He swears he will wait for thee at the village gate when thou returnest at evening, and kill thee there!” Mowgli’s eyes flashed with fierce resolve. “Has he returned? Then it is time to fulfill my promise to the Council Rock! Where is he hiding now?” “He is lying at the bottom of the great dry ravine of the Waingunga, sleeping off a heavy meal of pig,” said Gray Brother. “And Akela is with me, ready to help.”",
      "Mowgli quickly formed a plan. He divided the village herd into two groups. Akela was instructed to drive the heavy, sharp-horned bulls around to the top head of the narrow ravine, while Mowgli and Gray Brother drove the cows and calves to the lower mouth. Shere Khan was trapped in the middle, between two sheer rock walls, sluggish from his heavy meal. When all was ready, Akela raised his voice in a terrible hunting howl from the upper rim of the ravine. The bulls heard the howl and caught the scent of the tiger below. Intoxicated with rage, the great herd of bulls charged down the narrow gorge like a thunderbolt, their hooves beating a deafening roar against the rocks.",
      "Shere Khan woke up and heard the thundering hooves approaching from above. He tried to leap up the steep rock walls, but his belly was full and his scorched legs failed him. He turned to flee toward the lower mouth of the ravine, but there stood Mowgli with the cows and calves, blocking the exit. Trapped between the two herds, the great tiger was trampled underfoot by the furious bulls. When the dust settled, Shere Khan, the terror of the Seeonee hills, lay dead on the floor of the ravine. Mowgli at once pulled out his hunting knife and began to skin the tiger, fulfilling his vow to bring Shere Khan’s hide to the Council Rock."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli faces Shere Khan in the misty jungle while Bagheera and the wolves look on"
    },
    {
     "n": 9,
     "title": "The Spring Running",
     "paras": [
      "While Mowgli was skinning the tiger, Buldeo, the foolish village hunter, came searching for the lost buffaloes. When he saw Mowgli standing over the dead tiger, his eyes widened in astonishment and greed. “The government offers a hundred rupees for the skin of Shere Khan!” Buldeo shouted. “Give me the knife, boy, and I will give thee a rupee for thy trouble!” “The skin is mine,” said Mowgli calmly, continuing his work. Buldeo grew furious and tried to strike Mowgli, but Akela sprang from the bushes and pinned Buldeo to the ground. The terrified hunter believed Mowgli was a sorcerer who commanded wild beasts. When Mowgli finally let him go, Buldeo ran back to the village, shouting that Mowgli was a demon wolf-man who worked black magic.",
      "When Mowgli drove the buffaloes back to the village that evening, carrying the heavy tiger skin on his shoulders, he found the villagers waiting at the gate with stones and guns. They pelted him with rocks, screaming: “Sorcerer! Jungle demon! Go back to thy beasts!” Only Messua tried to protect him, crying: “They are fools, my son! They know not what they do!” Mowgli turned his back on the village forever. “They drove me from the Pack, and now they drive me from the village,” he said bitterly. “Henceforth I hunt alone in the jungle.”",
      "He ran up to the Seeonee hills and spread Shere Khan’s great striped hide upon the Council Rock, where Akela and the remaining wolves assembled. Mother Wolf and Bagheera were there to see it. “Look well, O Wolves!” Mowgli called out. “Have I kept my word?” And the wolves, ashamed of their past foolishness, begged Mowgli to lead the Pack once more. But Mowgli shook his head. “No,” he said gently. “The jungle wolf and the village man have both cast me out. I will hunt alone.”",
      "For several years, Mowgli lived happily in the forest with his closest friends—Gray Brother, Bagheera, Baloo, and Kaa. He grew into a powerful young man, tall and strong, feared and respected by every creature from the mountains to the river. But as the seasons turned, a subtle change came over him. One spring—the Time of New Talk, when the jungle burst into bloom and every bird sang to its mate—Mowgli felt a strange restless sorrow in his heart. The spring running had begun, but for the first time in his life, Mowgli felt lonely and dissatisfied. He ran through the forest all night, trying to outrun the ache in his breast, but it followed him everywhere.",
      "His search brought him at last to the edge of the cultivated lands near a different village. There, in the red glow of a evening campfire, he saw Messua sitting outside her hut, holding a baby in her arms. When she saw Mowgli standing at the edge of the dark forest, tall and beautiful, she called out to him: “Nathoo! My son has returned!” Mowgli stepped into the light of the fire, feeling the old wild life falling away from him like a worn-out skin. Gray Brother and Bagheera stepped silently to the treeline behind him to bid him farewell.",
      "“Go, Little Brother,” whispered Bagheera, pressing his velvety head against Mowgli’s knee for the last time. “The jungle is no longer thy home. Thou hast paid thy debts, and the Law of the Jungle does not hold thee. Go to thine own people. But remember, whenever thou needest a friend, the jungle is still thine.” Mowgli wept as he embraced his old companions, and then he turned and walked toward the light of the human home."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mowgli runs along a sunny spring forest path among deer, birds and Bagheera"
    },
    {
     "n": 10,
     "title": "The White Seal",
     "paras": [
      "Far to the north, in the cold gray waters of the Bering Sea, lies the lonely island of Novastoshnah, where thousands of fur seals gather every summer to breed and raise their young. Among the vast herds, a seal named Sea Catch and his mate Matkah welcomed a very unusual pup. Unlike all the other black seal calves, this baby was pure snow-white from the tip of his nose to his hind flippers. They named him Kotick, which means “The White Seal.”",
      "Kotick grew up to be a strong, playful swimmer, learning how to catch fish, ride the giant ocean waves, and dodge the dreaded killer whales. But when he was a year old, a terrible event changed his life forever. A party of human seal-hunters arrived on the beaches of Novastoshnah with heavy clubs. They drove hundreds of young seals away from the shore into the grassy interior of the island. Kotick, curious and fearless because of his white coat, followed the driven herd to see where they were going. To his horror, he watched from behind a boulder as the men slaughtered the young seals for their rich fur skins.",
      "Heartbroken and filled with horror, Kotick rushed back to the beach and shouted to his elders: “The men are killing our brothers! We must leave this island and find a place where men never come!” But the old seals only laughed at him. “Seals have always been hunted,” they grunted sleepily. “There is no place on earth where men do not go. Go and play in the sea, young white one, and do not bother us with your foolish talk.”",
      "Kotick refused to accept their defeat. He swam to the beach where Sea Vitch, the giant, ugly walrus, lay resting on the rocks. “Is there any place in the ocean where men never come?” Kotick demanded. Sea Vitch grunted crossly: “Go ask the Sea Cows! They are the only ones who know human-free shores, if any such place exists. But where to find them, I cannot tell thee.”",
      "For five long years, Kotick roamed the vast oceans of the world, searching for the mysterious Sea Cows. He asked the albatrosses, the sharks, the whales, and the sea turtles, but none could help him. He explored hidden coves, arctic ice sheets, and tropical coral reefs, but everywhere he found traces of human hunters. At last, when he was exhausted and ready to give up hope, he met a herd of giant, slow-moving creatures feeding on sea kelp in a deep ocean trench. They were the Sea Cows—huge, gentle manatees that had never seen a human being.",
      "Kotick swam with them for days until they led him through a secret underwater tunnel carved into a massive wall of coral reefs. When Kotick emerged on the other side of the tunnel, he gasped in wonder. Before him lay a vast, beautiful bay surrounded by high, unclimbable cliffs of stone. The beaches were wide and sandy, protected from ocean storms by the outer reef, and surrounded by deep, clear water full of fish. Best of all, there was no way for human boats or hunters to cross the reef or climb down the cliffs!",
      "Kotick swam back to Novastoshnah as fast as his flippers could carry him, eager to share the wonderful news with his people. “I have found it!” he cried to the seal herds on the beach. “I have found a paradise where no man can ever harm us! Follow me!” But the seal elders sneered at him. “Thou art a foolish dreamer,” said a big, scarred bull seal. “We will not leave our ancient beaches for the tales of a white puppy.” “Then you must fight me for it!” declared Kotick, his white coat bristling with determination. Kotick challenged the strongest bulls on the beach, fighting with fierce courage until he had defeated them all. Impressed by his strength and convinced by his passion, thousands of young seals agreed to follow him. Kotick led them through the ocean waves to the secret bay, where the white seal and his descendants lived in peace and safety forever."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A white seal pup stands on a rocky shore among the other seals"
    },
    {
     "n": 11,
     "title": "Rikki-Tikki-Tavi",
     "paras": [
      "This is the story of the great war that Rikki-tikki-tavi fought through the bathrooms of the big bungalow in Segowlee cantonment. Rikki-tikki was a mongoose, with pink eyes, a quick pink nose, and a restless tail that fluffed up like a bottle-brush whenever he grew excited. One summer flood washed him out of the burrow where he lived with his father and mother, and carried him kicking and squealing down a roadside ditch. He was found lying unconscious in the garden path by a little English boy named Teddy, who carried him inside the house.",
      "Teddy’s mother wrapped Rikki-tikki in warm cotton wool and dried him by the fire. When Rikki woke up, he rubbed his nose, sneezed, and immediately began exploring the house. A mongoose is full of curiosity from the end of his whiskers to the tip of his tail, and the motto of the mongoose family is “Run and find out.” He climbed onto Teddy’s shoulder at dinner, looked into the ink-pot on the writing table, and slept that night in Teddy’s bed, staying awake to listen for every little rustle in the dark.",
      "The next morning, Rikki-tikki walked out into the large, sunny garden to see what was to be seen. In a high orange tree he heard Darzee the Tailor-bird and his wife singing a mournful song. “What is the matter?” asked Rikki-tikki. “We are very miserable,” said Darzee. “One of our sweet little babies fell out of the nest yesterday, and Nag ate him!” “That is very sad,” said Rikki, “but who is Nag?”",
      "From the thick grass at the foot of the bush came a cold, dry hiss—a sound that made Rikki jump two feet into the air. Out of the grass rose the great black hood of Nag, the five-foot cobra, his yellow eyes glowing with malice and the spectacle mark shining on the back of his neck. “I am Nag!” hissed the snake. “Look at me, and be afraid!” Rikki-tikki felt his eyes turn red with anger—the sign of a mongoose ready for a fight—but before he could leap, Nag’s wicked wife, Nagaina, struck at him from behind! Rikki jumped straight up, dodging her sharp fangs by an inch, and Nagaina hissed in frustration as she glided away into the high grass.",
      "Rikki knew he had entered a deadly war. That night, as he patrolled the dark hallway of the bungalow, he heard the faint scratch-scratch of snake scales against the brick floor. It was Nag and Nagaina whispering outside the bathroom drain. “When the house is empty,” Nagaina whispered to her husband, “the mongoose will leave, and we shall have the garden to ourselves again. Go in quietly, Nag, and bite the big man, the woman, and the child. When they are dead, the mongoose must go!”",
      "Nag slipped through the drain into the bathroom, coiling himself around the bottom of the water jar to wait for morning. Rikki-tikki crept in softly, his eyes glowing red in the dark. He knew that if he bit Nag on the thick body, the snake could turn and strike him; he must catch the cobra right at the back of the head, above the hood. With a sudden spring, Rikki clenched his teeth into Nag’s neck. Nag thrashed his head wildly, smashing against the earthenware jar and shaking Rikki back and forth like a rat in a dog’s mouth, but Rikki held on with closed jaws. Suddenly, a deafening blast echoed through the bathroom—Teddy’s father had been woken by the noise and had fired his gun straight into Nag’s body. Nag fell dead on the floor."
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Rikki-Tikki-Tavi the mongoose faces Nag the cobra and Nagaina in the garden of the bungalow"
    },
    {
     "n": 12,
     "title": "Toomai of the Elephants",
     "paras": [
      "To finish our story, Rikki-tikki had one last duty: he had to destroy Nagaina’s eggs before they hatched into a dozen deadly cobras. With Darzee’s wife acting as a distraction, Rikki found Nagaina’s nest hidden in the melon bed and smashed twenty-four eggs, leaving only one. Carrying the last egg in his mouth, he ran to the veranda where Nagaina was cornering Teddy and his parents at breakfast. Rikki lured Nagaina away from the family by threatening to crush her last egg. The desperate cobra snatched the egg in her mouth and fled into her underground hole, with Rikki-tikki clinging to her tail. The garden birds sang a funeral song, thinking Rikki was dead, but moments later the brave mongoose emerged from the dark hole, wiping his whiskers in the sun. Nagaina was dead, and the garden was safe at last.",
      "Now let us travel far to the hills of Assam, where big wild elephants are captured for the service of the Indian government. Little Toomai was a ten-year-old Indian boy whose father, Big Toomai, was a famous elephant driver. For three generations, Toomai’s family had driven Kala Nag, a magnificent, giant dark elephant who had served the government for nearly fifty years. Little Toomai loved Kala Nag more than anything in the world, and he spent his days riding on the giant elephant’s neck, helping his father in the elephant stockade where wild elephants were trapped and bound with heavy ropes.",
      "Petersen Sahib, the famous white officer in charge of all the elephant-catching operations, saw Little Toomai jump down into the arena among the wild, thrashing elephants to retrieve a driver’s dropped rope. Petersen Sahib was amazed by the boy’s courage, but he warned him: “The elephant stockade is no place for a little boy. Thou must stay in camp until thou hast seen the elephants dance! When thou hast seen the elephants dance, then thou mayest come back to drive elephants.” Everyone laughed at the officer’s joke, for all the hunters knew that the “Elephant Dance” was a grand fable—a story told to children. No human being had ever seen wild elephants dance, for it was said they gathered only in the deepest, secret glades of the jungle where no man could ever follow.",
      "That night, a strange silence fell over the elephant camp. The moon was bright and full above the mountain forests. Little Toomai was sleeping near Kala Nag’s leg when he felt the great elephant quietly slip his iron ankle-chain. Kala Nag stepped silently out of the camp, moving into the shadowed forest with the quietness of a ghost. Little Toomai sat up, caught hold of Kala Nag’s ear-ring, and scrambled up onto the elephant’s neck. “Take me with thee, Kala Nag!” whispered the boy.",
      "Kala Nag marched deep into the unexplored mountains for hours, gliding through thick bamboo jungles where no paths existed. At last, they reached a broad, flat open space surrounded by giant trees. The ground was hard as a wooden floor, smooth and clean. Soon, other wild elephants began arriving from every quarter of the forest, their grey backs glistening in the moonlight. Scores of wild bulls, cows, and calves emerged from the dark trees, gathering in the circular clearing until hundreds of elephants stood shoulder to shoulder.",
      "Suddenly, an old bull elephant raised his trunk and stamped his foot on the hard earth—boom! Then another elephant stamped, and another, until all the hundreds of giant beasts began moving together in a slow, rhythmic, thunderous shuffle! They rolled from side to side, stamping their heavy feet in unison—TRUMP-CRUSH! TRUMP-CRUSH!—making the very mountain shake beneath them. Little Toomai clung to Kala Nag’s neck in awe as the great Elephant Dance continued through the night, a majestic rhythm of wild nature that no human eye had ever witnessed.",
      "When dawn broke, the dance ended, and the wild herds vanished silently back into the misty jungle. Kala Nag carried Little Toomai back to the camp, where the exhausted boy fell into his father’s arms and told Petersen Sahib what he had seen. When Petersen Sahib inspected the secret glade and saw the freshly trampled earth, he knew the boy had spoken the truth. That evening, at a grand feast, the elephant drivers lifted Little Toomai onto Kala Nag’s head, shouting: “Toomai of the Elephants! He has seen what no man ever saw!”"
     ],
     "img": {
      "src": "assets/images/stories/the-jungle-book/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Little Toomai peers from behind a tree at a herd of wild elephants gathering in the misty forest"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "dracula",
   "title": "Dracula",
   "author": {
    "name": "Bram Stoker"
   },
   "category": "mystery",
   "genres": [
    "Horror",
    "Gothic"
   ],
   "language": "English",
   "edition": "Reading edition with chapter summaries.",
   "intro": "Jonathan Harker, a young English solicitor, travels to a ruined castle in the Carpathian Mountains to meet Count Dracula, and unknowingly sets an ancient evil loose on England. Professor Van Helsing and a band of hunters must follow the Count across Europe to destroy him.",
   "cover": {
    "src": "assets/covers/dracula.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Count Dracula",
     "role": "Ancient vampire lord of Castle Dracula",
     "img": {
      "src": "assets/images/stories/dracula/char-count-dracula.webp",
      "w": 341,
      "h": 302
     }
    },
    {
     "name": "Jonathan Harker",
     "role": "Young English solicitor who visits the castle",
     "img": {
      "src": "assets/images/stories/dracula/char-jonathan-harker.webp",
      "w": 339,
      "h": 302
     }
    },
    {
     "name": "Mina Harker",
     "role": "Jonathan’s wife, who pieces together the Count’s movements",
     "img": {
      "src": "assets/images/stories/dracula/char-mina-harker.webp",
      "w": 339,
      "h": 302
     }
    },
    {
     "name": "Dr. John Seward",
     "role": "Physician who runs the asylum near Carfax",
     "img": {
      "src": "assets/images/stories/dracula/char-dr-john-seward.webp",
      "w": 339,
      "h": 302
     }
    },
    {
     "name": "Lucy Westenra",
     "role": "Mina’s friend and the Count’s first victim in England",
     "img": {
      "src": "assets/images/stories/dracula/char-lucy-westenra.webp",
      "w": 341,
      "h": 297
     }
    },
    {
     "name": "Mina Murray",
     "role": "Jonathan’s fiancée and Lucy’s friend, before her marriage",
     "img": {
      "src": "assets/images/stories/dracula/char-mina-murray.webp",
      "w": 339,
      "h": 297
     }
    },
    {
     "name": "Prof. Abraham Van Helsing",
     "role": "Doctor and expert in occult phenomena",
     "img": {
      "src": "assets/images/stories/dracula/char-prof-abraham-van-helsing.webp",
      "w": 339,
      "h": 297
     }
    },
    {
     "name": "Renfield",
     "role": "Asylum patient who worships “the Master”",
     "img": {
      "src": "assets/images/stories/dracula/char-renfield.webp",
      "w": 339,
      "h": 297
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Castle of Shadows",
     "paras": [
      "Jonathan Harker, a young English solicitor, traveled into the dark heart of the Carpathian Mountains to meet Count Dracula. His employer had tasked him with completing the sale of an ancient estate named Carfax, located just outside London. As Jonathan’s carriage wound higher into the Transylvanian countryside, the lush green hills gave way to jagged peaks and shadows that seemed to stretch like clawed fingers across the twilight. The local peasants at the inns grew quiet whenever he mentioned his destination. They whispered fearful prayers, crossed themselves, and pressed crucifixes into his hands, begging him not to venture further into the mountain pass.",
      "Night fell swiftly, bringing with it a piercing wind and the distant, haunting howls of wolves. A private black carriage, driven by a tall driver whose face was hidden deep within a shadowy cloak, arrived to transport Jonathan through the Borgo Pass. Fireflies of blue light flickered strangely in the darkness along the road. Finally, the carriage pulled into the courtyard of a massive, ruined fortress—Castle Dracula. The stone walls were cold, looming against a starry, lightless sky. When the heavy wooden doors swung open, Jonathan was met by the Count himself: a tall, pale old man dressed entirely in black, possessing ears as pointed as a bat’s and iron-strong hands with unnaturally sharp fingernails."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jonathan Harker stands on a rocky mountain path and looks up at Castle Dracula, high above the misty Carpathian forest"
    },
    {
     "n": 2,
     "title": "A Prisoner in the Castle",
     "paras": [
      "In the initial days of his stay, Jonathan was treated with formal courtesy, yet an unsettling terror quietly mounted within him. He noticed that Castle Dracula contained no mirrors, and when he inadvertently caught the Count off guard while shaving, he discovered to his horror that the old man cast no reflection whatsoever. When Jonathan cut his own neck, Dracula stepped forward with a ravenous, wild glare, only recoiling when his fingers touched the crucifix hanging from Jonathan’s neck. Soon after, Jonathan realized that every door leading out of the castle was firmly locked; he was not an honored guest, but a helpless prisoner.",
      "One evening, ignoring the Count’s stern warning to sleep only in his designated chamber, Jonathan wandered into an abandoned wing of the fortress and fell into a deep slumber. He awoke to find three ghostly, beautiful women standing over him. Their eyes burned with dangerous hunger, and their red lips parted to reveal sharp white teeth. As one leaned down toward his throat, Dracula burst into the room in a tempest of rage, forcefully driving the women back. “This man belongs to me!” the Count hissed, throwing them a writhing leather bag containing a small child to appease their terrifying appetite. Horrified, Jonathan realized he was trapped among monsters. Days later, he looked out his window and saw Dracula crawling down the outer castle wall like a giant lizard, dressed in Jonathan’s own clothes to create the illusion that the visitor had departed. Desperate for survival, Jonathan resolved to scale the dangerous cliffs and escape, or die trying."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jonathan holds a candle in a stone corridor beside a locked wooden door while Count Dracula waits in the shadows"
    },
    {
     "n": 3,
     "title": "The Voyage of the Demeter",
     "paras": [
      "While Jonathan struggled to escape Transylvania, a dark cloud gathered over the English coastal town of Whitby. A Russian schooner, the Demeter, sailed across the Black Sea and through the Mediterranean, carrying a mysterious cargo: fifty heavy wooden boxes filled with moldering earth from Castle Dracula. Shortly after leaving port, a dense, unnatural fog enveloped the ship, bringing with it an overwhelming sense of dread. One by one, members of the crew began to vanish without a trace during their night watches, leaving the remaining sailors paralyzed with fear.",
      "The captain’s log recorded the growing terror on board. A strange, shadowy figure was seen lurking among the cargo boxes in the hold—a tall man who moved like a phantom. As the days passed, the crew was systematically slaughtered until only the captain remained. Desperate to guide his vessel into port, he bound his hands to the ship’s wheel with a rosary, resolving to die at his post. When the Demeter finally crashed against the piers of Whitby during a violent, sudden tempest, the townspeople rushed aboard. They found only the dead captain tied to the wheel and the bloody captain’s log. As the ship ran aground, a giant, spectral black dog leaped from the deck, bounded up the cliffside toward the local graveyard, and vanished into the fog."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The Demeter, its sails in tatters, tosses on a stormy sea as a cloaked figure stands at the bow"
    },
    {
     "n": 4,
     "title": "The Mysterious Patient",
     "paras": [
      "In England, Mina Murray waited anxiously for news of her fiancé, Jonathan, whose letters had grown brief and strangely unnatural before stopping completely. She visited her dear friend, Lucy Westenra, in Whitby. Lucy was a radiant, kind-hearted young woman who had recently received three marriage proposals in a single day: one from Arthur Holmwood, the wealthy nobleman she chose to marry; another from Quincey Morris, an adventurous American landowner; and a third from Dr. John Seward, a dedicated physician who managed a lunatic asylum near Carfax.",
      "At Dr. Seward’s asylum, an extraordinary patient named Renfield began displaying increasingly bizarre behavior. Renfield was obsessed with consuming living creatures, starting with flies, then spiders, and eventually birds, believing that ingesting their lives granted him spiritual power and vitality. Dr. Seward documented Renfield’s erratic mood swings, noting that his madness seemed connected to the arrival of an unseen master. Renfield would stare out his window toward the deserted Carfax estate, chanting worshipfully about the arrival of “the Master” who would bring him endless life. Unknown to the doctors, Count Dracula had settled into Carfax, using his earth-filled boxes as resting places to replenish his dark strength."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Lucy lies pale in her bed while Professor Van Helsing holds a crucifix and a monstrous shadow looms on the wall"
    },
    {
     "n": 5,
     "title": "The Arrival of the Count",
     "paras": [
      "Count Dracula’s presence in England quickly manifested in subtle, sinister ways. In Whitby, Lucy Westenra began sleepwalking, drawn toward the dark cliffside where the ancient graveyard stood overlooking the sea. One night, Mina awoke to find Lucy’s bed empty. Panic-stricken, Mina ran out into the chilly night air to search for her friend. She discovered Lucy lying unconscious on a bench near the churchyard ruin, a dark, shadowy figure leaning over her. As Mina approached, the figure seemed to dissolve into the night, but when Mina wrapped a shawl around her trembling friend, she noticed two tiny red puncture marks on Lucy’s pale neck.",
      "Over the following days, Lucy grew increasingly weak and bloodless, her face pale and her breathing labored. Mina, unaware of the supernatural horror unfolding around them, attempted to care for her while managing her own relief upon receiving a letter from a hospital in Budapest. Jonathan had survived his escape from Castle Dracula, though he was suffering from severe brain fever and trauma. Mina immediately traveled to the continent to nurse Jonathan back to health. They were quietly married in the hospital, and Jonathan entrusted his written journal to Mina, afraid to read the terrifying memories recorded within its pages."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Count Dracula stands beside a black carriage on a fog-bound London street at night"
    },
    {
     "n": 6,
     "title": "Lucy’s Strange Illness",
     "paras": [
      "Back in England, Lucy’s condition deteriorated rapidly upon her return to London. Her fiancé, Arthur Holmwood, turned to Dr. John Seward for help. Confused by Lucy’s severe anemia and sudden, drastic relapses, Dr. Seward sent an urgent telegram to his former mentor, Professor Abraham Van Helsing of Amsterdam, a brilliant doctor, philosopher, and expert in rare diseases and occult phenomena.",
      "Upon examining Lucy, Van Helsing immediately recognized the horrifying signs of a vampire’s victim: extreme blood loss, mark-stained neck wounds, and an unnatural dread of the dark. He ordered immediate blood transfusions to save her life. Arthur, Dr. Seward, Quincey Morris, and Van Helsing each gave their own blood to sustain the dying girl. Van Helsing then transformed her bedchamber, hanging strings of fragrant garlic flowers around her neck and sealing the doors and windows. He warned Lucy never to remove the flowers. However, Lucy’s mother, ignorant of their purpose, removed the garlic during the night because of its strong smell. That very night, a massive bat smashed through the bedroom window, terrorizing Lucy and driving her mother to a fatal heart attack. Without protection, Lucy was drained of her remaining life force."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Lucy in a white nightdress stands in a moonlit garden while a dark figure waits by the gate"
    },
    {
     "n": 7,
     "title": "The Hunter of Vampires",
     "paras": [
      "When Van Helsing returned to the house, he found Lucy on the verge of death. Her sharp canine teeth had grown noticeably longer, and her eyes burned with a strange, predatory light. When Arthur moved to kiss her goodbye, Van Helsing forcibly dragged him back, protecting him from her deadly bite. Shortly after, Lucy passed away, and her grieving friends laid her to rest in the family vault. However, peace did not follow her burial. Reports soon began circulating in local newspapers about a mysterious “Bloofer Lady” who stalked Hampstead Heath at night, luring young children away and leaving small mark wounds on their necks.",
      "Van Helsing knew the horrific truth: Lucy had transformed into an Undead monster. He summoned Dr. Seward, Arthur, and Quincey to the graveyard at midnight. Opening Lucy’s tomb, they found the coffin empty. Hours later, they witnessed a terrifying sight: Lucy, glowing with a demonic beauty, carrying a frightened child through the shadows. Van Helsing stepped forward holding a sacred communion wafer and a golden crucifix, driving the creature back into her tomb. He forced the men to face the terrible reality that they had to destroy the monster to save Lucy’s eternal soul."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Professor Van Helsing in his study with an old book, a crucifix and his tools, while a shadow lurks at the moonlit window"
    },
    {
     "n": 8,
     "title": "The Truth Revealed",
     "paras": [
      "The following night, the four men re-entered the tomb to perform a mercy driven by love and duty. While Lucy lay sleeping in her coffin, Arthur held a heavy wooden stake over her heart, driving it deep into her chest with a mallet as Van Helsing recited sacred prayers. The creature writhed and let out a bloodcurdling scream before finally coming to rest. Her face returned to its natural, peaceful beauty. Before sealing the tomb forever, Van Helsing severed the corpse’s head and filled its mouth with garlic, ensuring her soul was liberated.",
      "Meanwhile, Jonathan and Mina Harker returned to London. Mina read Jonathan’s journal and realized that the dark entity he had encountered in Transylvania was responsible for Lucy’s tragedy. Mina transcribed Jonathan’s notes and combined them with Dr. Seward’s diaries and news clippings, constructing a complete timeline of Dracula’s movements. Van Helsing met with Mina and Jonathan, validating Jonathan’s harrowing experiences and praising Mina’s brilliant mind. The group united, forming a dedicated band of hunters sworn to destroy Count Dracula and cleanse his evil from the world."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jonathan, Van Helsing and Mina study a journal and papers by candlelight while Dracula watches from the window"
    },
    {
     "n": 9,
     "title": "The Blood of the Undead",
     "paras": [
      "The hunters began tracking the earth-filled boxes that Dracula required to survive. They forced their way into Carfax, using crucifixes and holy water to sanctify the dark property, and discovered that many of the fifty boxes had been moved to other properties across London. However, while the men were out investigating these secondary locations, Count Dracula mounted a vengeful counter-attack. Aided by the lunatic Renfield, whom he eventually crushed in a violent rage when the patient tried to warn the doctors, Dracula slipped into Dr. Seward’s asylum where Mina was resting.",
      "The men returned to find a horrifying scene in Mina’s bedchamber: Jonathan lay unconscious, and Dracula stood over Mina. The Count held her by the neck, his shirt torn open, forcing her face against a wound in his chest to drink his vampire blood. “You are now flesh of my flesh, blood of my blood!” Dracula sneered before vanishing into thin air as Van Helsing raised a crucifix. Mina wept in agony, realizing she was infected with the vampire’s curse. When Van Helsing touched a piece of sacred host to her forehead to bless her, it burned her skin, leaving a deep red scar—a cruel mark of her uncleansed state."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Count Dracula looms in a stone chamber behind Van Helsing and Jonathan, with a crucifix and papers on a blood-stained table"
    },
    {
     "n": 10,
     "title": "The Hunt Begins",
     "paras": [
      "Despite the curse hanging over her, Mina’s psychic connection to Dracula created a powerful weapon for the hunters. Van Helsing realized that under hypnosis at dawn and dusk, Mina could perceive what the Count saw and heard. Through her visions, they discovered that Dracula was fleeing England. Realizing his nests in London had been purified with holy water and wild garlic, the Count had boarded a sailing vessel, the Czarina Catherine, bound for Varna, taking his last remaining box of consecrated earth with him.",
      "The hunters knew they had to destroy Dracula before he reached his mountain sanctuary, or Mina would irrevocably transform into a vampire upon his return to Castle Dracula. Armed with rifles, knives, and holy relics, the group traveled across Europe by steam train, arriving at Varna to intercept the ship. However, Dracula used his dark mastery over wind and fog to bypass Varna entirely, redirecting the vessel up the Danube River toward the port of Galatz. Undeterred, the hunters recalculated their strategy, splitting into three pairs to track down the Count’s escape route through the Transylvanian wild."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The hunters wait on a rainy railway platform as a steam train arrives and Dracula watches from a distance"
    },
    {
     "n": 11,
     "title": "Across the Frozen Lands",
     "paras": [
      "The pursuit grew desperate as winter set in, covering the Carpathian wilderness in ice and snow. Jonathan and Lord Godalming (Arthur) commandeered a steam launch to pursue the riverboats carrying Dracula’s box, while Quincey Morris and Dr. Seward rode along the riverbanks on horseback. Van Helsing and Mina traveled directly toward Castle Dracula by carriage, racing against time as Mina’s condition worsened. Her appetite vanished, her skin turned pale, and her eyes took on a strange, distant glare as the vampire’s influence grew stronger with each mile they drew closer to his lair.",
      "Upon reaching the base of the castle, Van Helsing drew a protective circle in the snow around Mina using crushed communion wafers. That night, the three female vampires who had once haunted Jonathan appeared out of the mist, calling to Mina to join them as their sister. Protected by the holy circle, Van Helsing held them at bay. The next morning, leaving Mina safe inside the sanctuary, Van Helsing entered Castle Dracula alone. He discovered the tombs of the female vampires and drove stakes through their hearts, cleansing the castle of their dark presence forever."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jonathan and Van Helsing stand by a carriage in a snowstorm, with the castle glowing red on a distant peak"
    },
    {
     "n": 12,
     "title": "The Final Confrontation",
     "paras": [
      "As the final sunset approached, all the hunters converged on the snowy trail leading to the castle gates. A heavy wagon driven by armed Szgany gypsies sped toward the fortress, carrying the final wooden box containing Count Dracula. The sun dipped low toward the horizon; if Dracula remained unslain past sunset, his full powers would return, and Mina would be lost forever. Jonathan, Quincey, Arthur, and Seward engaged the gypsies in a fierce battle, fighting through gunfire and flashing blades.",
      "Quincey Morris suffered a fatal knife wound in the attack, but he did not falter. With desperate strength, Jonathan leaped onto the wagon and pried open the wooden lid of the box, exposing Count Dracula. The vampire opened his eyes, a look of horrific triumph gleaming within them as the last rays of sunlight faded. But before the sun could fully set, Jonathan drove his Kukri knife through Dracula’s neck, severing his head, while the dying Quincey plunged his bowie knife into the monster’s heart. In an instant, Dracula’s body crumbled into fine dust, floating away on the mountain wind. The scar vanished from Mina’s forehead, leaving her skin pure once more. Looking upon his friends, Quincey died with a peaceful smile, knowing their sacrifice had saved Mina and freed the world from darkness forever."
     ],
     "img": {
      "src": "assets/images/stories/dracula/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jonathan, knife in hand, confronts Dracula beside a wrecked wagon in the snow as the other hunters approach"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "don-quixote",
   "title": "Don Quixote",
   "author": {
    "name": "Miguel de Cervantes"
   },
   "category": "society",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Illustrated adaptation in 12 chapters.",
   "intro": "Alonso Quijano, a country gentleman of La Mancha, reads so many chivalric romances that he sets out as the knight Don Quixote, with his faithful squire Sancho Panza, to revive knight-errantry in a world very different from the one in his books.",
   "cover": {
    "src": "assets/covers/don-quixote.webp",
    "w": 480,
    "h": 716
   },
   "characters": [
    {
     "name": "Don Quixote",
     "role": "The knight of La Mancha, once Alonso Quijano",
     "img": {
      "src": "assets/images/stories/don-quixote/char-don-quixote.webp",
      "w": 317,
      "h": 260
     }
    },
    {
     "name": "Sancho Panza",
     "role": "The peasant who becomes his squire",
     "img": {
      "src": "assets/images/stories/don-quixote/char-sancho-panza.webp",
      "w": 317,
      "h": 285
     }
    },
    {
     "name": "Dulcinea del Toboso",
     "role": "The lady of Don Quixote’s imagination",
     "img": {
      "src": "assets/images/stories/don-quixote/char-dulcinea-del-toboso.webp",
      "w": 317,
      "h": 285
     }
    },
    {
     "name": "The Priest",
     "role": "Parish priest and friend of Alonso Quijano",
     "img": {
      "src": "assets/images/stories/don-quixote/char-the-priest.webp",
      "w": 317,
      "h": 277
     }
    },
    {
     "name": "The Barber",
     "role": "Local barber and friend of Alonso Quijano",
     "img": {
      "src": "assets/images/stories/don-quixote/char-the-barber.webp",
      "w": 317,
      "h": 277
     }
    },
    {
     "name": "The Duke",
     "role": "Host of the pranks at his palace",
     "img": {
      "src": "assets/images/stories/don-quixote/char-the-duke.webp",
      "w": 317,
      "h": 277
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Knight of La Mancha",
     "paras": [
      "In a village of La Mancha, in Spain, there lived an impoverished country gentleman named Alonso Quijano. Approaching fifty years of age, he led a quiet life alongside his niece, his housekeeper, and a young servant boy. His routine was entirely ordinary until an overwhelming passion seized his mind: the reading of chivalric romances. Day and night, he immersed himself in tales of noble knights, enchanted castles, fiery dragons, and helpless maidens. So deeply did he enter these fictional worlds that his imagination gradually eclipsed his reason.",
      "Believing that the honor of his nation and his own glory demanded it, he decided to revive the forgotten order of knight-errantry. To fulfill this noble duty, he polished his grandfather’s rusted armor, fashioned a crude visor out of cardboard, and inspected his old, worn-out horse. Though the animal was frail and skinny, Alonso viewed him as a magnificent warhorse fit for Alexander the Great, bestowing upon him the grand name Rocinante.",
      "Every knight-errant required a title suitable for romantic legends, so he renamed himself Don Quixote de La Mancha. Furthermore, he recognized that a true knight must possess a lady to whom he could dedicate his heroic victories. He chose a sweet, hardworking peasant girl from the nearby village of Toboso named Aldonza Lorenzo. Unaware of his affection, she was transformed in his mind into the sublime princess Dulcinea del Toboso. Equipped with armor, a horse, and a lady, Don Quixote set out into the countryside."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Alonso Quijano reads chivalric romances among piles of books in his study, with old armour nearby"
    },
    {
     "n": 2,
     "title": "The First Adventure",
     "paras": [
      "Riding alone across the hot plains under the blazing summer sun, Don Quixote realized with sudden panic that he had never been officially dubbed a knight. According to the ancient rules of chivalry, he had no right to engage other knights in combat until he received the sacred honor. Nevertheless, he pressed forward, confident that fortune would provide an opportunity to remedy his situation before nightfall.",
      "At dusk, he spotted a modest roadside inn. In his elevated state of mind, the humble establishment immediately transformed into a fortified castle complete with golden towers and a drawbridge. Two poor women standing near the entrance appeared to him as noble maidens resting at the castle gates. When they laughed at his absurd armor and archaic speech, he remained remarkably polite, attributing their laughter to their modesty.",
      "The innkeeper, a practical and clever man, quickly perceived the guest’s mental imbalance. Rather than arguing with the armed stranger, he chose to play along with the delusion for his own entertainment and peace. He agreed to host Don Quixote and promised to bestow the formal order of knighthood upon him the following morning, provided the knight observed a night vigil over his weapons."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote rides alone across the golden plains toward an inn in the distance"
    },
    {
     "n": 3,
     "title": "The Inn and the Knighthood",
     "paras": [
      "Don Quixote placed his suit of armor into a stone trough near the water well in the inn’s courtyard. Pacing back and forth with his lance held high, he began his solemn vigil under the moonlight. The other guests looked on with amusement from the windows, whispering about the strange man in rusted metal who guarded his gear with such absolute devotion.",
      "Late into the night, a mule driver approached the trough to draw water for his animals. Viewing the man’s attempt to move the armor as a direct insult to his honor, Don Quixote raised his heavy lance and struck the driver on the head, knocking him unconscious. Moments later, a second driver approached, only to suffer a similar fate. The angry friends of the injured men began throwing stones at the knight from across the yard.",
      "Fearing further violence and eager to rid his inn of the lunatic, the innkeeper intervened immediately. He declared that the vigil was complete and produced an accounting ledger from which he pretended to read sacred prayers. Striking Don Quixote on the neck with the flat of his sword, he declared him a knight. Exhausted yet deeply satisfied, Don Quixote mounted Rocinante and rode out into the dawn to seek chivalric glory."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The innkeeper touches a sword to the kneeling Don Quixote as onlookers watch in a lantern-lit courtyard"
    },
    {
     "n": 4,
     "title": "The Merchant’s Challenge",
     "paras": [
      "Shortly after departing the inn, Don Quixote encountered a group of silk merchants traveling from Toledo with their servants. Seeing them approach, the knight reined in his horse, stood firmly in the center of the road, and demanded that they halt. He declared that no traveler could pass unless everyone present admitted that Dulcinea del Toboso was the most beautiful woman in the world.",
      "The merchants, amused by his bizarre outfit and speech, requested a portrait of the lady so they might evaluate her beauty fairly. Don Quixote exploded with indignation, asserting that the true test of their faith lay in affirming her perfection without needing proof. When a servant offered a mocking remark about Dulcinea, the knight charged forward with his lance extended.",
      "However, Rocinante stumbled halfway through the charge, sending Don Quixote tumbling to the dusty road. Weighed down by his heavy iron suit, he was completely unable to stand up. Enraged by the knight’s aggression, one of the merchant’s mule drivers snatched Don Quixote’s lance, broke it over his knee, and beat the fallen idealist severely before the party continued their journey."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote on horseback confronts a group of travelling merchants on a dusty road"
    },
    {
     "n": 5,
     "title": "The Return Home",
     "paras": [
      "Lying battered in the dust, Don Quixote began reciting romantic verses from his favorite stories, comparing his suffering to that of captured heroes. A neighbor from his home village, passing by with a wagon of wheat, recognized the bruised nobleman. The kindly farmer helped him mount his donkey and carried his broken armor back to his estate under the cover of darkness to protect his dignity.",
      "At home, Don Quixote’s housekeeper and niece were weeping alongside his friends, the parish priest and the local barber. Convinced that the books of knighthood had driven Alonso mad, the priest and barber performed a drastic rescue: they searched his library and threw dozens of chivalric novels into a courtyard fire, walled up the doorway, and claimed a malevolent wizard had stolen the library.",
      "When Don Quixote awoke, he was told that the enchanter Frestón had flown into the house on a dragon and banished his beloved books. The knight accepted this explanation without hesitation, viewing it as clear evidence that the dark sorcerer feared his knightly prowess. Rather than giving up his quest, he immediately began planning his second expedition into the world."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A neighbour helps the battered Don Quixote home to his village, with Rocinante and a donkey following"
    },
    {
     "n": 6,
     "title": "The Faithful Squire",
     "paras": [
      "Don Quixote realized that no true knight could travel the world without a loyal squire to carry his provisions and assist in battle. He approached a neighboring peasant named Sancho Panza, a poor, honest father who possessed a sharp, practical wit and an abundance of folk wisdom, though he was entirely uneducated.",
      "To persuade Sancho to leave his family, Don Quixote promised him immense wealth and land. Most enticingly, he swore that they would conquer a rich island, appointing Sancho as its absolute governor. Intrigued by the prospect of nobility and fortune, the peasant agreed to join the adventure, mounting his beloved donkey, Dapple, despite Don Quixote’s mild reservations regarding whether historic squires rode donkeys.",
      "Under cover of night, the pair slipped out of the village without telling anyone. As they rode across the open countryside, Sancho frequently reminded his master of the promised island, while Don Quixote lectured his companion on chivalric honor and duty, establishing a partnership between high-minded idealism and down-to-earth common sense."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote speaks to Sancho Panza beside a donkey in the village street"
    },
    {
     "n": 7,
     "title": "The Windmill Giants",
     "paras": [
      "As they crossed the plain of Montiel, thirty massive windmills came into view. Don Quixote halted Rocinante, pointed his finger toward the horizon, and declared that fortune was favoring their enterprise by presenting thirty monstrous giants for them to slay in combat, thereby enriching themselves and serving God.",
      "Sancho looked across the field in confusion and begged his master to see reality, explaining that the structures were merely wooden windmills with rotating sails powered by the breeze. Don Quixote scoffed at his squire’s apparent cowardice, claiming that fear was clouding Sancho’s judgment. Lowering his lance and spurring Rocinante into a gallop, the knight charged blindly into battle.",
      "Just as he struck the sail of the first windmill, a sudden gust of wind swung the timber blade with violent force. The lance shattered to pieces, and Don Quixote along with his horse were hurled across the field. Sancho rushed to his master’s side to find him bruised and exhausted. Undeterred, Don Quixote insisted that the sorcerer Frestón had transformed the giants into windmills at the last second to deny him the glory of victory."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote charges at the windmills with his lance while Sancho calls out from his donkey"
    },
    {
     "n": 8,
     "title": "The Golden Age and the Goatherds",
     "paras": [
      "That evening, the knight and squire took refuge with a group of humble goatherds who shared their simple meal of dried meat and acorns around a campfire. Moved by their hospitality, Don Quixote held up a handful of acorns and delivered a passionate speech about the lost Golden Age of humanity, when peace, truth, and selflessness ruled the earth without the greed of modern times.",
      "The goatherds listened in quiet wonder, unable to understand his lofty language but deeply moved by his genuine sincerity and noble spirit. Later, the travelers attended the funeral of Marcela, a wealthy and educated young woman who had abandoned her family wealth to live as a shepherdess in the wilderness, seeking freedom and peaceful solitude.",
      "When young men accused Marcela of cruelty because her suitors suffered from unrequited love, Don Quixote stepped forward to defend her honor. He declared that no woman had an obligation to yield her heart to someone simply because he loved her. Impressed by her right to independence, the knight forcefully protected her from angry pursuers as she retreated back into the surrounding forest."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote speaks to the goatherds around their campfire in the hills"
    },
    {
     "n": 9,
     "title": "The Knight of the Lions",
     "paras": [
      "Months later, during their second grand journey across Spain, Don Quixote and Sancho encountered a large carriage carrying two fierce, caged African lions sent as a gift to the King. Believing that fate was offering him his greatest challenge yet, the knight ordered the terrified keeper to open the cages so he could face the beasts in hand-to-hand combat.",
      "Sancho wept and pleaded with his master not to commit such madness, but Don Quixote remained resolute, standing proudly with drawn sword in front of the open cage door. The keeper reluctantly lifted the iron gate of the largest cage. The massive male lion stretched, yawned calmly, looked at Don Quixote with mild curiosity, and turned around to lie down, exposing his rear to the knight.",
      "Seeing that the lion refused to fight, Don Quixote declared himself the victor, claiming that his courage had intimidated the fierce king of beasts. To mark this supreme achievement, he formally changed his title from “The Knight of the Sorrowful Face” to “The Knight of the Lions,” instructing the carriage driver to report his fearless victory to the royal court."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote faces a lion stepping out of its open cage on a wagon while Sancho looks on"
    },
    {
     "n": 10,
     "title": "The Enchanted Journey",
     "paras": [
      "Continuing their travels, knight and squire reached the banks of the Ebro River, where they discovered an empty wooden boat tied to a tree. Don Quixote immediately declared that the vessel was an enchanted craft destined to carry them across the water to rescue a knight in distress or a captive princess located thousands of leagues away.",
      "They stepped into the boat, leaving their animals tied on the riverbank despite Sancho’s vocal protests. Drifted downstream by the current, the boat quickly drifted toward a set of massive watermills. The millers, covered in white flour, ran out with long poles to prevent the boat from being dragged beneath the giant water wheels.",
      "Seeing the flour-dusted workers, Don Quixote drew his sword and shouted that they were evil monsters holding a captive soul in their fortress. The millers managed to push the boat away, but it overturned, dumping knight and squire into the icy river. Rescued by the millers, Don Quixote paid for the damaged boat, lamenting that the world was so enchanted that every noble rescue ended in disaster."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote and Sancho walk a moonlit rocky path beside a stone bridge and a ruined chapel"
    },
    {
     "n": 11,
     "title": "The Duke’s Court",
     "paras": [
      "Eventually, Don Quixote and Sancho met a Duke and Duchess who had read published stories about their previous misadventures. Fascinated by the eccentric pair, the aristocrats invited them to their grand palace, resolving to stage elaborate theatrical pranks for their own amusement, treating Don Quixote with mock reverence as a famous hero.",
      "As part of their games, the Duke appointed Sancho Panza as the governor of a small town called Barataria, pretending it was a distant island. To everyone’s astonishment, the simple peasant displayed extraordinary wisdom, fairness, and common sense on the judicial bench, resolving complex legal disputes with natural intelligence. However, after seven days of starvation diets enforced by a court doctor and a staged night attack, Sancho voluntarily resigned, declaring that he preferred his humble freedom to the burdens of political power.",
      "Meanwhile, Don Quixote realized that the luxurious comfort of the palace was softening his spirit. He recognized that true chivalry required hardship and struggle rather than pampered ease. Thanking the Duke and Duchess for their hospitality, he reunited with Sancho, and the two friends departed the estate to resume their life on the open road."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Don Quixote and Sancho are welcomed by the Duke and Duchess in a palace courtyard"
    },
    {
     "n": 12,
     "title": "The Last Dream of a Knight",
     "paras": [
      "Arriving in Barcelona, Don Quixote was challenged to combat on the beach by the “Knight of the White Moon.” Unbeknownst to Quixote, this rival was actually Sansón Carrasco, a young scholar from his home village who wished to cure his madness. The condition of the duel was absolute: if Don Quixote lost, he had to lay down his arms and return home for one full year.",
      "Carrasco easily knocked the weakened idealist from his horse. Even with a lance pointed at his throat, Don Quixote refused to deny his ideal, whispering that Dulcinea was the most beautiful woman in the world and that he would rather die than betray her. Satisfied with his victory, Carrasco ordered him only to honor his promise to return home.",
      "Defeated and heartbroken, Don Quixote returned to his village. Soon after his arrival, he fell ill with a severe fever. When he awoke after days of sleep, his mind was entirely clear; the fever had broken his obsession with chivalry. Calling himself Alonso Quijano once more, he denounced knight-errantry as foolish fantasy, apologized to Sancho for leading him astray, and wrote his final will. Sancho wept at his bedside, begging his master not to give up, suggesting they dress as shepherds and set out on new gentle adventures. Smiling warmly at his loyal squire, Alonso Quijano closed his eyes and passed away in peace, leaving behind a legacy of pure idealism and immortal friendship."
     ],
     "img": {
      "src": "assets/images/stories/don-quixote/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Sancho holds the hand of the dying Alonso Quijano as his household looks on"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "momotaro-the-peach-boy",
   "title": "Momotaro — The Peach Boy",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/momotaro-the-peach-boy.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "Momotaro — The Peach Boy",
     "paras": [
      "Long ago, in a quiet village surrounded by rolling green hills, lived an honest old man and his kind wife. Though they lived peacefully and worked hard every day, they carried a quiet sadness in their hearts, for they had never been blessed with children. One morning, while the old man went into the mountains to collect firewood, his wife went down to the river to wash clothes. As she stood beside the clear, rushing water, she saw something remarkable floating downstream. It was a giant peach, far larger than any she had ever seen, glowing with a soft pink light as it drifted gently in the current.",
      "Using a long bamboo stick, she carefully pulled the enormous fruit to the riverbank and carried it home to share with her husband. When the old man returned from the forest, he was astonished by the size of the peach. But just as he brought a knife to split it open, the peach parted naturally from within. Out stepped a healthy, beautiful baby boy. The elderly couple fell to their knees in joy, thanking the heavens for such a miraculous gift. They named him Momotaro, which means “Peach Boy.”",
      "Momotaro grew rapidly, proving to be stronger, braver, and kinder than any other youth in the village. As the years passed, terrible news reached their peaceful valley. On a distant, jagged island known as Onigashima, a band of fierce ogres had gathered. They raided coastal villages, stealing treasures, burning crops, and spreading fear throughout the land. Deeply moved by the suffering of the villagers, Momotaro announced that he would travel to Onigashima to defeat the demons and restore peace.",
      "Though worried for his safety, his foster parents supported his noble quest. His mother prepared a sack of delicious, energy-giving millet dumplings for his journey, wrapping them carefully for the long road ahead. Dressed in fine clothes and carrying a sword, Momotaro bade farewell to his loving home.",
      "As Momotaro walked along the mountain path, he met a spotted dog who barked fiercely at him. But when the dog smelled the delicious dumplings, he bowed low and asked for one. Momotaro shared his food, and in return, the dog promised to follow him as a loyal companion. Farther along the trail, they encountered a clever pheasant and a nimble monkey. Momotaro shared his dumplings with each of them, earning their trust and sworn loyalty.",
      "Together, the four companions reached the stormy ocean and boarded a sturdy boat to cross over to Onigashima. When they arrived at the dark, rocky fortress, the pheasant flew over the high stone walls to unbolt the massive iron gates from the inside. Momotaro and the monkey rushed in, while the dog guarded the exit. A fierce battle broke out, but Momotaro’s strength and the coordinated teamwork of his animal allies overwhelmed the ogres. The demon chief surrendered, swearing never again to harm innocent people and returning all the stolen treasures. Momotaro returned home to a grand celebration, living in peace and prosperity with his parents for all his days."
     ]
    }
   ]
  },
  {
   "id": "the-tale-of-the-bamboo-cutter",
   "title": "The Tale of the Bamboo Cutter",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-tale-of-the-bamboo-cutter.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Tale of the Bamboo Cutter",
     "paras": [
      "In ancient times, an old bamboo cutter named Taketori no Okina walked daily into the silent, mist-shrouded groves to harvest stalks for crafting baskets. One morning, he noticed a single stalk of bamboo glowing with an otherworldly, golden light. Intrigued, he approached the stalk and carefully split it open. Deep within the hollow bamboo sat a tiny, perfectly formed maiden, no taller than a human finger, bathed in a celestial glow.",
      "Recognizing the child as a divine blessing, the old man gently carried her home to his wife. They raised her with immense love and tender care, naming her Kaguya-hime, the “Shining Princess.” From that day onward, whenever the old man cut bamboo, he found pure gold hidden inside the stalks, bringing great wealth to his modest household. Within a few short years, Kaguya-hime grew into a maiden of extraordinary, ethereal beauty, whose radiance lit up the dark corners of their house.",
      "News of her breathtaking loveliness spread across the land, attracting suitors from distant provinces. Five noble princes traveled to her home, each begging for her hand in marriage. Wishing to remain with her foster parents, Kaguya-hime assigned each prince an impossible task to prove his devotion: fetching the stone begging bowl of the Buddha, a branch from the mythical jeweled tree of Horai, the flame-proof robe of the fire-rat, a dragon’s jewel, and a swallow’s cowrie shell. One by one, the suitors failed through trickery or defeat, unable to fulfill her requests.",
      "Eventually, the Emperor of Japan himself heard of her wisdom and grace. Impressed by her refusal of wealth and status, he wrote her poetic letters, and a deep, respectful friendship blossomed between them. Yet, as the full moon of autumn approached, Kaguya-hime grew sorrowful, spending hours gazing into the night sky with tears streaming down her face.",
      "Finally, she revealed the truth to her grieving foster parents and the Emperor. She was not of this world, but a celestial being from the Capital of the Moon, sent down to Earth temporarily. Her time on Earth had ended, and her celestial kin were coming to reclaim her. On the night of the full moon, despite the Emperor surrounding the house with hundreds of armed guards, a radiant cloud descended from the heavens. Heavenly beings glided down, wrapping Kaguya-hime in a cloak of feathers that erased her earthly memories. Before departing, she left a letter and an elixir of immortality for the Emperor. Rising back into the starry night, she returned to the moon, leaving behind a legacy of unforgettable grace."
     ]
    }
   ]
  },
  {
   "id": "urashima-taro",
   "title": "Urashima Taro",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/urashima-taro.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "Urashima Taro",
     "paras": [
      "By the shores of a quiet fishing village lived Urashima Taro, a gentle fisherman known throughout the coast for his kind heart and filial devotion to his aging mother. Every morning, he set out in his small wooden boat to catch fish, earning just enough to support his humble home. One afternoon, while walking along the sandy beach, Taro came across a group of children tormenting a small sea turtle with sticks. Filled with pity, Taro offered the children a few copper coins to release the creature, gently placing the turtle back into the cool ocean waves.",
      "Several days later, while fishing in deep water, Taro heard a soft voice calling his name. Looking down into the crystal water, he saw a giant sea turtle floating beside his boat. To his astonishment, the turtle spoke, explaining that she was the creature he had saved. She invited him to visit the Ryugu-jo, the magical Palace of the Dragon King beneath the ocean, so that the royal family could express their gratitude.",
      "Taro climbed onto the sea turtle’s sturdy shell, and together they descended into the sparkling blue depths. Soon, an breathtaking palace came into view, constructed entirely of red coral, mother-of-pearl, and shimmering sea crystal. Taro was warmly welcomed by Otohime, the beautiful sea princess. She threw a magnificent feast in his honor, where colorful fish danced gracefully and tables groaned under the weight of exquisite delicacies.",
      "Days flew by in a blur of joy, enchantment, and endless music. However, after what felt like three short days, Taro remembered his elderly mother waiting alone on the shore. Overcome with worry, he asked Princess Otohime for permission to return home. Saddened by his departure, Otohime granted his request and presented him with a beautifully lacquered box tied with a silk ribbon, known as the Tamatebako. She strictly instructed him: “Keep this box with you as a token of our friendship, but whatever you do, you must never open it.”",
      "Returning to his village on the back of the turtle, Taro was bewildered by what he found. The familiar thatched cottages were gone, replaced by strange structures. The people he encountered wore unfamiliar clothes and spoke in odd accents. When he asked after his family, an elderly villager recalled a legend from his great-grandfather’s time about a fisherman named Urashima Taro who had vanished at sea three hundred years ago.",
      "Desperate and filled with grief, Taro realized that time had moved differently beneath the ocean. Forgetting Otohime’s strict warning, he opened the Tamatebako, hoping for a clue or comfort. Instantly, a column of thick white smoke billowed from the box, wrapping around Taro. His dark hair turned snow-white, his body wrinkled with immense age, and in a single moment, the three centuries he had escaped caught up with him, leaving his spirit to rest along the ancient shore."
     ]
    }
   ]
  },
  {
   "id": "the-grateful-crane",
   "title": "The Grateful Crane",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-grateful-crane.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Grateful Crane",
     "paras": [
      "Deep in a snow-covered mountain valley lived a poor, hardworking young man named Karoku. Though he owned little more than a tiny wooden hut and a modest patch of land, he possessed a gentle soul and a deep reverence for all living creatures. One freezing winter evening, as he walked home through the dense woods, he discovered a majestic white crane trapped in a hunter’s snare. The bird fluttered its wings helplessly, crying out in distress against the biting wind.",
      "Moved by compassion, Karoku approached the trembling bird with soft words, carefully loosening the sharp metal wire around its leg. Once freed, the crane stood for a moment, bowed its elegant neck toward Karoku, and spread its broad white wings, soaring gracefully into the gray winter sky. Karoku smiled, warmed by the deed, and continued home to his quiet fireside.",
      "The following evening, as a heavy snowstorm raged outside, a soft knock sounded at Karoku’s door. Opening it, he was surprised to find a delicate young woman standing on the threshold, her clothes dusted with snow. She explained that she had lost her way in the blizzard and asked for shelter. Karoku welcomed her into his warm home, sharing his humble meal of boiled rice and hot tea. The young woman, who called herself Otsuru, was captivated by Karoku’s kindness. In time, the two fell deeply in love and were wed in a simple ceremony.",
      "Although they lived happily, their poverty remained a constant struggle as winter wore on. One afternoon, Otsuru offered to weave a roll of silk cloth that Karoku could sell at the town market. However, she made one absolute condition: “I will work in the weaving room behind closed doors. You must promise never to look inside while I weave.” Karoku promised without hesitation.",
      "For three days and three nights, the sound of the loom echoed continuously through the house. When Otsuru finally emerged, she was visibly exhausted, but held in her hands a bolt of cloth so breathtakingly beautiful, woven with silver sheen and feather-light delicacy, that it seemed crafted by magic. Karoku took the fabric to town, where a rich merchant bought it for a fortune in gold coins.",
      "Their life became comfortable, but greed touched the hearts of neighboring townspeople, who urged Karoku to ask his wife for more silk. Succumbing to curiosity and pressure, Karoku broke his solemn promise. Pushing open the weaving room door, he gasped in shock. Standing at the loom was not his human wife, but the white crane he had saved, plucking glowing feathers from her own breast to weave into the magical cloth. Realizing she had been seen, the crane ceased her work and looked at Karoku with profound sadness. “I am the crane you rescued,” she whispered gently. “I wished to repay your kindness, but now that my secret is revealed, I can stay no longer.” Spreading her snowy wings, she flew out into the winter twilight, leaving Karoku with a lifetime of gratitude and quiet regret."
     ]
    }
   ]
  },
  {
   "id": "the-tongue-cut-sparrow",
   "title": "The Tongue-Cut Sparrow",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-tongue-cut-sparrow.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Tongue-Cut Sparrow",
     "paras": [
      "In a quiet village lived an old man and his wife, whose temperaments could not have been more different. The old man was gentle, kind-hearted, and fond of nature, while his wife was notoriously greedy, ill-tempered, and cruel. One morning, the old man found a tiny, injured sparrow in his garden. He brought the frail bird inside, tended its wounded wing, and fed it rice from his own bowl. He named the bird Suzume and treated it as a cherished friend. The sparrow recovered quickly and sang joyous melodies every morning to express its love for the old man.",
      "One afternoon, while the old man was away cutting wood, the sparrow inadvertently ate a bowl of starch paste that the old woman had prepared for her laundry. Furious at the minor loss, the cruel woman grabbed the little bird and used a pair of scissors to cut its tongue before driving it out of the house into the cold forest.",
      "When the old man returned and discovered what had happened, he wept bitterly for his tiny friend. Gathering a walking stick, he set out into the dense bamboo forest to search for the bird. After wandering for hours, he came upon a hidden sanctuary known as the Sparrow’s Inn. To his delight, Suzume emerged, fully healed, to welcome him. The sparrow introduced the old man to its family, who treated him to a wonderful feast, traditional dances, and warm hospitality.",
      "When it came time for the old man to leave, the sparrows presented him with two wicker boxes as a farewell gift—one light and small, the other heavy and large. Being modest, the old man chose the smaller box and carried it home on his back. When he arrived home and opened the box with his wife, they were astonished to find it filled with shiny gold coins, rolls of fine silk, and precious jewels.",
      "Seeing the treasure, the greedy wife instantly resolved to get even more. She hurried into the bamboo forest, found the Sparrow’s Inn, and demanded a gift for herself. Given the same choice, she eagerly grabbed the heavy box, ignoring the sparrows’ warning not to open it until she reached home. Unable to wait, she opened the lid halfway up the mountain path. Instead of gold, a swarm of terrifying demons, poisonous snakes, and wicked goblins burst from the chest, chasing the terrified woman all the way down the mountain. From that day forward, she learned to abandon her greed and treat all living things with kindness."
     ]
    }
   ]
  },
  {
   "id": "the-old-man-who-made-the-trees-blossom",
   "title": "The Old Man Who Made the Trees Blossom",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-old-man-who-made-the-trees-blossom.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Old Man Who Made the Trees Blossom",
     "paras": [
      "Long ago, an affectionate old couple lived next door to a bitter, envious pair of neighbors. The good couple shared their home with a small, white dog named Shiro, whom they loved like their own child. One afternoon, Shiro ran into the garden, barking excitedly and digging frantically at the soil beneath an old pine tree. Thinking the dog had found a bone, the old man brought a spade and dug into the earth. To his astonishment, the hole was filled with shining gold coins and buried ancient treasures.",
      "The greedy neighbors, watching through a crack in the fence, were green with envy. They borrowed Shiro, dragging him into their own yard and demanding he find gold for them too. When Shiro barked near a spot in their garden, the greedy man dug hastily, only to find foul garbage and rotten debris. Enraged by his disappointment, the cruel neighbor struck the innocent dog, killing him instantly. The heartbroken old couple wept for their loyal companion and buried Shiro beneath the pine tree where he had found the gold, planting a small wooden marker in his memory.",
      "That night, Shiro appeared in the old man’s dream, saying, “Cut down the pine tree above my grave and fashion a wooden mortar from its trunk. Use it to pound your rice.” The old man followed the spirit’s advice. When he and his wife placed cooked rice into the wooden mortar and began to pound it, the rice magically turned into a cascading stream of gold pieces.",
      "Learning of this miracle, the envious neighbors borrowed the mortar. But when they attempted to use it, the rice turned into foul-smelling black sludge. In a fit of rage, the wicked man chopped the mortar into pieces and burned it to ashes in his hearth.",
      "Once again, Shiro appeared in his owner’s dream, instructing him to gather the remaining ashes from the neighbor’s hearth. “Scatter these ashes on withered cherry trees,” the dog whispered, “and watch what happens.” The good old man collected the ashes in a small basket. When he scattered a handful over a dead, barren cherry tree, it instantly burst into glorious, fragrant pink blossoms, filling the winter air with spring beauty.",
      "The local Daimyo, passing through the village on his royal procession, was amazed by this wonder. He rewarded the kind old man with rich gifts, fine robes, and the honorable title “Hanasaka Jiisan”—the Old Man Who Makes Trees Blossom. When the greedy neighbor attempted the same feat, the wind blew the ashes directly into the Daimyo’s eyes and nose, earning the foolish tyrant a harsh beating and driving him from the village forever in disgrace."
     ]
    }
   ]
  },
  {
   "id": "kintaro-the-golden-boy",
   "title": "Kintaro — The Golden Boy",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/kintaro-the-golden-boy.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "Kintaro — The Golden Boy",
     "paras": [
      "High upon the rugged slopes of Mount Ashigara, surrounded by ancient forests and thunderous waterfalls, lived a boy of extraordinary strength named Kintaro, the Golden Boy. Raised in solitude by his mother, Yaegiri, Kintaro wore a simple red bib embroidered with the kanji character for “gold.” From his earliest childhood, it was clear that Kintaro was no ordinary youth. He possessed miraculous physical power, running faster than the wind and wrestling giant boulders out of the earth for play.",
      "Having no human playmates in the isolated mountains, Kintaro befriended the wild forest creatures. He learned the language of birds, raced against nimble deer, and challenged wild boars to friendly contests. Among his favorite companions was a giant black bear. One afternoon, Kintaro challenged the bear to a sumotori wrestling match upon a grassy clearing. Despite the bear’s immense weight and fury, the young boy tossed the giant beast over his shoulder with ease, earning the respect and admiration of all the animals in the forest.",
      "Kintaro was as kind-hearted as he was strong. When a group of forest animals arrived at a rushing mountain river and found the wooden bridge washed away by heavy rains, Kintaro uprooted a massive cedar tree with his bare hands and laid it gently across the gorge, allowing his friends to cross safely.",
      "One day, a famous samurai general named Minamoto no Yorimitsu was traveling through the Ashigara mountains with his retinue. As they reached the river, the general witnessed the young boy effortless carrying a gigantic wood-chopping axe while riding atop the wild bear he had befriended. Struck with awe by the boy’s incomparable strength, noble spirit, and natural leadership, the general knew he had found a rare talent.",
      "Yorimitsu approached Kintaro’s mother and requested permission to take the boy to Kyoto to train as a warrior. Recognizing that her son was destined for greatness beyond the lonely woods, Yaegiri gave her blessing with tears of pride. In the capital, Kintaro grew into a legendary samurai warrior, adopting the formal name Sakata no Kintoki. He became the chief protector of the province, using his immense power to defend the innocent, battle fierce monsters, and secure peace across the land."
     ]
    }
   ]
  },
  {
   "id": "the-rabbit-of-inaba",
   "title": "The Rabbit of Inaba",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-rabbit-of-inaba.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Rabbit of Inaba",
     "paras": [
      "On the distant island of Oki lived a clever white rabbit who longed to cross the sea to the mainland province of Inaba. Lacking a boat and unable to swim across the rough ocean channel, the rabbit devised a cunning plan. Standing on the shore, he called out to the sharks swimming in the deep water, challenging their king to a contest of numbers to see whose clan was larger—the rabbits of the land or the sharks of the sea.",
      "The shark king, eager to prove his dominance, agreed to the test. The rabbit instructed all the sharks to line up side by side, forming an unbroken bridge across the water from Oki Island all the way to the beaches of Inaba. As the sharks lined up, the white rabbit hopped across their scaly backs one by one, counting aloud as he bounded toward his destination.",
      "However, just as the rabbit leaped onto the final shark near the shore, his foolish pride got the better of him. He laughed aloud, gloating, “You foolish sharks! I did not care about counting your family; I only used you as a bridge to cross the sea!” Enraged by the deception, the last shark snapped its powerful jaws, tearing off the rabbit’s white fur and leaving him battered, skinless, and writhing in agony upon the sandy shore.",
      "Shortly after, a procession of noble brothers—eighty princes traveling to court the fair Princess Yakami of Inaba—passed along the beach. Seeing the suffering rabbit, the cruel princes gave him malicious advice, telling him to bathe in the salty ocean water and dry himself in the harsh mountain wind. Following their instructions, the salt scorched his raw skin and the wind dried it into painful cracks, causing the rabbit double the agony.",
      "Finally, the youngest prince, Okuninushi, came walking far behind his brothers, carrying their heavy baggage. Unlike his arrogant siblings, Okuninushi possessed a compassionate heart. Seeing the weeping rabbit, he stopped and gently advised him to wash away the salt with fresh river water and roll in the soft yellow pollen of cattail plants growing by the stream. The rabbit followed his instructions, and instantly his pain vanished, his skin healed, and his soft white fur grew back completely. Filled with gratitude, the magical rabbit prophesied that the kind Okuninushi, despite his humble position, would win the hand of Princess Yakami and become the ruler of the realm—a prophecy that soon came to pass."
     ]
    }
   ]
  },
  {
   "id": "the-straw-millionaire",
   "title": "The Straw Millionaire",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-straw-millionaire.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Straw Millionaire",
     "paras": [
      "Once upon a time, a down-on-his-luck young man named Daihei visited the famous Hase Temple to pray for relief from his grinding poverty. He spent three days and nights in silent prayer before the statue of Kannon, the Goddess of Mercy. On the final morning, a gentle voice echoed in his mind, saying, “As you leave this temple, hold fast to the very first thing your hand touches on the ground, and do not let it go.”",
      "As Daihei stepped outside the temple gate, he stumbled over a loose stone and fell face forward onto the dirt. When he stood up, he realized his hand had grasped a single piece of rice straw. Remembering the goddess’s divine instruction, he carried the straw carefully as he began his journey along the main road.",
      "Before long, a buzzing horsefly began circling Daihei’s head. He caught the insect and tied it securely to the end of his piece of straw with a thin thread. A short distance down the road, a wealthy nobleman passed by in a palanquin with his young son. Seeing the flying insect tied to the straw, the boy cried out for the toy. Daihei happily presented the straw toy to the child. In gratitude, the nobleman’s attendant gave Daihei three ripe, juicy oranges.",
      "Continuing his walk under the hot afternoon sun, Daihei met a thirsty noblewoman who was sitting by the roadside, faint from heat exhaustion. Offering her his fresh oranges, she drank their sweet juice and immediately regained her strength. To express her deep appreciation, her family rewarded Daihei with three rolls of the finest woven silk cloth.",
      "Later that evening, Daihei encountered a samurai standing over a fine warhorse that had collapsed from fatigue. The samurai was in a hurry to reach the capital and could not wait for the animal to recover. Daihei traded his valuable rolls of silk for the weary horse. He tended to the tired animal with cool water and soft grass, and by morning, the horse was fully restored and vigorous.",
      "Riding his majestic horse into a prosperous town, Daihei met a wealthy landlord who was preparing to embark on a long journey to distant provinces. The landlord needed a strong horse immediately and offered to trade his grand estate, fields, and rice granaries for Daihei’s mount. Daihei agreed to the trade, becoming a wealthy, honored landlord through generosity, faith, and a humble piece of straw, earning the name “Warashibe Chojin”—the Straw Millionaire."
     ]
    }
   ]
  },
  {
   "id": "the-boy-who-drew-cats",
   "title": "The Boy Who Drew Cats",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-boy-who-drew-cats.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Boy Who Drew Cats",
     "paras": [
      "In a small village nestled among quiet hills, a poor farming family had many children. The youngest son was small, clever, and frail, unsuited for hard agricultural labor. However, he possessed a brilliant talent for drawing, particularly an obsession with drawing cats. Whenever he found a piece of paper, a flat stone, or a smooth wooden board, he would draw ink cats of every shape and size. Hoping he would find a peaceful vocation, his parents sent him to the local village temple to study under the head priest.",
      "The priest was patient, but the boy could not focus on his religious lessons; every page of his study books was quickly filled with ink drawings of sleeping, leaping, and stalking felines. Realizing the boy was destined for an artist’s life rather than the priesthood, the gentle master advised him to leave, offering a mysterious piece of advice: “Avoid large places at night; keep to small.”",
      "Confused by these words, the boy packed his small bundle and walked toward a neighboring village. By nightfall, he reached a large, silent temple standing atop a mountain ridge. Unaware that the temple had been abandoned years ago due to a giant monstrous rat that terrorized the area, the boy stepped inside looking for shelter. Seeing large white paper screens lining the vast, dusty hall, he took out his brushes and spent hours painting dozens of life-sized, fierce-looking cats across the paper walls.",
      "Feeling exhausted as midnight approached, he recalled the old priest’s advice: “Avoid large places at night; keep to small.” Looking around the cavernous, shadowy hall, he spotted a tiny wooden cabinet with sliding doors. He crawled inside, pulled the doors shut, and went to sleep.",
      "In the middle of the night, terrible shrieks, heavy thuds, and violent scratching sounds echoed throughout the empty temple hall. Terrified, the boy lay motionless in the dark cabinet, holding his breath until silence returned at dawn. When he finally opened the cabinet doors and stepped out into the light, he found the giant rat lying dead upon the hall floor. Looking up at the paper screens, he gasped in astonishment: the mouths of his painted cats were stained with fresh black ink, as though they had stepped down from the walls during the night to battle the monster and protect the talented young artist."
     ]
    }
   ]
  },
  {
   "id": "yuki-onna-the-snow-woman",
   "title": "Yuki-onna — The Snow Woman",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/yuki-onna-the-snow-woman.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "Yuki-onna — The Snow Woman",
     "paras": [
      "Deep in the northern mountains, two woodcutters—an old man named Mosaku and his young apprentice Minokichi—were caught in a sudden, blinding winter blizzard. Unable to reach their home village, they took refuge in a dilapidated woodcutter’s hut near a frozen river, huddled together beside a dying fire as howling winds shook the wooden walls.",
      "Late in the night, the door was blown open with a icy blast, extinguishing the embers. Minokichi awoke to see a tall, breathtakingly beautiful woman clad in a gown as white as fresh snow standing in the doorway. Her skin was pale as marble, her eyes dark and terrifyingly bright, and her breath appeared as a freezing white mist. She bent over old Mosaku, blowing her icy breath across his face, freezing him instantly to death.",
      "When she turned to young Minokichi, he trembled with terror, expecting the same fate. However, looking upon his handsome young face, the snow spirit hesitated. “I had intended to take your life as well,” she whispered softly, her voice like wind whistling through icy needles. “But you are young and fair. I shall spare you, on one condition: you must never tell a living soul what you saw here tonight. If you ever speak of me, even to your own mother, I will return and end your life.” With those words, she glided out into the storm and vanished.",
      "Years passed, and Minokichi never spoke of that dreadful night. One autumn afternoon, while traveling along the main road, he met a lovely maiden named Oyuki. She was gentle, soft-spoken, and remarkably fair-skinned. The two fell deeply in love, married, and lived happily together for many years, raising ten beautiful children. Yet, strange as it seemed, Oyuki never appeared to age; her skin remained as smooth and radiant as the day they first met.",
      "One evening, while Oyuki sat sewing by the hearth under the warm lantern light, Minokichi looked at her profile and felt a strange memory resurface. “Seeing you sitting there,” he said thoughtfully, “reminds me of a strange event from my youth. Years ago, I met a woman as white and beautiful as you during a blizzard—a spirit who froze old Mosaku to death.”",
      "Instantly, Oyuki dropped her needlework and stood tall, her face turning pale and icy cold. “It was I!” she cried out in sorrow and fury, her voice transforming into the icy wind. “You swore to keep the secret! Were it not for our sweet children sleeping in the next room, I would freeze you this instant. Care for them well, for if they ever suffer, I will know.” Transforming into a swirl of white mist, she vanished through the chimney into the winter sky, never to be seen again."
     ]
    }
   ]
  },
  {
   "id": "the-fox-s-wedding",
   "title": "The Fox’s Wedding",
   "author": {
    "name": "Traditional Japanese folktale"
   },
   "category": "folktales",
   "collection": "japanese",
   "genres": [
    "Folktale"
   ],
   "language": "English",
   "single": true,
   "cover": {
    "src": "assets/covers/the-fox-s-wedding.webp",
    "w": 440,
    "h": 656
   },
   "characters": [],
   "chapters": [
    {
     "n": 1,
     "title": "The Fox’s Wedding",
     "paras": [
      "High upon the misty slopes of Mount Shinoda lived a community of magical, shapeshifting foxes known as kitsune. Among them was a maiden of extraordinary grace and spirit named Akane. According to ancient fox law, when a noble kitsune maiden marries, the bridal procession must take place under a very specific weather condition: sunshower afternoon, when golden sunshine illuminates the sky while rain falls softly from a passing cloud, known to humans as “Kitsune no Yomeiri”—the Fox’s Wedding.",
      "One bright spring afternoon, as bright sunbeams pierced through a gentle rain shower, young Akane’s wedding day arrived. Dressed in brilliant white bridal kimonos and carrying paper lanterns, the procession of foxes stepped onto the hidden forest trails, marching silently toward the sacred shrine near the mountain peak.",
      "A curious human boy named Sanji happened to be gathering mushrooms near the forest edge when the sunshower began. Remembering his grandmother’s warning that humans must never spy upon a Kitsune wedding procession lest they invite mischief, curiosity overcame his fear. Hiding behind the thick trunk of an ancient cedar, he peeked through the leaves.",
      "Through the glittering veil of rain and light, Sanji witnessed a magical sight. A long line of figures draped in elegant robes walked with high, graceful strides, their white fox tails peeking from beneath silk hems. At the center walked the bride under a red paper parasol. Enchanted by the beauty and dignity of the ritual, Sanji accidentally snapped a dry twig beneath his foot.",
      "Instantly, the procession halted. Dark eyes turned toward his hiding spot, though no creature moved aggressively. The wind rustled, the rain cleared, and in the blink of an eye, the entire magical gathering vanished into the green shadows, leaving behind only the scent of pine and wild blossoms.",
      "When Sanji returned home, he found a small, exquisitely wrapped wooden box sitting on his porch, left by the magical creatures as a gentle reminder of the encounter. Inside was a single shiny oak leaf, which transformed into a bright gold coin before his eyes, accompanied by a soft whisper on the wind reminding him to respect the sacred secrets of the natural world."
     ]
    }
   ]
  },
  {
   "id": "heidi",
   "title": "Heidi",
   "author": {
    "name": "Johanna Spyri"
   },
   "category": "society",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Illustrated retelling in 12 chapters.",
   "intro": "Five-year-old Heidi is taken up the Alps to live with her gruff grandfather. Among the goats, flowers and snow she grows strong and happy, until a journey to Frankfurt and a friendship with Clara change both their lives.",
   "cover": {
    "src": "assets/covers/heidi.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Heidi",
     "role": "The little girl who goes to live on the mountain",
     "img": {
      "src": "assets/images/stories/heidi/char-heidi.webp",
      "w": 290,
      "h": 345
     }
    },
    {
     "name": "Alm-Uncle",
     "role": "Her grandfather, who lives high on the mountain",
     "img": {
      "src": "assets/images/stories/heidi/char-alm-uncle.webp",
      "w": 290,
      "h": 355
     }
    },
    {
     "name": "Peter",
     "role": "The goat-boy of the mountain pastures",
     "img": {
      "src": "assets/images/stories/heidi/char-peter.webp",
      "w": 290,
      "h": 345
     }
    },
    {
     "name": "Clara Sesemann",
     "role": "A girl in Frankfurt who uses a wheelchair",
     "img": {
      "src": "assets/images/stories/heidi/char-clara-sesemann.webp",
      "w": 290,
      "h": 350
     }
    },
    {
     "name": "Aunt Dete",
     "role": "Heidi’s aunt, who takes her to Frankfurt",
     "img": {
      "src": "assets/images/stories/heidi/char-aunt-dete.webp",
      "w": 290,
      "h": 350
     }
    },
    {
     "name": "Peter’s Grandmother",
     "role": "The blind old woman of Dorfli",
     "img": {
      "src": "assets/images/stories/heidi/char-peter-s-grandmother.webp",
      "w": 290,
      "h": 350
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "A Journey to the Mountains",
     "paras": [
      "From the old and quiet town of Mayenfeld, a small footpath winds up through green, wooded hills to the foot of the mighty Alps. The path grows steeper and steeper as it climbs toward the high mountain peaks. One sunny June morning, a tall young woman named Dete was walking up this steep path. She was leading a little five-year-old girl by the hand. The child’s name was Heidi. Although the sun was hot, Heidi was wrapped in several thick layers of heavy clothing and heavy boots, making it very difficult for her to walk comfortably.",
      "Behind them came a friendly woman from the nearby village of Dorfli. She called out to Dete and walked faster to catch up with them. “Where are you taking the child, Dete?” asked the woman, whose name was Barbara. “Is it true that you are leaving her with her grandfather, the Alm-Uncle?”",
      "Dete nodded her head firmly. “Yes, that is my plan,” Dete replied. “I have been offered a wonderful new job with a rich family in Frankfurt, Germany. I cannot take a small child with me. I have taken care of Heidi ever since her parents died several years ago, but now it is her grandfather’s turn to fulfill his duty.”",
      "Barbara shook her head with deep worry. “The old man lives all alone near the top of the mountain. He never speaks to anyone and never comes down to the village except when he needs supplies. People say he is bitter, harsh, and angry at the whole world. How can you leave a gentle little girl with such a grumpy old hermit?”",
      "Dete defended her choice. “He is her grandfather, after all. He must take responsibility for her now. I have done my duty for years.” While the two women continued talking, Heidi decided to stop and rest. The heavy clothes made her sweat. She sat on the grass, took off her heavy shoes and stockings, and unbuttoned her heavy wool dress. She left them on the side of the path and ran freely in her light cotton petticoat. She felt as light as a bird as she skipped along the green meadow, admiring the bright yellow wildflowers and the fresh alpine breeze."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi walks up a mountain path holding her aunt Dete’s hand, with the village below"
    },
    {
     "n": 2,
     "title": "A New Home in the Alps",
     "paras": [
      "Dete and little Heidi finally reached the high alpine pasture where the old man’s wooden cottage stood. Behind the hut stood three tall, ancient fir trees, whose branches rustled loudly in the strong mountain wind. Sitting on a wooden bench outside the cottage was Heidi’s grandfather, known to everyone in the valley as the Alm-Uncle. He had thick grey eyebrows, a long white beard, and a stern expression on his weathered face.",
      "Heidi walked straight up to the old man and held out her hand. “Good evening, Grandfather,” she said in her clear, sweet voice, looking directly into his cold eyes. The old man looked at her in surprise. He stared at her for a long moment before taking her tiny hand in his own large, rough palm.",
      "“What is the meaning of this?” the Grandfather demanded, turning his stern gaze toward Dete. Dete quickly explained that she was moving to Frankfurt for work and could no longer care for Heidi. “She is your granddaughter,” Dete said nervously. “You must take care of her now. If you refuse, that is your responsibility, but I am leaving today.” Without waiting for his answer, Dete turned around and walked quickly back down the mountain path, ignoring the old man’s angry shouts.",
      "The Alm-Uncle stood in silence for a few minutes, looking down at little Heidi. To his surprise, the child did not look scared at all. Instead, she was looking around at the beautiful mountains, the tall fir trees, and the small wooden hut with great curiosity and excitement.",
      "“Come inside,” the Grandfather said at last. Inside the cottage, the furniture was simple: a table, a wooden chair, a cupboard, and the grandfather’s bed. Heidi immediately decided she needed a bed of her own. She climbed up a ladder in the corner of the room and found a lovely hayloft filled with fresh, fragrant hay. “This is wonderful!” she exclaimed happily. She quickly gathered the soft hay into a neat bed and asked her grandfather for a sheet. The old man smiled faintly, reached into his cupboard, and gave her a heavy linen cloth and a warm blanket. Heidi looked at her cozy new bed with pure joy."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi and her grandfather stand outside his log hut among the goats"
    },
    {
     "n": 3,
     "title": "Heidi and Peter",
     "paras": [
      "The next morning, Heidi woke up early to the sound of a sharp whistle. She ran outside into the bright morning sunshine. A eleven-year-old boy was standing near the cottage with a flock of energetic goats. This was Peter, the mountain goat-boy. Every day, Peter collected the goats from the village and drove them up to the high mountain pastures where the sweetest grass grew.",
      "Grandfather came out of the hut carrying two goats of his own: a white goat named Schwänli (Little Swan) and a brown goat named Bärli (Little Bear). He introduced Heidi to Peter and told the boy to look after Heidi carefully while they were up on the mountain. He handed Peter a small bag containing bread and cheese for their lunch, along with a cup so Heidi could drink fresh goat milk.",
      "Heidi was thrilled. She held Peter’s hand as they walked up the steep mountain paths alongside the lively goats. The mountain slopes were covered with glowing golden rock-roses, blue gentians, and bright yellow primroses. The sky above was a brilliant, clear blue, and a huge hawk circled gracefully high in the air above the rocky peaks.",
      "Heidi spent the entire day exploring the high pasture. She learned the names of all the goats in Peter’s care. There was Snowhopper, a tiny white goat who cried often, and Greenfinch, a brave little goat who was always jumping near steep cliffs. Whenever a goat tried to wander toward dangerous rocks, Heidi gently called its name and helped Peter guide it back to safety.",
      "At noon, Peter shared the delicious lunch. Heidi drank warm, sweet goat milk straight from her cup. She felt happier than she had ever felt in her entire life. When the sun began to set behind the high mountain peaks, the sky turned a glorious shade of deep pink and gold. “Look, Peter! The mountains are on fire!” Heidi shouted in delight. Peter explained that it was only the sunset reflection on the snow and rocks. When they returned to the hut, Heidi eagerly told her grandfather every detail of her wonderful adventure."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi pets a goat while Peter the goat-boy stands beside her in a mountain meadow"
    },
    {
     "n": 4,
     "title": "Life on the Mountain",
     "paras": [
      "The summer months passed quickly, and Heidi grew healthier, stronger, and happier every day. Her pale cheeks turned rosy brown from the mountain sun and fresh air. Every morning she went up to the high pastures with Peter and the goats, learning all about the mountain flowers, the animals, and the weather. On days when it was too windy or rainy to go high up the slopes, Heidi stayed at home with her grandfather.",
      "She watched with great interest as the Alm-Uncle made delicious round cheeses, carved sturdy wooden spoons and bowls, and repaired the wooden roof of his cottage. The grandfather, who had been cold and silent for many long years, found his heart softening more and more under the warmth of Heidi’s affectionate nature and bright spirit. He taught her how things worked, answered all her eager questions, and treated her with great gentleness and care.",
      "One afternoon, a bitter wind blew down from the high ice fields, roaring through the three old fir trees behind the hut. Grandfather called Heidi inside to stay warm by the fire. “Why do the trees groan and roar like that, Grandfather?” Heidi asked, listening to the loud sound of the wind.",
      "“The fir trees are calling out to the mountain,” Grandfather explained gently. “They are telling everyone that winter is coming soon, and that we must prepare for the cold and snow.” Heidi listened intently, feeling safe and loved inside the cozy wooden cottage with her grandfather. The strong bond between the old man and his granddaughter grew deeper with every passing week, bringing new warmth and joy into both of their lives."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi runs through a flowery meadow while her grandfather watches from the hut and Peter sits among the goats"
    },
    {
     "n": 5,
     "title": "Winter in the Mountains",
     "paras": [
      "When winter arrived, heavy snow fell continuously for days until the entire mountain was covered under a thick, gleaming blanket of pure white. The small wooden cottage was almost buried in deep snowdrifts, and Grandfather had to shovel a long path through the snow just to open the front door. The goats stayed inside their warm wooden shed, eating sweet dry hay that Grandfather had collected during the summer months.",
      "Peter could no longer take the goats up to the high pastures, and for several weeks, the deep snow kept everyone isolated in their homes. Heidi missed her daily adventures in the open meadows, but she found plenty of happiness indoors. She spent her days watching Grandfather build wooden furniture and listening to his wonderful stories about the mountains.",
      "Finally, the snow froze hard enough on top for Peter to walk across it. One cold afternoon, Peter walked up the steep mountain to visit Heidi. He told her about his blind grandmother, who lived with him and his mother in a dark, drafty hut down in the village of Dorfli. “Grandmother talks about you all the time,” Peter told Heidi. “She wishes so much that you would come and visit her.”",
      "Heidi was eager to go right away, but the deep snow was still too dangerous for a little girl to walk through. A few days later, when the sky was clear and bright, Grandfather wrapped Heidi tightly in a heavy warm shawl, sat her on his sturdy wooden sled, and slid swiftly down the snowy slope to Peter’s home. It was an exciting, fast ride, and Heidi laughed with delight as the cold wind whipped past her cheeks."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi, wrapped in a shawl, carries firewood with her grandfather beside their snowy hut"
    },
    {
     "n": 6,
     "title": "A Visit to Grandmother",
     "paras": [
      "Peter’s home was small, old, and very dark. The wooden shutters rattled loudly in the freezing winter wind, and the doors creaked on their rusty hinges. In the corner of the small room sat an old woman spinning wool on a wooden wheel. This was Peter’s grandmother, who was completely blind and could no longer see the sunlight or the lovely green mountains.",
      "Heidi ran up to the old woman and took her thin hands gently. “Hello, Grandmother!” Heidi said warmly. “I have come to visit you!” The old woman touched Heidi’s soft face and hair with her trembling hands. A bright, happy smile lit up her old face. “Are you the little girl who lives with the Alm-Uncle?” she asked softly. “Your voice sounds as warm and bright as sunshine.”",
      "Heidi noticed that the cottage was cold and full of drafty cracks. She listened as the old woman talked about how hard the winter was, how the old house shook in the wind, and how she wished she had soft white bread to eat instead of the hard, black rye bread that hurt her old teeth. Heidi felt deep pity and love for the blind grandmother and resolved to help her however she could.",
      "When Grandfather came to pick Heidi up at the end of the afternoon, Heidi begged him to fix the old woman’s house. The next day, the Alm-Uncle returned with his tool bag and heavy hammer. He spent hours mending the broken shutters, fixing the squeaky doors, and sealing the cold wall cracks so the wind could no longer blow inside. From that day on, the old grandmother loved Heidi deeply, calling her her little ray of mountain sunshine."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi holds Peter’s blind grandmother’s hands in a cosy wooden room as Peter looks on"
    },
    {
     "n": 7,
     "title": "A Journey to Frankfurt",
     "paras": [
      "Three years passed happily on the mountain. Heidi was now eight years old, healthy, and full of life. One spring morning, Aunt Dete unexpectedly returned to the mountain cottage. She had found a prestigious position in the wealthy Sesemann household in Frankfurt, Germany. Mr. Sesemann was looking for a sweet companion for his young daughter, Clara, who was invalid and bound to a wheelchair.",
      "Dete demanded that Heidi come with her to Frankfurt immediately. Grandfather was furious and refused to let Heidi go, but Dete argued stubbornly. She claimed that Heidi was missing out on a proper education and a civilized life in the city. While Grandfather was arguing angrily, Dete tricked Heidi by promising that she could buy soft white bread rolls for Peter’s blind grandmother in the big city and return home whenever she wished.",
      "Believing she could help the grandmother, Heidi agreed to go. Grandfather was heartbroken and deeply hurt by their sudden departure. He felt betrayed by Dete and feared he would never see his beloved grandchild again. Heidi held Dete’s hand as they walked down the mountain path, carrying only a small bundle of clothes, completely unaware of how different her life was about to become in the distant, crowded city."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi holds Aunt Dete’s hand on a railway platform with a steam train beside them"
    },
    {
     "n": 8,
     "title": "Clara and Her New Friend",
     "paras": [
      "When Heidi arrived at the grand Sesemann mansion in Frankfurt, she was amazed by the tall stone walls, thick carpets, heavy curtains, and elegant furniture. However, she was met with immediate disapproval by Fräulein Rottenmeier, the strict, stern housekeeper. Fräulein Rottenmeier thought Heidi was an uneducated, wild mountain child who lacked proper manners and basic city polite behavior.",
      "Despite the housekeeper’s strictness, Heidi quickly formed a deep and loving friendship with Clara Sesemann. Clara was a gentle, pale girl with sweet blue eyes who spent all her days sitting in a wheel chair, lonely and unable to walk. Clara was fascinated by Heidi’s lively stories about the snowy mountain peaks, the golden sunlight, the wild alpine flowers, and the playful mountain goats.",
      "Life in the mansion was very strange and difficult for Heidi. She was forced to wear stiff, uncomfortable dresses, sit still for long indoor lessons, and follow strict house rules. She was shocked to discover that she was not allowed to open the heavy glass windows to look outside or hear the trees. One day, Heidi tried to find a high church tower in the city so she could look out and see the mountains, but to her disappointment, she saw only endless grey stone roofs and noisy paved streets."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi sits with Clara, who is in a wheelchair, in a Frankfurt drawing room"
    },
    {
     "n": 9,
     "title": "Homesick",
     "paras": [
      "As the months went by in Frankfurt, Heidi became increasingly sad and homesick. She missed her grandfather, the fresh mountain air, the rustling fir trees, and her goat friends. Every day at dinner, she saved the soft, white bread rolls served to her, hiding them carefully in her bedroom closet so she could take them home to Peter’s blind grandmother.",
      "Clara’s kind grandmother, Mrs. Sesemann, came to visit the mansion. She noticed Heidi’s sadness and treated her with great warmth and understanding. She taught Heidi how to read using a colorful book of stories and taught her to pray whenever she felt sad or lonely. Although reading brought Heidi comfort, her longing for her mountain home grew so intense that she lost her appetite and began to grow thin and pale.",
      "Soon, strange events began to happen in the Sesemann house. Every night, the heavy front door was found unlocked and wide open in the morning. The servants whispered fearfully about ghosts. Mr. Sesemann and his friend, Dr. Classen, decided to stay up late to catch the ghost. To their great surprise, they found little Heidi walking downstairs in her nightgown while fast asleep, weeping bitterly in her sleep for her mountain home. Dr. Classen examined the child and firmly told Mr. Sesemann that Heidi was dying of extreme homesickness and must be sent back to her mountain home immediately."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi sits by a tall window, looking out toward the distant mountains"
    },
    {
     "n": 10,
     "title": "The Return to the Alps",
     "paras": [
      "Mr. Sesemann acted quickly. Clara was sad to see her dear friend leave, but she understood that Heidi needed her home. The servants packed a heavy trunk filled with lovely gifts, new clothes, and a huge bag of soft white rolls for Peter’s grandmother. A butler accompanied Heidi on the long train ride back to Switzerland.",
      "When Heidi finally stepped off the train in Mayenfeld and saw the high blue mountain peaks shining in the sun, her heart leapt with overwhelming joy. She ran as fast as she could up the steep mountain path, stopping first at Peter’s cottage. She dumped the bag of soft white bread rolls into the blind grandmother’s lap. The old woman wept tears of pure happiness, holding Heidi close and thanking her for her loving kindness.",
      "Then Heidi ran up the remaining path to the high pasture. She saw her grandfather sitting on his bench outside the cottage. “Grandfather!” she shouted, throwing her arms tightly around his neck. The old man wept silent tears of joy as he hugged his beloved child. That night, Heidi slept peacefully in her familiar hayloft under the stars, listening to the comforting wind in the old fir trees. Grandfather was so moved by Heidi’s return and her deep faith that he walked down to the village church the following Sunday, making peace with the villagers after years of bitter anger."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Heidi and her grandfather meet on the path in front of the hut"
    },
    {
     "n": 11,
     "title": "Clara Comes to the Mountains",
     "paras": [
      "The following summer, a wonderful surprise arrived on the mountain. Clara Sesemann came to visit Heidi, accompanied by her kind grandmother and servants. Clara was carried up the steep mountain path in a comfortable carrying-chair. Heidi greeted Clara with radiant joy and showed her all the wonders of her mountain world.",
      "Clara was enchanted by the fresh, cool air, the bright blue sky, and the beautiful alpine flowers. Grandfather welcomed Clara warmly, preparing fresh goat milk and sweet cheese for her every day. For the first time in her life, Clara developed a strong appetite and felt her weak body gaining strength under the healthy mountain sun.",
      "However, Peter the goat-boy felt jealous of Clara. He felt that Heidi spent all her time caring for the sick city girl and was ignoring him. In a sudden fit of anger early one morning, Peter pushed Clara’s heavy wooden wheelchair down the steep mountain slope. The wheelchair bounced off rocks and broke into pieces at the bottom of the ravine. Peter immediately felt terrified and ashamed of his wicked deed, fearing he would be caught and punished."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Clara in her wheelchair and Heidi point toward the hut while Peter and the goats look on"
    },
    {
     "n": 12,
     "title": "A Miracle on the Mountain",
     "paras": [
      "When Grandfather discovered that the wheelchair was broken, he was not angry. Instead, he smiled and said that perhaps this was a blessing in disguise. Since Clara had no wheelchair, she was forced to try standing on her own feet with support. Grandfather held her firmly under one arm while Heidi supported her under the other.",
      "“Try putting your feet on the ground, Clara,” Grandfather encouraged gently. “Push hard against the earth.” Clara took a brave step forward, then another. “Heidi, look! I am standing! I am walking!” Clara cried out, her eyes shining with amazement and happiness. Day after day, with Grandfather’s guidance and Heidi’s joyful encouragement, Clara practiced walking further and further along the smooth mountain paths.",
      "A few weeks later, Mr. Sesemann arrived at the mountain cottage to visit his daughter. As he walked up the path, he saw two young girls walking slowly toward him through the flower-filled pasture. To his utter astonishment, he recognized his beloved daughter Clara, walking steadily on her own two feet without any assistance. Tears of overwhelmed joy filled his eyes as he embraced Clara, thanking Grandfather and Heidi from the bottom of his heart for the miracle they had brought into his family’s life.",
      "Peter confessed his jealous action and was forgiven by everyone. Before returning home, Mr. Sesemann promised to care for Heidi and her grandfather for the rest of their lives. Clara returned to Frankfurt healthy and strong, promising to visit her beloved friend every summer. Heidi remained happily on the high mountain pasture with her grandfather, surrounded by love, faith, friendship, and the eternal beauty of the Alps."
     ],
     "img": {
      "src": "assets/images/stories/heidi/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Clara’s father, Clara, Heidi and the grandfather stand together in the sunlit meadow"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "oliver-twist",
   "title": "Oliver Twist",
   "author": {
    "name": "Charles Dickens"
   },
   "category": "society",
   "genres": [
    "Classic",
    "Drama"
   ],
   "language": "English",
   "edition": "Adapted edition in 12 chapters.",
   "intro": "Born in a workhouse and raised without a family, young Oliver dares to ask for more food and is sent out into a harsh world. From the streets of London to Fagin’s den of thieves, he meets both cruelty and kindness, while a hidden secret about his past waits to be uncovered.",
   "cover": {
    "src": "assets/covers/oliver-twist.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Oliver Twist",
     "role": "The orphan born in a workhouse",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-oliver-twist.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Fagin",
     "role": "The old criminal who trains boys to steal",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-fagin.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "The Artful Dodger",
     "role": "Jack Dawkins, Fagin’s sharp young pickpocket",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-the-artful-dodger.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Bill Sikes",
     "role": "A violent housebreaker",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-bill-sikes.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Nancy",
     "role": "A young woman who risks her life to protect Oliver",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-nancy.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Mr. Brownlow",
     "role": "The kind gentleman who takes Oliver in",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-mr-brownlow.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Rose Maylie",
     "role": "The gentle niece of Mrs. Maylie",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-rose-maylie.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Mr. Bumble",
     "role": "The pompous parish official",
     "img": {
      "src": "assets/images/stories/oliver-twist/char-mr-bumble.webp",
      "w": 190,
      "h": 190
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Boy Nobody Wanted",
     "paras": [
      "Among the public buildings in a certain town in England, there stood a parish workhouse. In this cold and gloomy place, a pale, delicate boy was born into the world. His mother, a young woman found lying in the street with torn shoes and a heartbroken expression, died only minutes after her child drew his first breath. She pressed her cold lips to the baby’s cheek, smiled faintly, and closed her eyes forever. No one knew her name, where she had come from, or who the child’s father was.",
      "The parish official, a grand, pompous man named Mr. Bumble, held the authority to name all orphaned children born in the parish. Mr. Bumble had a simple system: he named the orphans in alphabetical order. The last one had been a ‘S’—Swimble. This new boy was a ‘T’, so he named him Oliver Twist.",
      "Oliver was raised on a child-farm outside the town, managed by an elderly woman named Mrs. Mann. Mrs. Mann received a small allowance from the parish to feed and clothe the orphans in her care. However, she kept most of the money for herself, giving the children barely enough thin porridge to keep them alive. On his ninth birthday, Oliver was a pale, thin, undersized child, yet he possessed a strong, gentle spirit that survived despite the cruelty around him.",
      "On that ninth birthday, Mr. Bumble arrived at Mrs. Mann’s farm in his large tricorn hat and blue coat with brass buttons. He declared that Oliver was now old enough to return to the main workhouse to earn his keep by picking oakum—unraveling old ropes into loose fibers. Oliver wept bitterly as he bade farewell to his few childhood companions. Poor as the farm was, it was the only home he had ever known, and he walked into the unknown world with a heavy heart."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A weary young mother lies in a workhouse bed holding her newborn baby while a stern nurse looks on"
    },
    {
     "n": 2,
     "title": "Please, Sir, I Want Some More",
     "paras": [
      "Life inside the workhouse was harsher still. The board of directors, a group of wealthy gentlemen who believed that poor people were naturally lazy, decided that the workhouse should be made as uncomfortable as possible to discourage anyone from seeking help. They established a strict diet: three small bowls of thin gruel a day, an onion twice a week, and half a roll of bread on Sundays.",
      "The room in which the boys were fed was a large stone hall with a copper kettle at one end. The master, dressed in his apron, served the gruel with a long ladle. The boys’ bowls never needed washing; they cleaned them with their spoons until they shone. After three months of constant starvation, one tall boy declared that unless he received another bowl of gruel each day, he feared he might eat the boy who slept next to him. A council was held, and lots were cast to decide who should walk up to the master after supper and ask for more.",
      "The lot fell upon Oliver Twist.",
      "That evening, when the gruel disappeared, the boys whispered and nudged Oliver. Pale and trembling, Oliver rose from the table, walked forward with his bowl and spoon, and said softly: “Please, sir, I want some more.”",
      "The master turned pale. He stared in stupified astonishment at the small rebel. “What!” he gasped. “Please, sir,” repeated Oliver, “I want some more.”",
      "The master struck Oliver on the head with his ladle and shouted for Mr. Bumble. The board members were horrified by Oliver’s wicked request. Believing he would surely end up on the gallows, they locked the terrified boy in a dark room. The next morning, a notice was posted on the workhouse gate offering five pounds to anyone who would take Oliver Twist as an apprentice and relieve the parish of his burden."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver stands in the workhouse dining hall holding his empty bowl while the other boys stare and the master holds a ladle beside a copper pot"
    },
    {
     "n": 3,
     "title": "The Road to London",
     "paras": [
      "Oliver was soon apprenticed to Mr. Sowerberry, the parish undertaker. Mr. Sowerberry was a tall, melancholy man, but his wife was short, ill-tempered, and disliked Oliver immediately. She fed the boy leftover scraps meant for the dog and made him sleep under the counter among the wooden coffins in the damp shop.",
      "Because of Oliver’s sad face, Mr. Sowerberry decided to dress him in black clothes to serve as a mute—a quiet mourner who walked at the head of children’s funeral processions. Oliver performed his duties quietly, but Noah Claypole, an older boy employed in the shop, grew jealous of Oliver’s special position. Noah tormented Oliver daily, taunting him about his origins.",
      "One afternoon, Noah went too far. “Workhouse,” Noah sneered, pulling Oliver’s hair, “how is your mother? She was a nice, fine lady, wasn’t she? A real beggar!” A surge of fierce anger awoke in Oliver’s quiet chest. He knocked Noah to the floor and beat him with all his strength. Mrs. Sowerberry ran in, screaming, and helped Noah lock Oliver in the cellar until Mr. Bumble arrived to whip him.",
      "That night, locked in the dark room, Oliver made a brave decision. At dawn, before anyone was awake, he unbolted the door and slipped out into the cold morning air. On his way out of town, he passed the farm where he had spent his early years. His childhood friend, little Dick, was standing by the gate. Dick leaned over and whispered: “I am dying, Oliver. But don’t cry! God bless you!” That blessing was the only kind word Oliver had ever received in his life.",
      "Oliver walked toward London, seventy miles away, with only a crust of bread and a few pennies. After seven days of exhausting travel, his feet bleeding and his clothes in rags, he reached the town of Barnet just outside the great city."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver walks away along a muddy road toward the misty skyline of London, a small bundle over his shoulder"
    },
    {
     "n": 4,
     "title": "Fagin’s Strange Company",
     "paras": [
      "Exhausted and starving, Oliver sat on a cold stone doorstep in Barnet. He was approached by a strange-looking boy about his own age. The boy wore a man’s oversized coat with the sleeves turned up, a crumpled top hat pushed back on his head, and had the clever, sharp manners of a grown man. His name was Jack Dawkins, better known among his companions as the Artful Dodger.",
      "The Dodger bought Oliver a meal of bread and ham and offered to introduce him to a “respectable old gentleman” in London who would provide him with lodging for free. Oliver, trusting and innocent, gratefully accepted. They reached London after dark, navigating filthy, narrow streets filled with foul smells and shouting voices, until they reached a dark, decaying building near Field Lane.",
      "The Dodger led Oliver up a broken wooden staircase into a gloomy, smoke-filled room. Sitting near a fire was an old man with a matted red beard and a villainous face, cooking sausages on a fork. This was Fagin. Several young boys sat around a table, smoking pipes and drinking spirits like old men.",
      "Fagin welcomed Oliver warmly and offered him food and a bed on the floor. Over the next few days, Oliver observed curious games played in the room. Fagin would place a watch, silk handkerchiefs, and pocketbooks into his coat pockets and walk around the room pretending to be an elderly gentleman looking at shop windows. The Dodger and another boy named Charley Bates would slip up behind him, skillfully lifting the items from his pockets without Fagin noticing. Oliver laughed, thinking it was merely a game.",
      "A young woman named Nancy, who seemed friendly and lively despite her rough life, often visited the place. Oliver felt relieved, believing he had finally found kind friends who would teach him a useful trade."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver stands in the candlelit den as Fagin leans toward him and a group of boys, including the Artful Dodger in a top hat, look on"
    },
    {
     "n": 5,
     "title": "The Boy Accused",
     "paras": [
      "After several days indoors, Oliver begged Fagin to let him go out to work with the other boys. Fagin agreed and sent him out in the care of the Dodger and Charley Bates. They walked slowly through the busy streets until they reached a marketplace near a bookstall. The Dodger pointed to a wealthy, elderly gentleman reading a book outside the shop. The man had a kind, dignified face and wore gold spectacles.",
      "To Oliver’s complete horror, the Dodger crept quietly behind the gentleman, reached into his pocket, drew out a silk handkerchief, and handed it to Charley Bates. Both boys then sprinted around the corner as fast as their legs could carry them.",
      "Oliver stood frozen in shock as the truth flashed through his mind: Fagin’s boys were not making handkerchiefs—they were thieves! Terrified that he would be blamed, Oliver turned and began to run down the street. The gentleman, discovering his missing handkerchief at that exact moment, saw the boy running and shouted: “Stop thief! Stop thief!”",
      "The cry was taken up by shopkeepers, street-sweepers, and passersby. A large, shouting crowd chased Oliver down the cobblestone streets. A heavy man struck Oliver, knocking the delicate boy to the ground. A police constable arrived and seized Oliver by the collar, despite his desperate cries of innocence.",
      "The gentleman, whose name was Mr. Brownlow, looked down at Oliver’s pale, terrified face and felt a sudden pang of deep compassion. Before the magistrate, the bookstall keeper rushed in and testified that he had seen two other boys commit the theft while Oliver stood watching in surprise. The magistrate dismissed the charges, and Oliver, overwhelmed by terror and fever, fainted onto the stone floor of the court."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver stands frightened in a crowded street while an angry gentleman in a top hat points at him"
    },
    {
     "n": 6,
     "title": "A Home at Last",
     "paras": [
      "Mr. Brownlow carried the unconscious boy into his carriage and brought him to his comfortable home in Pentonville. There, under the care of Mr. Brownlow and his gentle housekeeper, Mrs. Bedwin, Oliver was placed in a soft, clean bed. For days, the boy suffered from a severe fever, floating between life and death.",
      "When Oliver finally opened his eyes, he found himself surrounded by clean sheets, warm sunlight, and kind faces. It was the first time in his life he had ever experienced true tenderness. Mrs. Bedwin fed him warm broth, and Mr. Brownlow spoke to him with gentle respect. As Oliver recovered, he noticed a portrait of a beautiful young woman hanging on the wall of Mr. Brownlow’s study. Every time he looked at it, he felt a strange, deep affection in his heart. Mr. Brownlow was equally struck by the remarkable resemblance between the woman in the portrait and young Oliver.",
      "Meanwhile, back in the underworld, Fagin was furious that Oliver had been taken by the police, fearing the boy would reveal their hideout. He met with Bill Sikes, a violent, broad-shouldered housebreaker who traveled everywhere with a white bull-terrier dog. Sikes insisted that Nancy be sent to the police court in disguise to find out what had happened to Oliver. Nancy learned that Oliver had been taken to Mr. Brownlow’s house, and Fagin immediately began plotting to recapture the boy.",
      "One sunny afternoon, Oliver, dressed in a new suit of clothes bought by Mr. Brownlow, offered to return some books to the bookseller and pay a five-pound bill. Mr. Brownlow smiled, handed Oliver the books and money, and sent him on his errand, trusting him completely."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mr. Brownlow rests a gentle hand on Oliver’s shoulder in his warm study"
    },
    {
     "n": 7,
     "title": "Back into the Shadows",
     "paras": [
      "Oliver walked happily down the street, holding the books tightly under his arm and humming a cheerful tune. But as he turned a quiet corner near Whitechapel, a young woman grabbed him around the neck, screaming: “Oh, my dear little brother! I’ve found you at last!”",
      "It was Nancy. Before Oliver could cry out, Bill Sikes stepped out from a doorway with his heavy stick. They dragged the terrified boy into a narrow alley, tore off his fine new clothes, put his old rags back on him, and took Mr. Brownlow’s five-pound note and books.",
      "Oliver was taken back to Fagin’s den. Fagin bowed mockingly and praised Oliver for his “generous gift” of new clothes and money. When Fagin raised a wooden stick to beat Oliver for trying to run away, Nancy stepped between them angrily. “Touch him if you dare, Fagin!” she cried. “I brought him back for you, and I am sorry for it! He is an innocent child, and you are making him a thief like the rest of us!” Sikes forced Nancy into a chair, but her defense prevented Fagin from harming Oliver physically.",
      "Oliver was locked in a room alone for days. Fagin visited him frequently, talking softly about the terrible dangers of the world and warning him that boys who betrayed their friends ended up hanged on the gallows. He slowly sought to break Oliver’s spirit, preparing him for a dark purpose.",
      "Sikes needed a small, slender boy for an upcoming robbery in the countryside. A wealthy house in Chertsey had small lattice windows that no grown man could enter. Fagin offered Oliver for the job, and Sikes agreed, threatening to shoot the boy if he refused to obey orders."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Bill Sikes grabs Oliver by the arm and drags him along a dark cobbled alley"
    },
    {
     "n": 8,
     "title": "The Burglary",
     "paras": [
      "On a dark, foggy night, Sikes took Oliver on a long, exhausting walk out of London to a desolate house near the river, where they met another criminal named Toby Crackit. Together, the two men led Oliver through the dark countryside until they reached a large house surrounded by high walls in the town of Chertsey.",
      "Sikes climbed over the wall and lifted Oliver over after him. They approached a small window at the back of the house. Sikes forced open the shutter, revealing a narrow opening. Sikes handed Oliver a lantern and whispered sternly: “I’m going to put you through this window. Go straight to the front door, unbolt it, and let us in. If you hesitate, I’ll shoot you!”",
      "Oliver, filled with terror, resolved that as soon as he was inside, he would run upstairs and warn the family. Sikes pushed Oliver through the window into a dark pantry. As Oliver’s feet touched the floor, he heard voices and the sound of footsteps inside the house.",
      "“Come back!” shouted Sikes from outside.",
      "A bright flash illuminated the dark room, followed by a loud gunshot that echoed like thunder. Oliver felt a sharp, burning pain in his arm and fell backward. Sikes grabbed the wounded boy by his coat collar, pulled him back through the window, and carried him into the dark fields. As the servants of the house gave chase, firing shots into the darkness, Sikes realized the boy was unconscious and bleeding heavily. Fearing for his own capture, Sikes threw Oliver into a dry ditch, covered him with a cloak, and fled into the fog.",
      "Oliver lay alone in the damp ditch through the long, freezing night, his life slowly fading away."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver crouches behind a curtain with his hands over his mouth while a burglar works at the moonlit window"
    },
    {
     "n": 9,
     "title": "The House of Kindness",
     "paras": [
      "When morning came, Oliver awoke in pain. Cold rain was falling, and his left arm was stiff and covered in dried blood. Knowing he would die if he remained in the ditch, he dragged himself up and stumbled back toward the house he had been forced to rob.",
      "He reached the porch, collapsed onto the stone steps, and knocked feebly at the door. The door was opened by Mr. Giles, the butler, who had shot Oliver the night before. Mr. Giles and the servants proudly called for Mrs. Maylie, the lady of the house, and her beautiful seventeen-year-old niece, Rose Maylie, to show off the captured burglar.",
      "When Rose looked down at the small, wounded boy lying on the floor, her eyes filled with tears. “This poor child could never be a hardened criminal!” she exclaimed. Instead of calling the police, Mrs. Maylie and Rose had Oliver carried upstairs to a comfortable bed and summoned a doctor to dress his wound.",
      "When Oliver recovered his speech, he told the kind ladies his entire life story—his suffering in the workhouse, his escape, Fagin’s den, and how he had been forced into the burglary against his will. Touched by his innocence and suffering, Rose promised that he would never be harmed again.",
      "Oliver spent the spring and summer months in the country house with Mrs. Maylie and Rose. He learned to read and write under their guidance, tended the garden flowers, and walked through the peaceful green fields. For the first time in his life, Oliver experienced true peace and happiness, loved by everyone around him."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Mrs. Maylie brings a cup of tea to Oliver as he rests under a blanket in an armchair"
    },
    {
     "n": 10,
     "title": "The Mystery of Oliver’s Past",
     "paras": [
      "While Oliver was recovering in the countryside, dark secrets were being discussed in London. Fagin was visited by a tall, mysterious man wrapped in a dark cloak, whose face was disfigured by a bitter sneer. His name was Monks. Monks was obsessed with Oliver Twist, demanding to know where the boy was and offering Fagin a large sum of money if he could recapture Oliver and turn him into a thief.",
      "Monks traveled back to Oliver’s birthplace and met with Mr. Bumble, who was now married to Mrs. Mann. For twenty pounds, Mrs. Bumble sold Monks a small gold locket and ring that had been stolen from Oliver’s dying mother by the workhouse nurse years ago. Monks took the locket, tied it to a heavy stone, and dropped it into the deep, rushing river, believing he had destroyed the last proof of Oliver’s true identity.",
      "Nancy overheard a secret conversation between Fagin and Monks in the dark alleyway. Monks boasted that he was Oliver’s half-brother, that their father had left a valuable estate, and that he had arranged to destroy Oliver’s inheritance so he could keep the entire fortune for himself!",
      "Horrified by this evil plot and determined to protect the innocent boy, Nancy risked her life. Late one night, when Sikes was asleep, she slipped out of their room and walked miles to the hotel where Rose Maylie was staying in London. Nancy revealed Monks’s plot to Rose, warning her that Oliver was in grave danger, but refused to accept any money or betray Sikes, whom she still loved despite his cruelty."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver looks worried beside a desk with a letter, a locket and a family portrait while Mr. Brownlow reads a scroll behind him"
    },
    {
     "n": 11,
     "title": "Nancy’s Dangerous Secret",
     "paras": [
      "Rose Maylie immediately sought the help of Mr. Brownlow, whom Oliver had never forgotten. Together, they met Nancy secretly on London Bridge at midnight to gather more information about Monks. Unbeknownst to Nancy, Fagin had grown suspicious of her late-night outings and had sent Noah Claypole, who had recently fled to London and joined Fagin’s gang, to follow her in the shadows.",
      "Standing on the dark steps beneath the bridge, Nancy told Mr. Brownlow how Monks could be recognized and where he could be found. She begged them to save Oliver, but again refused to accept safety for herself, returning to the dark world she knew.",
      "Noah Claypole ran back to Fagin’s den and reported everything he had heard. When Bill Sikes arrived, Fagin, burning with rage, told Sikes that Nancy had betrayed them to strangers. Sikes, blinded by violent fury, rushed back to his room, ignored Nancy’s frantic pleas for mercy, and struck her down in the dark.",
      "The brutal crime shocked all of London. Filled with horror and guilt, Sikes fled into the countryside, pursued everywhere by the vision of Nancy’s dying eyes. He returned to London days later, hiding in a ruined house near Jacob’s Island surrounded by a angry, shouting mob. As he attempted to lower himself from the roof with a rope to escape, he slipped, the rope caught around his neck, and he fell to his death on the muddy shore below."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nancy clutches a folded letter in a foggy London street while a dark figure watches from behind"
    },
    {
     "n": 12,
     "title": "The Truth and a New Beginning",
     "paras": [
      "Mr. Brownlow captured Monks and brought him to his house, confronting him with the full truth. Cornered, Monks confessed everything: he was indeed Oliver’s half-brother, Edward Leeford. Their father had been forced into an unhappy marriage in his youth, producing Monks, but had later fallen deeply in love with Agnes Fleming—Oliver’s mother. Before dying abroad, the father had written a will leaving half his estate to Agnes’s unborn child, provided the child grew up with an honorable character.",
      "Monks had spent years searching for Oliver to ruin him so he could claim the entire inheritance. Furthermore, Mr. Brownlow revealed another astonishing truth: Rose Maylie was actually Agnes Fleming’s younger sister, making her Oliver’s loving aunt!",
      "The police raided Fagin’s hideout, arresting the old criminal and his gang. Fagin was tried, convicted, and sentenced to death, spending his final nights filled with terror in Newgate Prison, visited one last time by Oliver, who offered him a prayer for forgiveness.",
      "Oliver received his rightful inheritance, which Mr. Brownlow divided fairly between Oliver and Monks to give Monks a second chance in life (though Monks later wasted his share and died in prison abroad). Mr. Brownlow officially adopted Oliver as his own son, and they moved into a bright, peaceful house in the countryside near Rose Maylie and her new husband.",
      "Surrounded by love, warmth, and true friends, the orphan boy who had once begged for a bowl of gruel finally found his home, his family, and a happy future filled with light."
     ],
     "img": {
      "src": "assets/images/stories/oliver-twist/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Oliver smiles beside Mr. Brownlow in a sunlit rose garden in front of a country house"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "speckled-band",
   "title": "The Adventure of the Speckled Band",
   "author": {
    "name": "Arthur Conan Doyle"
   },
   "category": "mystery",
   "genres": [
    "Mystery",
    "Detective"
   ],
   "language": "English",
   "edition": "Classic adaptation in 4 chapters.",
   "intro": "A frightened young woman begs Sherlock Holmes for help: two years after her sister died whispering about a “speckled band”, she has heard the same low whistle in the night.",
   "cover": {
    "src": "assets/covers/speckled-band.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Sherlock Holmes",
     "role": "The consulting detective",
     "img": {
      "src": "assets/images/stories/speckled-band/char-sherlock-holmes.webp",
      "w": 144,
      "h": 174
     }
    },
    {
     "name": "Dr. John Watson",
     "role": "Holmes’s friend and narrator",
     "img": {
      "src": "assets/images/stories/speckled-band/char-dr-john-watson.webp",
      "w": 135,
      "h": 174
     }
    },
    {
     "name": "Helen Stoner",
     "role": "A young woman who fears for her life",
     "img": {
      "src": "assets/images/stories/speckled-band/char-helen-stoner.webp",
      "w": 105,
      "h": 174
     }
    },
    {
     "name": "Dr. Grimesby Roylott",
     "role": "Her violent stepfather",
     "img": {
      "src": "assets/images/stories/speckled-band/char-dr-grimesby-roylott.webp",
      "w": 145,
      "h": 174
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Mysterious Visitor",
     "paras": [
      "In early April of 1883, I awoke one morning to find Sherlock Holmes standing fully dressed beside my bed. He was a early riser, but it was only a quarter past six. I looked up at him in surprise, still drowsy from sleep.",
      "“Very sorry to wake you, Watson,” said Holmes quietly, “but a young lady has arrived in a state of extreme excitement. She is waiting in the sitting room. When young ladies wander around London at this early hour, I presume they have something very urgent to communicate. I thought you might care to follow the case from its beginning.”",
      "I dressed quickly and accompanied my friend downstairs. A lady dressed in black was sitting by the window. She was trembling violently, and her pale face showed signs of deep terror. Holmes greeted her with his customary calm courtesy and gently asked her to explain her troubles.",
      "“My name is Helen Stoner,” she began, her voice shaking. “I live with my stepfather, Dr. Grimesby Roylott, at Stoke Moran in Surrey. He is the last survivor of one of the oldest Saxon families in England. However, the family fortune was lost generations ago, and my stepfather is a man of fierce and uncontrollable violent temper.”",
      "Holmes listened intently as Miss Stoner described how Dr. Roylott had practiced medicine in Calcutta, India, where he had married her widowed mother. After her mother died in a railway accident eight years ago, they returned to England to live on the income from her mother’s estate. However, the money was tied up in a strict legal will: each sister—Helen and her twin sister Julia—was entitled to a annual sum of two hundred and fifty pounds upon her marriage.",
      "“My stepfather became a terror to the neighborhood,” Helen continued. “He spends his time quarreling with everyone, keeping wild Indian animals—a cheetah and a baboon—which roam freely over his estate. Two years ago, my sister Julia met a half-pay naval officer during a visit to London and became engaged to him. My stepfather offered no objection to the marriage, but two weeks before the wedding, a terrible tragedy occurred.”",
      "Helen paused, taking a deep breath to regain her self-control before describing that fateful night.",
      "“It was a bitter winter night,” Helen said, her eyes fixed on Holmes. “The manor house is very old, and only one wing is inhabited. The bedrooms on the ground floor are arranged along a long corridor. The first room belongs to Dr. Roylott, the second was my sister’s, and the third was mine. On that night, Julia came into my room because repairs were being made to her own room.”",
      "“Did she speak of anything unusual?” Holmes asked.",
      "“Yes,” Helen replied. “She asked me if I had ever heard a low, clear whistle in the middle of the night. I told her I had not. She said that for three consecutive nights, around three o’clock in the morning, she had heard a soft whistle. She thought it might be coming from the gypsy camp in the plantation outside.”",
      "Helen described how Julia had returned to her room, locking the door behind her, as was their custom due to the wild animals roaming outside. Later that night, as a gale roared outside, Helen was startled by a terrible sound.",
      "“Suddenly, amid the roaring of the wind, there rose a wild scream of terror. It was my sister’s voice! I rushed into the corridor. As I opened my door, I heard a low whistle, and then a heavy sound like falling metal. My sister appeared in her doorway, her face white with horror, swaying like a drunken person.”",
      "“Julia fell to the floor,” Helen continued, her eyes bright with tears. “I ran to her and threw my arms around her, but her knees gave way. She writhed as if in terrible pain. At first I thought she did not recognize me, but then she shrieked in a voice I shall never forget: ‘O, Helen! It was the band! The speckled band!’ She pointed her finger in the direction of the doctor’s room, but another convulsion seized her, and she died without uttering another word.”",
      "Holmes leaned forward, deeply intrigued. “Did the police find any mark of violence or poison?”",
      "“No,” replied Helen. “The door was locked from the inside, and the windows were secured by solid wooden shutters. The doctors examined her thoroughly, but found no physical cause of death. It remains a complete mystery.”",
      "“And what brings you to me today, two years later?” asked Holmes.",
      "“Yesterday,” Helen whispered, “my stepfather began repairs on my bedroom, forcing me to move into Julia’s old room. And last night, as I lay awake in her bed, I heard the very same low whistle that preceded my sister’s death!”"
     ],
     "img": {
      "src": "assets/images/stories/speckled-band/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Watson listen to a frightened young woman in the Baker Street sitting room"
    },
    {
     "n": 2,
     "title": "The Strange Death at Stoke Moran",
     "paras": [
      "Sherlock Holmes sprang from his chair, his eyes shining with energy. “This is a serious matter, Miss Stoner,” he said. “If we come to Stoke Moran today, can we inspect these rooms without your stepfather’s knowledge?”",
      "“He mentioned that he would be in London all day on business,” Helen explained. “You will be completely safe.”",
      "After promising to meet Miss Stoner at Stoke Moran later in the afternoon, she took her leave. No sooner had she left than our sitting-room door was violently thrown open. A huge man stood before us, dressed in a tall top hat and a long coat. His face was marked by passion and fury.",
      "“Which of you is Holmes?” the intruder roared.",
      "“That is my name, sir,” said Holmes quietly, “but you have the advantage of me.”",
      "“I am Dr. Grimesby Roylott of Stoke Moran! My stepdaughter has been here! What has she been saying to you?”",
      "“It is a little cold for the time of year,” said Holmes calmly, taking no notice of the doctor’s rage.",
      "“Do not dare to meddle in my affairs!” Dr. Roylott sneered, stepping forward and seizing the heavy iron poker from our fireplace. With his gigantic hands, he bent the steel poker into a curve to demonstrate his strength. “I am a dangerous man to fall out with! See that you keep your nose out of my business!” He hurled the bent iron into the fireplace and strode angrily out of the room.",
      "Holmes burst into a hearty laugh. “He seems an agreeable companion,” he remarked. He reached for the poker and, with a quick pull of his own strong hands, straightened it back out. “This incident increases my desire to solve the case. We must head to Surrey by the next train.”",
      "By early afternoon, Holmes and I arrived at the village of Leatherhead and drove to Stoke Moran. The old manor house was a picture of decay, with broken walls and ruined roofs. Only one wing remained habitable, surrounded by overgrown trees.",
      "Miss Stoner met us at the garden gate. She led us directly to the wing containing the bedrooms. Holmes carefully examined the outside of the building. He observed the shuttered windows of the three rooms.",
      "“The middle room is where your sister died, and where you sleep now,” Holmes noted. “I see no necessity for repairs on the wall of your original bedroom. Why were you moved?”",
      "“I believe it was merely an excuse to force me into my sister’s room,” Helen said.",
      "Holmes then led us inside to examine the middle bedroom—Julia’s room. He scrutinised every tiny detail with intense concentration. The room contained a plain bed, a chest of drawers, and a chair. Beside the bed hung a thick bell-rope connected to a wire above the wall.",
      "“Does that bell work?” Holmes asked, pulling the cord.",
      "“No,” Helen replied, “it is not attached to any bell. It was installed only a few years ago.”",
      "“How singular!” Holmes exclaimed. “And notice that it is attached to a hook right beside a ventilator—a small air hole opening into the adjoining room!”",
      "“What a curious arrangement,” I remarked. “Why put a ventilator between two bedrooms instead of opening it to the outside air?”",
      "“That is also very peculiar,” Holmes said quietly. He inspected the bed and found that it was bolted securely to the floor, directly beneath the dummy bell-rope and the ventilator opening.",
      "Next, we entered Dr. Roylott’s bedroom. It was larger, containing a heavy wooden wardrobe, a small round table, and a large iron safe. Holmes walked over to the safe and touched its heavy metal door.",
      "“What is in here?” he asked.",
      "“My stepfather’s business papers,” Helen answered.",
      "“Is there no animal inside?” Holmes asked, pointing to a small saucer of milk placed on top of the safe. “We do not keep cats,” Helen replied, puzzled. “Only the cheetah and baboon.”",
      "Holmes then pointed to a small leather dog whip lying on the bed. The whip was tied in a loop at the end, forming a small leash. “A strange item,” Holmes whispered, his face growing dark with deep thought."
     ],
     "img": {
      "src": "assets/images/stories/speckled-band/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A worried young woman speaks with Holmes and Watson in a stone corridor at Stoke Moran"
    },
    {
     "n": 3,
     "title": "The Night Investigation",
     "paras": [
      "Having finished his examination, Holmes turned to Miss Stoner. “You must follow my instructions precisely,” he said gravely. “Your life depends upon it. Tonight, when your stepfather retires to his room, you must unlock your window shutters, leave your lamp burning as a signal to us, and retreat quietly into your old bedroom.”",
      "“What will you do?” she asked.",
      "“Watson and I will spend the night in your room,” Holmes replied. “We will discover the cause of the danger that threatens you.”",
      "Miss Stoner agreed without hesitation. Holmes and I went to the local inn nearby to wait for nightfall. As we sat in the dark parlour, Holmes shared his observations with me.",
      "“Did you observe the bell-rope, Watson?” he asked. “It is a dummy. It does not ring. It was put there recently, positioned right beside the ventilator and directly over the bed, which is bolted down so it can never be moved. Does that not suggest a definite connection?”",
      "“I begin to see,” I admitted. “The ventilator provides a channel between the two rooms, and the rope leads straight down to the pillow!”",
      "“And what about the saucer of milk and the looped whip?” Holmes added. “Doctors in India often acquire strange knowledge of deadly exotic creatures. Dr. Roylott has a strong motive: if Helen marries, he must pay her two hundred and fifty pounds every year, leaving him almost penniless.”",
      "At eleven o’clock, a light shone from the window of Stoke Moran. It was Helen’s signal. We crept silently across the dark grounds, avoiding the baboon and cheetah hiding in the shadows, and slipped through the open window into the bedroom.",
      "Holmes turned down the lamp until the room was plunged into total darkness. We sat silently on the edge of the bed, waiting. The church clock in the distance struck midnight, then one, then two, then three. The darkness was absolute, and the silence was heavy and suffocating."
     ],
     "img": {
      "src": "assets/images/stories/speckled-band/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes kneels with a lantern while Watson watches beside the bell-rope and ventilator in the bedroom"
    },
    {
     "n": 4,
     "title": "The Deadly Secret Revealed",
     "paras": [
      "Suddenly, at nearly three in the morning, a tiny gleam of light flashed through the ventilator. A smell of burning oil and heated metal reached our nostrils. Someone in the next room had opened a dark lantern. Then came a sound—a soft, gentle hissing noise, like a jet of steam escaping from a small pipe.",
      "In an instant, Holmes sprang from the bed. He struck a match and struck furiously at the bell-rope with his cane!",
      "“You see it, Watson?” he shouted. “You see it?”",
      "In the yellow matchlight, I saw Holmes’s face pale with horror. He was beating wildly at the cord. But I saw nothing except the rope itself. Yet I heard a low, clear whistle in the dark.",
      "A moment later, a terrible cry echoed through the quiet house. It was a scream of agony and terror that shook the very walls. It rose higher and higher, a howl of pain and fear from a dying man.",
      "“What can it mean?” I gasped, my blood turning cold.",
      "“It means that it is all over,” Holmes said quietly. “Take your pistol, Watson, and let us enter Dr. Roylott’s room.”",
      "We stepped into the corridor and knocked on Dr. Roylott’s door. Receiving no answer, Holmes turned the handle and pushed the door open. On the table stood the dark lantern, casting a beam of light on the iron safe, which stood wide open. Beside the table sat Dr. Roylott, his eyes fixed in a glassy stare upon the ceiling.",
      "Round his forehead was bound a strange yellow band with brownish spots. It seemed tight around his head.",
      "“The band! The speckled band!” whispered Holmes.",
      "As we stepped closer, the band began to move! A diamond-shaped head and a puffed neck rose from the doctor’s hair. It was a deadly swamp adder, the most venomous snake in India. The doctor was dead within ten seconds of its bite.",
      "Holmes drew the leather whip from the bed, slipped the loop over the snake’s neck, and carried the deadly creature back to the iron safe, locking it inside securely.",
      "On our train journey back to London the next morning, Holmes explained the entire mystery to me as we watched the Surrey countryside pass by.",
      "“My initial thoughts were misled by the gypsies,” Holmes admitted. “The mention of a ‘band’ made me suspect the gypsy band that camped on the estate. But as soon as I examined the room, the true solution became clear.”",
      "“The dummy bell-rope, the ventilator that didn’t lead outside, and the bed fixed to the floor convinced me that something was being passed through the wall down to the bed. A poisonous snake was the ideal weapon for a villain who had lived in India. It leaves almost no trace, and its poison cannot be detected by ordinary chemical tests.”",
      "“Dr. Roylott trained the snake with milk,” Holmes continued. “He would put the snake through the ventilator at night. It would crawl down the rope onto the bed. If the sleeper moved, it would bite. Then he would blow a whistle to recall the snake back to the saucer of milk inside his safe.”",
      "“And last night?” I asked.",
      "“When I struck the snake with my cane, I angered it,” Holmes explained. “It retreated back through the ventilator into its master’s room. Aggressive and aroused, it bit the first living creature it saw—Dr. Grimesby Roylott himself. In this way, I am no doubt indirectly responsible for his death, but I cannot say that it weighs heavily upon my conscience.”",
      "Thus ended the mystery of Stoke Moran, securing the safety and fortune of Helen Stoner, and closing one of the most remarkable cases in the career of Sherlock Holmes."
     ],
     "img": {
      "src": "assets/images/stories/speckled-band/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "By lantern light Holmes and Watson discover a snake coiled near the bed and bell-rope"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "collection": "holmes"
  },
  {
   "id": "red-headed-league",
   "title": "The Adventure of the Red-Headed League",
   "author": {
    "name": "Arthur Conan Doyle"
   },
   "category": "mystery",
   "genres": [
    "Mystery",
    "Detective"
   ],
   "language": "English",
   "edition": "Classic adaptation in 3 chapters.",
   "intro": "A pawnbroker with flaming red hair is paid to copy an encyclopaedia for a mysterious League, until the League is suddenly dissolved and Holmes uncovers the plot behind it.",
   "cover": {
    "src": "assets/covers/red-headed-league.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Sherlock Holmes",
     "role": "The consulting detective",
     "img": {
      "src": "assets/images/stories/red-headed-league/char-sherlock-holmes.webp",
      "w": 128,
      "h": 174
     }
    },
    {
     "name": "Dr. John Watson",
     "role": "Holmes’s friend and narrator",
     "img": {
      "src": "assets/images/stories/red-headed-league/char-dr-john-watson.webp",
      "w": 132,
      "h": 174
     }
    },
    {
     "name": "Jabez Wilson",
     "role": "A pawnbroker with bright red hair",
     "img": {
      "src": "assets/images/stories/red-headed-league/char-jabez-wilson.webp",
      "w": 125,
      "h": 174
     }
    },
    {
     "name": "Vincent Spaulding",
     "role": "Wilson’s assistant",
     "img": {
      "src": "assets/images/stories/red-headed-league/char-vincent-spaulding.webp",
      "w": 125,
      "h": 174
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Man with the Red Hair",
     "paras": [
      "I visited my friend Mr. Sherlock Holmes one autumn day in 1890 and found him in deep conversation with an elderly gentleman. The visitor had a broad, red face and a head of fiery, bright red hair. I apologized for interrupting, but Holmes pulled me into the room and closed the door behind me.",
      "“You could not have come at a better time, my dear Watson,” Holmes said cordially. “This is Mr. Jabez Wilson, and he is the protagonist in a story that is quite extraordinary.”",
      "Holmes turned to the visitor and examined him closely in his usual deductive manner. “Beyond the obvious facts that you have done manual labor, that you take snuff, that you are a Freemason, that you have been in China, and that you have done a considerable amount of writing lately, I can deduce very little.”",
      "Mr. Jabez Wilson startled in his chair. “How in the world did you know all that, Mr. Holmes?” he asked.",
      "Holmes smiled. “Your hands show that you worked as a carpenter in your youth. Your breastpin bears the arc and compass of the Freemasons. Your right cuff is smooth and shiny from rubbing against the desk while writing. As for China, the tattoo on your right wrist of a pink fish scale could only have been done in China, and the Chinese coin hanging from your watch-chain confirms it.”",
      "Mr. Wilson laughed aloud. “I thought at first you were terribly clever, but now I see there was nothing in it at all!”",
      "“I begin to think, Watson,” said Holmes, turning to me, “that I make a mistake in explaining my methods. Now, Mr. Wilson, please tell Dr. Watson the story you were telling me.”",
      "The visitor took a folded newspaper out of his pocket and pointed to an advertisement in the classified section. It read:",
      "“TO THE RED-HEADED LEAGUE: On account of the bequest of the late Ezekiah Hopkins of Lebanon, Pennsylvania, U.S.A., there is now another vacancy open which entitles a member of the League to a salary of £4 a week for purely nominal services. All red-headed men who are sound in body and mind, and above the age of twenty-one years, are eligible. Apply in person on Monday, at eleven o’clock, to Duncan Ross, at the offices of the League, 7 Pope’s Court, Fleet Street.”",
      "“What on earth does this mean?” I exclaimed after reading the strange announcement.",
      "Holmes chuckled with delight. “It is certainly out of the ordinary. And now, Mr. Wilson, tell us about yourself, your household, and how this advertisement came to affect your life.”",
      "“I run a small pawnbroker’s shop at Saxe-Coburg Square, near the City,” explained Mr. Wilson. “It is a small business, and I have not earned much in recent years. I used to keep two assistants, but now I keep only one. I could not afford to pay him full wages, but he agreed to come for half-price in order to learn the business.”",
      "“What is the name of this obliging young man?” asked Holmes.",
      "“His name is Vincent Spaulding,” replied the pawnbroker. “He is small, stout, quick in his ways, and has no hair on his face, though he cannot be under thirty. He has a white splash of acid upon his forehead. He is a fine worker, Mr. Holmes—smart, polite, and handy with tools. His only fault is his passion for photography. He is always slipping down into the dark cellar with his camera to develop his pictures.”",
      "“He is still with you, I presume?”",
      "“Yes, sir. It was Spaulding who first brought this advertisement to my notice about two months ago. He came into the office with this paper in his hand and said: ‘I wish to the Lord, Mr. Wilson, that I were a red-headed man! Here is another vacancy upon the League, and it is worth a little fortune to any man who gets it.’ When I asked him what it meant, he told me that an American millionaire named Ezekiah Hopkins had left his vast wealth to trustees with instructions to provide comfortable salaries to men with natural bright red hair.”",
      "“Well,” Mr. Wilson continued, “as you can see, my hair is of a very bright, flaming shade. Spaulding urged me to apply immediately. So on Monday morning, we walked together to Pope’s Court.”"
     ],
     "img": {
      "src": "assets/images/stories/red-headed-league/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Jabez Wilson, a red-haired man, tells Holmes and Watson his story by the fireside"
    },
    {
     "n": 2,
     "title": "The Curious Job",
     "paras": [
      "“I had no idea there were so many red-headed men in London,” Mr. Wilson said, shaking his head. “The street was packed with men of every shade of red—orange, brick, Irish setter, liver, and clay. Fleet Street was blocked, and Pope’s Court looked like a basket of ripe oranges! But Spaulding pushed and pulled me through the crowd until we reached the office.”",
      "Inside the small office sat a short man with hair even redder than Mr. Wilson’s. He introduced himself as Mr. Duncan Ross. After quickly rejecting several applicants whose hair was dyed or not bright enough, Mr. Ross turned to Mr. Wilson with great enthusiasm.",
      "“He stepped up to me,” recalled Mr. Wilson, “congratulated me warmly, and seized my hand. Then, suddenly, he grabbed my hair with both hands and tugged until I yelled with pain! ‘There are tears in your eyes,’ he said as he released me. ‘I perceive that all is real. We must be careful, for human deceit is great. You are the very man for the vacancy!’”",
      "Mr. Ross informed Mr. Wilson that the job paid four pounds a week, but the rules were extremely strict. The work required him to be in the office every day from ten in the morning until two in the afternoon. If he left the building during those four hours for any reason, he would lose his position forever.",
      "“And what were the duties?” asked Holmes, leaning forward attentively.",
      "“I was required to copy the Encyclopaedia Britannica by hand,” said Mr. Wilson. “I had to bring my own ink, pens, and blotting paper. Mr. Ross provided a small deal table and a chair. He told me I must begin with the letter ‘A’ and strictly remain in the room the entire time.”",
      "“Did you accept?”",
      "“Of course, sir! Four pounds a week is a large sum, and my shop did most of its business in the evenings anyway. Spaulding promised to look after the shop while I was away. So the next morning, I bought a penny bottle of ink and a quill pen, and went to Pope’s Court.”",
      "Mr. Wilson described how he worked diligently every day, copying articles on Abbots, Architecture, Armor, and Asia. Mr. Ross visited the office occasionally to check on his progress and ensure he had not left the room.",
      "“This went on Saturday after Saturday,” the pawnbroker continued. “Every week, Mr. Ross handed me four gold sovereigns for my work. It lasted for eight weeks. I had copied out articles on Architecture, Armor, Attica, and hoped to reach the letter ‘B’ soon. It cost me something for paper, and I had nearly filled a shelf with my manuscript. Then, suddenly, the whole business came to an end.”",
      "“To an end?” Holmes asked, his interest sharply aroused.",
      "“Yes, sir. Just this morning. I went to work as usual at ten o’clock, but the door was locked. Nailed to the middle of the wooden panel with a thumbtack was a small piece of cardboard. Here it is.”",
      "Mr. Wilson handed us a small piece of white cardboard. On it was written in short, bold handwriting:",
      "“THE RED-HEADED LEAGUE IS DISSOLVED. October 9, 1890.”",
      "Holmes and I looked at the card and then at Mr. Wilson’s dismayed face. Despite the serious expression on our client’s face, the utter absurdity of the situation was too much for us, and both Holmes and I burst into a roar of laughter.",
      "“I see nothing to laugh at!” cried the pawnbroker, turning red with anger. “If you can do nothing better than laugh at my misfortune, I shall go elsewhere!”",
      "“No, no!” Holmes exclaimed, pushing him gently back into his chair. “I would not miss your case for the world. But there is something distinctly humorous about it. What steps did you take when you found the card?”",
      "“I inquired at the neighboring offices, but no one knew anything about Mr. Duncan Ross or the Red-Headed League. The landlord told me that the tenant’s real name was William Morris, a solicitor who had rented the room for a few weeks. I traced him to his reported address in King Edward Street, but found it was a artificial kneecap factory! So I came straight to you, Mr. Holmes.”",
      "“You acted wisely,” said Holmes. “This is a remarkably deep mystery. Tell me, Mr. Wilson: this assistant of yours who took the job at half-wages—how long had he been with you before he showed you the advertisement?”",
      "“About a month,” replied Mr. Wilson. “He came in response to my advertisement for a worker.”",
      "“What is he like?”",
      "“Small, stout, nimble, with a splash of acid on his forehead, and pierced ears for earrings.”"
     ],
     "img": {
      "src": "assets/images/stories/red-headed-league/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Wilson copies the encyclopaedia at a desk in a small office while a carriage passes outside"
    },
    {
     "n": 3,
     "title": "Holmes Uncovers the Plot",
     "paras": [
      "After Mr. Wilson had left, Holmes sat in silence for a long time, smoking his pipe with his knees drawn up to his chin. At last, he stood up and put on his heavy coat.",
      "“I am going to a concert this afternoon, Watson,” he remarked. “On our way, let us take a short walk through Saxe-Coburg Square.”",
      "We traveled by underground railway to the City and walked to the quiet, somewhat run-down square where Mr. Wilson’s pawnshop was located. Holmes walked slowly past the shop, looking carefully at the building. Then he stepped up to the door and knocked firmly with his walking stick.",
      "The door was opened instantly by a bright-faced, clean-shaven young man. “Can you tell me the way to the Strand?” Holmes asked politely.",
      "“Third turning to the right, fourth to the left,” answered the assistant promptly, and he snapped the door shut.",
      "“A smart fellow,” Holmes remarked as we walked away. “He is, in my judgment, the fourth smartest man in London, and for daring he might rank third. I have known something of him before.”",
      "“You knocked on the door merely to see him?” I asked.",
      "“Not to see him, Watson, but to see the knees of his trousers.”",
      "“And what did you see?”",
      "“What I expected to see,” Holmes replied mysteriously. He then walked around to the busy commercial street behind Saxe-Coburg Square, noting the positions of the City and Suburban Bank, the French restaurant, and the carriage depot.",
      "That evening, Holmes asked me to meet him at Baker Street at ten o’clock, advising me to bring my army revolver. When I arrived, I found two other men waiting with him: Mr. Peter Jones, an official police detective from Scotland Yard, and Mr. Merryweather, a solemn director of the City and Suburban Bank.",
      "“We are playing for a high stake tonight, gentlemen,” Holmes informed us. “Mr. Merryweather, your bank is in grave danger, and Mr. Jones is about to capture John Clay, the murderer, thief, and safe-cracker!”",
      "We set out in two cabs and drove to the rear entrance of the great bank. Mr. Merryweather unlocked a heavy side door and led us down a flight of winding stone stairs into a dark, damp cellar lined with huge iron boxes.",
      "“Our French gold is stored here,” whispered Mr. Merryweather, tapping his stick on the floor. “Thirty thousand gold napoleons packed in wooden crates. It is a far larger sum of specie than is usually kept in a single branch.”",
      "Holmes knelt on the floor and examined the stone flags with his magnifying glass. “We have about an hour before they arrive,” he said. “They cannot act until the pawnshop is quiet for the night. Since today is Saturday, they have two full days before the bank reopens on Monday morning!”",
      "Holmes covered his dark lantern, leaving us in complete darkness. “They have only one retreat—back through the house into Saxe-Coburg Square,” Holmes whispered to Jones. “I hope you have arranged for officers to watch the front door?”",
      "“I have an inspector and two officers waiting at the door,” Jones replied.",
      "We waited silently in the pitch-dark vault for an hour and a quarter. The air was cold and heavy. Suddenly, my eyes caught a glint of light on the stone floor. A flagstone turned sideways, leaving a square gap, and a hand appeared holding a lantern. A young man with a pale face crept out of the opening, followed by a second man with fiery red hair.",
      "Holmes sprang forward like a tiger and seized the intruder by the collar! “Jump back, Archie, jump back!” yelled the leader as Holmes dragged him onto the floor.",
      "The red-headed man scrambled back into the hole, escaping into the darkness below. The captured man pulled out a revolver, but Holmes struck his wrist with his hunting crop, sending the weapon crashing to the stone floor.",
      "“It is no use, John Clay!” said Holmes quietly. “You have no chance at all.”",
      "“So I see,” the prisoner answered with amazing cool composure. “I fancy my partner has escaped, though.”",
      "“There are three men waiting for him at the front door,” said Holmes smilingly.",
      "“You have done the thing very neatly, Mr. Holmes,” said John Clay, bowing politely as Detective Jones slapped the handcuffs onto his wrists.",
      "Early the next morning, as we sat over a cup of coffee at Baker Street, Holmes explained how he had solved the bizarre case.",
      "“You see, Watson,” he said, “it was obvious from the beginning that the only possible object of this extraordinary League and the copying of the Encyclopaedia was to get this foolish pawnbroker out of his house for four hours every day. Four pounds a week was a lure that must draw him, and his assistant Vincent Spaulding suggested it.”",
      "“When I heard that the assistant worked for half-wages, I asked myself why a clever worker would accept such terms. The answer was clear: he had a private reason for being in that cellar!”",
      "“What was he doing in the cellar?” I asked.",
      "“He was doing heavy work for hours every day—digging a tunnel to another building! When I visited the shop and tapped my stick on the pavement outside, I determined whether the cellar extended in front or behind. It lay behind. Then I knocked on the door to see his trousers. The worn, stained, and dirty knees of his pants showed hours of crawling and digging in the earth.”",
      "“And how did you know they would attempt the robbery last night?”",
      "“When they closed the office of the Red-Headed League, it meant the tunnel was complete! They had to act quickly before the bank discovered the passage, and Saturday night was perfect because it gave them two days to make their escape with thirty thousand gold coins before the bank opened on Monday. Everything fitted together perfectly.”",
      "“You solved it wonderfully, Holmes!” I cried in admiration.",
      "Holmes stretched his legs and smiled. “It saved me from boredom, Watson,” he said quietly. “My life is spent in one long effort to escape from the commonplaces of existence. These little problems help me to do so.”",
      "And thus ended one of the most ingenious criminal plots ever conceived in the city of London, solved by the brilliant analytical mind of Sherlock Holmes."
     ],
     "img": {
      "src": "assets/images/stories/red-headed-league/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Watson stand outside a bank at night as Holmes studies something in his glove"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "collection": "holmes"
  },
  {
   "id": "final-problem",
   "title": "The Adventure of the Final Problem",
   "author": {
    "name": "Arthur Conan Doyle"
   },
   "category": "mystery",
   "genres": [
    "Mystery",
    "Detective"
   ],
   "language": "English",
   "edition": "Classic adaptation in 4 chapters.",
   "intro": "Sherlock Holmes tells Dr. Watson about Professor Moriarty, the criminal mastermind of London, and the two friends flee across Europe to the Falls of Reichenbach.",
   "cover": {
    "src": "assets/covers/final-problem.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Sherlock Holmes",
     "role": "The consulting detective",
     "img": {
      "src": "assets/images/stories/final-problem/char-sherlock-holmes.webp",
      "w": 147,
      "h": 182
     }
    },
    {
     "name": "Professor James Moriarty",
     "role": "The criminal mastermind of London",
     "img": {
      "src": "assets/images/stories/final-problem/char-professor-james-moriarty.webp",
      "w": 162,
      "h": 182
     }
    },
    {
     "name": "Dr. John Watson",
     "role": "Holmes’s friend and narrator",
     "img": {
      "src": "assets/images/stories/final-problem/char-dr-john-watson.webp",
      "w": 120,
      "h": 182
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Criminal Mastermind",
     "paras": [
      "It is with a heavy heart that I write these last words regarding the extraordinary gifts of my friend Mr. Sherlock Holmes. It has been three years since those dark days of May 1891, and though many accounts of his career have been published, none have revealed the exact truth behind his tragic end. Only I know what really happened between Sherlock Holmes and Professor James Moriarty.",
      "On the evening of April 24, 1891, I was sitting in my consulting room when the door opened and Holmes stepped inside. He looked unusually pale and thin. I noticed that his knuckles were bleeding and raw. As soon as he entered, he turned to the window, closed the wooden shutters tight, and bolted them securely.",
      "“My dear Holmes!” I exclaimed in surprise. “What is the matter?”",
      "“Have you any air-guns in the house, Watson?” he asked, looking around carefully.",
      "“No, I have none. Why do you ask?”",
      "“Because I prefer to avoid air-guns and their silent bullets,” Holmes replied with a slight smile, though his eyes remained serious. “I must apologize for closing your shutters so suddenly, but I have good reason to fear an attack.”",
      "He sat down, took a cup of tea, and extended his injured hand. “You are looking at my knuckles, Watson. They were bruised this morning in a minor encounter with a hired thug. But my true opponent is far greater than any street criminal. Have you ever heard of Professor Moriarty?”",
      "“Never,” I admitted.",
      "“That is the genius and the wonder of the man!” Holmes said with quiet intensity. “He controls the entire underworld of London, yet no one knows his name. He is the Napoleon of crime, Watson. He is the organizer of half that is evil and nearly all that is undetected in this great city. He is a mathematical genius who sits motionless at the center of his web like a spider, but that web has a thousand threads, and he knows every quiver of each of them.”",
      "Holmes explained how he had spent months quietly weaving a net around Moriarty’s vast criminal network. Piece by piece, he had gathered the evidence needed to arrest the mastermind and his entire organization. But three days ago, Moriarty realized that the net was closing in on him.",
      "“This morning,” Holmes continued, “Professor Moriarty walked into my room at Baker Street. He is a remarkably tall and thin man, with a forehead that dome-like protrudes, and eyes that are deeply sunken. He stared at me with an eerie, rhythmic swaying of his head.”",
      "Holmes leaned forward and recalled the exact words spoken by his great intellectual rival:",
      "“‘You have crossed my path at every turn, Mr. Holmes,’ Moriarty said in his soft, rasping voice. ‘If you persist in trying to destroy me, the result must be your inevitable destruction. You must drop this investigation, or we shall both be consumed in the struggle.’”",
      "“I told him,” Holmes said, “that I would gladly accept my own destruction if I could free society from a force like him. After he left, the attacks began immediately. First, a heavy horse carriage tried to run me down in the street. Second, a brick fell from a roof, narrowly missing my head. Finally, a man attacked me with a club near Welbeck Street, though I managed to knock him down.”",
      "Holmes stood up and looked at me with deep affection. “The police will have complete evidence to arrest Moriarty and his entire gang in three days—on Monday morning. But until those arrests are made, Moriarty’s men will stop at nothing to kill me. Therefore, Watson, I must leave England tonight. Will you come with me on a journey across Europe?”",
      "“I will come without hesitation,” I answered at once. “Where are we going?”",
      "“To the Continent,” Holmes said. “We must travel in disguise and leave no trace behind us. Tomorrow morning, you must follow my instructions to the letter to reach the train station safely.”"
     ],
     "img": {
      "src": "assets/images/stories/final-problem/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Professor Moriarty face each other in a study full of papers"
    },
    {
     "n": 2,
     "title": "The Chase Across Europe",
     "paras": [
      "Following Holmes’s precise instructions, I left my luggage with an old friend and hired a hansom cab. I was instructed to drive to Victoria Station by a round-about route. When I arrived at the station, a venerable Italian priest offered to help me with my bags. As I stepped onto the platform, the old priest leaned close and whispered in a familiar voice: “Keep your seat, Watson!”",
      "I looked in astonishment. Beneath the black hat and silver hair was none other than Sherlock Holmes! He had disguised himself flawlessly as a elderly priest.",
      "“We have not a moment to lose,” Holmes whispered, glancing back down the crowded platform. “Moriarty is not a man to be outwitted easily. Look there!”",
      "I looked down the platform and saw a tall, thin man pushing violently through the crowd. It was Professor Moriarty himself! He was frantically searching every carriage window, his face contorted with rage.",
      "“Quickly!” Holmes said. He pulled me into a reserved compartment of the Continental express train just as the doors slammed shut and the train began to roll out of Victoria Station.",
      "“He was very nearly too quick for us,” Holmes breathed, leaning back against the cushions. “He must have traced your cab to the station.”",
      "When our train reached Canterbury, Holmes ordered us to alight immediately with our small bags, leaving our larger trunks on the train. “Moriarty will hire a special train to pursue us,” Holmes explained. “Our train will go on to Dover, where he expects to catch us. We shall take a different route altogether.”",
      "His prediction proved correct. As we stood behind the luggage crates at Canterbury station, a small engine roared past at tremendous speed, tearing down the tracks toward the coast. In the window of the fast-moving train, we caught a brief glimpse of Professor Moriarty, staring ahead with fierce determination.",
      "“There goes our friend,” Holmes remarked with a light chuckle. “He has taken his special train, but he has lost his prey.”",
      "We crossed the English Channel from Newhaven to Dieppe, bypassing the port of Dover completely. From France, we traveled south through the charming valleys and ancient towns of Switzerland. For three weeks we walked through the breathtaking Alpine landscape, enjoying the fresh air and stunning snow-capped mountains.",
      "Yet, despite the beauty of our surroundings, a dark shadow hung over Holmes. He kept a constant watch on every path, every passerby, and every remote hotel. On the third day of May, we received a telegram from the London police. It brought mixed news: the entire Moriarty gang had been arrested in a series of dramatic dawn raids. However, the mastermind himself—Professor Moriarty—had escaped!",
      "“He has slipped through their hands,” Holmes said soberly as he read the telegram. “He knows that his criminal empire is ruined. He has nothing left to live for except revenge. He will follow me to the end of the earth, Watson.”",
      "I urged Holmes to return to England at once, now that his work was nearly complete. But he shook his head firmly. “No, my dear friend. As long as Moriarty is free, England is unsafe for me, and I am unsafe for England. Let us enjoy our journey through the mountains.”",
      "On May 3rd, we reached the small village of Meiringen in the Bernese Oberland. We stayed at the Englischer Hof, a pleasant inn kept by Peter Steiler, who spoke excellent English. Steiler was a kind host who recommended that we visit the famous Falls of Reichenbach, a magnificent waterfall located an hour’s walk from the village.",
      "The next morning, May 4th, we set out together under a clear blue sky, intending to spend the day exploring the mountains surrounding the falls. The sun was bright, and the air was crisp and invigorating. Neither of us could have guessed that we were walking toward a tragic climax that would break my heart forever."
     ],
     "img": {
      "src": "assets/images/stories/final-problem/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Watson look from a train window at a figure on the station platform"
    },
    {
     "n": 3,
     "title": "The Falls of Reichenbach",
     "paras": [
      "The Falls of Reichenbach is a terrible and impressive place. The torrent of melted snow cascades down into a roaring chasm of immense depth. Black rocks rise like jagged teeth from the foaming white water below, and the spray rises up in clouds of fine mist, creating a endless, deafening roar that shakes the ground beneath your feet.",
      "A narrow path had been cut into the cliffside, allowing visitors to walk along the edge of the abyss to view the roaring waters. The path ended abruptly at the dark, slippery gorge, requiring travelers to return by the exact same narrow trail they had come.",
      "We stood for a long time near the edge, looking down into the boiling cauldron of water. Holmes stood quietly, gazing into the foam with a look of deep reflection on his face.",
      "Suddenly, a young Swiss boy came running along the path from the direction of Meiringen. He delivered a letter to me, written in urgent English by Peter Steiler, the innkeeper. The note explained that an English lady staying at the hotel had suffered a sudden, severe hemorrhage of the lungs. She had only hours to live and begged to be examined by an English doctor. The innkeeper begged me to return immediately to assist her.",
      "I was torn between my duty as a physician and my desire to stay beside my friend. “You must go, Watson,” Holmes said gently. “A sick woman needs your medical skill. I shall remain here by the falls for a while longer and then walk slowly back to the inn.”",
      "I looked at him with concern. “Will you be safe alone?”",
      "“Quite safe,” Holmes replied with a calm smile. “The air here is invigorating, and the scenery is grand. Go, my dear fellow; duty calls you.”",
      "I turned back, looking over my shoulder three times as I walked down the path. Holmes was standing with his back against a rock, his arms folded, staring down at the roaring waters below. It was the last time I ever saw my dear friend alive."
     ],
     "img": {
      "src": "assets/images/stories/final-problem/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes watches a distant figure across the misty chasm at the Falls of Reichenbach"
    },
    {
     "n": 4,
     "title": "The Final Confrontation",
     "paras": [
      "When I arrived at the Englischer Hof in Meiringen, the innkeeper came to greet me. I asked anxiously about the sick English lady.",
      "“What lady?” Steiler asked in complete surprise. “There is no sick English lady here! I wrote no such letter!”",
      "My heart froze in horror. The letter was a cruel trick! It had been written to draw me away from Holmes, leaving him completely alone at the edge of the chasm!",
      "I turned around and ran back along the mountain path as fast as my legs could carry me. It took me an hour to reach the Falls of Reichenbach again. The spot was completely deserted. Holmes’s walking stick was leaning against the rock where I had left him. On top of the rock lay his silver cigarette case and a small sheet of paper, held down by a smooth pebble.",
      "I picked up the paper with trembling hands. It was a note written in Holmes’s clear, firm handwriting:",
      "“My dear Watson,—I write these few lines through the courtesy of Mr. Moriarty, who awaits my convenience for the final discussion of our questions. He has allowed me a few moments to leave this last message. My work is finished, and I am glad to know that I can leave society free from his dangerous presence. Tell the police that the evidence against the gang is complete. Goodbye, my dear friend.—Sherlock Holmes.”",
      "Tears filled my eyes as I read his final words. I looked closely at the muddy path near the edge of the cliff. The soft earth clearly showed two sets of footprints leading toward the end of the path—and none returning!",
      "At the end of the path, the mud was torn, trampled, and marked by deep heel-prints, showing that a desperate, violent struggle had taken place. There were no further tracks. Both men had fallen together into the abyss!",
      "I knelt at the edge of the chasm and looked down into the dark, swirling waters below. Deep down in that churning cauldron of foam, two of the most remarkable minds in Europe had met their end, locked in a final, deadly struggle.",
      "An examination by Swiss mountain experts later confirmed my terrible conclusions. No bodies were ever recovered from those deep, dark waters. There, deep in the dreadful pit of Reichenbach, lies buried forever the most dangerous criminal mastermind of our time, and the noblest, wisest man I have ever known.",
      "The news of Holmes’s death sent a wave of grief through the public. In London, the police used the detailed records and evidence he had left behind to convict the remaining members of Moriarty’s syndicate, bringing complete peace and order back to the nation.",
      "As for myself, I returned to my quiet medical practice in London, carrying the memory of my brilliant companion in my heart. Though time has softened the sharpness of my grief, I can never forget his remarkable intellect, his unyielding courage, and his devotion to justice.",
      "If an account of these events is needed, let it stand as a tribute to my late friend. He never sought fame or public acclaim, caring only for the quiet joy of solving a difficult problem. Sherlock Holmes was, and shall always remain, the best and wisest man whom I have ever known."
     ],
     "img": {
      "src": "assets/images/stories/final-problem/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Moriarty face each other on cliff edges above the waterfall"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "collection": "holmes"
  },
  {
   "id": "empty-house",
   "title": "The Adventure of the Empty House",
   "author": {
    "name": "Arthur Conan Doyle"
   },
   "category": "mystery",
   "genres": [
    "Mystery",
    "Detective"
   ],
   "language": "English",
   "edition": "Classic adaptation in 4 chapters.",
   "intro": "Three years after Sherlock Holmes seemed to die at the Reichenbach Falls, Dr. Watson finds him alive and drawn into the hunt for the killer of Ronald Adair.",
   "cover": {
    "src": "assets/covers/empty-house.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Sherlock Holmes",
     "role": "The consulting detective",
     "img": {
      "src": "assets/images/stories/empty-house/char-sherlock-holmes.webp",
      "w": 130,
      "h": 182
     }
    },
    {
     "name": "Dr. John Watson",
     "role": "Holmes’s friend and narrator",
     "img": {
      "src": "assets/images/stories/empty-house/char-dr-john-watson.webp",
      "w": 150,
      "h": 182
     }
    },
    {
     "name": "Colonel Sebastian Moran",
     "role": "A crack shot and former colonel",
     "img": {
      "src": "assets/images/stories/empty-house/char-colonel-sebastian-moran.webp",
      "w": 155,
      "h": 182
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Return of Sherlock Holmes",
     "paras": [
      "It was in the spring of the year 1894 that all London was shocked by the tragic murder of the honorable Ronald Adair. The crime was so mysterious and inexplicable that it gripped the public imagination, yet even more astonishing events were about to unfold. For myself, though I was deeply affected by Adair’s death, my heart was still heavy with an older sorrow—the memory of my dear friend Sherlock Holmes, who had perished three years before at the Reichenbach Falls.",
      "On the evening of March 30, 1894, I walked down Park Lane, stopping to look at the windows of the dead man’s house. I was so lost in my thoughts about Holmes and how much I missed his brilliant intellect that I bumped into an elderly, hunchbacked book collector, knocking several books from his arms into the muddy gutter.",
      "“I am terribly sorry,” I apologized, quickly kneeling down to gather the fallen books. “I was deeply occupied with my own reflections.”",
      "“You have a great deal to answer for,” a voice replied. The tone was sharp, clear, and utterly familiar. My breath caught in my throat. I dropped the books and stared up at the old man in disbelief.",
      "The hunchback’s gray hair vanished, his stooped posture straightened, and those sharp, familiar grey eyes looked down at me with an amused smile. It was Sherlock Holmes!",
      "“Holmes!” I cried out, my legs trembling beneath me. “Is it really you? Can it indeed be that you are alive? How on earth did you escape from that terrible abyss?”",
      "Holmes caught my arm and pulled me quickly down a side street. “Softly, my dear Watson, softly!” he murmured, his eyes scanning the street. “Do not attract a crowd. I am overjoyed to see you too, but we have serious business ahead, and my return must remain a strict secret for a little while longer. Come with me; a cab is waiting.”",
      "We drove in silence through the dark London streets until we arrived at an empty, unfurnished house on Camden House overlooking Baker Street. We climbed the dusty stairs in the dark and entered a back room. Once the door was safely locked, Holmes turned to me, his face glowing with excitement.",
      "“Ah, Watson, you look as though you have seen a ghost!” Holmes laughed softly, pulling up a wooden box to sit upon. “And yet, you never truly believed I was dead, did you?”",
      "“I mourned you as dead for three whole years,” I answered, still shaking with emotion. “Tell me everything! How did you survive the fall at Reichenbach?”",
      "“When Professor Moriarty and I stood at the edge of the abyss,” Holmes explained, “I knew he meant to kill me. When he lunged, I defended myself. He lost his footing and plunged backward into the roaring chasm below. I knew that Moriarty had other dangerous associates in London—principally his right-hand man, Colonel Sebastian Moran. If they thought I was dead, they would relax their guard. But if they knew I survived, they would hunt me down. So I decided to vanish.”",
      "Holmes described how he had climbed up the sheer rock wall of the cliff using a mountain climber’s grip, while Moriarty fell to his doom. As he reached the top, however, a stone was hurled down at him from above by someone else—Colonel Moran, who had witnessed the struggle.",
      "“Realizing that Moran wanted me dead just as much as Moriarty did,” Holmes continued, “I dropped back down into the mist and escaped into the mountains. With the help of my brother Mycroft, I traveled incognito through Tibet, Persia, and France for three years. Only last week did I return to London, knowing that the final piece of my work was nearly complete.”",
      "“And what brings us to this empty house tonight?” I asked, looking around the dark, dusty rooms.",
      "“Look across the street, Watson,” Holmes whispered, pointing toward our old lodgings at Baker Street. “Do you see our window?”"
     ],
     "img": {
      "src": "assets/images/stories/empty-house/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Watson and Holmes meet in a London room with a lamp, a globe and books on the desk"
    },
    {
     "n": 2,
     "title": "The Empty House",
     "paras": [
      "I looked across the narrow street toward the familiar windows of 221B Baker Street. To my complete amazement, I saw a silhouette of Sherlock Holmes sitting in an armchair inside our old sitting room, reading a book by the lamplight.",
      "“Good heavens!” I gasped. “That is you! How can you be sitting over there and standing here beside me at the exact same time?”",
      "Holmes chuckled with quiet satisfaction. “It is a bust of me, modeled in clay by a clever artist in Switzerland and painted to look lifelike. My housekeeper, Mrs. Hudson, moves it slightly every evening to make the shadow look natural. It is designed to draw someone out into the open—someone who wishes me dead.”",
      "“Who could that be?” I asked.",
      "“Colonel Sebastian Moran,” Holmes replied gravely. “He is the most dangerous man in London—a crack shot, a ruthless killer, and former colonel of an Indian regiment. He was Moriarty’s chief agent for all dirty work. When Moran discovered I was back in London, he set out to finish me. He is watching our old house right now from somewhere very close to where we are standing.”",
      "I looked around the dark, empty room with a sudden chill. “If he is nearby, we are in terrible danger!”",
      "“We are indeed,” Holmes said calmly, pulling a heavy revolver from his pocket. “That is why I brought you with me, Watson. I need your courage and your medical skill tonight. Our enemy is armed with a weapon far more dangerous than an ordinary gun, and he will make his move very soon.”",
      "We sat in absolute darkness for over an hour, listening to the ticking of a pocket watch and the distant rumble of carriages outside. The room was cold, smelling of dust and old plaster. Holmes sat motionless, his sharp eyes fixed on a tiny crack in the door leading to the front room."
     ],
     "img": {
      "src": "assets/images/stories/empty-house/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes and Watson stand in a dark street watching a house at night"
    },
    {
     "n": 3,
     "title": "The Deadly Air Gun",
     "paras": [
      "Just as the clock in a neighboring church tower struck midnight, a faint sound broke the silence. It was not the sound of footsteps on the stairs, but a slight scrape, like a shoe brushing softly against wood near the window behind us.",
      "Holmes stiffened, his body tense as a coiled spring. He motioned for me to remain absolutely silent.",
      "Through the dim moonlight filtering through the dusty windowpanes, I saw a shadow detach itself from the darkness of the front room. A tall, thick-set man stepped into the empty space. He carried a heavy, unusual metal object in his hands. He knelt down on one knee by the open window, resting the barrel of the weapon upon the wooden sill, aiming directly across the street at the clay bust in our old Baker Street window.",
      "For several moments the man remained motionless, peering through the darkness. Then came a sharp, metallic click, followed instantly by a dull, popping sound—quite unlike the loud bang of a firearm.",
      "In a flash, Holmes sprang forward with a roar like a tiger, throwing his full weight upon the assassin and pinning him violently to the floor! I rushed to his assistance, wrestling the heavy metal weapon from the man’s grip and pressing my weight onto his shoulders.",
      "“Let me go! Curse you!” the man growled, thrashing with tremendous strength. He was a powerfully built man with graying hair, a fierce mustache, and eyes full of murderous fury.",
      "“Hold him fast, Watson!” Holmes panted, pressing his knee into the man’s back. “Ah, Inspector Lestrade! You may come in now!”",
      "The door flew open, and Inspector Lestrade rushed into the room accompanied by two police officers, lanterns flashing brightly in the dark."
     ],
     "img": {
      "src": "assets/images/stories/empty-house/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes examines an air gun while Watson takes notes"
    },
    {
     "n": 4,
     "title": "The Capture of Colonel Moran",
     "paras": [
      "Inspector Lestrade stopped in utter astonishment as the lantern light fell upon Sherlock Holmes. “Mr. Holmes!” the inspector cried out, crossing himself in disbelief. “Good lord above! We thought you were dead and buried in Switzerland!”",
      "“I am very much alive, Lestrade,” Holmes smiled, stepping off the pinned man. “And I have just handed you one of the most dangerous criminals in Europe. Allow me to introduce Colonel Sebastian Moran.”",
      "Lestrade stared down at the struggling prisoner. “Colonel Moran? Arrested for what?”",
      "“For the attempted murder of myself tonight,” Holmes said smoothly, dusting off his knees, “and for the brutal murder of Ronald Adair in Park Lane three nights ago.”",
      "Moran sneered, glaring up at Holmes with pure hatred. “You can prove nothing! You caught me looking out a window, that is all!”",
      "“Let us examine your weapon, Colonel,” Holmes said, picking up the heavy metal object I had wrestled from his hands. “This is a remarkable invention—a silent air gun designed by the German mechanic Von Herder. It fires soft revolver bullets without a sound or flash of gunpowder. It was the very weapon you used to kill Ronald Adair through his open window because he caught you cheating at cards in your illegal gambling club, and it was the weapon you intended to use against me tonight.”",
      "Lestrade examined the air gun in awe. “This is extraordinary evidence, Mr. Holmes! It will hang him securely at the Old Bailey.”",
      "The police officers pulled Colonel Moran to his feet and handcuffed him securely. As they led the furious colonel out of the dark room, Holmes smiled quietly, his pipe already lit and glowing in the dark.",
      "Later that night, back in our comfortable rooms at 221B Baker Street, the gas lamps burned brightly, driving away the chill and shadows of the past three years. Everything was restored to its old place, as though Holmes had never been away.",
      "As we sat together over a warm cup of coffee, Holmes smiled across the table at me. “Well, Watson,” he said softly, “it has been a remarkable homecoming. The criminal underworld of London is once again without its master, Colonel Moran is safely behind bars, and our old partnership is reunited.”",
      "“It feels like a dream, Holmes,” I answered, shaking my head in wonder. “To think that you stood at death’s door in the Alps and now sit here smoking your pipe as calmly as ever.”",
      "“Life is infinitely stranger than anything the mind of man could invent,” Holmes replied, leaning back in his chair with a contented look. “We would not dare to invent things which are commonplace everyday occurrences in our profession. But now that the storm has passed, let us enjoy the quiet of Baker Street once more. Tomorrow, Watson, we have another client waiting downstairs.”",
      "And thus ended the strange adventure of the empty house, marking the triumphant return of Sherlock Holmes and opening a new chapter in our many years of solving the mysteries of Victorian London."
     ],
     "img": {
      "src": "assets/images/stories/empty-house/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Holmes confronts Colonel Moran, held by police beside a table with a gun"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   },
   "collection": "holmes"
  },
  {
   "id": "the-little-prince",
   "title": "The Little Prince",
   "author": {
    "name": "Antoine de Saint-Exupéry"
   },
   "category": "fantasy",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Reader adaptation in 8 chapters.",
   "intro": "A pilot stranded in the Sahara meets a little boy who asks him to draw a sheep. Little by little the boy tells of his tiny planet, his proud rose and the strange grown-ups he met on his journey to Earth.",
   "cover": {
    "src": "assets/covers/the-little-prince.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "The Little Prince",
     "role": "The boy from a tiny planet",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-little-prince.webp",
      "w": 230,
      "h": 220
     }
    },
    {
     "name": "The Pilot",
     "role": "The narrator, stranded in the desert",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-pilot.webp",
      "w": 190,
      "h": 220
     }
    },
    {
     "name": "The Rose",
     "role": "The proud flower he loves",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-rose.webp",
      "w": 160,
      "h": 220
     }
    },
    {
     "name": "The Fox",
     "role": "A friend who teaches him about taming",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-fox.webp",
      "w": 180,
      "h": 200
     }
    },
    {
     "name": "The Drunkard",
     "role": "Ashamed of drinking",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-drunkard.webp",
      "w": 190,
      "h": 198
     }
    },
    {
     "name": "The Businessman",
     "role": "Counts the stars he “owns”",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-businessman.webp",
      "w": 220,
      "h": 195
     }
    },
    {
     "name": "The Lamplighter",
     "role": "Lights and puts out his lamp every minute",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-lamplighter.webp",
      "w": 180,
      "h": 205
     }
    },
    {
     "name": "The Geographer",
     "role": "A scholar who records but never explores",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-geographer.webp",
      "w": 220,
      "h": 205
     }
    },
    {
     "name": "The Snake",
     "role": "The yellow snake of the desert",
     "img": {
      "src": "assets/images/stories/the-little-prince/char-the-snake.webp",
      "w": 190,
      "h": 190
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Pilot and the Desert",
     "paras": [
      "When I was six years old, I saw a magnificent picture in a book about the primeval forest. The book was called True Stories from Nature, and the picture showed a giant snake swallowing a wild animal. The text explained that boa constrictors swallow their prey whole, without chewing it, and then fall asleep for six months to digest their meal.",
      "I thought deeply about the adventures of the jungle, and with a colored pencil, I succeeded in making my very first drawing. I showed my masterpiece to the grown-ups and asked them if my drawing made them feel afraid. But they answered: “Why should anyone be frightened by a hat?” My drawing was not a picture of a hat; it was a boa constrictor digesting an elephant. So, I drew the inside of the snake so that adults could understand, as they always require explanations. Their advice was to set aside my drawings of snakes and devote myself instead to geography, history, arithmetic, and grammar. That was how I gave up a magnificent career as a painter at the age of six.",
      "Grown-ups never understand anything by themselves, and it is tiring for children to be always and forever explaining things to them. I had to choose another profession, so I learned to fly airplanes. I flew over almost every part of the world, and geography served me well. I could tell China from Arizona at a single glance, which is very useful if you are lost in the night. Throughout my life, I had many contacts with serious people, but my opinion of them did not improve much. Whenever I met an adult who seemed clear-sighted, I showed them my first drawing. But the answer was always the same: “That is a hat.” So I would not speak to them about wild jungles or stars, but about bridge, golf, politics, and neckties. And the adult would be pleased to have met such a sensible man.",
      "So I lived my life alone, without anyone to really talk to, until six years ago when my plane crashed in the Sahara Desert. Something in my engine was broken, and since I had neither a mechanic nor passengers with me, I prepared to attempt a difficult repair all by myself. It was a matter of life or death: I had scarcely enough drinking water for eight days.",
      "The first night, I went to sleep on the sand, a thousand miles from any inhabited land. I was more isolated than a shipwrecked sailor on a raft in the middle of the ocean. Thus, you can imagine my immense surprise when a strange little voice woke me up at sunrise. It said:",
      "“Please... draw me a sheep!”",
      "I jumped to my feet as if I had been struck by lightning. I rubbed my eyes and looked carefully. I saw an extraordinary little boy staring at me with great seriousness. I stared at this sudden appearance with my eyes wide with astonishment. Remember, I was stranded in the desert a thousand miles from any human habitation, yet this child did not seem lost, tired, hungry, thirsty, or afraid. He did not look like a lost child in the middle of nowhere.",
      "“When a mystery is too overwhelming, you dare not disobey,” I thought. As absurd as it seemed, I pulled a piece of paper and a fountain pen from my pocket. But then I remembered that I had studied geography and arithmetic, so I told the boy I did not know how to draw. He answered: “That does not matter. Draw me a sheep.”"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A pilot in a leather jacket stands beside his biplane in the Sahara Desert"
    },
    {
     "n": 2,
     "title": "The Little Prince",
     "paras": [
      "Since I had never drawn a sheep, I drew for him the only picture I knew how to make: the outside of the boa constrictor swallowing an elephant. To my complete amazement, the little boy replied:",
      "“No, no! I do not want an elephant inside a boa constrictor. A boa constrictor is very dangerous, and an elephant is far too big. Everything is very small where I live. I need a sheep. Draw me a sheep.”",
      "So I drew a sheep. He looked at it carefully and said: “No, this one is already very sick. Make another one.” I drew another. My friend smiled gently: “You can see for yourself... that is not a sheep, it is a ram. It has horns.” I made another drawing, but it was rejected like the others. By this time, my patience had run out because I was in a hurry to dismantle my engine. So I scribbled a simple box and said: “This is the crate. The sheep you asked for is inside.”",
      "To my surprise, the young judge’s face lit up with joy: “That is exactly what I wanted! Do you think this sheep will need a lot of grass? Because where I live, everything is very small.”",
      "“There will be plenty of grass,” I said. “I have given you a very small sheep.” He tilted his head over the drawing. “Not so small as that... Look, he has fallen asleep!” And that was how I made the acquaintance of the little prince.",
      "It took me a long time to understand where he came from. The little prince asked many questions, but never seemed to hear mine. It was only from words dropped by chance that everything was gradually revealed to me. For instance, when he first saw my airplane, he asked: “What is that thing over there?”",
      "“That is not a thing. It flies. It is an airplane. It is my airplane.” I was proud to tell him that I could fly. Then he cried out: “What! You fell from the sky?” “Yes,” I answered modestly. “Oh, that is funny!” And the little prince burst into a lovely laugh, which annoyed me, as I preferred my misfortunes to be taken seriously. Then he added: “So you come from space, too! Which planet are you from?”"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The pilot kneels in the sand beside his plane as the little prince in a green coat stands before him"
    },
    {
     "n": 3,
     "title": "The Story of a Tiny Planet",
     "paras": [
      "At that moment, I caught a sudden glimpse of light into the mystery of his presence. “Do you come from another planet?” I asked. But he did not answer. He shook his head gently while looking at my plane: “It is true that in that thing, you could not have come from very far away...” He pulled my drawing of the sheep out of his pocket and became absorbed in his treasure.",
      "You can imagine how my curiosity was awakened by this half-confidence about “other planets.” I tried to learn more: “Where do you come from, my little fellow? Where is ‘where I live’? Where are you going to take my sheep?” He answered quietly: “The good thing about the crate you gave me is that at night he can use it as a home.” “Of course. And if you are good, I will give you a rope to tie him up during the day, and a post.” The little prince looked shocked: “Tie him up? What a strange idea!” “If you don’t tie him, he will wander off and get lost.” My friend burst into laughter again: “Where do you think he would go? Straight ahead, anywhere!” Then the little prince said gravely: “It doesn’t matter. Where I live, everything is so small! Straight ahead, no one can go very far.”",
      "I had thus learned a second very important fact: his home planet was hardly bigger than a house! This did not surprise me too much. I knew that besides the large planets like Earth, Jupiter, Mars, and Venus, there are hundreds of others so small that it is difficult to see them even through a telescope. Astronomers call them asteroids. I have good reason to believe that the planet the little prince came from was Asteroid B-612. This asteroid was seen only once through a telescope by a Turkish astronomer in 1909.",
      "If I tell you these details about Asteroid B-612 and mention its number, it is because of the grown-ups. Grown-ups love numbers. When you tell them about a new friend, they never ask essential questions like: “What does his voice sound like? What games does he prefer? Does he collect butterflies?” Instead, they ask: “How old is he? How many brothers does he have? How much does his father earn?” Only then do they feel they know him. If you say to adults: “I saw a beautiful house made of pink brick, with geraniums in the windows and doves on the roof,” they cannot imagine it. You must say: “I saw a house that costs a hundred thousand dollars.” Then they cry: “Oh, how pretty!”"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The little prince stands with his rose under a glass dome on a tiny planet among the stars"
    },
    {
     "n": 4,
     "title": "The Rose and the Baobabs",
     "paras": [
      "Every day I learned something new about the little prince’s planet, about his departure and his journey. On the third day, I learned about the drama of the baobabs. This happened thanks to the sheep, for the little prince asked me with sudden urgency: “Is it true that sheep eat little bushes?” “Yes, that is true.” “Ah! I am glad!”",
      "I did not understand why this was so important, but he added: “Then they also eat baobabs?” I pointed out to him that baobabs are not small bushes, but trees as giant as churches, and that even a whole herd of elephants could not eat a single baobab. The idea of the herd made him laugh: “We would have to stack the elephants on top of each other!” But then he remarked wisely: “Baobabs start by being small before they grow large.” “That is true,” I said, “but why do you want your sheep to eat young baobabs?” He replied: “Oh, come on!” as if it were obvious.",
      "Indeed, on the little prince’s planet, as on all planets, there were good plants and bad plants. Consequently, there were good seeds from good plants and bad seeds from bad plants. But seeds are invisible. They sleep in the darkness of the earth until one of them decides to wake up. It stretches and pushes a timid little sprout toward the sun. If it is a sprout of radish or rose, you can let it grow as it wishes. But if it is a bad plant, like a baobab, you must pull it up immediately as soon as you recognize it. Now, there were terrible seeds on the planet of the little prince: the seeds of baobabs. The soil was infested with them. If you notice a baobab too late, you can never get rid of it. Its roots pierce through the entire planet, and if the planet is too small and the baobabs are too numerous, they will burst it into pieces.",
      "“It is a question of discipline,” the little prince told me later. “When you finish grooming yourself in the morning, you must carefully clean up your planet. You must regularly pull up the baobabs as soon as they can be distinguished from the rosebushes, which they resemble when they are young. It is very tedious work, but very easy.”",
      "On the little prince’s planet, there was also a unique flower. For a long time, it had been only a seedling, different from the other sprouts. One day, a huge bud appeared. The little prince watched its growth with wonder. The flower prepared her appearance with great care inside her green chamber, choosing her colors slowly and adjusting her petals one by one. She did not want to appear all crumpled like poppies; she wished to appear in the full radiance of her beauty. She was mysterious and vain!",
      "Then, one morning at sunrise, she revealed herself. “Ah! I am scarcely awake,” she said, yawning. “I ask for your forgiveness... my petals are still untidy.” The little prince could not contain his admiration: “How beautiful you are!” “Am I not?” the flower answered softly. “And I was born at the same moment as the sun...” The little prince realized she was not overly modest, but she was so enchanting!",
      "She soon began to torment him with her proud vanity. One day, speaking of her four sharp thorns, she told him: “Let the tigers come with their claws!” “There are no tigers on my planet,” the little prince objected, “and anyway, tigers do not eat grass.” “I am not a grass,” the flower replied sweetly. “I am not afraid of tigers, but I have a horror of drafts. Do you have a screen?” A horror of drafts is not good for a plant, thought the little prince. “This flower is very complicated...” “In the evening you must put me under a glass globe. It is very cold where you live.”",
      "Despite the sincerity of his love, the little prince began to doubt her. He had taken her light words too seriously and felt very unhappy. “I should not have listened to her,” he confided to me later. “One should never listen to flowers. One should look at them and smell them. Mine perfumed my planet, but I did not know how to enjoy it. I was too young to know how to love her.”"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The little prince kneels beside his rose under a glass dome as young baobab trees sprout on his planet"
    },
    {
     "n": 5,
     "title": "The King and the Vain Man",
     "paras": [
      "To escape his loneliness, the little prince decided to visit neighboring asteroids. On the first planet he visited, he found a king. The king sat on a majestic throne, wearing royal purple and ermine. “Ah! Here is a subject!” the king exclaimed when he saw the little prince. The little prince wondered: “How can he know who I am when he has never seen me before?” He did not know that for kings, the world is simplified: all men are subjects.",
      "“Come closer so I can see you better,” said the king, who was proud to finally be a king over someone. The little prince looked for a place to sit, but the whole planet was covered by the king’s grand cloak. So he remained standing, and because he was tired, he yawned. “It is against etiquette to yawn in the presence of a king,” the monarch told him. “I forbid you to do so.” “I cannot help it,” answered the little prince, embarrassed. “I have made a long journey and have had no sleep.” “Then I command you to yawn!” said the king. “I ordering you to yawn...” But the little prince blushed: “That intimidates me... I cannot do it now.”",
      "“Hmm!” replied the king. “Then I... I command you to sometimes yawn and sometimes not!” The king insisted that his authority be respected. He was an absolute monarch, but because he was a good man, his orders were reasonable. “If I were to command a general to turn into a seabird,” he said, “and if the general did not obey, it would not be the general’s fault. It would be mine.” “May I sit down?” asked the little prince. “I command you to sit down!” replied the king, pulling up a fold of his ermine coat.",
      "The little prince was puzzled. The planet was tiny; what could the king rule over? “Sire,” he said, “what do you rule over?” “Over everything,” the king answered simply. “Over all this?” “Over all this,” said the king. He ruled not only over his planet, but over all the stars. “And do the stars obey you?” “Of course,” said the king. “They obey immediately. I do not tolerate disobedience.” The little prince thought of his own small planet and wished to see a sunset. “I would like to see a sunset... Please command the sun to set.” The king replied: “You shall have your sunset. But I shall wait until conditions are favorable, according to my science of government.” “When will that be?” “That will be this evening around seven forty!” The little prince felt bored and decided to leave. “Do not go!” said the king. “I will make you a Minister of Justice!” “But there is no one here to judge!” “Then you shall judge yourself,” the king replied. “That is the hardest thing of all. It is much more difficult to judge oneself than to judge others.”",
      "The second planet was inhabited by a vain man. “Ah! An admirer comes to visit me!” he shouted from afar. To vain people, all other men are admirers. “Good day,” said the little prince. “That is a funny hat you are wearing.” “It is for tipping in greeting when people applaud me,” replied the vain man. “Clap your hands together.” The little prince clapped his hands, and the man tipped his hat modestly. “This is more amusing than the king,” thought the little prince. But after five minutes of clapping, he grew tired: “And what must one do to make the hat fall?” But the vain man did not hear him. Vain people hear only praise.",
      "“Do you really admire me very much?” asked the vain man. “What does admire mean?” “To admire means to recognize that I am the handsomest, best dressed, richest, and most intelligent man on the planet.” “But you are the only man on your planet!” “Do me this favor; admire me anyway!” “I admire you,” said the little prince, shrugging his shoulders, “but why should that matter to you?” And he departed. “Grown-ups are certainly very strange,” he thought as he continued his journey."
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The little prince faces a king on a throne on one tiny planet while a vain man waves from another"
    },
    {
     "n": 6,
     "title": "The Drunkard, the Businessman, and the Lamplighter",
     "paras": [
      "The third planet was inhabited by a drunkard. This visit was very short, but it filled the little prince with deep sadness. “What are you doing there?” he asked the drunkard, whom he found sitting silently before a row of empty bottles and a row of full bottles. “I am drinking,” answered the drunkard gloomy. “Why are you drinking?” “To forget.” “To forget what?” asked the little prince. “To forget that I am ashamed,” confessed the drunkard, hanging his head. “Ashamed of what?” “Ashamed of drinking!” concluded the drunkard, shutting himself up in absolute silence. The little prince left, completely bewildered.",
      "The fourth planet belonged to a businessman. This man was so busy that he did not even raise his head when the little prince arrived. “Good day,” said the child. “Your cigarette has gone out.” “Three and two make five. Five and seven, twelve... total five hundred and one million...” “Five hundred million what?” “Millions of those little things you see in the sky. Stars! I count them and recount them. It is difficult, but I am a serious man!” “And what do you do with five hundred million stars?” “I own them. I write the number on a piece of paper, and then I lock it in a drawer.” “Is that all?” “That is enough!” “I own a flower,” said the little prince, “and I water her every day. I own three volcanoes, and I sweep them every week. It is useful to my flower and my volcanoes that I own them. But you are not useful to the stars.” The businessman opened his mouth, but could find no answer, and the little prince went away.",
      "The fifth planet was very curious. It was the smallest of all, with just enough room for a street lamp and a lamplighter. The little prince could not understand why a lamp and a lamplighter were needed in the middle of space on a planet without houses or people. Yet he said to himself: “Perhaps this man is absurd, but he is less absurd than the king, the vain man, the businessman, and the drunkard. At least his work has a meaning. When he lights his lamp, it is as if he brings a new star or a flower to life.”",
      "When he reached the planet, he greeted the lamplighter: “Good morning. Why have you just put out your lamp?” “That is the order,” answered the lamplighter. “Good morning.” “What is the order?” “To extinguish my lamp. Good evening.” And he lit it again. “Why have you lit it again?” “That is the order.” “I don’t understand,” said the little prince. “There is nothing to understand,” said the lamplighter. “The order is the order. Good morning.” And he put out his lamp. He wiped his forehead with a red handkerchief: “I follow a terrible profession. It used to be reasonable. I turned the lamp off in the morning and lit it in the evening. But the planet turns faster every year, and the order has not changed! Now it turns once every minute, so I have no rest. I light and extinguish it once per minute!”"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The little prince floats among tiny planets with a drunkard, a businessman and a lamplighter"
    },
    {
     "n": 7,
     "title": "The Geographer and the Journey to Earth",
     "paras": [
      "The sixth planet was ten times larger than the last. It was inhabited by an old gentleman who wrote giant books. “Ah! Here comes an explorer!” he exclaimed when he saw the little prince. The little prince sat down on the table, panting. “Where do you come from?” asked the old gentleman. “What is that big book?” asked the little prince. “I am a geographer,” replied the old gentleman. “A geographer is a scholar who knows where the seas, rivers, towns, mountains, and deserts are.” “That is interesting,” said the little prince. “Finally, a real profession!”",
      "He looked around at the geographer’s planet. It was magnificent. “Your planet is very beautiful,” he said. “Does it have oceans?” “I cannot know that,” said the geographer. “And mountains?” “I cannot know that either.” “But you are a geographer!” “Exactly,” said the scholar, “but I am not an explorer. We receive explorers, question them, and write down their memories. We do not record temporary things like flowers.” “Why not?” asked the little prince. “My flower is the most beautiful thing on my planet!” “Because flowers are ephemeral,” said the geographer. “What does ephemeral mean?” “It means ‘threatened by speedy disappearance’.”",
      "“Is my flower threatened by speedy disappearance?” asked the little prince, his heart aching. “Certainly.” “My flower is ephemeral,” said the little prince to himself, “and she has only four thorns to defend herself against the world! And I have left her all alone!” That was his first moment of regret. But he gathered his courage: “What planet do you advise me to visit next?” “The planet Earth,” replied the geographer. “It has a good reputation.” And so the little prince departed, thinking of his rose.",
      "The seventh planet was Earth. Earth is not just any planet! It contains 111 kings, 7,000 geographers, 900,000 businessmen, 7,500,000 drunkards, and 311,000,000 vain men—in total, about two billion grown-ups! When the little prince arrived on Earth, he was very surprised to see no people. He was afraid he had come to the wrong planet, but then a ring of moonlight-colored gold moved in the sand. “Good evening,” said the little prince. “Good evening,” said the snake. “What planet is this?” “This is planet Earth, in Africa,” replied the snake. “Ah... Are there no people on Earth?” “This is the desert. There is no one in the desert,” said the snake. “Earth is very large.”",
      "The little prince sat on a stone and looked up at the sky: “I wonder whether the stars are shining in the sky so that each person can find their own star again... Look at my planet. It is right above us. But how far away it is!” “It is beautiful,” said the snake. “What brings you here?” “I have had trouble with a flower,” said the little prince. “Ah!” said the snake. And they were both silent.",
      "“Where are the people?” resumed the little prince at last. “It is a little lonely in the desert.” “It is also lonely among people,” said the snake. The little prince looked at him for a long time: “You are a funny creature, no thicker than a finger...” “But I am more powerful than the finger of a king,” said the snake. “I can carry you farther than a ship. Whomever I touch, I return to the earth from which they came. But you are innocent, and you come from a star...” The little prince made no answer."
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "A geographer shows the little prince a map in a study with a view of the Earth through the window"
    },
    {
     "n": 8,
     "title": "The Fox, the Well, and the Stars",
     "paras": [
      "The little prince walked for a long time through sand, rocks, and snow, until he discovered a road. And all roads lead to human beings. He found himself standing before a garden blooming with thousands of roses. He looked at them, astounded. They all looked like his flower. “Who are you?” he asked. “We are roses,” they answered. The little prince was overwhelmed with sadness. His flower had told him that she was the only one of her kind in the whole universe. And here were five thousand of them, all alike, in a single garden!",
      "“She would be very annoyed if she saw this,” he thought. “And I thought I was rich with a unique flower, but I possess only an ordinary rose.” He lay down in the grass and wept.",
      "It was then that the fox appeared. “Good day,” said the fox. “Good day,” answered the little prince politely. “Come and play with me,” the child suggested. “I am so sad.” “I cannot play with you,” said the fox. “I am not tamed.” “Ah! Forgive me,” said the little prince. But after a moment’s thought, he added: “What does ‘tamed’ mean?” “It is something too often forgotten,” said the fox. “It means ‘to establish ties’.” “To establish ties?” “Exactly,” said the fox. “To me, you are still nothing more than a little boy who is just like a hundred thousand other little boys. And I have no need of you. And you have no need of me either. But if you tame me, we shall need each other. To me, you will be unique in all the world. To you, I shall be unique in all the world...”",
      "“I am beginning to understand,” said the little prince. “There is a flower... I think she has tamed me.” So the little prince tamed the fox. And when the time for his departure was near, the fox said: “Ah! I shall cry!” “It is your own fault,” said the little prince. “I wished you no harm, but you wanted me to tame you.” “Yes, that is true,” said the fox. “But you are going to cry!” said the prince. “Then you gain nothing from it!” “I gain something,” said the fox, “because of the color of the wheat fields. Go and look at the roses again. You will understand that yours is unique in all the world. Then come back to say goodbye, and I will gift you a secret.”",
      "The little prince went back to look at the roses. “You are not at all like my rose,” he told them. “No one has tamed you, and you have tamed no one. You are as my fox was before. He was only a fox like a hundred thousand others. But I have made him my friend, and now he is unique in all the world.” The roses were embarrassed. “You are beautiful, but you are empty,” he added. “One could not die for you. To an ordinary passerby, my rose looks just like you. But she alone is more important than all of you, because it is she whom I have watered. Because it is she whom I put under the glass globe. Because she is my rose.”",
      "He returned to the fox. “Goodbye,” he said. “Goodbye,” said the fox. “Here is my secret. It is very simple: It is only with the heart that one can see rightly; what is essential is invisible to the eye.” “What is essential is invisible to the eye,” repeated the little prince, so that he would remember. “It is the time you have wasted for your rose that makes your rose so important.” “It is the time I have wasted for my rose...” said the little prince.",
      "Now it was eight days since my plane crash in the desert, and I had drunk the last drop of my water supply. “Ah!” I said to the little prince, “your memories are sweet, but I have not fixed my plane, and I have nothing left to drink!” “My friend the fox said...” “My dear boy, this is no longer about foxes!” “Why?” “Because we are going to die of thirst!” He looked at me and answered: “It is good to have had a friend, even if one is about to die. I am very glad to have had a fox for a friend...”",
      "We began to walk across the desert in silence. Night fell, and the stars began to shine. “The stars are beautiful because of a flower that cannot be seen,” the little prince murmured. “The desert is beautiful,” he added. And it was true; I had always loved the desert. You sit down on a sand dune. You see nothing. You hear nothing. Yet something glows in silence... “What makes the desert beautiful,” said the little prince, “is that somewhere it hides a well...”",
      "I was struck by a sudden realization of that mysterious radiance: when I was a boy, I lived in an old house, and legend said a treasure was buried there. No one ever found it, but it cast a spell over the whole house. My home hid a secret in its heart... “Yes,” I said to the prince, “whether it is a house, the stars, or the desert, what makes them beautiful is invisible!” “I am glad,” he said, “that you agree with my fox.” As he fell asleep, I took him in my arms and continued walking. I felt deeply moved. It seemed to me that I was carrying a fragile treasure. It seemed even that there was nothing more fragile on Earth.",
      "At dawn, I discovered the well. It was not like the ordinary wells of the Sahara, which are simple holes dug in the sand. This one looked like a well in a village, complete with a pulley, a bucket, and a rope. I laughed, touched the rope, and set the pulley in motion. The pulley groaned like an old weathercock. “Do you hear?” said the prince. “We have woken this well, and it is singing...” I raised the bucket to the brim and held it to his lips. He drank with his eyes closed. It was as sweet as a feast. This water was something quite different from simple nourishment. It was born of our walk under the stars, the song of the pulley, and the effort of my arms. It was good for the heart.",
      "“The people where you live,” said the little prince, “grow five thousand roses in one garden... and yet they do not find what they are looking for.” “They do not find it,” I answered. “And yet what they are looking for could be found in a single rose, or in a little water...” “Yes, that is true,” I said. And the little prince added: “But the eyes are blind. One must look with the heart.”",
      "The next day, I returned from my plane repair. The little prince was sitting on top of an old stone wall near the well. He was talking to someone: “You have good poison? You are sure it will not make me suffer long?” I stopped in horror. At the foot of the wall, raised toward him, was one of those yellow snakes that can kill you in thirty seconds. I reached for my revolver, but at the sound of my footsteps, the snake slid softly into the sand and disappeared among the stones.",
      "I caught the little prince in my arms, his face white as snow. “What is this story?” I asked. “Are you talking with snakes now?” He looked at me gravely and put his arms around my neck. “I am glad that you have found what was wrong with your engine,” he said. “You can go home now...” “How do you know that?” I had just been about to tell him! He added: “I, too, am returning home today... It is much farther... much more difficult...” I felt that something extraordinary was happening. I held him close in my arms like a little child, yet it seemed to me that he was sliding down into an abyss, and I could do nothing to hold him back.",
      "“I have your sheep,” he said softly. “And I have the crate for him. And I have the muzzle...” He smiled sadly. “Tonight, it will be a year. My star will be right above the place where I fell last year...” “My little friend,” I said, “is this all a bad dream?” But he only said: “What is essential is invisible to the eye... It is the same as with the flower. If you love a flower that lives on a star, it is sweet to look at the sky at night. All the stars are bloomed with flowers.” “Of course...” “You know... my star will be too small for me to show you where it is. It is better that way. My star will be for you one of the stars. So you will love looking at all of them. They will all be your friends.”",
      "He laughed again. “Ah, my little friend, I love to hear that laugh!” “That shall be my gift to you,” he said. “When you look at the sky at night, since I shall be living on one of them, since I shall be laughing on one of them, it will be to you as if all the stars were laughing. You—only you—will have stars that can laugh!” And he laughed again.",
      "“And when your sorrow is comforted (for time comforts all sorrow), you will be content that you have known me. You will always be my friend. You will want to laugh with me.”",
      "That night he set out quietly, without a sound. When I managed to catch up with him, he was walking fast, with a firm step. He took my hand: “Ah, you are here...” he said. “You should not have come. You will suffer. I shall look as if I were dead, but that will not be true...” I remained silent. “You understand... It is too far. I cannot carry this body with me. It is too heavy. It will be like an old abandoned shell. There is nothing sad about an old shell...”",
      "He sat down because he was afraid. Then he said: “You know... my flower... I am responsible for her! She is so weak! She is so naive! She has only four useless thorns to protect herself against the world...” I could no longer stand. He stood up. He took one step. I could not move.",
      "There was nothing but a yellow flash near his ankle. He remained motionless for an instant. He did not cry out. He fell gently, as a tree falls. There was not even a sound, because of the sand.",
      "Six years have passed now... I have never told this story before. The companions who met me were glad to see me alive. I was sad, but I told them: “I am tired...” Now I am somewhat comforted. That is to say... not completely. But I know he returned to his planet, because at daybreak, I did not find his body. It was not such a heavy body...",
      "And I love listening to the stars at night. It is like five hundred million little bells... But here is a great mystery. For you who also love the little prince, as for me, nothing in the universe remains the same if somewhere, no one knows where, a sheep we have never seen has, or has not, eaten a rose...",
      "Look up at the sky. Ask yourselves: Has the sheep eaten the flower or not? And you will see how everything changes... And no grown-up will ever understand that this is of such great importance!"
     ],
     "img": {
      "src": "assets/images/stories/the-little-prince/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "The little prince kneels beside a fox near a stone well under a crescent moon"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "hansel-and-gretel",
   "title": "Hansel and Gretel",
   "author": {
    "name": "Brothers Grimm"
   },
   "category": "fantasy",
   "genres": [
    "Fairy Tale",
    "Fantasy"
   ],
   "language": "English",
   "edition": "Illustrated adaptation in 6 chapters.",
   "intro": "Driven into the forest by famine and a cruel stepmother, two children follow a trail of pebbles home, lose a trail of crumbs to the birds, and find a house made of sweets. Behind its sugar windows waits a witch, and only courage and quick thinking can save them.",
   "cover": {
    "src": "assets/covers/hansel-and-gretel.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Hansel",
     "role": "The clever brother who leaves a trail",
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/char-hansel.webp",
      "w": 200,
      "h": 200
     }
    },
    {
     "name": "Gretel",
     "role": "His brave little sister",
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/char-gretel.webp",
      "w": 200,
      "h": 200
     }
    },
    {
     "name": "The Witch",
     "role": "The wicked owner of the sweet house",
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/char-the-witch.webp",
      "w": 200,
      "h": 200
     }
    },
    {
     "name": "The Woodcutter",
     "role": "The poor, grieving father",
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/char-the-woodcutter.webp",
      "w": 200,
      "h": 200
     }
    },
    {
     "name": "The Stepmother",
     "role": "The hard-hearted wife who plans to abandon the children",
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/char-the-stepmother.webp",
      "w": 200,
      "h": 200
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Poor Woodcutter",
     "paras": [
      "Once upon a time, on the edge of a great and dark forest, there lived a poor woodcutter with his wife and his two children. The boy was named Hansel, and the girl was named Gretel. The family lived in a small wooden cottage, and they had very little to call their own. The woodcutter worked hard from sunrise to sunset, cutting firewood with his heavy axe, but he earned barely enough money to buy plain bread for his family.",
      "A terrible famine struck the country. Food became scarce and expensive across the land. Prices rose so high that the poor woodcutter could no longer afford even a single loaf of daily bread. Night after night, the man lay awake in his bed, turning and tossing with sorrow, wondering how he could feed his hungry children.",
      "One evening, as he lay sighing in the dark, he said to his wife, “What is to become of us? How can we feed our poor children when we have nothing left for ourselves?”",
      "His wife, who was the children’s stepmother, had a cold and hardened heart. “Listen to me, husband,” she answered quietly. “Early tomorrow morning, before the sun rises, we will take the two children deep into the thickest part of the forest. We will build a warm fire for them and give each of them a small crust of bread. Then we will go to our work and leave them alone. They will not be able to find their way back home, and we will no longer have to feed them.”",
      "“No, wife!” cried the woodcutter, his voice trembling. “I cannot do such a cruel thing! How could I leave my dear children alone in the wild forest? The wild beasts would soon come and tear them to pieces!”",
      "“You foolish man!” she scolded him angrily. “If you do not agree, all four of us will starve to death! You might as well start carving the wooden coffins for our graves!” She pressed him so hard with her bitter words that finally the poor man gave in, though his heart was heavy with grief.",
      "The two children had been unable to sleep because of their intense hunger, and they heard everything their stepmother had said. Gretel wept bitter tears and whispered to her brother, “Now all hope is gone. What will happen to us?”",
      "“Do not fear, little sister,” Hansel comforted her softly. “I will find a way to save us.”"
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel and Gretel lie awake in the loft window while their father sits with his head in his hand and their stepmother stands beside him in the cottage"
    },
    {
     "n": 2,
     "title": "Lost in the Forest",
     "paras": [
      "When their parents had fallen fast asleep, Hansel quietly slipped out of bed. He put on his coat and opened the lower door of the cottage. The moon was shining brightly in the clear night sky, and the small white pebbles lying on the path in front of the house glistened like polished silver coins. Hansel stooped down and filled his coat pockets with as many white pebbles as they could hold. Then he returned to the bedroom and whispered to Gretel, “Be at ease, dear sister, and sleep peacefully.”",
      "At the first dawn of morning, before the sun had risen over the trees, the stepmother came and woke the two children. “Get up, you lazy children! We are going into the forest to gather firewood.” She handed each of them a tiny piece of bread and added, “Here is your breakfast. Do not eat it before noon, for you will receive nothing more today.”",
      "Gretel took both pieces of bread under her apron because Hansel’s pockets were stuffed full of pebbles. Then they all set out together on the path into the deep forest. As they walked, Hansel frequently stopped and looked back toward the house. His father noticed this and said, “Hansel, why do you keep stopping and lagging behind? Pay attention to your steps!”",
      "“Ah, father,” replied Hansel, “I am looking at my white kitten, sitting up on the roof to bid me goodbye.”",
      "“Foolish boy,” said the stepmother sneeringly, “that is not your kitten. That is only the morning sun shining on the chimney.” But Hansel had not been looking at a kitten; each time he turned, he had dropped a shining white pebble from his pocket onto the dark soil of the path.",
      "When they had reached the very middle of the forest, the father said, “Gather some dry branches, children, and I will build a fire so you do not freeze.” Hansel and Gretel gathered a large pile of brushwood, and soon a bright, warm fire was blazing. The stepmother said, “Sit by the fire, children, and rest yourselves. We are going deeper into the woods to chop timber. When we have finished, we will return to fetch you.”",
      "Hansel and Gretel sat by the warm fire. When noon arrived, they ate their small pieces of bread. They heard the distant sound of an axe knocking against wood, and so they believed their father was working nearby. But it was not an axe; it was a heavy branch the stepmother had tied to a dead tree, which blew back and forth in the wind. After waiting for many hours, the tired children closed their eyes and fell fast asleep."
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel holds a handful of white pebbles while Gretel clings to him in the moonlit forest, a glowing trail of pebbles behind them"
    },
    {
     "n": 3,
     "title": "Deeper into the Woods",
     "paras": [
      "When they finally awoke, it was dark night. Gretel began to cry bitterly, saying, “How will we ever get out of the forest now?” But Hansel comforted her, “Wait a little while until the full moon rises, and then we will easily find our way.”",
      "When the full moon rose high in the heavens, Hansel took his little sister by the hand. The white pebbles glistened like brand-new silver coins in the moonlight, marking the path clearly. They walked through the whole night, and as dawn was breaking, they arrived back at their father’s cottage. They knocked at the door. When the stepmother opened it and saw Hansel and Gretel, she feigned surprise, but the father rejoiced in his heart, for he had felt deeply ashamed for abandoning them.",
      "Not long after, severe hunger returned to the land once more. One night, the children heard their stepmother say to their father, “Everything is eaten again! We have only half a loaf of bread left, and after that, our song is over. The children must go! We will take them even deeper into the forest so they cannot find their way back.”",
      "The father’s heart was heavy, and he thought, “It would be better to share the last bite with my children.” But his wife would not listen to his pleas. He who says yes once must say yes a second time, and so the woodcutter gave in once more.",
      "Hansel attempted to slip out to gather white pebbles as before, but the stepmother had locked the door, and he could not escape. He comforted his sister nevertheless: “Do not cry, Gretel. God will help us.”",
      "Early the next morning, the stepmother gave them their pieces of bread, which were even smaller than before. On the way into the forest, Hansel crumbled his bread in his pocket, stopping frequently to drop crumbs upon the ground. “Hansel,” said the father, “why do you keep looking back?” “I am looking at my little pigeon on the roof,” lied Hansel. “That is only the sun on the chimney,” said the stepmother. Hansel continued dropping crumbs until his bread was gone.",
      "They were led deeper into the woods than they had ever been in their entire lives. Again a great fire was built, and the stepmother said, “Wait here, children, and when you are tired, you may sleep. We will come for you in the evening.” When noon came, Gretel shared her piece of bread with Hansel, who had scattered his own along the path. Then they fell asleep.",
      "Night came, but no one returned for the children. When the moon rose, Hansel looked for the trail of breadcrumbs, but they were gone! Thousands of birds that fly in the woods had found the crumbs and pecked them all up. Hansel said to Gretel, “We will find the way, do not worry.” But they could not find it. They walked all through the night and all the next day, deeper and deeper into the wild forest."
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel kneels on the leafy forest path searching the ground while Gretel stands beside him, worried, as birds watch from the branches"
    },
    {
     "n": 4,
     "title": "The House Made of Sweets",
     "paras": [
      "They were now so tired that their legs could carry them no further, and they were terribly hungry, having eaten nothing but a few wild berries found on the ground. They lay down beneath a leafy tree and fell fast asleep.",
      "It was now the third morning since they had left their father’s house. Around noon, they saw a beautiful snow-white bird sitting on a branch. The bird sang so sweetly that the children stopped to listen. When its song was finished, the bird spread its wings and flew ahead of them. Hansel and Gretel followed it until they reached a small clearing in the woods.",
      "There, the bird perched upon the roof of a strange, tiny house. As the children drew nearer, they stood in utter amazement. The house was built entirely of bread and cake, and its windows were made of clear, sparkling sugar! “Look, Gretel!” cried Hansel joyfully. “We shall have a grand feast! I will eat a piece of the roof, and you can try the sweet window!”",
      "Hansel reached up and broke off a piece of the gingerbread roof to taste it, while Gretel stepped up to the window panes and began to nibble at the clear sugar. Suddenly, a soft, high-pitched voice called out from inside the house:",
      "“Nibble, nibble, little mouse,",
      "Who is nibbling at my house?”",
      "The children answered politely:",
      "“The wind, the wind,",
      "The heavenly child mind!”",
      "They continued eating without fear. Hansel, who found the gingerbread delicious, tore off a large panel of the roof, while Gretel broke out an entire round windowpane and sat down to enjoy it.",
      "Suddenly, the heavy door creaked open, and an old woman leaning on a wooden crutch hobbled out. Hansel and Gretel were so terrified that they dropped the sweets from their hands. But the old woman nodded her head kindly and said, “Ah, dear children, who brought you here? Come inside and stay with me. No harm shall touch you.”",
      "She took them both by the hand and led them into her little house. Inside, she served them a wonderful meal of milk, pancakes with sugar, apples, and nuts. Afterward, she showed them two small, beautiful beds made with white linen sheets. Hansel and Gretel lay down, feeling as if they were in heaven.",
      "However, the old woman’s kindness was only a disguise. She was actually an evil witch who built sweet houses to lure young children into her trap! When a child fell into her power, she would cook and eat him, making the day a grand feast."
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel breaks a piece off the gingerbread house while Gretel watches in wonder in the glowing forest clearing"
    },
    {
     "n": 5,
     "title": "The Witch’s Prison",
     "paras": [
      "Early the next morning, before the children were awake, the witch stood over their beds. Looking at their plump, rosy cheeks, she muttered to herself, “They will make a delicious meal!” She grabbed Hansel with her rough, bony hand and dragged him to a small dark stable with an iron-grated door. She locked him inside despite his loud screams. Then she went to Gretel, shook her awake, and cried, “Get up, lazy girl! Fetch water and cook something good for your brother. He is locked in the stable to be fattened up. When he is nice and fat, I shall eat him!”",
      "Gretel wept bitterly, but her tears were in vain; she was forced to obey the wicked witch. From that day on, the finest food was cooked for Hansel in the stable, while poor Gretel received nothing but hard crab shells.",
      "Every morning, the old witch hobbled out to the stable and called out, “Hansel, stretch out your finger so I may feel if you are getting fat yet!” The witch had weak, dim eyes and could not see clearly. Knowing this, clever Hansel stretched out a small dry chicken bone through the bars instead of his finger. The old woman touched the thin bone and wondered why he remained so skinny day after day.",
      "When four full weeks had passed and Hansel still seemed as thin as ever, the witch grew impatient and refused to wait any longer. “Hurry up and fetch water, Gretel!” she barked at the crying girl. “Whether Hansel is fat or thin, tomorrow I will slaughter and cook him!”",
      "Gretel cried out in sorrow as she carried heavy buckets of water. “Dear God, please help us!” she prayed. “If only the wild beasts in the forest had eaten us, at least we would have died together!”",
      "“Save your noisy crying,” snapped the witch. “It will not help you at all!”",
      "Early the next morning, Gretel had to fill the great kettle with water and light the fire under it. “First we will bake bread,” said the witch. “I have already heated the big oven and kneaded the dough.” She pushed poor Gretel out toward the baking oven, from which bright flames were leaping.",
      "“Crawl inside,” instructed the witch, “and see if it is hot enough to slide the bread in.” The witch intended to shut the oven door as soon as Gretel was inside, to bake and eat her too!",
      "But Gretel perceived her evil plan and said, “I do not know how to do it. How do I get inside? The opening is far too small.”",
      "“Stupid goose!” screamed the witch. “The door is big enough! Look, even I could get in!” She hobbled forward and stuck her ugly head right into the oven."
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel is locked behind the bars of a wooden cage while Gretel looks on and the witch stirs a bowl beside the blazing hearth"
    },
    {
     "n": 6,
     "title": "The Escape and the Return",
     "paras": [
      "With a sudden, mighty push, Gretel shoved the evil witch deep into the roaring oven! She slammed the heavy iron door shut and bolted it with the latch. The witch began to howl horribly in the flames, but Gretel ran away as fast as her legs could carry her, leaving the wicked witch to perish in her own oven.",
      "Gretel rushed straight to the stable, unlocked the iron door, and shouted, “Hansel, we are saved! The old witch is dead!” Hansel flew out of the cage like a bird freed from a snare. The happy children embraced and kissed each other, shedding tears of pure joy.",
      "Now that they had nothing to fear, they explored the witch’s house. In every corner of the rooms stood chests filled with sparkling pearls, bright diamonds, and heavy gold coins. “These are much better than white pebbles!” said Hansel, filling his coat pockets with treasures. Gretel filled her apron until it was heavy with jewels.",
      "“Now we must leave this enchanted forest behind,” said Hansel. They walked for several hours until they reached the bank of a broad, rushing river. “We cannot cross,” said Hansel thoughtfully. “There is no bridge or plank, and no boat to carry us.”",
      "“Look, there is a large white duck swimming!” cried Gretel. She called out softly:",
      "“Little duck, little duck, here stand Gretel and Hansel.",
      "Neither plank nor bridge have we, take us on your white back carefully!”",
      "The duck swam over to them willingly. Hansel sat on its back and asked Gretel to sit behind him. “No,” answered Gretel, “it would be too heavy for the kind duck. It shall carry us across one by one.” The gentle bird carried them safely across the broad river to the opposite bank.",
      "After walking a short distance through familiar paths, the forest began to look more and more familiar. At last, they spotted their father’s small cottage in the distance. They broke into a run, rushed inside, and threw their arms around their father’s neck!",
      "The poor woodcutter had not known a single happy hour since he had left his children in the forest. His hard-hearted wife had died while the children were away. Gretel shook out her apron, scattering pearls and precious stones across the room, while Hansel threw handfuls of gold coins from his pockets.",
      "All their worries and sorrows came to an end. From that day forward, the woodcutter and his children lived together in great joy, comfort, and happiness. And so my tale is done; see the mouse run! Whoever catches it may make a big fur cap out of it!"
     ],
     "img": {
      "src": "assets/images/stories/hansel-and-gretel/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Hansel, carrying a sack of jewels, walks hand in hand with Gretel at sunrise toward the cottage where their father waits with open arms"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "the-wonderful-adventures-of-nils",
   "title": "The Wonderful Adventures of Nils",
   "author": {
    "name": "Selma Lagerlöf"
   },
   "category": "fantasy",
   "genres": [
    "Classic",
    "Fantasy Adventure"
   ],
   "language": "English",
   "edition": "Illustrated edition in 12 chapters.",
   "intro": "After a mischievous boy is shrunk by an elf, he flies across Sweden on the back of a goose with a flock of wild geese. Along the way he learns kindness, courage and what home means.",
   "cover": {
    "src": "assets/covers/the-wonderful-adventures-of-nils.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Nils",
     "role": "The boy turned small by an elf",
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/char-nils.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Morten",
     "role": "The white farm gander who carries Nils",
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/char-morten.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Akka",
     "role": "The wise leader of the wild geese",
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/char-akka.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "Gorgo",
     "role": "The golden eagle raised by Akka",
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/char-gorgo.webp",
      "w": 190,
      "h": 190
     }
    },
    {
     "name": "The Old Peasant Woman",
     "role": "A lonely woman whose children moved away",
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/char-the-old-peasant-woman.webp",
      "w": 190,
      "h": 190
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "The Boy",
     "paras": [
      "Once upon a time there was a boy who was about fourteen years old, tall and lanky and flaxen-haired. He was good-for-nothing; his chief delight was to sleep and eat, and after that he liked best to make mischief. It was a Sunday morning, and the boy’s parents were getting ready to go to church. The boy sat in his shirt-sleeves on the edge of the table and thought how pleasant it was that both father and mother were going away, leaving him master of the house for a few hours.",
      "Before leaving, his father stopped at the threshold. “Since you will not come to church with us,” he said, “the least you can do is to read the Sunday sermon at home. Promise me to read fourteen pages before we return.” The boy promised reluctantly, but as soon as the door closed behind his parents, he knew in his heart he had no intention of studying. He sat looking at the open book, nodding with sleepiness.",
      "Suddenly, a slight noise roused him. Looking toward the big iron-bound chest in the corner, he saw to his amazement that the lid was opening. Out stepped a little gnome, no bigger than a man’s hand. He wore a black wide-brimmed hat, knee-breeches, and a gray coat. The boy, ever eager for mischief, grabbed an old butterfly net and swept the tiny creature into it.",
      "“Let me go!” cried the elf pitifully. “If you set me free, I will give you an old copper penny, a silver spoon, and a gold coin!” But Nils was greedy and demanded more. Enraged by the boy’s stubbornness, the elf struck him a ringing blow on the ear. Nils fell backward onto the floor, stunned.",
      "When he opened his eyes, the gnome was gone. But something strange had happened to the room. The table was enormous; the chairs were as tall as trees. Looking into the mirror, Nils shrank back in horror. He had been turned into a dwarf no bigger than his own thumb! Frightened, he ran out to the farmyard to ask the animals for help, but the chickens, the farm cat, and the cows only mocked him for his past cruelty to them.",
      "Just then, a flock of wild geese flew overhead, calling down to the domestic geese: “Come along! Come along! Up to the hills!” Morten, the big white domestic gander, decided to join them. Desperate to save his mother’s prized bird, Nils threw his tiny arms around the gander’s neck just as Morten spread his wings and leaped into the sky."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils stands in the sunny farmyard of a red farmhouse with chickens, a cat and two geese"
    },
    {
     "n": 2,
     "title": "Akka from Kebnekaise",
     "paras": [
      "Up into the blue air flew the white gander, with Nils clinging desperately to his neck. High above the fields of Scania, the boy looked down in terror and marvel. The countryside resembled a vast green and yellow checkered cloth spread out as far as the eye could see. The domestic gander soon found the flying strenuous, as wild geese fly faster and higher than domestic birds. He began to lag behind the wild flock.",
      "The leader of the wild geese was an ancient, revered leader named Akka from Kebnekaise. She noticed the white gander struggling and landed the flock near Lake Vomb for the night. The white gander collapsed on the shore, utterly exhausted and unable to move. Nils, despite his small size, felt a surge of pity. He fetched water in a shell to refresh the bird’s dry throat and pulled fresh grass for him to eat.",
      "When Akka came over to inspect the strange pair, she was stern. “A human boy cannot travel with us,” she declared. “Humans are hunters and enemies of wild birds. You must return to your home tomorrow.” Nils begged her to let him stay, explaining that he was now too small to return home and lived in fear of being discovered as an enchanted dwarf.",
      "That night, a sly fox named Smirre stalked the lake shore. While the geese slept on an ice floe, Smirre crept up silently and grabbed one of the wild geese in his sharp jaws. Nils awoke to the commotion. Without thought for his own safety, he sprang at the fox, grabbed Smirre by the tail, and pulled with all his tiny might. Surprised and alarmed by the mysterious little creature clinging to his tail, Smirre dropped the goose and turned on Nils.",
      "Nils scrambled up a birch tree just out of the fox’s reach. Smirre waited below all night, but when dawn broke, Akka and her flock flew over the fox, distracting him until Nils could safely leap down and escape onto Morten’s back. Impressed by the boy’s courage and selflessness, Akka reconsidered her decision. “You have saved one of my flock,” Akka said warmly. “You may stay with us, Thumbietot!”"
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils rides a goose in a flock of wild geese flying over a river valley toward snowy mountains"
    },
    {
     "n": 3,
     "title": "The Wonderful Journey of Nils",
     "paras": [
      "As the days went by, Nils adapted to his new life among the birds. His journey with the wild geese took him across the rich historical landscapes of Sweden. Riding high on the back of Morten the gander, he learned to perceive the world through the keen eyes of wild creatures. He listened to the chatter of the forests, understood the speech of animals, and learned to endure cold, rain, and hunger without complaint.",
      "Near Vittskövle Castle, Nils encountered his first great lesson in humility. Looking down upon the grand estates and cultivated lands, he realized how little he had valued his home or the hard work of his parents. One evening, while resting in Övid Cloister Park, Nils overheard a squirrel mother weeping because her baby had fallen from the nest and been captured by humans in a cottage nearby.",
      "Filled with compassion, Nils slipped into the human dwelling under the cover of dusk. Using his small size to slip through a window grating, he freed the young squirrel and returned it safely to its mother high in the oak tree. The forest animals, who had once fled from him in fear, began to speak of “Thumbietot” not as a cruel boy, but as a defender of small creatures.",
      "Yet danger was never far away. Smirre the Fox continued to stalk the wild flock, following their flight northwards. Wherever the flock alighted, Smirre appeared from the thickets, seeking revenge on the boy who had humiliated him. At every turn, Nils used his human intellect and nimble fingers to outwit the predator, warning the flock with shrill alarm calls and setting simple traps that tricked the fox.",
      "Through these adventures, Nils grew stronger and more resourceful. He was no longer the lazy, unkind boy who had sat idly in his parents’ farmhouse. He was becoming a true companion to the wild birds of Sweden, bound to them by shared hardship and growing loyalty."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils rides a white goose above a winding river and green valleys with a flock of wild geese beside him"
    },
    {
     "n": 4,
     "title": "Glimminge Castle and the Great Crane Dance",
     "paras": [
      "The flock arrived at Glimminge Castle, an ancient stone fortress with thick walls and narrow battlements. The castle was held by a colony of old Black Rats who had lived there peacefully for generations. However, news reached them that thousands of aggressive Gray Rats were marching to attack the castle and claim its grain stores for themselves.",
      "The Black Rats were terrified, as their numbers were small and they could not defend the high walls alone. Akka and Nils agreed to help the rightful inhabitants. Remembering an old legend, Nils found a small wooden pipe inside the castle tower. As the night grew dark and the army of Gray Rats stormed the courtyard, Nils stood upon the ramparts and began to play a soft, enchanted melody on the pipe.",
      "The hypnotic music cast a spell over the invading Gray Rats. Mesmerized by the clear notes, the entire horde ceased their attack and followed Nils as he walked slowly down the castle steps and away into the fields. He led them far from Glimminge Castle, straight into a lake, saving the old stronghold and its inhabitants from destruction.",
      "A few days later, the animals gathered at Kullaberg for the annual Great Crane Dance—a grand festival where all the beasts of the forest and air observed a sacred truce. Storks, otters, hares, and birds of every species gathered in harmony to watch the majestic grey cranes perform their rhythmic, solemn spring dance.",
      "Even Smirre the Fox was permitted to attend under the law of the truce. However, unable to master his wicked temper, Smirre broke the sacred peace by pouncing on a wild goose during the assembly. The enraged animals turned on the traitor. Akka and the council banished Smirre from Scania forever. Bounded by unity and ancient laws, the animal kingdom celebrated the triumph of order over violence, and Nils felt proud to be part of their world."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils on a goose watches grey cranes dance in a meadow in front of Glimminge Castle"
    },
    {
     "n": 5,
     "title": "Across Southern Sweden",
     "paras": [
      "Leaving the coastal hills behind, Akka’s flock flew northward into the province of Blekinge. From high above, the landscape appeared like a giant stone staircase with three immense steps leading down to the sea: the dense pine forests, the hilly farming valleys, and the rocky archipelago scattered with hundreds of wooded islands.",
      "Heavy spring rains overtook the travelers as they flew along the Ronneby River. Nils huddled beneath Morten’s wing for warmth, watching the swollen waters rush through deep ravines. Along the banks, he saw how human beings worked alongside nature, building mills, tending orchards, and clearing farmland. For the first time, Nils felt a deep admiration for the labor and perseverance of his own kind.",
      "In Karlskrona, the great naval port, Nils had a night of strange enchantment. Wandering alone through the quiet, moonlit streets while the geese rested, he came across a huge wooden statue of a sailor—the Rosenbom. To his astonishment, the statue creaked to life and spoke to him in a deep, wooden voice. Shortly after, the bronze statue of King Charles XI descended from its pedestal, its heavy iron footsteps echoing down the deserted cobblestone avenues.",
      "The boy hid beneath the wooden hat of the Rosenbom as the bronze King marched through the shipyard, inspecting the massive warships under construction. The wooden sailor defended the tiny boy from the King’s stern gaze, teaching Nils that loyalty and humility were traits revered by statues and kings alike. When dawn approached, the bronze monarch returned to his stone pillar, and Nils slipped safely back to the waterfront where Morten awaited him.",
      "Flight across Småland revealed the rugged beauty of Sweden’s interior. Nils saw vast stony fields where poor farmers worked tirelessly to clear rocks from their pastures. He began to understand that life was a constant struggle for both humans and animals, demanding courage, hard work, and mutual assistance."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils rides a white goose over southern Sweden's fields, lakes and village churches"
    },
    {
     "n": 6,
     "title": "The Wonders of Öland and the Islands",
     "paras": [
      "The flock turned eastward across the Baltic Sea toward the long, narrow island of Öland. Seen from above, Öland looked like a giant stone butterfly resting upon the blue water. The island was a haven for tens of thousands of migratory birds, resting on its limestone plains before continuing their long flight to the northern tundra.",
      "At the southern tip of the island, near the Ottenby bird reserve, Nils marvelled at the sheer variety of bird life—swans, ducks, plovers, and gulls gathered in vast, clamorous flocks. Here, Nils helped defend a nest of young ducks from a prowling marten, winning the admiration of the sea-birds who called him the “Friend of the Feathered.”",
      "A sudden Baltic gale blew the flock off course toward Little Karlsö, a steep cliff island inhabited by hundreds of wild sheep and sea-birds. The sheep were in deep distress; a pack of fierce mountain foxes had invaded their cave shelters at “Hell’s Hole” during the winter ice and were hunting the lambs helpless against the sharp rocks.",
      "Nils rallied the rams. He taught them to stand shoulder to shoulder in a firm horn-ring, facing the foxes with lowered heads while he threw heavy stones to drive the predators back into the dark crevices of the rocks. By dawn, the foxes had been driven off the island, and the grateful sheep threw a feast for Thumbietot and the wild geese upon the high cliffs.",
      "These experiences on the windswept Baltic islands strengthened Nils’s bond with nature. He was no longer merely a passenger on Morten’s back; he had become a brave strategist, a trusted mediator, and a true defender of the weak creatures of the land and sea."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils flies on a white goose above the coast and windmills of Öland as geese fly over the sea"
    },
    {
     "n": 7,
     "title": "Two Cities, Old Legends, and the Crows",
     "paras": [
      "Continuing over the Baltic waters, Nils caught sight of the legendary sunken city of Vineta. According to ancient tales, Vineta was a magnificent merchant city that had been swallowed by the ocean because of the greed and pride of its citizens. Once every hundred years, the city rose from the sea floor for a single hour, waiting for a traveler who might purchase something from its markets to break the curse.",
      "Nils saw the golden spires and grand stone arches glistening beneath the waves. As the city emerged from the foam, he walked through its deserted, glittering streets. The merchants offered him rich silks and jewels for a single copper coin, but Nils had not a single penny in his pocket. As the hour struck, the magnificent city sank once more beneath the dark waves, leaving Nils with a poignant lesson on the vanity of wealth.",
      "From Vineta, the flock flew to Visby, the “Living City” on the island of Gotland. With its massive medieval stone walls, ruined cathedrals, and rose-covered cottages, Visby presented a striking contrast to the sunken city—a living testament to human history, perseverance, and quiet beauty.",
      "Back on the mainland of Småland, Nils was captured by a flock of treacherous crows led by Fumle-Drumle. The crows had been tricked by a scheming old witch into digging up an earthenware crock filled with old silver coins buried under a tree root. They believed Nils possessed the magical human skills needed to open the heavy clay lid.",
      "Using his wits, Nils tricked the crows into fighting over the treasure, allowing him to escape into the dense pine woods where Morten found him. The adventure taught Nils that greed breeds disorder, while intelligence and composure overcome brute force every time."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils flies on a goose past an old castle town, with crows circling in the evening sky"
    },
    {
     "n": 8,
     "title": "The Old Peasant Woman and the Great Bird Lake",
     "paras": [
      "In the highlands of Småland, Nils met a lonely old peasant woman who lived in a small, solitary cabin. Her children had emigrated to America years ago, and she was left to manage her farm alone. Despite her poverty, she shared her meager bread with the tiny boy and spoke with deep love of her absent family.",
      "Nils felt a surge of regret for his own past behavior toward his parents. He realized how deeply parents love their children and how much sorrow he must have brought to his own home by his lazy, cruel ways. He spent the afternoon helping the old woman by mending her wooden fences and fetching small twigs for her hearth before flying away with the geese.",
      "Soon after, the flock arrived at Lake Tåkern, the Great Bird Lake of Östergötland. The lake was a lush paradise of reeds, lily pads, and shallow waters, teeming with wild ducks, grebes, and swans. There Nils met Jarro, a wild duck who had been shot and captured by hunters to serve as a live decoy in a wooden cage.",
      "Risking his own safety, Nils slipped into the hunter’s boat at night, untied the cage door, and set Jarro free. Jarro carried Nils back to the bird sanctuary in safety. Together, the birds and Nils learned of a plan by land developers to drain Lake Tåkern to create farmland. Nils helped the birds organize a protest by appealing to local scholars and nature lovers, saving the wetland sanctuary for generations of wild fowl.",
      "Through his selflessness at Lake Tåkern, Nils demonstrated that his transformation was not merely physical; his heart had opened to the beauty and preservation of the natural world."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "An old peasant woman with a basket watches Nils fly over the Great Bird Lake filled with swans and ducks"
    },
    {
     "n": 9,
     "title": "The Wind Witch, the Flood, and Other Adventures",
     "paras": [
      "As the flock journeyed northward into Närke and Västmanland, the spring weather turned tempestuous. High above the mountain ridges, they encountered severe gales brought on by the fierce Wind Witch, standard-bearer of northern storms. Snow flurries and howling gales battered the flock, forcing Akka to seek shelter in deep river gorges and iron-mining valleys.",
      "In Västmanland, Nils visited the great ironworks. He watched with awe as human workers forged glowing red iron from the earth, taming fire and steel with skill and muscle. He realized that human ingenuity and industry were as magnificent in their own way as the wild beauty of nature.",
      "The sudden spring thaws brought disastrous floods across the lowlands around Lake Mälaren. Rivers burst their banks, sweeping away farmhouses, livestock, and bridges. In one submerged village, Nils saw a family of small puppies trapped on the floating roof of a doghouse drifting rapidly toward a roaring waterfall.",
      "Nils guided Morten down to the rushing waters. With great dexterity, he lashed a sturdy linen string to the puppies’ collar and helped the white gander pull them one by one to the safety of high ground. The mother dog wept with gratitude, praising the tiny boy as a guardian angel of the flood.",
      "During these days of storm and flood, Nils also met Dunfin, a sweet and gentle wild duck who had injured her wing against a telegraph wire. Nils nursed Dunfin back to health with tenders care, feeding her soft water-plants and binding her wing until she was able to fly once again with Akka’s flock."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch09.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils clings to a flying goose in a storm as a pale Wind Witch swirls in the clouds above a flooded valley"
    },
    {
     "n": 10,
     "title": "Stockholm and the Eagle Gorgo",
     "paras": [
      "The journey reached the capital city of Stockholm, situated where the sweet waters of Lake Mälaren meet the salty Baltic Sea. From the air, the city looked like a collection of floating islands adorned with palaces, copper-roofed towers, and green parks. Nils visited Skansen, the famous open-air museum where historical buildings and wild animals from all over Sweden were preserved.",
      "At Skansen, Nils discovered a giant golden eagle named Gorgo sitting in a iron cage, looking weak and heartbroken. Nils recognized Gorgo immediately! Years earlier, when Gorgo was a helpless orphan chick in Lapland, Akka had raised him as her own foster son, feeding him and teaching him to fly despite their natural enmity as eagle and goose.",
      "When Gorgo grew into a powerful bird of prey, he had refused to hunt wild geese out of gratitude to his foster mother. Human naturalists had captured him and brought him to the capital. Seeing his old friend imprisoned, Nils resolved to free him. Night after night, Nils worked patiently with an old iron file, filing through the thick iron bars of the cage until they snapped.",
      "With a thunderous flap of his mighty wings, Gorgo soared out into the night sky, carrying Nils on his back. Gorgo offered to fly Nils anywhere in the kingdom, but Nils remained faithful to Morten and Akka, rejoining the wild geese as they prepared for the final leg of their migration to the far north."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch10.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils on a white goose flies beside the eagle Gorgo over the harbours and towers of Stockholm"
    },
    {
     "n": 11,
     "title": "Through Northern Sweden to Lapland",
     "paras": [
      "The flight across Northern Sweden—Gästrikland, Hälsingland, Medelpad, and Ångermanland—was a journey over endless forests of dark spruce and silver birch, crossed by wide, gleaming rivers flowing down from the mountains to the Gulf of Bothnia. Loggers worked in the rivers, guiding thousands of timber logs downstream to the coastal sawmills.",
      "In Lapland, Nils met Osa, the goose-girl, and her younger brother Little Mats, two children from his own home parish in Scania who had traveled across the country searching for their lost father. Seeing his old neighbors brought a deep wave of nostalgia to Nils’s heart. He secretly assisted them during their trek through the Arctic wilderness, guiding them to shelter during a sudden snowstorm.",
      "Finally, the flock arrived at their summer destination: the majestic, snow-capped mountains of Kebnekaise in Arctic Lapland. Here, under the midnight sun that never set, the wild geese nested and raised their newborn goslings. Morten the gander married Dunfin, and together they hatched six fluffy white goslings in a warm nest of moss and down.",
      "During the long summer days in the arctic tundra, Akka revealed a secret to Nils: the elf’s spell could be broken, and Nils could become a human boy again! But there was a hard condition: when they returned to Scania, Morten the domestic gander must be sacrificed on his mother’s farm to restore the magic. Nils was heartbroken. He resolved never to allow any harm to come to his faithful white friend, even if it meant remaining a dwarf forever."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch11.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils flies on a goose over the snowy mountains and reindeer camp of Lapland under the northern lights"
    },
    {
     "n": 12,
     "title": "Home at Last",
     "paras": [
      "When autumn came, the days grew short and cold. The wild geese turned south once more, retracing their long flight across Sweden. At last, late in October, the flat, familiar fields of Scania appeared beneath Morten’s wings. They were back at the Holgersson farm in Västra Vemmenhög.",
      "Morten was eager to show his wife Dunfin and their six young goslings to his old home. He landed proudly in the farmyard. Inside the cottage, Nils’s mother was weeping. The family had fallen into hardship, and she grieved for her lost son whom she believed was gone forever. Seeing the plump white gander return with a wild flock, his father picked up an axe, deciding to sell Morten at the market to pay their debts.",
      "Nils saw his father grab Morten by the neck. Forgetting his own fear of remaining tiny forever, forgetting the elf’s condition, Nils sprang forward into the kitchen light. “Don’t touch him, Father!” he cried at the top of his voice. “Don’t hurt Morten!”",
      "At that instant, the spell was broken! True love, courage, and self-sacrifice had satisfied the magical law. His mother gasped and dropped her apron; his father stood stunned. Nils was no longer a dwarf—he stood before them as a tall, handsome, strong young man, restored to his human form.",
      "His parents embraced him with tears of joy, asking for no explanations, thankful only that their son had returned home kind, helpful, and transformed in heart. The next morning, Nils walked down to the shore where Akka and the wild flock were preparing to fly south over the sea. He could no longer understand their language, but as Akka circled low overhead in farewell, Nils waved his hat, filled with lifelong gratitude for the wonderful journey that had turned a mischievous boy into a true man."
     ],
     "img": {
      "src": "assets/images/stories/the-wonderful-adventures-of-nils/ch12.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Nils, human again, stands beside Morten the goose in front of the red farmhouse"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": "Velma Swanston Howard",
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "tom-sawyer",
   "title": "The Adventures of Tom Sawyer",
   "author": {
    "name": "Mark Twain"
   },
   "category": "adventure",
   "genres": [
    "Adventure",
    "Classic"
   ],
   "language": "English",
   "edition": "Illustrated adaptation in 8 chapters.",
   "intro": "Tom Sawyer is a mischievous boy in a Mississippi River town who tricks his friends into whitewashing a fence, witnesses a murder with his friend Huck, and later finds himself lost in a cave with Becky Thatcher.",
   "cover": {
    "src": "assets/covers/tom-sawyer.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Tom Sawyer",
     "role": "The mischievous boy of St. Petersburg",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-tom-sawyer.webp",
      "w": 190,
      "h": 202
     }
    },
    {
     "name": "Huckleberry Finn",
     "role": "Tom’s free-spirited friend",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-huckleberry-finn.webp",
      "w": 192,
      "h": 232
     }
    },
    {
     "name": "Becky Thatcher",
     "role": "The new girl Tom adores",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-becky-thatcher.webp",
      "w": 191,
      "h": 202
     }
    },
    {
     "name": "Aunt Polly",
     "role": "Tom’s aunt, who raises him",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-aunt-polly.webp",
      "w": 190,
      "h": 205
     }
    },
    {
     "name": "Sid Sawyer",
     "role": "Tom’s quiet half-brother",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-sid-sawyer.webp",
      "w": 191,
      "h": 205
     }
    },
    {
     "name": "Injun Joe",
     "role": "The man behind the graveyard murder",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-injun-joe.webp",
      "w": 192,
      "h": 205
     }
    },
    {
     "name": "Joe Harper",
     "role": "Tom’s friend and fellow pirate",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-joe-harper.webp",
      "w": 190,
      "h": 185
     }
    },
    {
     "name": "Muff Potter",
     "role": "A harmless drunkard accused of murder",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-muff-potter.webp",
      "w": 192,
      "h": 185
     }
    },
    {
     "name": "Judge Thatcher",
     "role": "Becky’s father",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-judge-thatcher.webp",
      "w": 190,
      "h": 196
     }
    },
    {
     "name": "The Widow Douglas",
     "role": "The kind widow who takes in Huck",
     "img": {
      "src": "assets/images/stories/tom-sawyer/char-the-widow-douglas.webp",
      "w": 192,
      "h": 196
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "Tom Sawyer and Aunt Polly",
     "paras": [
      "“Tom!” No answer. “Tom!” No answer. “What has that boy got into now? Tom!” Aunt Polly pulled her spectacles down and looked over them around the room, then put them up and looked under them. She seldom looked through them for so small a thing as a boy; they were her state pair, the pride of her heart, and were built for “style,” not service.",
      "“Well, I lay if I get hold of you I’ll—” She did not finish, for by this time she was bending down and poking under the bed with the broom. She resurrected nothing but the cat. “I never did see the beat of that boy!” She went to the open door and stood in it, looking out among the tomato vines and jimson weeds that constituted the garden. No Tom. So she lifted up her voice and shouted: “You Tom!”",
      "There was a slight noise behind her, and she turned just in time to seize a small boy by his jacket collar and arrest his flight. “There! I might have thought of that closet. What have you been doing in there?” “Nothing.” “Nothing! Look at your hands. And look at your mouth. What is that squeeze of red?” “I don’t know, aunt.” “Well, I know! It’s jam—that’s what it is! Forty times I’ve said if you didn’t let that jam alone I’d skin you! Hand me that switch.”",
      "The switch hovered in the air—the danger was real. “My! Look behind you, aunt!” The old lady whirled round, pulling her skirts out of harm’s way. The boy fled on the instant, scrambled up the high board fence, and disappeared over it. His Aunt Polly stood surprised for a moment, and then broke into a gentle laugh.",
      "“Hang the boy, can’t I ever learn anything? Ain’t he played me tricks enough like that for me to be on the lookout? But old fools is the biggest fools there is. He’s full of the Old Scratch, but my goodness, he’s my own dead sister \u0003 boy, poor thing, and I ain’t got the heart to lash him. But I’ve got to do my duty by him, or I’ll be the ruin of the child. I’ll make him work tomorrow to punish him. It’s mighty hard to make him work on Saturday, when all the boys are having a holiday, but he hates work more than anything else!”",
      "’ Tom did play truant that afternoon, and he had a grand time swimming in the Mississippi River with his friends. He returned home just in time to help Sid, his quiet half-brother, split the firewood for supper. While Tom ate his supper, Aunt Polly asked him clever questions, trying to trap him into admitting he had skipped school and gone swimming. “Tom, it was powerful warm in school, wasn’t it?” “Yes,’m.” “Didn’t you want to go in a-swimming, Tom?” Tom felt a touch of fear, but he showed her the collar of his shirt, which she had sewn shut with thread before school. It was still intact. “Well, go along with you,” she admitted. “I was sure you’d played hookey and been a-swimming. But I forgive you.”",
      "Aunt Polly felt glad she had been mistaken, but then Sid spoke up quietly: “Well now, I thought you sewed his collar with white thread, aunt, but that thread is black.” “Why, I did sew it with white!” Aunt Polly shouted. But Tom did not wait for the rest. He bounded out the door, calling back: “Siddy, I’ll lick you for that!” In a safe place, Tom checked two large needles tucked into his coat lapel. One was wrapped with white thread, the other with black. He had unsewn his collar to swim and re-sewn it himself, but had used the wrong color. He promised himself to give Sid a proper beating soon."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch01.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom crouches by a white picket fence while Aunt Polly shades her eyes on her porch"
    },
    {
     "n": 2,
     "title": "The Art of Whitewashing",
     "paras": [
      "Saturday morning came, and all the summer world was bright and fresh, overflowing with life and song. But Tom appeared on the sidewalk with a bucket of whitewash and a long-handled brush. He surveyed the fence, thirty yards of broad board fence nine feet high. Life to him seemed hollow, and existence but a burden. Sighing, he dipped his brush and passed it along the topmost plank; repeated the operation; did it again; compared the insignificant whitewashed streak with the far-reaching continent of unwhitewashed fence, and sat down on a tree box, discouraged.",
      "Jim came skipping out at the gate with a tin pail, singing. Bringing water from the town pump had always been hateful work in Tom’s eyes, but now it did not strike him so. He remembered that there was company at the pump—boys and girls always waiting their turns, resting, trading playthings, scuffling, and fighting. “Say, Jim,” said Tom, “I’ll fetch the water if you’ll whitewash some.” Jim shook his head. “Can’t, Mars Tom. Ole missis, she told me I got to go straight and not stop for nobody. She said she reckoned Mars Tom would ask me to whitewash, and she told me to go along my own business.”",
      "“Oh, never mind what she said, Jim. She won’t ever know. I’ll give you a marble—I’ll give you a white alley!” Jim began to waver. The marble was a lovely thing. “My, that’s a mighty gay alley! But Mars Tom, I’s powerful afraid of ole missis—” But Jim was human. He put down his pail and took the marble. In another minute, however, Jim was flying down the street with his pail in his hand, Tom was whitewashing with vigor, and Aunt Polly was retiring from the field with a slipper in her hand and triumph in her eye.",
      "But Tom’s energy did not last. He began to think of the fun he had planned for this day, and his sorrows multiplied. Soon the free boys would come tripping along on all sorts of delicious expeditions, and they would make a world of fun of him for having to work. The very thought burned him like fire. At this dark moment, a great, magnificent inspiration burst upon him! Nothing less than a great, bright inspiration.",
      "He took up his brush and went calmly to work. Ben Rogers hove in sight presently—the very boy whose ridicule he had been dreading. Ben’s step was light, and his heart was high. He was eating a sound, delicious apple, and giving a long, melodious whoop at intervals, followed by a deep-toned ding-dong-dong, for he was impersonating a steamboat. Tom went on whitewashing, paying no attention to the steamboat. Ben stared a moment and then said: “Hi-yi! You’re up a stump, ain’t you! You got to work, hey?” Tom wheeled suddenly: “Why, it’s you, Ben! I warn’t noticing.” “Say, I’m going a-swimming, I am. Don’t you wish you could? But of course you’d ruther work, wouldn’t you?” Tom contemplated the lad a moment, and then said: “What do you call work?” “Why, ain’t that work?” Tom resumed his whitewashing, and answered carelessly: “Well, maybe it is, and maybe it ain’t. All I know is, it suits Tom Sawyer. Does a boy get a chance to whitewash a fence every day?”",
      "That put the matter in a new light. Ben stopped nibbling his apple. Tom swept his brush dainty back and forth, stepped back to note the effect, added a touch here and there. Ben watched every move and got more and more interested. Presently he said: “Say, Tom, let me whitewash a little!” Tom considered, was about to consent, but then altered his mind: “No, Ben, I reckon it wouldn’t hardly do. You see, Aunt Polly’s awful particular about this fence—it’s right on the street, you know. I reckon there ain’t one boy in a thousand, maybe two thousand, that can do it the way it’s got to be done.” “No—is that so? Oh, come on, Tom, let me try! Just a little. I’ll give you the core of my apple.” “Well, Ben... No, I’m afraid—” “I’ll give you all of it!” Tom gave up the brush with reluctance in his face, but alacrity in his heart.",
      "And while the late steamboat Big Missouri worked and sweated in the sun, the retired artist sat on a barrel in the shade close by, dangled his legs, munched his apple, and planned the slaughter of more innocents. There was no lack of material; boys happened along every little while; they came to jeer, but they remained to whitewash. By the time Ben was exhausted, Tom had traded the next chance to Billy Fisher for a kite in good repair; and when he played out, Johnny Miller bought in for a dead rat and a string to swing it with—and so on, hour after hour. When the middle of the afternoon came, Tom was rolling in wealth: twelve marbles, part of a jews-harp, a piece of blue bottle-glass to look through, a spool, a key that wouldn’t unlock anything, a fragment of chalk, a glass stopper, a tin soldier, six firecrackers, a kitten with only one eye, a brass doorknob, a dog collar, and the handle of a knife!",
      "He had had a nice, good, idle time all the while—plenty of company—and the fence had three coats of whitewash on it! If he hadn’t run out of whitewash, he would have bankrupted every boy in the village. Tom said to himself that it was not such a hollow world, after all. He had discovered a great law of human action: that in order to make a man or a boy covet a thing, it is only necessary to make the thing difficult to attain. He presented himself before Aunt Polly. She was astonished when she saw the fence completely covered. She gave him a choice apple and permitted him to go out and play."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch02.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom whitewashes a fence while a boy with an apple looks on"
    },
    {
     "n": 3,
     "title": "A New Schoolmate and a First Love",
     "paras": [
      "Tom headed toward the village square, where two armies of boys were meeting for a mock battle. Tom was the commander of one army, Joe Harper of the other. After a long, hard-fought battle on the hill, Tom’s army won a great victory. The dead were counted, prisoners were exchanged, and the commanders established peace terms for the next battle.",
      "On his way home, passing the house where Jeff Thatcher lived, Tom saw a new girl in the garden—a lovely little blue-eyed creature with yellow hair braided into two long tails, wearing a white summer frock. The moment he set eyes on her, his former sweetheart, Amy Lawrence, vanished from his heart like a dream. He stood staring, smitten with love. He began to show off in every way he knew, doing acrobatic tricks on the fence, gymnastics, and foolish antics to win her attention. The girl walked toward the house, pretending not to notice, but just before she went inside, she tossed a pansy over the fence. Tom ran and caught the flower, holding it close to his heart.",
      "That evening at supper, Tom was so happy that Aunt Polly wondered what had come over him. Sid accidentally knocked the sugar bowl off the table and broke it. Tom was delighted, expecting Sid to get a whipping. But when Aunt Polly returned, she turned on Tom and struck him. “Aunt, why did you hit me? Sid broke it!” Aunt Polly paused, but then said quietly: “Well, I reckon you didn’t get more than you deserved for some other mischief.” Tom went to his room, feeling deeply wronged and tragic, imagining how sorry Aunt Polly would be if he were carried home dead from the river."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch03.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom and Becky Thatcher talk beside a fence near the village schoolhouse"
    },
    {
     "n": 4,
     "title": "Sunday School and the Treasure of Knowledge",
     "paras": [
      "On Sunday morning, Tom was forced to attend Sunday School. Each student was expected to memorize two Bible verses per week to earn colored paper tickets: a blue ticket for two verses, a red ticket for ten blue ones, and a yellow ticket for ten red ones. A student who earned ten yellow tickets—equal to memorizing two thousand verses—was awarded a handsome leather-bound Bible by the superintendent, Mr. Walters, in front of the whole church.",
      "Tom had no desire to memorize verses, but he desperately wanted the glory of receiving the Bible. Outside the church door, he approached his classmates one by one and traded his whitewashing treasures—marbles, a fishhook, firecrackers, and his piece of bottle-glass—for their colored tickets. By the time class began, Tom had accumulated ten yellow tickets, nine red ones, and ten blue ones.",
      "When Mr. Walters asked if anyone had enough tickets for a Bible, Tom stepped forward with his handful of colorful paper. The superintendent was stunned; Tom Sawyer was the last boy he expected to show such religious devotion. To make the occasion grander, Judge Thatcher—the brother of Jeff Thatcher and a famous man from the county seat—was visiting the church with his family. With him was his daughter, the yellow-haired girl Tom had seen in the garden! Her name was Becky Thatcher.",
      "Tom was called to the front to receive his Bible and be introduced to the great Judge Thatcher. Becky smiled at him. But then Judge Thatcher laid his hand on Tom’s head and asked: “No doubt you know a vast deal, my fine boy. Tell me the names of the first two apostles chosen by Christ!” Tom tugged at his buttonhole, turned red, and looked confused. “Answer the gentleman, Tom,” whispered Mr. Walters anxiously. Finally, Tom blurted out the only two names he could think of: “David and Goliath!” Let us draw a curtain of charity over the rest of the scene.",
      "On Monday morning, Tom tried everything to pretend he was sick so he could stay home from school. He complained of a sore toe, but Aunt Polly saw through his trick. Then he mentioned a loose tooth. Aunt Polly promptly pulled the tooth out with a piece of silk thread tied to the bedpost, and sent Tom on his way to school.",
      "On the road, Tom met Huckleberry Finn, the son of the town drunkard. Huck was hated and feared by all the mothers in town because he was lazy, lawless, vulgar, and bad—and adored by all their children, who envied his complete freedom. Huck dressed in cast-off adult clothes, slept wherever he pleased, never went to school or church, and went fishing or swimming whenever he liked. Huck was carrying a dead cat. “What are dead cats good for, Huck?” Tom asked. “To cure warts,” Huck explained. “You take your cat to the graveyard around midnight where somebody wicked has been buried. When a devil comes to take the wicked man away, you heave your cat after him and say a charm, and the warts go with it. I’m going to try it tonight at old Hoss Williams’s grave.” Tom eagerly agreed to go with Huck that night."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch04.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom holds up colored tickets in a Sunday school room as the superintendent and the judge look on"
    },
    {
     "n": 5,
     "title": "Midnight Adventures in the Graveyard",
     "paras": [
      "Tom arrived late to school. The schoolmaster, holding his cane, demanded an explanation: “Thomas Sawyer, why are you late again?” Tom was about to lie, but then he noticed that the only open seat on the girls’ side of the classroom was next to Becky Thatcher. He blurted out the truth: “I stopped to talk with Huckleberry Finn!” The master was shocked. He whipped Tom thoroughly and ordered him to sit on the girls’ side as punishment. Tom sat down next to Becky, delighted, and drew a picture of a house and a man on his slate for her. Before the morning was over, Tom whispered to her: “I love you.”",
      "At noon recess, Tom persuaded Becky to stay in the schoolhouse with him. They sat together, and Tom convinced her to become “engaged” to him, which meant promising never to love anyone else and sealing it with a kiss. But in his excitement, Tom accidentally mentioned his former love, Amy Lawrence. Becky burst into tears, feeling betrayed, and refused the brass doorknob Tom offered as a peace gift. Deeply wounded, Tom walked away into the woods alone.",
      "That night at half-past eleven, Huck Finn gave his meow signal outside Tom’s bedroom window. Tom slipped out the window, and together the two boys crept quietly through the darkness to the old graveyard on the hill. The place was creepy, filled with overgrown weeds, broken tombstones, and the mournful sound of the wind. They hid behind a cluster of trees near the fresh grave of Hoss Williams, waiting nervously for the devils to appear.",
      "Around midnight, three figures approached through the darkness. “They’re coming!” whispered Huck, trembling. “It’s the devils!” But as the figures came closer, Tom recognized their voices. They were not devils, but three men from the village: young Dr. Robinson, Muff Potter, a harmless local drunkard, and Injun Joe, a half-Native American man known for his cold and vengeful temper. The men had brought a handbarrow, ropes, and shovels to dig up the grave for Dr. Robinson, who wanted the body for medical study.",
      "Muff Potter and Injun Joe dug up the wooden coffin and hauled the body out. When they finished, Potter demanded more money than previously agreed upon. “You required me to pay in advance, and I did,” Dr. Robinson said firmly. Injun Joe stepped forward, his eyes burning with malice. “Five years ago you drove me away from your father’s kitchen one night, calling me a vagrant! Did you think I would forget? Now I have you!”",
      "Injun Joe struck at the doctor. A fierce fight broke out. Muff Potter tried to defend Injun Joe, but Dr. Robinson picked up heavy headboard wood and knocked Potter unconscious. At that moment, Injun Joe grabbed Potter’s sharp knife from the ground, leaped on the doctor, and drove the blade deep into his chest. Dr. Robinson fell dead upon the grass.",
      "Terrified by the murder, Tom and Huck fled silently through the darkness, running toward the village as fast as their legs could carry them. Injun Joe robbed the dead doctor’s pockets and placed the bloody knife back into the unconscious hand of Muff Potter. When Potter finally woke up, confused and bleeding, Injun Joe convinced him that he had killed the doctor in a drunken fight. Potter wept, begging Injun Joe not to tell anyone, and fled into the night.",
      "Tom and Huck ran until they reached an old deserted tannery near the river. Catching their breath, they wrote an oath on a pine plank in blood: they swore never to speak a word about what they had seen, knowing that if Injun Joe found out, he would murder them both. They swore to keep silent forever."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch05.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom and Huck hide behind a tree in a moonlit graveyard while three men stand by an open grave"
    },
    {
     "n": 6,
     "title": "The Mystery of Injun Joe",
     "paras": [
      "The news of Dr. Robinson’s murder shocked the quiet village of St. Petersburg. A crowd gathered at the graveyard the next morning. Tom, drawn by a dark fascination, joined the crowd. Soon, a pale and trembling Muff Potter was brought to the scene. To Tom’s horror, Injun Joe was also there, calmly testifying that he had seen Potter murder the doctor with his knife. When Potter was led away to jail, Tom’s conscience tortured him. He knew Potter was innocent, but fear of Injun Joe kept his lips sealed tight.",
      "For weeks, Tom was haunted by nightmares. He stopped smiling and playing. To ease his guilty mind, he would creep up to the small window of the village jail and pass small gifts of food and tobacco to poor Muff Potter. Becky Thatcher was also absent from school, sick with fever, which added to Tom’s misery. Feeling rejected by Becky, misunderstood by Aunt Polly, and carrying the weight of a terrible secret, Tom decided that the world had treated him unfairly. He resolved to run away and start a new life of crime on the river."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch06.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom and Huck stand in a dark alley as Injun Joe watches from the shadows"
    },
    {
     "n": 7,
     "title": "The Adventures on Jackson’s Island",
     "paras": [
      "Tom met his close friends Joe Harper and Huck Finn. Joe was also feeling heartbroken after being wrongly punished by his mother for drinking cream. Together, the three boys agreed to become pirates. They named their gang “The Black Avengers of the Spanish Main” and chose a small, uninhabited, heavily wooded island three miles down the Mississippi River called Jackson’s Island as their hideout.",
      "Around midnight, they met on the riverbank, carrying stolen provisions: a ham, a side of bacon, and cornmeal. They stole a small raft and floated down the river under the starlight, landing safely on the island. They built a camp, cooked bacon over an open fire, and slept under the stars, feeling glorious and free from adults, school, and rules.",
      "For two days, the boys lived a magnificent life on Jackson’s Island. They swam in the warm river, explored the thick woods, chased wildlife, played games, and ate fish they caught themselves. But on the afternoon of the second day, a peculiar sound echoed down the river: a deep booms echoing across the water. A large steamboat was cruising near the shore, firing cannon shots over the water. The boys realized what it meant: someone had drowned, and the townspeople were using cannons to bring the bodies to the surface!",
      "Suddenly, the truth hit them: the town believed they had drowned! A wave of pride swept over them—they were famous! But as night fell, homesickness began to creep into Joe and Huck’s hearts. They missed their beds and their families. Tom, too, missed Aunt Polly. After the other two boys fell asleep, Tom wrote a note on a piece of tree bark, slipped away from camp, and swam across the river back to town.",
      "He crept quietly to Aunt Polly’s house and hid under the bed. Aunt Polly, Mrs. Harper (Joe’s mother), Sid, and Mary were sitting together by candlelight, weeping and talking fondly about the lost boys. Aunt Polly cried: “He wasn’t bad, only mischievous and wild! He was as unselfish as a stray dog, and I whipped him for taking cream when I threw it out myself! Oh, if I only had him back!” Tom felt deeply moved. He waited until they went to bed, crept out, gave his sleeping aunt a tender kiss, and returned to the island without leaving his note.",
      "When Tom returned, he revealed a secret plan to Joe and Huck. On Sunday morning, the village church was filled with a mournful crowd. The funeral service for the three lost boys had begun. Minister read their eulogy, and everyone broke into tears, including Becky Thatcher and Aunt Polly. Suddenly, the church door opened! Down the main aisle walked Tom Sawyer, Joe Harper, and Huck Finn! The congregation burst into joy, Aunt Polly smothered Tom with hugs and kisses, and the whole church sang a song of praise. Tom was declared a hero!",
      "Back at school, Tom’s glory was complete. He stepped up to protect Becky Thatcher when she accidentally tore a page in the schoolmaster’s prized book. When the teacher discovered the torn page and demanded to know who did it, Tom stood up and cried: “I did it!” accepting the severe whipping for her. Becky’s admiration and love for Tom were restored completely.",
      "Summer came, and with it, the trial of Muff Potter. The town was convinced Potter was guilty, and his lawyer seemed to offer no defense. Tom and Huck were terrified, knowing Potter faced execution. Unable to suffer his guilt any longer, Tom broke his oath. The night before the final day of the trial, he visited Potter’s lawyer and revealed everything.",
      "The next morning, the courtroom was packed. Muff Potter sat pale and hopeless. The prosecutor presented his witnesses, and Potter’s defense lawyer declined to question them. The crowd murmured in disappointment. Then, the lawyer stood up: “Call Thomas Sawyer to the stand!”",
      "Tom took the stand, trembling with fear. “Thomas Sawyer, where were you on the night of June seventeenth, around midnight?” “In the graveyard!” Tom whispered. “Were you near Hoss Williams’s grave?” “Yes, sir.” “Now tell the court what you saw!” Tom took a deep breath, looked at Muff Potter’s grateful eyes, and spoke: “I saw Dr. Robinson, Muff Potter, and Injun Joe! Muff Potter got knocked down... and then Injun Joe jumped on the doctor with Potter’s knife and—”",
      "CRASH! Before anyone could react, Injun Joe leaped through a window, smashing the glass, and escaped into the woods! Muff Potter was freed, and Tom was celebrated as a hero by day, though he lived in constant terror by night, knowing Injun Joe was alive and seeking revenge."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch07.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Three boys relax around a campfire beside a shelter on an island in the river at sunset"
    },
    {
     "n": 8,
     "title": "The Cave, the Escape, and the Treasure",
     "paras": [
      "A few weeks later, Tom and Huck went searching for buried treasure in an abandoned haunted house near the river. While upstairs, they heard footsteps below. Through cracks in the floorboards, they saw two men enter: a ragged Spaniard and his companion. To the boys’ horror, the Spaniard spoke—it was Injun Joe in disguise!",
      "The two criminals dug up a floorboard to hide six hundred dollars in stolen silver. While digging, their spades struck a heavy iron box! They pulled it out and opened it: it was filled with thousands of dollars in old gold coins buried by pirates years ago! Injun Joe decided not to rebury it there: “Somebody has been using this place. We’ll take it to Number Two—under the cross!” The boys watched them carry the gold away, determined to find “Number Two.”",
      "The next day, Becky Thatcher hosted a grand picnic at McDougal’s Cave, a vast, complex labyrinth of dark limestone passages several miles from town. Dozens of children spent the day exploring the cave’s entrance with candles. Tom and Becky wandered deeper into the cavern, fascinated by the beautiful natural rock formations, underground springs, and stalactites. They lost track of time and distance.",
      "Suddenly, a swarm of bats attacked their candles! The children ran blindly down unknown passageways to escape the bats. When they stopped, they realized they were lost in the deep darkness. Hours passed, and their families began searching for them, but the cave was miles long. Back in town, Huck Finn was watching the river late that night and spotted Injun Joe heading toward the house of the wealthy Widow Douglas, intending to harm her. Huck bravely ran to the house of a nearby farmer, the Welshman, and raised the alarm. The Welshman and his sons drove Injun Joe away into the night, saving the widow’s life.",
      "Deep inside the cave, Tom and Becky were exhausted and starving. Their last candle went out, leaving them in pitch darkness. Becky was too weak to walk, weeping softly. Tom used a ball of kite string he had in his pocket to anchor to a rock, exploring side passages on his hands and knees to find a way out. In one passageway, he saw a light—and then a human hand holding a candle! Tom shouted with joy, but when the face appeared, it was Injun Joe! Injun Joe fled in terror, not recognizing Tom’s voice in the dark echoing cavern.",
      "Tom returned to Becky and encouraged her. On the third day of their ordeal, Tom explored another small passage with his string. Far ahead, he saw a tiny speck of daylight! He rushed toward it, pushed through a small opening in the rocks, and looked out upon the Mississippi River! He ran back, got Becky, and led her out into the bright sunlight. They were saved!",
      "The town celebrated their return with grand rejoicing. Judge Thatcher had the entrance of McDougal’s Cave sealed with a heavy iron door locked tight to prevent future accidents. When Tom learned of this two weeks later, he turned pale: “Injun Joe is in that cave!” A rescue party rushed to the cave and opened the door. Injun Joe was found dead near the entrance, having tried to carve his way out with his pocketknife.",
      "A few days after Injun Joe’s funeral, Tom took Huck back into McDougal’s Cave through the secret opening he had discovered. Guided by Tom’s memory, they navigated to the spot where Injun Joe had hidden his loot. There, carved on the cave wall in candle smoke, was a small cross! Beneath the cross, hidden in a small natural crevice, sat the iron box filled with gold coins!",
      "The boys hauled the heavy box out of the cave and loaded it onto a wagon. As they entered town, the Welshman met them and escorted them to Widow Douglas’s house, where the prominent citizens of the village were gathered. The widow announced that she was adopting Huck Finn to raise him as her son and educate him. Then Tom stepped forward, lifted the heavy iron box, and poured twelve thousand dollars in gleaming gold coins onto the table!",
      "The entire town was stunned. The money was invested for the boys, yielding a dollar a day for each—a fortune in those days. Huck tried living with Widow Douglas, but wearing clean clothes, eating with a fork, and sleeping in a soft bed made him miserable. After three days, he ran away back to his old life in an abandoned barrel near the river.",
      "Tom found Huck and persuaded him to return to the widow’s house: “If you want to join my gang of robbers, Huck, you’ve got to be respectable! A gang of high-class robbers has got to have style!” Huck smiled and agreed: “If that’s the case, Tom, I’ll go back to the widow and try it a while longer!” And so, the two friends stood ready for their next great adventure."
     ],
     "img": {
      "src": "assets/images/stories/tom-sawyer/ch08.webp",
      "w": 560,
      "h": 835
     },
     "alt": "Tom holds a candle and Becky’s hand in a cave near an open chest of gold"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "no-longer-human",
   "title": "No Longer Human",
   "author": {
    "name": "Osamu Dazai"
   },
   "category": "society",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "Illustrated adaptation in 8 chapters.",
   "intro": "Told through the confessions of Yozo Oba, who hides his fear of other people behind a clown’s mask and drifts from a wealthy northern home into the shadows of Tokyo.",
   "cover": {
    "src": "assets/covers/no-longer-human.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Yozo Oba",
     "role": "The narrator, who hides behind a clown’s mask",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-yozo-oba.webp",
      "w": 229,
      "h": 303
     }
    },
    {
     "name": "Horiki",
     "role": "A cynical artist who leads him astray",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-horiki.webp",
      "w": 229,
      "h": 303
     }
    },
    {
     "name": "Tsuneko",
     "role": "A young bar hostess",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-tsuneko.webp",
      "w": 229,
      "h": 303
     }
    },
    {
     "name": "Yoshiko",
     "role": "An innocent young woman he marries",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-yoshiko.webp",
      "w": 229,
      "h": 268
     }
    },
    {
     "name": "The Madam",
     "role": "The ruthless madam who takes him in",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-the-madam.webp",
      "w": 229,
      "h": 268
     }
    },
    {
     "name": "Takeichi",
     "role": "The classmate who sees through his mask",
     "img": {
      "src": "assets/images/stories/no-longer-human/char-takeichi.webp",
      "w": 229,
      "h": 255
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "A Face That Could Not Smile",
     "paras": [
      "Prologue: I have seen three photographs of the subject, Yozo Oba, spanning from his early childhood to his decadent youth. Each image conveys an unsettling sense of alienation, a quiet terror disguised behind grotesque mockery.",
      "My life has been defined by a profound sense of shame. I cannot fathom what human beings actually feel. Their lives appear governed by rules and desires completely foreign to me, leaving me in a state of perpetual terror. As a child growing up in a wealthy household in northern Japan, I was utterly incapable of understanding my family’s emotional wavelengths. To bridge this terrifying chasm, I resorted to clowning.",
      "By making people laugh, I hoped to conceal my inner monstrosity. If I could keep them amused, they would not notice my fundamental alienation. Yet this constant performance only deepened my isolation; every smile I wore was a calculated lie, and every laugh extracted from others felt like a silent confirmation of my own worthlessness."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch01.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A boy in a kimono stands apart from a seated family, his reflection in a dark window looking sad"
    },
    {
     "n": 2,
     "title": "The Art of Fooling Others",
     "paras": [
      "As I entered middle school, my fear of my fellow students intensified. I lived in dread of being exposed as a fraud. To protect myself, I perfected the art of being a lovable buffoon. I willingly played the fool in class, absorbing insults and ridicule with a comical grimace, all to divert attention from my dark, hollow interior.",
      "Only one person ever suspected the truth: Takeichi, a classmate from a humble background. One day, pointing at a sketchbook filled with grotesque, tormented drawings, Takeichi whispered that I had drawn them on purpose to deceive everyone. The realization that someone saw through my mask struck me with paralyzing panic. Yet Takeichi’s insight did not lead to salvation; instead, it drove me further into hiding, seeking refuge in art and the bohemian fringes of society."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch02.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A smiling schoolboy sits at his desk surrounded by laughing classmates, with a mask hidden under the desk"
    },
    {
     "n": 3,
     "title": "The Mask Begins to Crack",
     "paras": [
      "Moving to Tokyo for preparatory school opened new avenues of escapism and degradation. Free from direct parental surveillance, I fell into the company of Horiki, a cynical, shiftless artist who introduced me to cheap liquor, brothels, and radical leftist politics. Horiki possessed none of my agonizing sensitivity; he navigated the shallow waters of modern life with casual indifference.",
      "I clung to Horiki because I lacked the willpower to stand alone, yet his companionship only accelerated my moral decay. Politics, art, and intellectual discourse became mere pretexts for numbing my perpetual dread. My clown mask, once a flexible tool for survival, was growing brittle and cracking under the weight of genuine despair and unrelenting self-loathing."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch03.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A young man touches his cracked reflection in a school hallway while students laugh in the next room"
    },
    {
     "n": 4,
     "title": "A Life of Contradictions",
     "paras": [
      "My existence became an intricate web of contradictions. While playing the charming, carefree student by day, I was sinking into severe depression by night. I sought solace in women who offered temporary shelter from my isolation, only to inflict mutual misery upon them.",
      "The climax of this downward spiral arrived at Kamakura. Overwhelmed by a sense of impending doom and total alienation, I entered into a suicide pact with Tsuneko, a young bar hostess I barely knew. We swam out into the dark sea, but while Tsuneko drowned, I miraculously survived. The subsequent police interrogation and social condemnation labeled me a survivor of a double suicide—a stigma that branded me as morally corrupt and cemented my conviction that I was utterly disqualified from being human."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch04.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A man leans against a rainy café wall, looking in at people laughing inside"
    },
    {
     "n": 5,
     "title": "The Night of Despair",
     "paras": [
      "Expelled from university and disowned by my family, I drifted deeper into the shadows of Tokyo’s underworld. I lived off various women—waitresses and mistresses—moving from one cramped room to another like a ghost haunting the margins of civilization. Alcohol became my constant companion, a chemical shield against the agonizing clarity of my conscience.",
      "During this period, I produced crude cartoons for pulp magazines under a pseudonym, earning just enough to sustain my drinking habits. Every human interaction felt transactional and hollow. I watched people commute, converse, and laugh with a detached wonder, acutely aware that an impassable glass wall separated me from the rest of humanity. I was a spectator of life, permanently locked outside."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch05.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A man stands by a misty river at night looking down, with the city lights behind him"
    },
    {
     "n": 6,
     "title": "A Fragile Attempt at Happiness",
     "paras": [
      "A brief ray of light pierced the gloom when I met Yoshiko, an innocent, trusting young woman who worked in a small tobacco shop. Drawn by her utter lack of suspicion and her naive faith in my goodness, I married her. For a short time, we lived a quiet, modest life in a suburban cottage.",
      "For the first time, I experienced something resembling domestic peace. Yet my inner demons never rested; I tormented myself with the thought that my happiness was fraudulent. That fragile peace was brutally shattered one evening when a cynical acquaintance violated Yoshiko while I stood paralyzed in another room, unable to intervene. Though Yoshiko forgave the intrusion, my fragile trust dissolved completely, plunging me back into an abyss of self-hatred and despair."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch06.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A man and woman sit at a small table by an open window, his reflection watching from outside"
    },
    {
     "n": 7,
     "title": "The Fall into Darkness",
     "paras": [
      "Following the collapse of my marriage, I turned to morphine to deaden the physical and psychological agony. Addiction eroded whatever remained of my vitality. I pawned my remaining possessions, lost control of my body, and eventually suffered a complete physical breakdown, coughing blood in squalid rooms.",
      "Horiki reappeared briefly, viewing my pathetic state not with compassion, but with callous amusement before abandoning me to my fate. I was taken in by a ruthless madam and kept in a state of drugged semi-consciousness. At barely twenty-seven years old, my hair had turned completely gray, and I looked like an old man. I had ceased to care whether I lived or died."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch07.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A man sits on the floor of a dark room beside a cracked mirror, a bottle and medicine on a stool"
    },
    {
     "n": 8,
     "title": "No Longer Human",
     "paras": [
      "In a remote room in Funabashi, abandoned to sickness and addiction, I looked back upon my life. I realized that all my attempts to connect, to please, and to survive had ended in utter failure. I was neither good nor evil; I was simply an empty vessel. The verdict was final: I was no longer human.",
      "Epilogue: Years later, the notebooks containing Yozo’s confessions find their way into the hands of a lonely bar owner in Tokyo. Looking at the three photographs once more, she remarks softly, “Our Yo-chan... he was a good boy, an angel.” Yet the enduring tragedy remains: a spirit so profoundly shattered that it could never find a home among mankind."
     ],
     "img": {
      "src": "assets/images/stories/no-longer-human/ch08.webp",
      "w": 540,
      "h": 805
     },
     "alt": "A man in a dark suit stands at a window where his pale reflection gazes out at distant figures"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "the-metamorphosis",
   "title": "The Metamorphosis",
   "author": {
    "name": "Franz Kafka"
   },
   "category": "society",
   "genres": [
    "Classic"
   ],
   "language": "English",
   "edition": "WorldTales edition in 6 chapters.",
   "intro": "One morning Gregor Samsa, a traveling salesman, wakes to find himself transformed into a monstrous insect, and his family must learn to live with the change.",
   "cover": {
    "src": "assets/covers/the-metamorphosis.webp",
    "w": 480,
    "h": 715
   },
   "characters": [
    {
     "name": "Gregor Samsa",
     "role": "A traveling salesman transformed into an insect",
     "img": {
      "src": "assets/images/stories/the-metamorphosis/char-gregor-samsa.webp",
      "w": 340,
      "h": 305
     }
    },
    {
     "name": "Grete Samsa",
     "role": "His sister and caretaker",
     "img": {
      "src": "assets/images/stories/the-metamorphosis/char-grete-samsa.webp",
      "w": 294,
      "h": 403
     }
    },
    {
     "name": "Mr. Samsa",
     "role": "His father",
     "img": {
      "src": "assets/images/stories/the-metamorphosis/char-mr-samsa.webp",
      "w": 340,
      "h": 267
     }
    },
    {
     "name": "Mrs. Samsa",
     "role": "His mother",
     "img": {
      "src": "assets/images/stories/the-metamorphosis/char-mrs-samsa.webp",
      "w": 340,
      "h": 273
     }
    },
    {
     "name": "The Chief Clerk",
     "role": "Gregor’s supervisor from the firm",
     "img": {
      "src": "assets/images/stories/the-metamorphosis/char-the-chief-clerk.webp",
      "w": 340,
      "h": 273
     }
    }
   ],
   "chapters": [
    {
     "n": 1,
     "title": "An Awkward Awakening",
     "paras": [
      "One morning, as Gregor Samsa awoke from troubled dreams, he found himself transformed in his bed into a monstrous insect-like creature. He lay on his armor-like back, and if he lifted his head a little he could see his dome-shaped brown belly, divided into stiff arched segments. The bedding was barely able to stay in place and seemed ready to slide off completely. His many legs, pitifully thin compared with the size of the rest of him, waved helplessly before his eyes.",
      "“What’s happened to me?” he thought. It was not a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. Above the table, on which a collection of cloth samples was unpacked—Samsa was a traveling salesman—hung the picture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame. It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered the whole of her lower arm towards the viewer.",
      "Gregor then turned to look out the window at the dull weather. Drops of rain could be heard hitting the pane, which made him feel quite mournful. “How about if I sleep a little bit longer and forget all this foolishness?” he thought, but that was completely impracticable because he was used to sleeping on his right side, and in his present state he could not get into that position. However hard he threw himself onto his right side, he always rolled back to where he was.",
      "“Oh, God,” he thought, “what a strenuous career I’ve chosen! Traveling day in and day out. The stress of business is much greater than on the actual home office staff, and on top of that there’s the trouble of traveling, the worries about train connections, bad and irregular meals, and contacts with different people that are always changing, never lasting, and never becoming intimate. To the devil with it all!”",
      "He felt a slight itch up on his belly; pushed himself slowly on his back closer to the bedpost so that he could lift his head more easily; identified the itchy place, which was covered with lots of little white spots that he was unable to understand; and tried to touch the place with one of his legs, but drew it quickly back as soon as he touched it, because the contact sent a cold shudder through him.",
      "He slid back into his former position. “Getting up early all the time,” he thought, “makes an idiot of a person. A man needs his sleep. Other salesmen live like harem women. For instance, when I go back to the hotel during the morning to write up the orders, those gentlemen are just sitting down to breakfast. If I were to try that with my boss, I’d be fired on the spot. Who knows, though, if that might not be a very good thing for me. If I didn’t have to hold back because of my parents, I’d have given in my notice long ago.”",
      "He looked at the alarm clock ticking on the chest of drawers. “Heaven preserve me!” he thought. It was half-past six, and the hands were quietly moving forward; it was even past the half-hour; it was getting on towards a quarter to seven. Had the alarm clock not rung? He could see from the bed that it had been set correctly for four o’clock; it must have rung. But was it possible to sleep quietly through that furniture-shaking noise? Well, his sleep had not been quiet, but probably all the sounder for that. But what should he do now? The next train went at seven; if he were to catch that he would have to rush like mad, and the sample collection was not packed yet, and he did not feel particularly fresh and lively.",
      "And even if he caught the train, he could not avoid a dressing-down from the boss, because the firm’s errand boy would have waited for the five o’clock train and reported long ago that he had missed it. He was a creature of the boss’s, without backbone or intelligence. What if he were to report that he was sick? But that would be extremely awkward and suspicious, because Gregor had not been ill once in five years of employment. The boss would certainly come with the doctor from the medical insurance company, upbraid his parents for their lazy son’s shortcomings, and cut short all excuses by taking the doctor’s word for it; and the doctor thought that all people were completely healthy individuals who were simply afraid of work.",
      "As he was thinking all this over in the greatest haste, without being able to make up his mind to get out of bed—the clock was just striking a quarter to seven—there came a cautious knock at the door near the head of his bed.",
      "“Gregor,” a voice called—it was his mother—“it’s a quarter to seven. Didn’t you want to go to work?”",
      "That gentle voice! Gregor was shocked when he heard his own voice answering her; it was unmistakably his own, but with a persistent, painful squeak mixed in from below, which left the words clean only for the first moment and destroyed them in their resonance so much that one could not tell if one had heard them correctly. Gregor had wanted to give a full answer and explain everything, but under the circumstances he said merely: “Yes, yes, thank you, Mother, I’m getting up now.”",
      "The wooden door prevented the change in Gregor’s voice from being noticed outside, for his mother went away satisfied. But this brief conversation had made the other members of the family aware that Gregor was unexpectedly still at home, and already his father was knocking at one side door, softly, but with his fist. “Gregor, Gregor,” he called, “what’s the matter?” And after a short pause he called again in a deeper, warning voice: “Gregor!” At the other side door, however, his sister whispered softly: “Gregor? Aren’t you well? Do you need anything?”",
      "Gregor answered both of them: “I’m just about ready,” and tried through the most careful pronunciation and by inserting long pauses between individual words to strip his voice of everything remarkable. The father went back to his breakfast, but his sister whispered: “Gregor, open the door, I beg you.” Gregor had no intention of opening the door, however, but praised the precaution he had acquired while traveling of locking all doors during the night, even at home.",
      "First he wanted to get up quietly and undisturbed, get dressed, and above all have breakfast; only then would he consider what to do next, for he noticed clearly that in bed he would not come to any sensible conclusion. He remembered that he had often felt a slight pain in bed, perhaps caused by lying in an uncomfortable position, which turned out to be purely imaginary when he got up, and he was eager to see how today’s illusions would gradually fade away. That his voice had changed was nothing more than the harbinger of a severe cold, an occupational hazard of traveling salesmen.",
      "It was simple enough to get rid of the blanket; he needed only to blow himself up a little and it fell off by itself. But the next part was difficult, especially because he was so unusually broad. He would have needed arms and hands to push himself up; instead he had only numerous little legs, which were continually in motion and which he could not control at all. If he wanted to bend one of them, it was the first to extend itself; and if he finally succeeded in making this leg do what he wanted, all the others worked in the meantime, as if set free, in a most painful state of agitation."
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch01.webp",
      "w": 540,
      "h": 805
     },
     "alt": "Gregor Samsa lies in bed transformed into a huge insect, with a shadow at the door and his mother's portrait on the wall"
    },
    {
     "n": 2,
     "title": "The Unwelcome Guest",
     "paras": [
      "Just as Gregor managed to rock himself out of bed and fell onto the carpet with a dull thud—which was not a real crash, as his back was more elastic than he thought—a commotion arose in the hallway. The chief clerk from Gregor’s firm had arrived in person to inquire why Gregor had missed the early train. The clerk’s heavy boots echoed on the floorboards, filling Gregor with a cold dread. Why was he condemned to work in a firm where the smallest oversight immediately aroused the gravest suspicion?",
      "“Mr. Samsa!” the chief clerk called out through the locked door, his tone authoritative and sharp. “What is the matter with you? You are barricading yourself in your room, giving short answers, causing your parents serious, unnecessary anxiety, and—to mention this only in passing—neglecting your commercial duties in an utterly unheard-of manner. I am speaking here on behalf of your parents and your employer, and I must ask you for a clear and immediate explanation!”",
      "Inside the room, Gregor fought desperately to turn the key in the lock with his jaw, having no teeth or hands to speak of. A brown liquid flowed from his mouth and ran down the key onto the floor. Outside, his mother wept, begging him to open the door, while his sister Grete sobbed in the adjoining room. “He is ill,” his mother pleaded to the clerk. “Believe me, Mr. Chief Clerk, he is ill! Why else would Gregor miss a train? The boy thinks of nothing but his work.”",
      "Finally, with a decisive snap, the lock turned. Gregor pushed the heavy door open with his head. He stepped into the doorway, raising his upper body to peer into the living room. The chief clerk, standing closest to the door, pressed his hand over his mouth and began slowly stepping back, as if driven by an invisible force. His eyes were wide with terror. Mrs. Samsa looked at Gregor, took two steps forward, and collapsed onto the floor in a swirl of skirts, her face hidden against her chest. His father clenched his fists with a hostile expression, looking as though he wished to shove Gregor back into his room, then looked around the living room in confusion, covered his eyes with his hands, and wept till his great chest shook.",
      "“Mr. Chief Clerk!” Gregor called out, forgetting that his voice was no longer human. “I’ll get dressed immediately, pack up the samples, and set off! Please, tell the manager how things are. You see that I am not stubborn, and I like my work; traveling is difficult, but I couldn’t live without it. Don’t make it harder for me than it already is! Stand up for me in the office!”",
      "But the chief clerk had already turned away. He fled down the hallway, looking back over his shoulder with horrified eyes as if Gregor were pursuing him. He abandoned his cane and hat by the door and vanished down the stairs. Gregor realized he could not let the clerk leave in this state of mind, or his job would be lost forever. He dragged his heavy body forward into the living room, his many tiny legs twitching erratically as they made contact with the hardwood floor.",
      "His father, however, showed no sympathy. Seizing the chief clerk’s heavy walking stick in one hand and a newspaper in the other, he began driving Gregor back into his bedroom like a wild animal. He stamped his feet, hissed, and brandished the cane with menacing fury. Gregor had not yet mastered the art of moving backward, and turning around was a slow, agonizing process in his widened form. Every time he paused, his father raised the cane higher or threatened him with a loud shout.",
      "The door frame was too narrow for Gregor’s broad body. As he tried to force his way through sideways, he became stuck. One side of his body wedged against the doorpost, leaving painful red scars on his shell. From behind, his father gave him a heavy push that thrust him, bleeding profusely, entirely into the room. The door was slammed shut with the cane and locked from the outside. Darkness fell upon the room, accompanied by an absolute, terrifying silence."
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch02.webp",
      "w": 540,
      "h": 805
     },
     "alt": "Grete carries a tray of food into Gregor's room, where he hides near the bed"
    },
    {
     "n": 3,
     "title": "Alienation and Care",
     "paras": [
      "It was already dusk when Gregor awoke from a deep, trance-like sleep. He had been awakened by the sound of the door being unlocked cautiously. The faint twilight from the street lamps barely illuminated the room. His left side felt bruised and stiff, and several of his small legs dragged uselessly behind him, damaged during his violent retreat earlier that morning. Yet despite his physical misery, he felt a strange sense of hunger.",
      "Near the door, someone had placed a bowl of fresh milk, in which floated small slices of white bread—his favorite food when he was human. Overjoyed, Gregor hurried toward it, submerging his head into the milk almost up to his eyes. But he quickly drew back in disappointment. Not only did he find it difficult to eat because of his painful side, but the taste of fresh milk, which he had always loved, now repulsed him completely. He turned away from the bowl in disgust and crawled back into the middle of the room.",
      "The next morning, his sister Grete opened the door cautiously to inspect the room. Seeing the milk untouched except for a slight spill around the bowl, she picked it up using a rag, not her bare hands, and carried it away. A short while later, she returned carrying a selection of rotten food on an old newspaper: old, decayed vegetables, bones covered in white sauce that had hardened, a few raisins and almonds, cheese that Gregor had pronounced inedible two days ago, and a dry crust of bread. Gregor rushed toward the rotten feast and consumed it greedily, finding the strongest, most decayed pieces to be the most delicious.",
      "Thus began Gregor’s new routine. Grete became his primary caretaker, coming into the room twice a day—once in the morning while her parents were still sleeping, and once after lunch. Though she performed these duties out of duty and affection, she could not conceal her horror of his physical appearance. Whenever she entered, Gregor was careful to hide himself under the couch, pulling a sheet over his body so that not even his feet were visible to her.",
      "Through the thin walls, Gregor listened to his family’s hushed conversations in the living room. Their financial situation was dire. The money Gregor had earned as a salesman had paid for their apartment and daily expenses, but now that income was gone. His father revealed that a small reserve of capital still remained from his failed business venture years ago, along with some savings from Gregor’s monthly salary. It was enough to sustain them for a year or two, but no longer. His father was an elderly man who had not worked in five years; his mother suffered from severe asthma; and his sister was only seventeen, completely unprepared for the hardships of life.",
      "As the weeks passed, Gregor developed a new habit to pass the long, lonely hours. He began crawling up the walls and across the ceiling, hanging suspended from above by the sticky fluid on his feet. It gave him a sense of freedom that eased his growing anxiety. Observing the tracks left on the wallpaper, Grete realized that Gregor enjoyed crawling, and she decided to remove the furniture—his chest of drawers and writing desk—to give him more space.",
      "She enlisted the help of her mother, who had not yet seen Gregor since his transformation. “Should we really remove the furniture?” his mother whispered nervously outside the door. “Doesn’t it look like we are giving up all hope of his recovery? Wouldn’t it be better to leave the room exactly as it was, so that when Gregor returns to us, he will find everything unchanged?”",
      "Hearing his mother’s voice, Gregor felt a deep conflict. Did he really want his room emptied of everything that reminded him of his human past? But Grete was determined, and the two women began pushing the heavy chest of drawers out of the room. Panic seized Gregor as he watched them strip away his human belongings. Desperate to save at least one item, he scrambled onto the wall and covered the picture of the lady in the fur muff with his warm, sticky belly, placing his body over the glass frame to protect it."
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch03.webp",
      "w": 540,
      "h": 805
     },
     "alt": "Grete and her mother watch in alarm as Gregor clings high on the wall of his emptied room"
    },
    {
     "n": 4,
     "title": "The Domestic Conflict",
     "paras": [
      "When his mother turned and saw the huge brown mass clinging to the wall, she gasped, “Oh, God! Oh, God!” and fell unconscious onto the couch. Grete raised her fist, shaking it at Gregor. “You, Gregor!” she cried out—the first words she had addressed directly to him since his transformation. She rushed into the next room to fetch medicine to revive their mother, and Gregor followed her, hoping to help, but only succeeded in frightening her further. In her panic, she dropped a glass bottle, which shattered, and a shard scratched Gregor’s face.",
      "Just then, the front door opened. Their father had returned home from his new job as a bank messenger. He was dressed in a tight blue uniform with gold buttons, looking stiff, imposing, and stern—a dramatic change from the weak, broken old man who used to lie uselessly in bed. “What has happened?” he demanded immediately. Grete looked up from their mother and cried, “Gregor has broken loose!”",
      "The father’s face transformed with fury. He assumed Gregor had committed some act of violence against his mother. “Ah!” he roared. “I expected this! I told you this would happen!” He began advancing on Gregor with an expression of pure hostility. Gregor backed away toward his room, but his father seemed determined to punish him. Finding no weapon nearby, the father grabbed a bowl of apples from the sideboard and began throwing them at Gregor, one after another.",
      "The small red apples rained down upon Gregor. One missed, grazing his back, but another followed immediately, striking him squarely in the middle of his soft back. The impact was terrible; the apple embedded itself deep into his skin, paralyzing his body with excruciating pain. Gregor collapsed onto the carpet, his senses fading. As he lost consciousness, he saw his mother rush out of the room in her underwear, throw her arms around his father’s neck, and beg for her son’s life.",
      "The severe injury Gregor suffered from the apple remained embedded in his flesh as a permanent reminder that he was still a member of the family, who could not be treated like an enemy. For over a month, he suffered from the wound, which crippled his mobility completely. Yet as a form of compensation, the family now left the living room door slightly open every evening, allowing Gregor to lie in the darkness of his room and watch them sitting around the dining table.",
      "The family was exhausted and weighed down by worry. The father slept in his blue uniform in an armchair, refusing to take it off even at night, while the mother sewed fine linen for a clothing shop and Grete studied shorthand and French in the hope of securing a better job. The domestic warmth that had once characterized their household was gone, replaced by an atmosphere of gloomy resignation."
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch04.webp",
      "w": 540,
      "h": 805
     },
     "alt": "Gregor watches through a doorway as his father, mother and sister sit at the table counting coins"
    },
    {
     "n": 5,
     "title": "The Lodgers and the Violin",
     "paras": [
      "To supplement their dwindling income, the family was forced to take in three lodgers—bearded, serious gentlemen who demanded absolute order and cleanliness. Gregor’s room became a storage space for unwanted items, old furniture, and ash buckets, as the family packed everything out of sight to satisfy the lodgers’ strict demands. Gregor spent his days surrounded by dust and clutter, feeling forgotten and utterly discarded.",
      "One evening, the door to the living room was left open while the lodgers ate dinner. Grete began playing her violin in the kitchen. Hearing the delicate music, the lodgers invited her to play for them in the living room. She came in, carrying her instrument, while her parents stood on either side of her, admiring her talent.",
      "Gregor, entranced by the beautiful sound, lost all sense of caution. Was he an animal, if music could move him so deeply? He crawled forward out of his dark room, pushing his head into the brightly lit living room. His body was covered in dust, threads, and scraps of food from his messy floor, but he did not care. He wished to draw closer to his sister, to touch her dress, and to invite her into his room with her violin, for no one appreciated her music as much as he did.",
      "The middle lodger was the first to notice Gregor. He stopped smoking his pipe, pointed a finger, and smiled sarcastically. Mr. Samsa stepped forward, trying to block the lodgers’ view of Gregor and usher them into their bedrooms, but the men were outraged by the filthy conditions of the apartment. “I hereby declare,” the middle lodger shouted, slapping his hands together, “that in view of the disgusting conditions prevailing in this household, I give notice immediately! I shall not pay a single penny for the days I have spent here!” The other two gentlemen agreed, announcing their immediate departure.",
      "When the lodgers retreated to their rooms, Grete slammed her hand down on the table, her tears flowing freely. “Father, Mother,” she said, her voice filled with bitter finality, “we cannot go on like this. If you don’t realize it, I do. I will not pronounce my brother’s name in front of this monster. All I say is: we must try to get rid of it. We have done everything humanly possible to take care of it and endure it; I don’t think anyone can reproach us in the slightest.”",
      "“She is right a thousand times,” her father muttered to himself. “If he could understand us,” he added softly, “then perhaps some agreement might be possible with him. But as it is...”",
      "“He must go!” cried Grete. “That is the only way, Father! You must just try to get rid of the idea that it is Gregor. The fact that we have lived with it for so long is our real misfortune. How could it be Gregor? If it were Gregor, he would have realized long ago that human beings cannot live with such a creature, and he would have gone away of his own free will. Then we would have no brother, but we could go on living and honor his memory.”"
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch05.webp",
      "w": 540,
      "h": 805
     },
     "alt": "The family and three lodgers react as Gregor appears at the door while Grete plays the violin"
    },
    {
     "n": 6,
     "title": "The Final Release",
     "paras": [
      "Gregor had listened to everything in silence. Slowly, painfully, he turned his weak body around and began crawling back to his room. It was a long, exhausting journey. When he reached the threshold, he looked back at his family one last time. Grete rushed forward and slammed the door shut, turning the key in the lock. Gregor heard the lock click and felt a final, cold wave of isolation sweep over him.",
      "He lay in the dark, unable to move a single leg. His entire body was filled with dull, aching pain, but his mind was peaceful. He thought of his family with deep affection and love. His opinion that he must disappear was even more firm than his sister’s. He remained in this state of quiet reflection until the clock tower struck three in the morning. Outside his window, the first light of dawn began to brighten the sky. Then, without struggle, his head sank to the floor, and his last faint breath escaped his nostrils.",
      "Early the next morning, the elderly charwoman arrived to clean the apartment. Opening Gregor’s door as she did every day, she saw him lying completely still in the center of the room. She poked him lightly with her broom, expecting him to move, but his body offered no resistance. Realizing what had happened, she called out into the quiet hallway, “Come and look! It’s dead; it’s lying there, completely dead!”",
      "Mr. and Mrs. Samsa, along with Grete, came out of their bedrooms. They stood around Gregor’s thin, dried body, looking down at him in silence. Mr. Samsa crossed himself and said, “Well, now we can thank God.” He turned to his wife and daughter. “Come, let us leave this place. We have all suffered enough today.”",
      "The three of them decided to take the day off from work to rest and take a walk in the countryside. They wrote letters of excuse to their employers, dismissed the lodgers, and left the apartment together. As the tram carried them out into the bright sunshine beyond the city, they discussed their prospects for the future. Despite all their hardships, their financial situation was not entirely hopeless, and each of them had good opportunities for career advancement.",
      "Looking at their daughter, Mr. and Mrs. Samsa noticed how lively and attractive she had become in spite of all the sorrow that had pale her cheeks. It occurred to them both almost simultaneously that it would soon be time to find her a good husband. And when they reached their destination at the end of their journey, Grete was the first to stand up, stretching her young body into the warm air—a silent pledge of new dreams and a fresh beginning."
     ],
     "img": {
      "src": "assets/images/stories/the-metamorphosis/ch06.webp",
      "w": 540,
      "h": 805
     },
     "alt": "Gregor lies still on the floor of the bright empty room while the family waits in the hallway"
    }
   ],
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  }
 ],
 "credits": {
  "app": {
   "copyright": null,
   "developer": null,
   "contact": null
  },
  "thirdParty": []
 },
 "collections": [
  {
   "id": "aesop",
   "name": "Aesop’s Fables",
   "author": "Traditionally attributed to Aesop",
   "category": "folktales",
   "cover": {
    "src": "assets/covers/collection-aesop.webp",
    "w": 440,
    "h": 656
   },
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "japanese",
   "name": "Japanese Folktales",
   "author": "Traditional Japanese folktales",
   "category": "folktales",
   "cover": {
    "src": "assets/covers/collection-japanese.webp",
    "w": 440,
    "h": 788
   },
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  },
  {
   "id": "holmes",
   "name": "Sherlock Holmes: The Moriarty Files",
   "author": "Arthur Conan Doyle",
   "category": "mystery",
   "cover": {
    "src": "assets/covers/collection-holmes.webp",
    "w": 440,
    "h": 656
   },
   "credits": {
    "published": null,
    "edition": null,
    "translator": null,
    "illustrations": {
     "credit": null,
     "license": null
    },
    "notes": null
   }
  }
 ],
 "contact": {
  "heading": "Contact the Developer",
  "text": [
   "Have a question, suggestion, or feedback about WorldTales?",
   "I'd love to hear from you."
  ],
  "email": "world_tale@hotmail.com"
 }
};
