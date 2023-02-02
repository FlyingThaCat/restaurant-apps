import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import {createRestaurantItemTemplate} from '../tempates/template-creator';
import StarsInitiator from '../../utils/stars-initiator';

const Favorite = {
  async render() {
    return `
        <section class="content">
                <div class="restaurantList">
                    <h1 tabindex="0" class="restaurantList__label">Your Favorite Restaurant</h1>
                    <div class="restaurants" id="restaurants"></div>
                </div>
        </section>
        `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      const {id} = restaurant;
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      StarsInitiator.init({
        ratingsContainer: document.querySelector(`#restaurant-item__ratings-${id}`),
        restaurantRating: restaurant.rating,
      });
    });
  },
};

export default Favorite;
