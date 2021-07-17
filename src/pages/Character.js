import getData from "../utils/getData.js";
import getHash from "../utils/getHash.js";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const view = `
    <section class="character-card">
      <div class="character-card__img" style="background-image: url(${character.image})">
      </div>

      <div class="character-information">
	<div class="character-information__title">
	  <h2>Information</h2>
	</div>

	<div class="character-information__detail">
	  <div>
	    <h3>Name: ${character.name}</h3>
	  </div>
	  <div>
	    <h3>Location: ${character.location.name}</h3>
	  </div>
	  <div>
	    <h3>Status: ${character.status}</h3>
	  </div>
	  <div>
	    <h3>Origin: ${character.origin.name}</h3>
	  </div>
	  <div>
	    <h3>Specie: ${character.species}</h3>
	  </div>
	</div>
      </div>
    </section>
  `;

  return view;
};

export default Character;
