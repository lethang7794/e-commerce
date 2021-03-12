var seeder = require('mongoose-seed');

require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const BACKEND_URL = process.env.BACKEND_URL;

// Connect to MongoDB via Mongoose
seeder.connect(MONGODB_URI, function () {
  // Load Mongoose models
  seeder.loadModels(['./models/user.js', './models/product.js']);

  // Clear specified collections
  seeder.clearModels(['User', 'Product'], function () {
    // Callback to populate DB once collections have been cleared
    seeder.populateModels(data, function () {
      seeder.disconnect();
    });
  });
});

// Data array containing seed data - documents organized by Model
var data = [
  {
    /********************************** USER MODEL **************************************/
    model: 'User',
    documents: [
      {
        name: 'Admin',
        email: 'admin',
        password: 'admin',
      },
      {
        name: 'Harry',
        email: 'harry@potter.com',
        password: 'password',
      },
      {
        name: 'Ron',
        email: 'ron@weasley.com',
        password: 'password',
      },
      {
        name: 'Hermione',
        email: 'hermione@granger.com',
        password: 'password',
      },
    ],
  },
  {
    /********************************** PRODUCT MODEL **************************************/
    model: 'Product',
    documents: [
      {
        name: `Samsung Galaxy S21 Ultra 5G`,
        description: `Life is a series of moments. Why not make them beautiful? Take your photos and videos to an incredible new level with multiple, cutting-edge ways to capture life exactly as it is, or turn it into a work of art. With a sleek, new design, hyper-fast processing, and a battery that won't give out when you need it most, Samsung Galaxy S21 Ultra lets you get creative, stay connected, and do it all your way. Galaxy S21 Ultra is purposefully crafted so you don’t need to choose between video and photo. With a single tap, you can pull super-clear stills — up to 33MP — straight from high-resolution 8K video. Unleash your creativity by adding S Pen*, allowing you to edit with precision and bring your vision to life. Or if you’re looking to capture stunning photos, the 108MP camera feels like you’ve brought your own professional studio with you. Galaxy S21 Ultra, designed to be epic in every way. *S Pen sold separately.`,
        price: 999,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-4.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-5.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-6.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s21-ultra-5g-7.jpg`,
          },
        ],
      },
      {
        name: `Samsung Galaxy S10+ 512GB`,
        description: `Premium experience that exceeds any expectations. This Samsung Galaxy S10+ features a powerful pro-grade camera, intelligent battery, in-display ultrasonic fingerprint ID, and an immersive cinematic screen in a slim, balanced form. Galaxy S10 takes your Galaxy to the next level.`,
        price: 499,
        images: [
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s10-plus-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s10-plus-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s10-plus-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s10-plus-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-s10-plus-5.jpg` },
        ],
      },
      {
        name: `Apple iPhone 12 Pro Max 512GB`,
        description: `Apple iPhone 12 Pro Max was officially released on October 13, 2020. The phone is powered by the new Apple A14 Bionic processor. The smartphone comes with a 6.7 inches Super Retina XDR OLED capacitive touchscreen, 2778 x 1284 pixels resolution and HDR display, True Tone and Wide color (P3) gamut.`,
        price: 1199,
        images: [
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-1.webp` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-2.webp` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-3.webp` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-4.webp` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-5.webp` },
        ],
      },
      {
        name: `Apple iPhone SE 64GB`,
        description: `Premium experience that exceeds any expectations. This Samsung Galaxy S10 features a powerful pro-grade camera, intelligent battery, in-display ultrasonic fingerprint ID, and an immersive cinematic screen in a slim, balanced form. Galaxy S10 takes your Galaxy to the next level.`,
        price: 349,
        images: [
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-se-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-se-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-se-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-se-4.jpg` },
        ],
      },
      {
        name: `New Apple iPad Air (10.9-inch, Wi-Fi, 64GB)`,
        description: `Stunning 10.9-inch Liquid Retina display with True Tone and P3 wide color
        A14 Bionic chip with Neural Engine
        Touch ID for secure authentication and Apple Pay
        12MP back camera, 7MP FaceTime HD front camera
        Available in Silver, Space Gray, Rose Gold, Green, and Sky Blue
        Wide stereo audio
        Wi-Fi 6 (802.11ax)`,
        price: 549,
        images: [
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-6.jpg` },
          { imageUrl: `${BACKEND_URL}/images/new-ipad-air-7.jpg` },
        ],
      },
      {
        name: `Apple iPad Mini (Wi-Fi, 64GB)`,
        description: `7.9-inch Retina Display with True Tone and wide Color
        A12 Bionic chip
        Touch ID fingerprint sensor
        8MP back camera, 7MP FaceTime HD front camera
        Stereo speakers
        802.11ac Wi-Fi
        Up to 10 hours of battery life`,
        price: 449,
        images: [
          { imageUrl: `${BACKEND_URL}/images/apple-ipad-mini-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-ipad-mini-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-ipad-mini-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-ipad-mini-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-ipad-mini-5.jpg` },
        ],
      },
    ],
  },
];
