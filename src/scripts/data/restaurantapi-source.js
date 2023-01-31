import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();

    if (responseJson.error) {
      throw new Error(responseJson.message);
    }

    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    
    if (responseJson.error) {
        throw new Error(responseJson.message);
      }
  
      return responseJson.restaurant;
  }

  static async addReviewRestaurant(id, name, review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
      body: JSON.stringify({ id: id, name: name, review: review})
    });
    const responseJson = await response.json();
    
    if (responseJson.error) {
        throw new Error(responseJson.message);
      }
  
    return responseJson;
  }

  static async searchRestaurant(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    const responseJson = await response.json();
    
    if (responseJson.error) {
        throw new Error(responseJson.message);
      }
  
    return responseJson;
  }
}

export default RestaurantApi;