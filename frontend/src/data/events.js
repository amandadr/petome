export const eventsData = () => [
  {
    id: 1,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wake.jpeg",
    dialogue:
      "You wake up to the sun filtering in from the skylight, early birds still singing their victory songs. 'Another day, more to do...' you take a moment to stare at the ceiling.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 2\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/1.json",
  },
  {
    id: 2,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wake.jpeg",
    dialogue:
      "With a deep sigh, your body finds itself again. It feels like a dream ...the war is over, you're finally home.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 3\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/2.json",
  },
  {
    id: 3,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wifu.jpeg",
    dialogue:
      "But it's not the same without her. “... but you wouldn’t want me to keep sulking here, would you?”",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 4\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/3.json",
  },
  {
    id: 4,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wifu.jpeg",
    dialogue:
      "“Yeah, definitely not. You'd have a lot to say... I guess you're right, it's time to work.”",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 5\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/4.json",
  },
  {
    id: 5,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/depart.jpeg",
    dialogue:
      "“...I should probably drop yesterday's cord of wood into the town. The axe could use a sharpening too.”",
    options:
      '[\n    {\n      "text": "Head Out",\n      "nextEvent": 6\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/5.json",
  },
  {
    id: 6,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_4.jpeg",
    dialogue:
      "As you walk the familiar path from your secret timber lot into town you hear rustling from a bush beside you.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 7\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/6.json",
  },
  {
    id: 7,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_4.jpeg",
    dialogue:
      "“Hm. There's never much around here… wonder what that could be…”",
    options:
      '[\n    {\n      "text": "Probably just a tree sprite.",\n      "nextEvent": 8\n    },\n    {\n      "text": "I should really check that out.",\n      "nextEvent": 8\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/7.json",
  },
  {
    id: 8,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_4.jpeg",
    dialogue:
      "You get close and a grey wolf pounces out of the bush with a low growl.",
    options:
      '[\n    {\n      "text": "Maybe he’s hungry?",\n      "nextEvent": 9\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/8.json",
  },
  {
    id: 9,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_4.jpeg",
    dialogue:
      "You toss the beast a piece of your lunch. Without hesitating it eats, sniffs your hand, then leaves.",
    options:
      '[\n    {\n      "text": "Keep towing the wood",\n      "nextEvent": 10\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/9.json",
  },
  {
    id: 10,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_4.jpeg",
    dialogue: "“Never seen one of those around here before…”",
    options:
      '[\n    {\n      "text": "Enter town",\n      "nextEvent": 11\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/10.json",
  },
  {
    id: 11,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/market_4.jpeg",
    dialogue:
      "You finish selling your firewood close to market when you catch a loud *BOOM* from a nearby shop.",
    options:
      '[\n    {\n      "text": "Turn the corner to see what happened",\n      "nextEvent": 12\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/11.json",
  },
  {
    id: 12,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/market_4.jpeg",
    dialogue: "“Egh... what are those magicians up to this time?”",
    options:
      '[\n    { "text": "Get a little closer",\n      "nextEvent": 13\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/12.json",
  },
  {
    id: 13,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/market_4.jpeg",
    dialogue:
      "You lurk outside the perimeter of a gathering crowd as your left ankle is met with a soft nudge and a little *meow*.",
    options:
      '[\n    { "text": "“Oh hey little grimmelkin, what can I do for you?”",\n      "nextEvent": 14\n    },\n    { "text": "Shoo it away",\n      "nextEvent": 14\n    }\n  ]',
    species: "Cat",
    url: "https://petome-backend-production.up.railway.app/events/13.json",
  },
  {
    id: 14,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/market_4.jpeg",
    dialogue: "The cat rubs its bum against your leg then daintily trots away.",
    options:
      '[\n    { "text": "Go drop your axe off at the smithy",\n      "nextEvent": 15\n    }\n  ]',
    species: "Cat",
    url: "https://petome-backend-production.up.railway.app/events/14.json",
  },
  {
    id: 15,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/market_4.jpeg",
    dialogue:
      "“Great. Wood’s been dropped, and the smith’s got my axe for a bit… might as well sit.”",
    options:
      '[\n    { "text": "Go sit in the field",\n      "nextEvent": 16\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/15.json",
  },
  {
    id: 16,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/field_3.jpeg",
    dialogue:
      "You find a lonely patch of shade and close your eyes for all but a moment before you're shaken alert by a giant *SQUISH*",
    options:
      '[\n    { "text": "“WHAT in the?...”",\n      "nextEvent": 17\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/16.json",
  },
  {
    id: 17,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/field_3.jpeg",
    dialogue:
      "Alarmed, you jump to your feet and look down to see a blobby slime. “Oh, uh, sorry bud...”",
    options:
      '[\n    { "text": "Sit down next it",\n      "nextEvent": 18\n    },\n    { "text": "Walk away",\n      "nextEvent": 18\n    }\n  ]',
    species: "Slime",
    url: "https://petome-backend-production.up.railway.app/events/17.json",
  },
  {
    id: 18,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/field_3.jpeg",
    dialogue:
      "The slime stares at you, boops your foot, then gloops out a flower from its belly.",
    options:
      '[\n    { "text": "“...thanks?”",\n      "nextEvent": 19\n    }\n  ]',
    species: "Slime",
    url: "https://petome-backend-production.up.railway.app/events/18.json",
  },
  {
    id: 19,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/field_3.jpeg",
    dialogue: "Obviously content, the slime squishes away into a cropping.",
    options:
      '[\n    { "text": "Grab your axe and head home",\n      "nextEvent": 20\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/19.json",
  },
  {
    id: 20,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "“What a strange day... lots of those monsters out and about now...”",
    options:
      '[\n    { "text": "Go to sleep",\n      "nextEvent": 21\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/20.json",
  },
  {
    id: 21,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/dream_2.jpeg",
    dialogue: "“mhmmm...am I dreaming? Who... no... what?”",
    options: '[\n    { "text": "Wake up",\n      "nextEvent": 22\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/21.json",
  },
  {
    id: 22,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wake.jpeg",
    dialogue: "“Wha? Strange... Anyway.. A new day it is.”",
    options: '[\n    { "text": "Head out",\n      "nextEvent": 23\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/22.json",
  },
  {
    id: 23,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue: "What should I get up to?",
    options:
      '[\n    { "text": "Go chop some wood",\n      "nextEvent": 24\n    },\n    { "text": "Go to the town",\n      "nextEvent": 25\n    },\n    { "text": "Go for a walk in the field",\n      "nextEvent": 26\n    },\n    { "text": "Go back to bed",\n      "nextEvent": 27\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/23.json",
  },
  {
    id: 24,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/forest_3.jpeg",
    dialogue:
      "You go to your timber site to chop some wood. Rustling from a familiar bush reveals the same wolf from before, Fang.",
    options:
      '[\n    {\n      "text": "Give him more jerky",\n      "nextEvent": 24,\n      "actionLabel": "treat"\n    },\n    {\n      "text": "Throw a bone for him to fetch",\n      "nextEvent": 24,\n      "actionLabel": "play"\n    },\n    {\n      "text": "Tell him about your day",\n      "nextEvent": 24,\n      "actionLabel": "talk"\n    },\n    {\n      "text": "Risk it - pet his fluffy ears.",\n      "nextEvent": 24,\n      "actionLabel": "to_pet"\n    },\n    {\n      "text": "Go do something else",\n      "nextEvent": 23\n    }\n]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/24.json",
  },
  {
    id: 25,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/town_3.jpeg",
    dialogue:
      "You make your way into town. At the market you hear a familiar meow at your feet and find Noctis, the cat from before.",
    options:
      '[\n    {\n      "text": "Give her a nibble of cheese",\n      "nextEvent": 25,\n      "actionLabel": "treat"\n    },\n    {\n      "text": "Throw a piece of parchment for her to play with",\n      "nextEvent": 25,\n      "actionLabel": "play"\n    },\n    {\n      "text": "Meow back at her",\n      "nextEvent": 25,\n      "actionLabel": "talk"\n    },\n    {\n      "text": "Give her a belly rub",\n      "nextEvent": 25,\n      "actionLabel": "to_pet"\n    },\n    {\n      "text": "Go do something else",\n      "nextEvent": 23\n    }\n]',
    species: "Cat",
    url: "https://petome-backend-production.up.railway.app/events/25.json",
  },
  {
    id: 26,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/field_2.jpeg",
    dialogue:
      "You go for a stroll in the field. At the bottom of a willow tree you meet the same slime from before, Wiggy.",
    options:
      '[\n    {\n      "text": "Toss them some flowers",\n      "nextEvent": 26,\n      "actionLabel": "treat"\n    },\n    {\n      "text": "Roll around with them",\n      "nextEvent": 26,\n      "actionLabel": "play"\n    },\n    {\n      "text": "Lay down and talk to them",\n      "nextEvent": 26,\n      "actionLabel": "talk"\n    },\n    {\n      "text": "Poke them with a stick",\n      "nextEvent": 26,\n      "actionLabel": "to_pet"\n    },\n    {\n      "text": "Go do something else",\n      "nextEvent": 23\n    }\n]',
    species: "Slime",
    url: "https://petome-backend-production.up.railway.app/events/26.json",
  },
  {
    id: 27,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/rest.jpeg",
    dialogue: "“... been a long day.”",
    options:
      '[\n    {\n      "text": "Go to sleep",\n      "nextEvent": 28\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/27.json",
  },
  {
    id: 28,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wake.jpeg",
    dialogue:
      "You wake up; more sun, more birds. It's time to start another day.",
    options:
      '[\n    {\n      "text": "Head out",\n      "nextEvent": 23\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/28.json",
  },
  {
    id: 29,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/rest.jpeg",
    dialogue: "“...huh?”",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 30\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/29.json",
  },
  {
    id: 30,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/rest.jpeg",
    dialogue: "“Hold on there, where are you headed to? Wait up!”",
    options:
      '[\n    {\n      "text": "Head back home",\n      "nextEvent": 31\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/30.json",
  },
  {
    id: 31,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "Your curious friend follows you home, entering comfortably as ever with a curious look around the room.",
    options:
      '[\n    {\n      "text": "Sit in your chair",\n      "nextEvent": 32\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/31.json",
  },
  {
    id: 32,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "As you sit down after a long week, Fang gives a shy quip and curls up at your feet.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 35\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/32.json",
  },
  {
    id: 33,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "As you sit down after a long week, Noctis gracefully hops onto your lap, tucks into a ball, and falls asleep.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 35\n    }\n  ]',
    species: "Cat",
    url: "https://petome-backend-production.up.railway.app/events/33.json",
  },
  {
    id: 34,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "As you sit down after a long week, Wiggy promptly jumps into your sink and settles in.",
    options:
      '[\n    {\n      "text": "Next",\n      "nextEvent": 35\n    }\n  ]',
    species: "Slime",
    url: "https://petome-backend-production.up.railway.app/events/34.json",
  },
  {
    id: 35,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/home.jpeg",
    dialogue:
      "You discover a smile creeping across your face... it's been a while since you've had a friend around.",
    options:
      '[\n    {\n      "text": "“Alright, I guess you can stay.”",\n      "nextEvent": 36\n    }\n  ]',
    species: "Wolf",
    url: "https://petome-backend-production.up.railway.app/events/35.json",
  },
  {
    id: 36,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/wifu.jpeg",
    dialogue:
      "“Lucia, it seems we just got adopted. You can rest easy now, my love.”",
    options:
      '[\n    {\n      "text": "Fini",\n      "nextEvent": 37\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/36.json",
  },
  {
    id: 37,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/end.jpeg",
    dialogue: "The end.",
    options:
      '[\n    {\n      "text": "End Game",\n      "nextEvent": 38\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/37.json",
  },
  {
    id: 38,
    img: "https://petome-backend-production.up.railway.app/images/backgrounds/end.jpeg",
    dialogue: "Restart?",
    options:
      '[\n    {\n      "text": "Start a new game",\n      "nextEvent": 1\n    }\n  ]',
    species: null,
    url: "https://petome-backend-production.up.railway.app/events/38.json",
  },
];
