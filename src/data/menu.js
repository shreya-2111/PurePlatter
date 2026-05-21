const createMenu = (restaurantId, items) =>
  items.map((item, index) => ({
    id: `${restaurantId}-${index + 1}`,
    restaurantId,
    ...item,
  }));

export const menu = {
  'house-of-biryani': createMenu('house-of-biryani', [
    {
      name: 'Lucknowi Veg Biryani',
      description: 'Long-grain rice, saffron notes, roasted vegetables, and mint raita.',
      price: 329,
      image:
        'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Bestseller',
    },
    {
      name: 'Soya Galouti Sliders',
      description: 'Soft mini buns layered with smoky soya galouti kebabs.',
      price: 289,
      image:
        'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Chef Special',
    },
    {
      name: 'Paneer Tikka Rice Bowl',
      description: 'Charred paneer, spiced rice, onions, and cooling dip.',
      price: 249,
      image:
        'https://images.unsplash.com/photo-1596797038530-2c107aa01c41?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Popular',
    },
    {
      name: 'Double Ka Meetha Jar',
      description: 'Warm bread pudding with reduced milk and toasted nuts.',
      price: 159,
      image:
        'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Dessert',
    },
  ]),
  'saffron-table': createMenu('saffron-table', [
    {
      name: 'Royal Gujarati Thali',
      description: 'Rotli, farsan, dal, kadhi, sabzis, rice, and dessert.',
      price: 349,
      image:
        'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Signature',
    },
    {
      name: 'Handvo Bites',
      description: 'Crisp lentil cake with garlic chutney and mustard tempering.',
      price: 189,
      image:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Snack',
    },
    {
      name: 'Sev Tameta Nu Shaak',
      description: 'Sweet-spicy tomato curry finished with crunchy sev.',
      price: 219,
      image:
        'https://images.unsplash.com/photo-1596450514659-0fbf7e5d0d34?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Comfort',
    },
    {
      name: 'Shrikhand Cheesecake',
      description: 'Creamy fusion dessert with cardamom and saffron.',
      price: 179,
      image:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Fusion',
    },
  ]),
  'smoke-street-pizza': createMenu('smoke-street-pizza', [
    {
      name: 'Smoked Burrata Pizza',
      description: 'San Marzano sauce, burrata, basil oil, and fire-blistered crust.',
      price: 429,
      image:
        'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Bestseller',
    },
    {
      name: 'Roasted Veg Heatwave',
      description: 'Loaded peppers, jalapenos, olives, and hot honey drizzle.',
      price: 449,
      image:
        'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Spicy',
    },
    {
      name: 'Truffle Garlic Knots',
      description: 'Pillowy knots with garlic butter, parmesan, and truffle dust.',
      price: 229,
      image:
        'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Side',
    },
    {
      name: 'Tiramisu Jar',
      description: 'Coffee-soaked sponge and mascarpone layered to-go.',
      price: 189,
      image:
        'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Dessert',
    },
  ]),
  'green-leaf-cafe': createMenu('green-leaf-cafe', [
    {
      name: 'Falafel Rainbow Bowl',
      description: 'Hummus, couscous, greens, pickled veggies, and tahini dressing.',
      price: 289,
      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Healthy',
    },
    {
      name: 'Avocado Sourdough Toast',
      description: 'Seeded sourdough with avocado mash, feta, and chili oil.',
      price: 249,
      image: import.meta.env.BASE_URL + 'avocado-sourdough-toast.png',
      veg: true,
      tag: 'Cafe Favorite',
    },
    {
      name: 'Protein Smoothie Jar',
      description: 'Almond butter, banana, dates, and oat milk blended into a creamy veg shake.',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Refuel',
    },
    {
      name: 'Harissa Paneer Wrap',
      description: 'Whole wheat wrap with paneer, greens, and smoky harissa mayo.',
      price: 259,
      image:
        'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Protein Pick',
    },
  ]),
  'tandoor-social': createMenu('tandoor-social', [
    {
      name: 'Tandoori Veg Platter',
      description: 'Paneer tikka, malai broccoli, soya seekh, and charred vegetables.',
      price: 499,
      image:
        'https://images.unsplash.com/photo-1596797038530-2c107aa01c41?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'House Favorite',
    },
    {
      name: 'Butter Paneer',
      description: 'Silky tomato gravy, smoked paneer cubes, and fenugreek finish.',
      price: 379,
      image:
        'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Classic',
    },
    {
      name: 'Dal Bukhara',
      description: 'Slow-cooked black lentils with butter and cream.',
      price: 269,
      image:
        'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Rich',
    },
    {
      name: 'Roomali Roti Basket',
      description: 'Soft roomali rotis and butter naan for the table.',
      price: 149,
      image:
        'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Bread',
    },
  ]),
  'bao-beats': createMenu('bao-beats', [
    {
      name: 'Korean Crispy Tofu Bao',
      description: 'Soft bao buns with crispy tofu, slaw, and gochujang glaze.',
      price: 259,
      image:
        'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Bestseller',
    },
    {
      name: 'Wok-Tossed Hakka Noodles',
      description: 'Smoky noodles with vegetables, scallions, and umami sauce.',
      price: 229,
      image:
        'https://images.unsplash.com/photo-1617622141573-0ea7948db354?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Street Style',
    },
    {
      name: 'Chilli Basil Dumplings',
      description: 'Pan-seared dumplings finished in a fragrant basil sauce.',
      price: 239,
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Starter',
    },
    {
      name: 'Thai Milk Tea',
      description: 'Creamy iced tea with caramel sweetness and spice.',
      price: 129,
      image:
        'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Cooler',
    },
  ]),
  'cocoa-melt': createMenu('cocoa-melt', [
    {
      name: 'Triple Chocolate Brownie',
      description: 'Dense brownie with dark, milk, and white chocolate chunks.',
      price: 149,
      image:
        'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Bestseller',
    },
    {
      name: 'Red Velvet Pastry',
      description: 'Cloud-soft sponge with cream cheese frosting and crumbs.',
      price: 169,
      image:
        'https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Signature',
    },
    {
      name: 'Hazelnut Shake',
      description: 'Creamy shake topped with ganache and toasted hazelnuts.',
      price: 189,
      image:
        'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Cold Pick',
    },
    {
      name: 'Biscoff Cheesecake Jar',
      description: 'Velvety cheesecake with Biscoff crumble and caramel notes.',
      price: 199,
      image:
        'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'New',
    },
  ]),
  'coastal-curry': createMenu('coastal-curry', [
    {
      name: 'Mangalorean Veg Curry',
      description: 'Tangy coconut curry with baby potatoes, vegetables, and red chilies.',
      price: 399,
      image:
        'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Coastal',
    },
    {
      name: 'Malabar Parotta',
      description: 'Flaky layered bread perfect for scooping rich curries.',
      price: 119,
      image:
        'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Side',
    },
    {
      name: 'Mushroom Ghee Roast',
      description: 'Caramelized coastal spice roast with mushrooms and curry leaf aroma.',
      price: 429,
      image:
        'https://images.unsplash.com/photo-1534939561126-855b8675edd7?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Spicy',
    },
    {
      name: 'Tender Coconut Payasam',
      description: 'Light chilled dessert with coconut milk and roasted cashews.',
      price: 159,
      image:
        'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Dessert',
    },
  ]),
  'midnight-brewhouse': createMenu('midnight-brewhouse', [
    {
      name: 'Truffle Mushroom Crostini',
      description: 'Toasted crostini with creamy mushrooms and herbs.',
      price: 229,
      image:
        'https://images.unsplash.com/photo-1546039907-7fa05f864c02?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Small Plate',
    },
    {
      name: 'Creamy Pesto Pasta',
      description: 'Basil pesto, parmesan cream, and blistered cherry tomatoes.',
      price: 319,
      image:
        'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Popular',
    },
    {
      name: 'Chipotle Cottage Cheese Steak',
      description: 'Grilled paneer steak with mash, greens, and chipotle glaze.',
      price: 349,
      image:
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Main Course',
    },
    {
      name: 'Salted Caramel Cold Brew',
      description: 'Slow-steeped coffee with caramel foam and sea salt.',
      price: 179,
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=60',
      veg: true,
      tag: 'Cafe Special',
    },
  ]),
};

export const getRestaurantMenu = (restaurantId) => menu[restaurantId] ?? [];
