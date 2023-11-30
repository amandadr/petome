import { getById, adoptedPet, showReaction } from "../hooks/helpers";
import "../styles/Event.scss";
import { CSSTransition } from "react-transition-group";
import { useState } from "react";
import Reaction from "./Reaction";
// import sprite from '../mocks/sprites/neko.png';

export default function Event({ state, dispatch, ACTIONS }) {
  const { event: eventId, user, day, energy, pets, events } = state.game;

  const [isEntering, setIsEntering] = useState(true);
  const [isReacting, setIsReacting] = useState(false);
  const [lastAction, setLastAction] = useState(null);

  const fadeIn = () => {
    setIsEntering((v) => !v);
    setTimeout(() => (setIsEntering((v) => !v), 700));
  };

  const react = () => {
    setIsReacting((v) => !v);
    setTimeout(() => (setIsReacting(true), 2000));
  };

  // these are ids of events that affect energy and pet mood - they will also contain a petId
  const actionEvents = [6, 7, 8, 9];

  // get petId from event
  const petId = getById(eventId, state.events).petId;
  // get pet object from pet state using petId
  const pet = adoptedPet(state.pets) || getById(petId, state.pets);
  // get pet mood from pet object
  const event = getById(eventId, state.events);
  // get sprite from petId
  const sprite = () => {
    if (pet.mood <= 4) {
      return pet.pet_sad;
    } else if (pet.mood <= 8 || eventId >= 29) {
      return pet.pet_neutral;
    } else {
      return pet.pet_happy;
    }
  };
  // console.log(sprite)

  // play with pet
  const performAction = (option) => (
    <button
      className="option"
      onClick={() => {
        react();
        setLastAction(pet[option.actionLabel]);
        // dispatch action to update pet mood and drain energy
        dispatch({
          type: ACTIONS.PERFORM_ACTION,
          value: {
            petId: petId,
            newMood: pet.mood + pet[option.actionLabel],
            nextEvent: option.nextEvent,
          },
        });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, move to next event
  const hasEnergy = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
      }}
    >
      {option.text}
    </button>
  );

  // onclick, send user to sleep event #4
  const needEnergy = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: 27 });
      }}
    >
      {option.text}
    </button>
  );

  const noEnergy = (option) => (
    <button
      className="option"
      onClick={() => {
        fadeIn();
        dispatch({ type: ACTIONS.NEXT_EVENT, value: option.nextEvent });
        dispatch({ type: ACTIONS.SLEEP });
      }}
    >
      {option.text}
    </button>
  );

  const options = JSON.parse(event.options).map((option) => {
    if (eventId === 27) {
      return noEnergy(option);
    } else if (energy === 0) {
      dispatch({ type: ACTIONS.NEXT_EVENT, value: 27 });
      // return needEnergy(option);
    } else if (option.actionLabel) {
      return performAction(option);
    } else if (
      (eventId === 24 || eventId === 25 || eventId === 26) &&
      pet.mood >= 15
    ) {
      dispatch({ type: ACTIONS.NEXT_EVENT, value: 29 });
    } else if (eventId === 31 && pet.id === 1) {
      dispatch({ type: ACTIONS.NEXT_EVENT, value: 32 });
    } else if (eventId === 31 && pet.id === 2) {
      dispatch({ type: ACTIONS.NEXT_EVENT, value: 33 });
    } else if (eventId === 31 && pet.id === 3) {
      dispatch({ type: ACTIONS.NEXT_EVENT, value: 34 });
    } else {
      return hasEnergy(option);
    }
  });

  return (
    <CSSTransition in={isEntering} duration={700} classNames="event-contents">
      <div className="event">
        <Reaction
          isReacting={isReacting}
          lastAction={lastAction}
          eventId={eventId}
        />
        {petId && <img className="sprite" src={sprite()} />}
        <div className="event-box">
          <p>Event: {eventId}</p>
          <p>{getById(eventId, state.events).dialogue}</p>
          <div className="options-container">{options}</div>
        </div>
      </div>
    </CSSTransition>
  );
}
