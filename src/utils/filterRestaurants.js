export const filterRestaurants = (restaurants, search, filters = {}) => {
  const query = search.trim().toLowerCase();

  return restaurants.filter((restaurant) => {
    const matchesSearch =
      !query ||
      restaurant.name.toLowerCase().includes(query) ||
      restaurant.location.toLowerCase().includes(query) ||
      restaurant.cuisine.some((item) => item.toLowerCase().includes(query));

    const matchesRating =
      !filters.minRating || restaurant.rating >= Number(filters.minRating);

    const matchesCuisine =
      !filters.cuisine || restaurant.cuisine.includes(filters.cuisine);

    const matchesPrice =
      !filters.maxPrice || restaurant.priceForTwo <= Number(filters.maxPrice);

    const matchesMode = !filters.mode || restaurant.mode === filters.mode;

    const matchesCollection =
      !filters.collection || restaurant.collectionIds.includes(filters.collection);

    return (
      matchesSearch &&
      matchesRating &&
      matchesCuisine &&
      matchesPrice &&
      matchesMode &&
      matchesCollection
    );
  });
};
