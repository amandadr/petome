export const petsData = (gameId) => [
  {
    species: "Wolf",
    name: "Fang",
    mood: 5,
    treat: 1,
    play: 2,
    talk: 0,
    to_pet: -1,
    pet_happy:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/wolf_happy.png?raw=true",
    pet_sad:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/wolf_sad.png?raw=true",
    pet_neutral:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/wolf_neutral.png?raw=true",
    game_id: gameId,
  },
  {
    species: "Cat",
    name: "Noctis",
    mood: 5,
    treat: 2,
    play: -1,
    talk: 1,
    to_pet: 0,
    pet_happy:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/cat_happy.png?raw=true",
    pet_sad:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/cat_sad.png?raw=true",
    pet_neutral:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/cat_neutral.png?raw=true",
    game_id: gameId,
  },
  {
    species: "Slime",
    name: "Wiggy",
    mood: 5,
    treat: 1,
    play: 2,
    talk: 1,
    to_pet: 1,
    pet_happy:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/slime_happy.png?raw=true",
    pet_sad:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/slime_neutral.png?raw=true",
    pet_neutral:
      "https://raw.githubusercontent.com/amandadr/petome/deployment/frontend/public/images/sprites/slime_neutral.png?raw=true",
    game_id: gameId,
  },
];
