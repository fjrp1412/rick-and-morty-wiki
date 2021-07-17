//Tabnine::sem

import getData from "../utils/getData.js";

const Home = async () => {
  const characters = await getData();
  console.log(characters.results);
  const mainCharacters = characters.results.slice(0, 5);
  const view = `
      <section>
	<div class="container-background">
	  <img class="container-background__img" src="./assets/images/background-image.png" alt="background rick and morty img">
	</div>
      </section>

      <section class="main-characters">
	<div class="container-title">
	  <h2>Main Characters</h2>
	</div>
	<div class="characters-container">
	  <a href="#/${mainCharacters[0].id}/"> <img class="characters" src="${
    mainCharacters[0].image
  }" alt="${mainCharacters[0].name}"></a>
	  <a href="#/${mainCharacters[1].id}/"> <img class="characters" src="${
    mainCharacters[1].image
  }" alt="${mainCharacters[1].name}"></a>
	  <a href="#/${mainCharacters[2].id}/"> <img class="characters" src="${
    mainCharacters[2].image
  }" alt="${mainCharacters[2].name}"></a>
	  <a href="#/${mainCharacters[3].id}/"> <img class="characters" src="${
    mainCharacters[3].image
  }" alt="${mainCharacters[3].name}"></a>
	  <a href="#/${mainCharacters[4].id}/"> <img class="characters" src="${
    mainCharacters[4].image
  }" alt="${mainCharacters[4].name}"></a>
	</div>
      </section>

      <section class="all-characters">
	<div class="container-title">
	  <h2>All Characters</h2>
	</div>
	<div class="characters-container">
    ${characters.results
      .map(
        (character) =>
          `<a href="#/${character.id}/"><img class="characters" src="${character.image}" alt="${character.name}"></a>`
      )
      .join("")}
	</div>
      </section>
  `;

  console.log(characters.results);
  return view;
};

export default Home;
