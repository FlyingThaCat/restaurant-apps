import RestaurantApi from '../data/restaurantapi-source';
import { createRestaurantItemTemplate } from '../views/tempates/template-creator';
import StarsInitiator from './stars-initiator';

const SearchInitiator = {
    async init({searchInput, searchButton}) {
        this._searchInput = searchInput;

        searchButton.addEventListener('click', async (event) => {
            await this._search(event, this._searchInput);
        });

        searchButton.addEventListener('keypress', async (event) => {
            if (e.key === 'Enter') {
                await this._search(event, this._searchInput);
            }
        })
    },

    async _search(event, searchInputs) {
        event.stopPropagation();
        await this._renderContainer();
        const searchInput = document.querySelector(searchInputs).value;
        const restaurantsContainer = document.querySelector('#restaurants');
        restaurantsContainer.innerHTML = '';

        if (searchInput.trim()) {
            const restaurants = await RestaurantApi.searchRestaurant(searchInput);
            if(restaurants.length === 0) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Restaurant not found!',
                });
            }
            restaurants.forEach((restaurant) => {
                const {id} = restaurant
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
                StarsInitiator.init({
                    ratingsContainer: document.querySelector(`#restaurant-item__ratings-${id}`),
                    restaurantRating: restaurant.rating,
                });
            });
        } else {
            const restaurants = await RestaurantApi.listRestaurant();
            restaurants.forEach((restaurant) => {
                const {id} = restaurant
                restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
                StarsInitiator.init({
                    ratingsContainer: document.querySelector(`#restaurant-item__ratings-${id}`),
                    restaurantRating: restaurant.rating,
                });
            });
        }
    },

    async _renderContainer() {
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
};

export default SearchInitiator;
