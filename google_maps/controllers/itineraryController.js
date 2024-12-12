import { getPlaces } from '../services/placesService.js';
import { optimizeRoute } from '../services/directionsService.js';
import { createItinerary } from '../services/itineraryService.js';

export async function generateItinerary(req, res) {
  try {
    const { start, duration, preferences } = req.body;

    // Step 1: Fetch attractions and restaurants
    const attractions = await getPlaces(start, preferences.attractions);
    const restaurants = await getPlaces(start, preferences.cuisine);

    // Step 2: Optimize route
    const waypoints = attractions.map(a => ({
      lat: a.geometry.location.lat,
      lng: a.geometry.location.lng,
    }));
    const optimizedRoute = await optimizeRoute(start, waypoints, start);

    // Step 3: Generate itinerary
    const itinerary = createItinerary(attractions, restaurants, duration);
    res.status(200).json({ route: optimizedRoute, itinerary });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
