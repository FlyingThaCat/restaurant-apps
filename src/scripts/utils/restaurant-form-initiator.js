
import { createRestaurantReviewForm } from '../views/tempates/template-creator';

const RestaurantForm = {
    async init({restaurntFormContainer, restaurantId}) {
        this._restaurntFormContainer = restaurntFormContainer;
        this._restaurantId = restaurantId;

        await this._renderForm();
    },

    async _renderForm() {
        const id = this._restaurantId;
        
        this._restaurntFormContainer.innerHTML += createRestaurantReviewForm();
    }
}

export default RestaurantForm;
