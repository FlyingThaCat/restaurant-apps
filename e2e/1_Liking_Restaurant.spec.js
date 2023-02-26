const assert = require('assert');

Feature('Liking Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurant', ({I}) => {
  I.seeElement('#searchInput');
  I.see('You have not added any favorite restaurant yet!', '.swal2-container');
});

Scenario('liking one restaurant', async ({I}) => {
  I.see('You have not added any favorite restaurant yet!', '.swal2-container');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 5);
  I.seeElement('.restaurant-item__name a');

  const firstRestaurant = locate('.restaurant-item__name a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');

  const likedRestaurantName = await I.grabTextFrom('.restaurant-item__name');
  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('Unliking one restaurant', async ({I}) => {
  I.see('You have not added any favorite restaurant yet!', '.swal2-container');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 5);
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());

  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item', 5);
  I.seeElement('.restaurant-item');

  // Unliking
  I.click(locate('.restaurant-item__name a').first());
  I.waitForElement('#likeButton', 5);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.see('You have not added any favorite restaurant yet!', '.swal2-container');
});
