import RestaurantApi from '../data/restaurantapi-source';
import { createRestaurantReviewForm } from '../views/tempates/template-creator';

// MUST CHANGE TO REVIEW BECAUSE REPRESENT REVIEW FORM !!!
// fix async error handler
const RestaurantForm = {
    async init({restaurntFormContainer, restaurantId}) {
        this._restaurntFormContainer = restaurntFormContainer;
        this._restaurantId = restaurantId;

        await this._renderForm();
    },

    async _renderForm() {
        if (sessionStorage.getItem('reloading')) {
            sessionStorage.removeItem('reloading');
            document.location.reload();
        }

        const id = this._restaurantId;
        
        this._restaurntFormContainer.innerHTML += createRestaurantReviewForm();

        const restaurantForm = document.querySelector('#restaurantForm');
        const name = document.querySelector('#name');
        const review = document.querySelector('#review');

        restaurantForm.addEventListener('submit', async (event) => {
            event.preventDefault()
            const result = await RestaurantApi.addReviewRestaurant(id, name.value, review.value);
            if (!result.error) {
                Swal.fire(
                    'Success Post',
                    'Please Wait 5 Second. The Page Will Reload Automatically',
                    'success'
                  )
                setTimeout(() => {
                    sessionStorage.setItem('reloading', 'true');
                    window.location.reload();
                }, 5000);
            }
            Swal.fire(
                'Failed Post',
                `Please Try Again, ${result.message}`,
                'error'
            )
        })
    }
}

export default RestaurantForm;
