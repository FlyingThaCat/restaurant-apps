import {openDB} from 'idb';
import CONFIG from '../globals/config';

const {DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME} = CONFIG;
const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, {keyPath: 'id'});
  },
});

const FavoriteRestaurantIdb = {
  getRestaurant: async (id) => (await dbPromise).get(OBJECT_STORE_NAME, id),
  getAllRestaurants: async () => (await dbPromise).getAll(OBJECT_STORE_NAME),
  putRestaurant: async (restaurant) => (await dbPromise).put(OBJECT_STORE_NAME, restaurant),
  deleteRestaurant: async (id) => (await dbPromise).delete(OBJECT_STORE_NAME, id),
};

export default FavoriteRestaurantIdb;
