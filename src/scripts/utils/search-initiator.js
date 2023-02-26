import RestaurantApi from '../data/restaurantapi-source';
import detectSpace from './detect-space';
import {createRestaurantItemTemplate, createRestaurantItemSkeletonTemplate} from '../views/tempates/template-creator';
import StarsInitiator from './stars-initiator';
import FavoriteRestaurantIdb from '../data/favorite-restaurant-idb';

const SearchInitiator = {
  async init({searchInput, searchButton}) {
    this._searchInput = searchInput;

    searchButton.addEventListener('click', async (event) => await this._search(event, this._searchInput));
    searchButton.addEventListener('keypress', async (event) => {
      if (e.key === 'Enter') {
        await this._search(event, this._searchInput);
      }
    });
  },

  // render restaurant container function
  async renderRestaurant(restaurants, restaurantsContainer) {
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const {id} = restaurant;
      restaurant.description = detectSpace(restaurant.description);
      restaurant.description = `${restaurant.description.slice(0, 300)}`;
      restaurant.description = `${detectSpace(restaurant.description)}...`;
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      StarsInitiator.init({
        ratingsContainer: document.querySelector(`#restaurant-item__ratings-${id}`),
        restaurantRating: restaurant.rating,
      });
    });
  },

  async _search(event, searchInputs) {
    event.stopPropagation();
    await this._renderContainer();
    const searchInput = document.querySelector(searchInputs).value;
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurantsContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
      restaurantsContainer.innerHTML += createRestaurantItemSkeletonTemplate();
    }

    if (window.location.hash === '#/' || window.location.hash === '') {
      if (searchInput.trim()) {
        const restaurants = await RestaurantApi.searchRestaurant(searchInput);
        if (restaurants.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Restaurant not found!',
          });
        }
        await this.renderRestaurant(restaurants, restaurantsContainer);
      } else {
        const restaurantsContainer = document.querySelector('#restaurants');
        for (let i = 0; i < 10; i++) {
          restaurantsContainer.innerHTML += createRestaurantItemSkeletonTemplate();
        }

        const restaurants = await RestaurantApi.listRestaurant();
        await this.renderRestaurant(restaurants, restaurantsContainer);
      }
    } else {
      if (searchInput.trim()) {
        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        const searchResult = restaurants.filter((restaurant) => restaurant.name.toLowerCase().includes(searchInput.toLowerCase()));
        if (searchResult.length === 0) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Restaurant not found!',
          });
        }
        await this.renderRestaurant(searchResult, restaurantsContainer);
      } else {
        const restaurantsContainer = document.querySelector('#restaurants');
        for (let i = 0; i < 10; i++) {
          restaurantsContainer.innerHTML += createRestaurantItemSkeletonTemplate();
        }

        const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
        await this.renderRestaurant(restaurants, restaurantsContainer);
      }
    }
  },

  async _renderContainer() {
    return `
    <section class="content">
      <div class="restaurantList">
        <h1 tabindex="0" class="restaurantList__label">Your Favorite Restaurant</h1>
        <div class="restaurants" id="restaurants"></div>
      </div>
    </section>
        `;
  },
};

export default SearchInitiator;
