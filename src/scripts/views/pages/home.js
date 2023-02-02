import RestaurantApi from '../../data/restaurantapi-source';
import {createRestaurantItemTemplate} from '../tempates/template-creator';
import StarsInitiator from '../../utils/stars-initiator';

const Home = {
  async render() {
    return `
            <section class="content">
                <div class="restaurantList">
                    <h1 tabindex="0" class="restaurantList__label">Restaurant List</h1>
                    <div class="restaurants" id="restaurants">
                    </div>
                </div>
            </section>
        `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.listRestaurant();
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

export default Home;
