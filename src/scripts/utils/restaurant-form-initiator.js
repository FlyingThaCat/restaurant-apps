
import { createRestaurantReviewForm } from '../views/tempates/template-creator';

// MUST CHANGE TO REVIEW BECAUSE REPRESENT REVIEW FORM !!!

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
            event.preventDefault();
            window.alert(`MEOW!!, ${name.value} Say ${review.value} On This Restaurant Id ${id}`)
        })
    }
}

export default RestaurantForm;
