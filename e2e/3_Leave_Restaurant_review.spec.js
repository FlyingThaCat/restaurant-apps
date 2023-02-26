const assert = require('assert');

Feature('Leave Restaurant Review');

let reviews;
const review = `This is a review ${new Date().getTime()}`;

Scenario('submitting review', async ({I}) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 5);
  I.seeElement('.restaurant-item__name a');

  I.click(locate('.restaurant-item__name a').first());

  I.waitForElement('.customerReview', 5);
  reviews = await I.grabNumberOfVisibleElements('.customerReview');

  I.waitForElement('#restaurantForm', 5);
  I.seeElement('#restaurantForm');

  I.fillField('#name', 'John Doe');
  I.fillField('#review', review);

  I.click('#submitReview');

  I.waitForElement('.swal2-container', 5);
  I.see('Success Post', '.swal2-title');

  I.wait(10);
});

Scenario('review should be displayed', async ({I}) => {
  I.amOnPage('/');

  I.waitForElement('.restaurant-item__name a', 5);
  I.seeElement('.restaurant-item__name a');
  I.click(locate('.restaurant-item__name a').first());

  I.waitForElement('.customerReview', 5);
  const reviewResult = await I.grabTextFrom(locate('.customerReview h3').at(reviews + 1));
  assert.strictEqual(reviewResult, review);
});
