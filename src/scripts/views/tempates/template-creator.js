import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<article class="restaurant-item">
    <img class="restaurant-item__thumbnail" src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}" alt="${restaurant.name}">
    <div class="restaurant-item__header">
        <div tabindex="0" aria-label="Rating ${restaurant.rating}" id="restaurant-item__ratings-${restaurant.id}">
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
`

const createRestaurantDetailTemplate = (restaurant) => `

`

export {
    createRestaurantItemTemplate
};
