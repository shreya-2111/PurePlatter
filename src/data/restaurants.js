export const restaurants = [
  {
    id: 'house-of-biryani',
    slug: 'house-of-biryani',
    name: 'Garden Biryani House',
    cuisine: ['Biryani', 'North Indian'],
    rating: 4.5,
    deliveryTime: '28 min',
    priceForTwo: 650,
    discount: '50% OFF up to Rs100',
    veg: true,
    mode: 'Delivery',
    location: 'Prahlad Nagar',
    image:
      'https://images.unsplash.com/photo-1596797038530-2c107aa01c41?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1596797038530-2c107aa01c41?auto=format&fit=crop&w=1200&q=60',
    description:
      'Fragrant veg dum biryani bowls, paneer starters, and comforting meal boxes with generous spice and aroma.',
    collectionIds: ['trending', 'legends'],
    topBrand: true,
  },
  {
    id: 'saffron-table',
    slug: 'saffron-table',
    name: 'Saffron Table',
    cuisine: ['Gujarati', 'Thali'],
    rating: 4.7,
    deliveryTime: '24 min',
    priceForTwo: 500,
    discount: 'Free dessert on orders above Rs499',
    veg: true,
    mode: 'Dining Out',
    location: 'Satellite',
    image:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=60',
    description:
      'A polished vegetarian address serving vibrant thalis, comfort curries, and festive Gujarati staples.',
    collectionIds: ['legends'],
    topBrand: true,
  },
  {
    id: 'smoke-street-pizza',
    slug: 'smoke-street-pizza',
    name: 'Smoke Street Pizza',
    cuisine: ['Pizza', 'Italian'],
    rating: 4.3,
    deliveryTime: '31 min',
    priceForTwo: 850,
    discount: 'Buy 1 Get 1 on medium pizzas',
    veg: true,
    mode: 'Delivery',
    location: 'Bodakdev',
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=60',
    description:
      'Wood-fired crusts, smoked veggie toppings, and loaded garlic knots made for movie nights and group orders.',
    collectionIds: ['trending'],
    topBrand: true,
  },
  {
    id: 'green-leaf-cafe',
    slug: 'green-leaf-cafe',
    name: 'Green Leaf Cafe',
    cuisine: ['Salads', 'Healthy Food'],
    rating: 4.4,
    deliveryTime: '22 min',
    priceForTwo: 550,
    discount: '20% OFF on healthy bowls',
    veg: true,
    mode: 'Cafe Dining',
    location: 'Vastrapur',
    image:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1200&q=60',
    description:
      'Fresh salads, smoothie jars, sourdough toasts, and protein-forward plates with a breezy cafe mood.',
    collectionIds: ['trending'],
    topBrand: false,
  },
  {
    id: 'tandoor-social',
    slug: 'tandoor-social',
    name: 'Tandoor Terrace',
    cuisine: ['North Indian', 'Tandoori'],
    rating: 4.6,
    deliveryTime: '33 min',
    priceForTwo: 900,
    discount: '30% OFF on family meals',
    veg: true,
    mode: 'Dining Out',
    location: 'Sindhu Bhavan Road',
    image:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1200&q=60',
    description:
      'A lively grill house with smoky paneer platters, signature gravies, and upbeat dine-in energy.',
    collectionIds: ['rooftop', 'legends'],
    topBrand: true,
  },
  {
    id: 'bao-beats',
    slug: 'bao-beats',
    name: 'Bao Beats',
    cuisine: ['Asian', 'Chinese'],
    rating: 4.2,
    deliveryTime: '29 min',
    priceForTwo: 700,
    discount: 'Flat Rs125 OFF',
    veg: true,
    mode: 'Delivery',
    location: 'Navrangpura',
    image:
      'https://images.unsplash.com/photo-1617622141573-0ea7948db354?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1617622141573-0ea7948db354?auto=format&fit=crop&w=1200&q=60',
    description:
      'Street-style noodles, bao buns, dim sums, and bold sauces packed for quick vegetarian comfort meals.',
    collectionIds: ['trending'],
    topBrand: false,
  },
  {
    id: 'cocoa-melt',
    slug: 'cocoa-melt',
    name: 'Cocoa Crate',
    cuisine: ['Desserts', 'Bakery'],
    rating: 4.8,
    deliveryTime: '18 min',
    priceForTwo: 400,
    discount: 'Free brownie with premium shakes',
    veg: true,
    mode: 'Delivery',
    location: 'CG Road',
    image:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=1200&q=60',
    description:
      'Craft brownies, layered pastries, and dessert jars built for gifting, cravings, and midnight orders.',
    collectionIds: ['trending', 'legends'],
    topBrand: true,
  },
  {
    id: 'coastal-curry',
    slug: 'coastal-curry',
    name: 'Coconut Curry Co.',
    cuisine: ['South Indian', 'Coastal Veg'],
    rating: 4.1,
    deliveryTime: '36 min',
    priceForTwo: 950,
    discount: '15% OFF on combo meals',
    veg: true,
    mode: 'Dining Out',
    location: 'Thaltej',
    image:
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=1200&q=60',
    description:
      'Tangy curries, appams, podi vegetables, and coastal spice blends served with a refined plated finish.',
    collectionIds: ['rooftop'],
    topBrand: false,
  },
  {
    id: 'midnight-brewhouse',
    slug: 'midnight-brewhouse',
    name: 'Moonlight Veg Cafe',
    cuisine: ['Continental', 'Cafe'],
    rating: 4.5,
    deliveryTime: '27 min',
    priceForTwo: 780,
    discount: 'Dessert duo from Rs299',
    veg: true,
    mode: 'Cafe Dining',
    location: 'SG Highway',
    image:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=60',
    coverImage:
      'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=1200&q=60',
    description:
      'A cozy vegetarian cafe with truffle toasts, creamy pastas, and slow coffee for relaxed evening catchups.',
    collectionIds: ['rooftop'],
    topBrand: true,
  },
];

export const cuisines = Array.from(
  new Set(restaurants.flatMap((restaurant) => restaurant.cuisine)),
).sort((left, right) => left.localeCompare(right));
