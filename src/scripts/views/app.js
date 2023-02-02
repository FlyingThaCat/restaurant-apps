import DrawerInitiator from '../utils/drawer-initiator';
import SearchInitiator from '../utils/search-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({button, drawer, hero, content, searchInput, searchButton}) {
    this._button = button;
    this._drawer = drawer;
    this._hero = hero;
    this._content = content;
    this._searchInput = searchInput;
    this._searchButton = searchButton;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      hero: this._hero,
      content: this._content,
    });
    SearchInitiator.init({
      searchInput: this._searchInput,
      searchButton: this._searchButton,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
};

export default App;
