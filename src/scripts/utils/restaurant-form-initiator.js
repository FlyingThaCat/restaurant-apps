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
        const id = this._restaurantId;
        
        this._restaurntFormContainer.innerHTML += createRestaurantReviewForm();

        const restaurantForm = document.querySelector('#restaurantForm');
        const name = document.querySelector('#name');
        const review = document.querySelector('#review');


        restaurantForm.addEventListener('submit', (event) => {
            event.preventDefault()
            RestaurantApi.addReviewRestaurant(id, name.value, review.value);
            Swal.fire(
                'Success Post',
                'Please Wait 30 Second. The Page Will Reload Automatically',
                'success'
              )
            setTimeout(function() {
                window.location.reload();
            }, 30000);
        })
    }
}

export default RestaurantForm;
