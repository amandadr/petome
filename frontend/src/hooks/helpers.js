import { ACTIONS } from "./reducer";
import { petsData } from "../data/pets";
import { gamesData } from "../data/games";
import { eventsData } from "../data/events";

export function getBySpecies(species, array) {
  // returns a pet object from petsData using species
  return array.find((pet) => pet.species === species);
}

export function getById(id, array) {
  // returns an event object from eventsData using id
  return array.find((item) => item.id === id);
}

export const createGame = (gameId, input, dispatch) => {
  // const fetchEventsData = axios
  //   .get("https://petome-backend-production.up.railway.app/events.json")
  //   .then((response) => response.data)
  //   .then((data) => {
  //     dispatch({ type: ACTIONS.SET_EVENT_DATA, value: data });
  //     console.log("Event data set:", data);
  //     return data;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  const events = eventsData();
  dispatch({ type: ACTIONS.SET_EVENT_DATA, value: events });

  // const fetchGameData = axios
  //   .post("https://petome-backend-production.up.railway.app/games.json", {
  //     game: { user: input },
  //   })
  //   .then((response) => response.data)
  //   .then((data) => {
  //     dispatch({ type: ACTIONS.SET_GAME_DATA, value: data });
  //     dispatch({
  //       type: ACTIONS.SET_GAME_STATE,
  //       value: { key: "dayActions", value: [""] },
  //     });
  //     dispatch({
  //       type: ACTIONS.SET_GAME_STATE,
  //       value: { key: "isEntering", value: true },
  //     });
  //     dispatch({
  //       type: ACTIONS.SET_GAME_STATE,
  //       value: { key: "isReacting", value: false },
  //     });
  //     dispatch({
  //       type: ACTIONS.SET_GAME_STATE,
  //       value: { key: "lastAction", value: null },
  //     });
  //     console.log("Game data set:", data);
  //     return data.id;
  //   });

  const games = gamesData(gameId, input);
  dispatch({ type: ACTIONS.SET_GAME_DATA, value: games });
  dispatch({
    type: ACTIONS.SET_GAME_STATE,
    value: { key: "dayActions", value: [""] },
  });
  dispatch({
    type: ACTIONS.SET_GAME_STATE,
    value: { key: "isEntering", value: true },
  });
  dispatch({
    type: ACTIONS.SET_GAME_STATE,
    value: { key: "isReacting", value: false },
  });
  dispatch({
    type: ACTIONS.SET_GAME_STATE,
    value: { key: "lastAction", value: null },
  });

  // helper that creates Pet data using id and passes it as game_id in petsData
  const pets = petsData(gameId);
  dispatch({ type: ACTIONS.SET_PETS_DATA, value: pets });

  // Create an array of promises for each pet
  // const petRequests = petsData.map((pet) => {
  //   return axios.post(
  //     "https://petome-backend-production.up.railway.app/pets.json",
  //     { pet }
  //   );
  // });

  // Create all pets and return gameId
  // return axios
  //   .all(petRequests)
  //   .then((responses) => {
  //     return gameId;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // helper that fetches and sets Pet data using gameId
  // const fetchPetsData = (gameId) => {
  //   axios
  //     .get("https://petome-backend-production.up.railway.app/pets.json")
  //     .then((response) => response.data)
  //     .then((data) => {
  //       return data.filter((pet) => pet.game_id === gameId);
  //     })
  //     .then((data) => {
  //       dispatch({ type: ACTIONS.SET_PETS_DATA, value: data });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };

  // helper that creates a promise for both fetches
  // const allPromise = Promise.all([fetchEventsData, fetchGameData]);

  // After game and event data is set, this helper creates Pet data using game_id and passes game_id to FetchPetsData
  // allPromise
  //   .then((data) => {
  //     return createPetData(data[1]);
  //   })
  //   .then((data) => {
  //     fetchPetsData(data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
};

export const adoptedPet = (pets) => {
  const adoptedPet = pets.find((pet) => pet.mood >= 12);
  return adoptedPet;
};

export const showReaction = (actionValue) => {
  switch (actionValue) {
    case 0:
      return "😑";
    case 1:
      return "😄";
    case 2:
      return "💓";
    case -1:
      return "💢";
    case null:
      return "";
    default:
      return "";
  }
};

export const dispatchTimeout = (dispatch, type, value, timeout) => {
  return setTimeout(() => {
    dispatch({ type: type, value: value });
  }, timeout);
};

export const applyDispatch = (dispatch, type, value) => {
  dispatch({ type: type, value: value });
};

// fade in and stay on screen
export const fadeIn = (dispatch) => {
  applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
    key: "isEntering",
    value: true,
  });
  dispatchTimeout(
    dispatch,
    ACTIONS.SET_GAME_STATE,
    {
      key: "isEntering",
      value: false,
    },
    700
  );
};

// pet reaction to events
export const react = (dispatch) => {
  applyDispatch(dispatch, ACTIONS.SET_GAME_STATE, {
    key: "isReacting",
    value: true,
  });
  dispatchTimeout(
    dispatch,
    ACTIONS.SET_GAME_STATE,
    {
      key: "isReacting",
      value: false,
    },
    1000
  );
};

export const iOS =
  /iPad|iPhone|iPod/.test(navigator.platform) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
