import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
    static async listRestaurant() {
        const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
        const responseJson = await response.json();
        console.log(responseJson.results)
        return responseJson.restaurants;
    }

    static async detailRestaurant(id) {
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async addReviewRestaurant(id, name, review) {
        const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name: name,
                review: review
            })
        });
        return response.json();
    }

    static async searchRestaurant(query) {
        const response = await fetch(API_ENDPOINT.SEARCH(query));
        return response.json();
    }
}

export default RestaurantApi;