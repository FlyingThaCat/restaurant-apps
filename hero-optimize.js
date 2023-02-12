const sharp = require('sharp');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public/images');

// convert hero image to 800px with -large.jpg prefix
sharp(`${target}/hero.jpg`)
    .resize(800)
    .toFile(path.resolve(__dirname, `${destination}/hero-large.jpg`));

// convert hero image to 480px with -small.jpg prefix
sharp(`${target}/hero.jpg`)
    .resize(480)
    .toFile(path.resolve(__dirname, `${destination}/hero-small.jpg`));


// convert hero image to webp without resize
sharp(`${target}/hero.jpg`)
    .webp()
    .toFile(path.resolve(__dirname, `${destination}/hero.webp`));

// convert hero image to 800px with -small.webp prefix
sharp(`${target}/hero.jpg`)
    .resize(800)
    .webp()
    .toFile(path.resolve(__dirname, `${destination}/hero-large.webp`));

// convert hero image to 480px with -small.webp prefix
sharp(`${target}/hero.jpg`)
    .resize(480)
    .webp()
    .toFile(path.resolve(__dirname, `${destination}/hero-small.webp`));
