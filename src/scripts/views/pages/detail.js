import UrlParser from "../../routes/url-parser";
import RestaurantApi from "../../data/restaurantapi-source";
// import {}

const Detail = {
    async render() {
        return `
          <section class="content">
            <div class="restaurantDetail">
              <h1 tabindex="0" class="restaurantDetail__label">Restaurant List</h1>
              <div id="restaurantDetail__content" class="restaurantDetail__content">
              <!-- CREATIVITY GOES HERE -->
              <img class="restaurantDetail__thumbnail" src="https://restaurant-api.dicoding.dev/images/medium/14" alt="Melting Pot">
              <div class="restaurantDetail__info">
                <h1 tabindex="0" aria-label="Restaurant Name Melting Pot" class="restaurantDetail__name">Melting Pot</h1>
                <div tabindex="0" aria-label="Rating 4.2" id="restaurant-item__ratings-rqdv5juczeskfw1e867">
                  <i class="fa-regular fa-star fa-solid"></i>
                  <i class="fa-regular fa-star fa-solid"></i>
                  <i class="fa-regular fa-star fa-solid"></i>
                  <i class="fa-regular fa-star fa-solid"></i>
                  <i class="fa-regular fa-star fa-solid fa-star-half-alt"></i>
                </div>
                <div class="badges">
                  <span class="badge"><i class="fa-solid fa-map-marker-alt fa-xl"></i> Medan</span>
                  <span class="badge">Italia</span>
                  <span class="badge">Modern</span>
                </div>
                <h2 class="restaurantDetail__address">Jln. Pandeglang no 19</h2>
                <h3 class="restaurantDetail__description">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</h3>
              </div>
              </div>
              </div>
            <div class="restaurantDetail">
              <h1 tabindex="0" class="restaurantDetail__menu">Restaurant Menu</h1>
              <div class="menus">
                <div class="food__menus">
                  <h1>Foods</h1>
                  <ul>
                    <li>Paket rosemary</li>
                    <li>Toastie salmon</li>
                    <li> Bebek crepes</li>
                    <li>Salad lengkeng</li>
                  </ul>
                </div>
                <div class="vertical"></div>
                <div class="drink__menus">
                  <h1>Drinks</h1>
                  <ul>
                    <li>Es krim</li>
                    <li>Sirup</li>
                    <li>Jus apel</li>
                    <li>Jus jeruk</li>
                    <li>Coklat panas</li>
                    <li>Air</li>
                    <li>Es kopi</li>
                    <li>Jus alpukat</li>
                    <li>Jus mangga</li>
                    <li>Teh manis</li>
                    <li>Kopi espresso</li>
                    <li>Minuman soda</li>
                    <li>Jus tomat</li>
                    </ul>
                </div>
              </div>
              </div>
              <div class="restaurantDetail">
                <h1 tabindex="0" class="restaurantDetail__menu">Restaurant Review</h1>
                <div class="customerReviewContainer">
                  <div class="customerReview">
                    <h1>Ahmad</h1>
                    <h2>13 November 2019</h2>
                    <h3>Tidak rekomendasi untuk pelajar!</h3>
                  </div>
                  <div class="customerReview">
                    <h1>Said</h1>
                    <h2>27 Januari 2023</h2>
                    <h3>Disini sangat menyenangkan</h3>
                  </div>
                  <div class="customerReview">
                    <h1>ALi</h1>
                    <h2>27 Januari 2023</h2>
                    <h3>Mantap</h3>
                  </div>
                  </div>
                  <div class="reviewForm">
                    <h1>Leave A Review</h1>
                    <form>
                      <label for="name">Name:</label><br>
                      <input type="text" id="name" name="name"><br>
                      <label for="review">Review:</label><br>
                      <input type="text" id="review" name="review"><br>
                      <input type="submit" value="Submit">
                    </form>
                  </div>
              </div>
              <!-- CREATIVITY ENDS HERE -->
          </section>
          <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender() {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restaurant = await RestaurantApi.detailRestaurant(url.id);
      const restaurantContainer = document.querySelector('#restaurant');
      // restaurantContainer.innerHTML = create
      console.log(restaurant)
    }
}

export default Detail;