const StarsInitiator = {
    init({ratingsContainer, restaurantRating}) {
        this._ratingsContainer = ratingsContainer;
        this._restaurantRating = restaurantRating;

        this._renderStars();
    },

    _renderStars() {
        const stars = this._ratingsContainer.getElementsByTagName('i');
        for (let i = 0; i < this._restaurantRating; i++) {
           stars[i].classList.add('fa-solid');
        }

        // half star logic
        if (this._restaurantRating % 1 !== 0) {
           stars[Math.floor(this._restaurantRating)].classList.add('fa-star-half-alt');
        }
    }
}

export default StarsInitiator;