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
  // create eventsData
  const events = eventsData();
  // set event states
  dispatch({ type: ACTIONS.SET_EVENT_DATA, value: events });

  // create gamesData by passing gameId and user input
  const games = gamesData(gameId, input);
  // set game states
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

  // create petsData by passing id as game_id
  const pets = petsData(gameId);
  // set pet state
  dispatch({ type: ACTIONS.SET_PETS_DATA, value: pets });
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
