import DATA from '../DATA.json';

const { restaurants } = DATA; // destructuring
const restaurantsContainer = document.querySelector('#restaurants');

restaurants.forEach(restaurant => {
    const restaurantElement = document.createElement('article');
    restaurantElement.classList.add('restaurant-item');
    restaurantElement.innerHTML = `
        <img class="restaurant-item__thumbnail" src="${restaurant.pictureId}" alt="${restaurant.name}">
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
            <h1 tabindex="0" aria-label="Restaurant Name ${restaurant.name}" class="restaurant-item__name">${restaurant.name}</h1>
            <p  tabindex="0" aria-label="Restaurant Description ${restaurant.description}" class="restaurant-item__description">${restaurant.description}</p>
        </div>
    `;
    restaurantsContainer.appendChild(restaurantElement);
    
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