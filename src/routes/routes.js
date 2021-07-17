import Home from "../pages/Home.js";
import Header from "../templates/Header.js";
import Character from "../pages/Character.js";
import getHash from "../utils/getHash.js";
import resolveRoutes from "../utils/resolveRoutes.js";

const routes = {
  "/": Home,
  "/:id": Character,
};

const router = async () => {
  const header = null || document.getElementById("header");
  const content = null || document.getElementById("content");
  header.innerHTML = Header();

  let hash = getHash();
  let route = await resolveRoutes(hash);
  let render = routes[route] ? routes[route] : "Marico, cagaste";

  content.innerHTML = await render();
};

export default router;
