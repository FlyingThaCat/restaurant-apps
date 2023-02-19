import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT).then((response) => response.json());

    if (response.error) throw new Error(response.message);
    return response.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id)).then((response) => response.json());

    if (response.error) throw new Error(response.message);
    return response.restaurant;
  }

  static async addReviewRestaurant(id, name, review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({id: id, name: name, review: review}),
    }).then((response) => response.json());

    if (response.error) throw new Error(response.message);
    return response;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query)).then((response) => response.json());

    if (response.error) throw new Error(response.message);
    return response.restaurants;
  }
}

export default RestaurantApi;
