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
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-iphone-12-pro-max-5.jpg` },
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
      {
        name: `Apple MacBook Air 2020`,
        description: `Apple MacBook Air 2020`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/apple-macbook-air-2020-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-macbook-air-2020-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-macbook-air-2020-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-macbook-air-2020-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/apple-macbook-air-2020-5.jpg` },
        ],
      },
      {
        name: `Dell XPS 13 7390`,
        description: `Dell XPS 13 7390`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/Dell-XPS-13-7390-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Dell-XPS-13-7390-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Dell-XPS-13-7390-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Dell-XPS-13-7390-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Dell-XPS-13-7390-5.jpg` },
        ],
      },
      {
        name: `HP Elite Dragonfly`,
        description: `HP Elite Dragonfly`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/HP-Elite-Dragonfly-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/HP-Elite-Dragonfly-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/HP-Elite-Dragonfly-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/HP-Elite-Dragonfly-4.jpg` },
        ],
      },
      {
        name: `Lenovo Thinkpad X1 Carbon Gen 8`,
        description: `Lenovo Thinkpad X1 Carbon Gen 8`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-4.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-5.png`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-6.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-7.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-8.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Carbon-Gen-8-9.jpg`,
          },
        ],
      },
      {
        name: `Lenovo Thinkpad X1 Extreme`,
        description: `Lenovo Thinkpad X1 Extreme`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Extreme-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Extreme-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Extreme-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Lenovo-Thinkpad-X1-Extreme-4.jpg`,
          },
        ],
      },
      {
        name: `Microsoft Surface Duo 128GB`,
        description: `Microsoft Surface Duo 128GB`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-4.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-5.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-6.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-7.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/Microsoft-Surface-Duo-128GB-8.jpg`,
          },
        ],
      },
      {
        name: `Razer Blade 15`,
        description: `Razer Blade 15`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-6.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Razer-Blade-15-7.jpg` },
        ],
      },
      {
        name: `Surface Book 3`,
        description: `Surface Book 3`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-6.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Surface-Book-3-7.jpg` },
        ],
      },
      {
        name: `Samsung Galaxy Fold 2`,
        description: `Samsung Galaxy Fold 2`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/samsung-galaxy-fold-2-6.jpg` },
        ],
      },
      {
        name: `Samsung Galaxy Z Flip`,
        description: `Samsung Galaxy Z Flip`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/Samsung-Galaxy-Z-Flip-6.jpg` },
        ],
      },
      {
        name: `Vaio Z`,
        description: `Vaio Z`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/vaio-z-1.png` },
          { imageUrl: `${BACKEND_URL}/images/vaio-z-2.png` },
          { imageUrl: `${BACKEND_URL}/images/vaio-z-3.png` },
          { imageUrl: `${BACKEND_URL}/images/vaio-z-4.png` },
          { imageUrl: `${BACKEND_URL}/images/vaio-z-5.png` },
        ],
      },
      {
        name: `Apple Macbook Pro 13 inch Chip M1`,
        description: `Apple Macbook Pro 13 inch Chip M1`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-4.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-5.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/apple-macbook-pro-13-inch-chip-m1-6.jpg`,
          },
        ],
      },
      {
        name: `A super super super super super super super super super super long name`,
        description: `This product has a super long name`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-1.jpg`,
          },
        ],
      },
      {
        name: `LG Gram 15`,
        description: `LG Gram 15`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/lg-gram-15-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-15-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-15-3.jpg` },
        ],
      },
      {
        name: `LG Gram 17`,
        description: `LG Gram 17`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/lg-gram-17-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-17-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-17-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-17-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/lg-gram-17-5.jpg` },
        ],
      },

      {
        name: `Microsoft Surface 7`,
        description: `Microsoft Surface 7`,
        price: 1,
        images: [
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-1.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-2.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-3.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-4.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-5.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-6.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-7.jpg` },
          { imageUrl: `${BACKEND_URL}/images/microsoft-surface-7-8.jpg` },
        ],
      },
      {
        name: `Microsoft Surface Laptop 2`,
        description: `Microsoft Surface Laptop 2`,
        price: 1,
        images: [
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-1.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-2.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-3.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-4.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-5.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-6.jpg`,
          },
          {
            imageUrl: `${BACKEND_URL}/images/microsoft-surface-laptop-2-7.jpg`,
          },
        ],
      },
    ],
  },
];
