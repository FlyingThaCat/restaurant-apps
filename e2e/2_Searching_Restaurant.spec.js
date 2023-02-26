const assert = require('assert');

Feature('searching Restaurant');

Before(({I}) => {
  I.amOnPage('/#/favorite');
});

Scenario('searching restaurants by input', async ({I}) => {
  I.see('You have not added any favorite restaurant yet!', '.swal2-container');

  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 5);
  I.seeElement('.restaurant-item__name a');

  const names = [];

  for (let i = 1; i <= 4; i++) {
    I.waitForElement('.restaurant-item__name a', 5);
    I.click(locate('.restaurant-item__name a').at(i));
    I.waitForElement('#likeButton', 5);
    I.seeElement('#likeButton');
    I.click('#likeButton');
    names.push(await I.grabTextFrom('.restaurantDetail__name'));
    I.amOnPage('/');
  }

  I.amOnPage('/#/favorite');
  I.seeElement('#searchInput');

  const searchQuery = names[1].substring(1, 3);
  const matchingRestaurants = names.filter((name) => name.indexOf(searchQuery) !== -1);

  I.fillField('#searchInput', searchQuery);
  I.pressKey('Enter');

  I.waitForElement('.restaurant-item', 5);

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.restaurant-item');
  assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

  matchingRestaurants.forEach(async (name, index) => {
    const visibleName = await I.grabTextFrom(locate('.restaurant-item__name').at(index + 1));
    assert.strictEqual(name, visibleName);
  });
});
