import RestaurantApi from '../../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../tempates/template-creator';

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
            restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
            
            // fa star add color logic
            const ratings = document.getElementById(`restaurant-item__ratings-${restaurant.id}`);
            const stars = ratings.getElementsByTagName('i');
            const rating = restaurant.rating
            for (let i = 0; i < rating; i++) {
              stars[i].classList.add('fa-solid');
            }
            
            // half star logic
            if (rating % 1 !== 0) {
              stars[Math.floor(rating)].classList.add('fa-star-half-alt');
            }
        });

        
    },
};

export default Home;
