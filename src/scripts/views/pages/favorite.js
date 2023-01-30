import FavoriteRestaurantIdb from "../../data/favorite-restaurant-idb";
import { createRestaurantItemTemplate } from "../tempates/template-creator";

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
        const restarants = await FavoriteRestaurantIdb.getAllRestaurants();
        const restarantsContainer = document.querySelector('#restaurants');

        restarants.forEach((restaurant) => {
            restarantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);

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

export default Favorite;
