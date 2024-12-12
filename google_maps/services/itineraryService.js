export function createItinerary(attractions, restaurants, duration) {
  const slotsPerDay = Math.ceil(attractions.length / duration);
  const itinerary = [];

  for (let i = 0; i < duration; i++) {
    const dayAttractions = attractions.slice(i * slotsPerDay, (i + 1) * slotsPerDay);
    const dayRestaurants = restaurants.slice(i * slotsPerDay, (i + 1) * slotsPerDay);
    itinerary.push({
      day: i + 1,
      attractions: dayAttractions,
      restaurants: dayRestaurants,
    });
  }

  return itinerary;
}
