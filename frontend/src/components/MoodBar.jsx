import "../styles/MoodBar.scss";
import { getBySpecies } from "../hooks/helpers";

export default function MoodBar({ pets, event }) {

  console.log("event:", event);
  console.log("pets:", pets);

  const pet = getBySpecies(event.species, pets);

  return (
    <div className="pet-stats">
      <div className="mood-bar-container">
        <div
          className="mood-bar"
          style={{ width: `${(pet.mood / 15) * 100}` + "%" }}
        ></div>
      </div>
    </div>
  );
}
