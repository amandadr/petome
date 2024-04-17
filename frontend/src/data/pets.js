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
      "https://petome-backend-production.up.railway.app/images/sprites/wolf_happy.png",
    pet_sad:
      "https://petome-backend-production.up.railway.app/images/sprites/wolf_sad.png",
    pet_neutral:
      "https://petome-backend-production.up.railway.app/images/sprites/wolf_neutral.png",
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
      "https://petome-backend-production.up.railway.app/images/sprites/cat_happy.png",
    pet_sad:
      "https://petome-backend-production.up.railway.app/images/sprites/cat_sad.png",
    pet_neutral:
      "https://petome-backend-production.up.railway.app/images/sprites/cat_neutral.png",
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
      "https://petome-backend-production.up.railway.app/images/sprites/slime_happy.png",
    pet_sad:
      "https://petome-backend-production.up.railway.app/images/sprites/slime_neutral.png",
    pet_neutral:
      "https://petome-backend-production.up.railway.app/images/sprites/slime_neutral.png",
    game_id: gameId,
  },
];
