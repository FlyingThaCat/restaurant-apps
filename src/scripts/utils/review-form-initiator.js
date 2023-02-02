import RestaurantApi from '../data/restaurantapi-source';
import {createRestaurantReviewForm} from '../views/tempates/template-creator';

const ReviewForm = {
  async init({reviewFormContainer, restaurantId}) {
    this._reviewFormContainer = reviewFormContainer;
    this._restaurantId = restaurantId;

    await this._renderForm();
  },

  async _renderForm() {
    if (sessionStorage.getItem('reloading')) {
      sessionStorage.removeItem('reloading');
      document.location.reload();
    }

    const id = this._restaurantId;
    this._reviewFormContainer.innerHTML += createRestaurantReviewForm();

    const reviewForm = document.querySelector('#restaurantForm');
    const name = document.querySelector('#name');
    const review = document.querySelector('#review');

    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      try {
        await RestaurantApi.addReviewRestaurant(id, name.value, review.value);
        Swal.fire(
            'Success Post',
            'Please Wait 5 Second. The Page Will Reload Automatically',
            'success',
        );
        setTimeout(() => {
          sessionStorage.setItem('reloading', 'true');
          window.location.reload();
        }, 5000);
      } catch (error) {
        Swal.fire(
            'Failed Post',
            `Please Try Again, ${error.message}`,
            'error',
        );
      }
    });
  },
};

export default ReviewForm;
