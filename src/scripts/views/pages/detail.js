import UrlParser from "../../routes/url-parser";
import RestaurantApi from "../../data/restaurantapi-source";
import { createRestaurantDetailTemplate, createRestaurantMenus, createRestaurantReview, createRestaurantReviewItem } from '../tempates/template-creator';
import RestaurantForm from "../../utils/restaurant-form-initiator";

const Detail = {
    async render() {
        return `
        <section class="content">
          <div class="restaurantDetail">
            <h1 tabindex="0" class="restaurantDetail__label">Restaurant List</h1>
            <div id="restaurantDetail__content" class="restaurantDetail__content"></div>
          </div>
        </section>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantApi.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurantDetail__content');
      const restaurantContent = document.querySelector(".restaurantDetail");
      restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

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

      // badges
      const badgesContainer = document.querySelector('#badge-tag');
      restaurant.categories.forEach((category) => {
        const span = document.createElement('span');
        span.classList.add('badge')
        span.appendChild(document.createTextNode(category.name))
        badgesContainer.appendChild(span);
      });

      // restarant menu
      restaurantContent.innerHTML += createRestaurantMenus()
      
      // restaurant foods
      const ulFood = document.getElementById("food-lists");
      restaurant.menus.foods.forEach((food) => {
        const liFood = document.createElement('li');
        liFood.appendChild(document.createTextNode(food.name));
        ulFood.appendChild(liFood)
      })

      // restaurant drinks
      const ulDrink = document.getElementById("drink-lists");
      restaurant.menus.drinks.forEach((drink) => {
        const liDrink = document.createElement('li');
        liDrink.appendChild(document.createTextNode(drink.name));
        ulDrink.appendChild(liDrink)
      })

      // restarant review
      restaurantContent.innerHTML += createRestaurantReview()
      const reviewContainer = document.querySelector('.customerReviewContainer')
      // if (!restaurant.customerReviews.length === 1){
      //   document.getElementById("#customerReviewContainer").classList.add("reviewMany")
      // }
      restaurant.customerReviews.forEach((customer) => {
        reviewContainer.innerHTML += createRestaurantReviewItem(customer)
      })

      RestaurantForm.init({
        restaurntFormContainer: document.querySelector(".restaurantDetail"),
        restaurantId: restaurant.id
      })
    }
}

export default Detail;