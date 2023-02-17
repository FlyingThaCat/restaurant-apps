import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/restaurantapi-source';
import {createRestaurantDetailTemplate, createRestaurantDetailSkeletonTemplate, createRestaurantMenus, createRestaurantReview, createRestaurantReviewItem} from '../tempates/template-creator';
import ReviewForm from '../../utils/review-form-initiator';
import StarsInitiator from '../../utils/stars-initiator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

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
    const restaurantContainer = document.querySelector('#restaurantDetail__content');
    const restaurantContent = document.querySelector('.restaurantDetail');
    restaurantContainer.innerHTML = createRestaurantDetailSkeletonTemplate();

    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detailRestaurant(url.id);
    // if window max width is 600px, then use small image
    if (window.matchMedia('(max-width: 600px)').matches) {
      restaurant.picturePath = `small/${restaurant.pictureId}`;
    } else {
      restaurant.picturePath = `medium/${restaurant.pictureId}`;
    }
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: restaurant,
    });

    StarsInitiator.init({
      ratingsContainer: document.querySelector(`#restaurant-item__ratings-${restaurant.id}`),
      restaurantRating: restaurant.rating,
    });

    // badges
    const badgesContainer = document.querySelector('#badge-tag');
    restaurant.categories.forEach((category) => {
      const span = document.createElement('span');
      span.classList.add('badge');
      span.appendChild(document.createTextNode(category.name));
      badgesContainer.appendChild(span);
    });

    // restarant menu
    restaurantContent.innerHTML += createRestaurantMenus();

    // restaurant foods
    const ulFood = document.getElementById('food-lists');
    restaurant.menus.foods.forEach((food) => {
      const liFood = document.createElement('li');
      liFood.appendChild(document.createTextNode(food.name));
      ulFood.appendChild(liFood);
    });

    // restaurant drinks
    const ulDrink = document.getElementById('drink-lists');
    restaurant.menus.drinks.forEach((drink) => {
      const liDrink = document.createElement('li');
      liDrink.appendChild(document.createTextNode(drink.name));
      ulDrink.appendChild(liDrink);
    });

    // restarant review
    restaurantContent.innerHTML += createRestaurantReview();
    const reviewContainer = document.querySelector('.customerReviewContainer');
    if (restaurant.customerReviews.length > 1) {
      const container = document.querySelector('#customerReviewContainer');
      container.classList.remove('reviewSolo');
      container.classList.add('reviewMany');
    }
    restaurant.customerReviews.forEach((customer) => {
      reviewContainer.innerHTML += createRestaurantReviewItem(customer);
    });

    ReviewForm.init({
      reviewFormContainer: document.querySelector('.restaurantDetail'),
      restaurantId: restaurant.id,
    });
  },
};

export default Detail;
