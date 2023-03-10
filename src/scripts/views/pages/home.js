import RestaurantApi from '../../data/restaurantapi-source';
import StarsInitiator from '../../utils/stars-initiator';
import detectSpace from '../../utils/detect-space';
import {
  createRestaurantItemTemplate,
  createRestaurantItemSkeletonTemplate,
} from '../tempates/template-creator';

const Home = {
  async render() {
    return `
            <section class="content">
                <div class="restaurantList">
                    <h1 tabindex="0" class="restaurantList__label">Restaurant List</h1>
                    <div class="restaurants" id="restaurants"></div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('#restaurants');
    for (let i = 0; i < 10; i++) {
      restaurantsContainer.innerHTML += createRestaurantItemSkeletonTemplate();
    }

    const restaurants = await RestaurantApi.listRestaurant();
    restaurantsContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      const {id} = restaurant;
      restaurant.description = `${restaurant.description.slice(0, 300)}`;
      restaurant.description = `${detectSpace(restaurant.description)}...`;
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      StarsInitiator.init({
        ratingsContainer: document.querySelector(`#restaurant-item__ratings-${id}`),
        restaurantRating: restaurant.rating,
      });
    });
  },
};

export default Home;
