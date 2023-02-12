import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
    <img loading="lazy" class="restaurant-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.picturePath : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
    <div class="restaurant-item__header">
        <div tabindex="0" role="complementary" aria-label="Rating ${restaurant.rating}" id="restaurant-item__ratings-${restaurant.id}">
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
        </div>
        <div tabindex="0" aria-label="Location ${restaurant.city}"class="restaurant-item__location">
            <i class="fa-solid fa-map-location-dot"></i>
            <p class="restaurant-item__city">${restaurant.city}</p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h1 tabindex="0" aria-label="Restaurant Name ${restaurant.name}" class="restaurant-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h1>
        <p  tabindex="0" aria-label="Restaurant Description ${restaurant.description}" class="restaurant-item__description">${restaurant.description}</p>
    </div>
    </article>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <img class="restaurantDetail__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.picturePath : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
    <div class="restaurantDetail__info">
       <h1 tabindex="0" aria-label="Restaurant Name ${restaurant.name}" class="restaurantDetail__name">${restaurant.name}</h1>
       <div tabindex="0" role="complementary" aria-label="Rating ${restaurant.rating}" id="restaurant-item__ratings-${restaurant.id}">
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
        <i class="fa-regular fa-star"></i>
       </div>
       <div class="badges" id="badge-tag">
          <span class="badge"><i class="fa-solid fa-map-marker-alt fa-xl"></i> ${restaurant.city}</span>
       </div>
       <h2 tabindex="0" aria-label="Restaurant Address ${restaurant.address}" class="restaurantDetail__address">${restaurant.address}</h2>
       <p  tabindex="0" aria-label="Restaurant Description ${restaurant.description}" class="restaurantDetail__description">${restaurant.description}</p>
    </div>
`;

const createRestaurantMenus = () => `
<div class="restaurantDetail">
       <h1 tabindex="0" class="restaurantDetail__menu">Restaurant Menu</h1>
       <div class="menus">
          <div class="food__menus">
             <h1>Foods</h1>
             <ul id="food-lists"></ul>
          </div>
          <div class="vertical"></div>
          <div class="drink__menus">
             <h1>Drinks</h1>
             <ul id="drink-lists"></ul>
          </div>
       </div>
    </div>
`;

const createRestaurantReview = () => `
    <div class="restaurantDetail">
        <h1 tabindex="0" class="restaurantDetail__menu">Restaurant Review</h1>
        <div class="customerReviewContainer reviewSolo" id="customerReviewContainer"></div>
        <div id="reviewFormContainer"></div>
    </div>
`;

const createRestaurantReviewItem = (review) => `
    <div class="customerReview">
      <h1>${review.name}</h1>
      <h2>${review.date}</h2>
      <h3>${review.review}</h3>
    </div>
`;

const createRestaurantReviewForm = () => `
    <form id="restaurantForm" onsubmit='return false' class="reviewForm">
        <h1>Leave A Review</h1>
        <label class="required" for="name">Name:</label>
        <br>
        <input type="text" id="name" name="name" required>
        <br>
        <label class="required" for="review">Review:</label>
        <br>
        <textarea id="review" name="review" form="restaurantForm" required></textarea>
        <br>
        <input type="submit" value="Submit">
    </form>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa-regular fa-heart" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createRestaurantMenus,
  createRestaurantReview,
  createRestaurantReviewItem,
  createRestaurantReviewForm,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
