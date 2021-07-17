const Header = () => {
  const view = `
      <div class="container-logo">
	<a href=""><img class="container-logo__img" src="./assets/images/logo-image.png" alt="logo rick and morty">
	</a>
      </div>

      <div class="container-title">
	<img src="../assets/images/title-image.png" alt="">
      </div>

      <div class="container-API">
	<a href="https://rickandmortyapi.com/" class="container-API__API"><span>API</span></a>
      </div>
  `;
  return view;
};

export default Header;
