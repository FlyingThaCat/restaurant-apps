const HeroImageHelper = {
  init({heroStyle}) {
    // if heroheader max-width is 600px then use hero-small.jpg
    if (window.matchMedia('(max-width: 600px)').matches) {
      this._imageLoader(heroStyle, 'images/hero-small.webp', 'images/hero-small.jpg');
    } else {
      this._imageLoader(heroStyle, 'images/hero-large.webp', 'images/hero-large.jpg');
    }
  },

  _imageLoader(heroStyle, src, callback) {
    const heroHeaderBackground = new Image();
    heroHeaderBackground.src = src;

    heroHeaderBackground.onload = function() {
      heroStyle.style.backgroundImage = `linear-gradient(to bottom, rgba(168, 158, 145, 0.63), rgba(168, 166, 162, 0.842)), url(${heroHeaderBackground.src})`;
    };
    heroHeaderBackground.onerror = function() {
      heroStyle.style.backgroundImage = `linear-gradient(to bottom, rgba(168, 158, 145, 0.63), rgba(168, 166, 162, 0.842)), url(${callback})`;
    };
  },
};

export default HeroImageHelper;
