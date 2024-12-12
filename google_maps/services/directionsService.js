import axios from 'axios';
import { endpoints } from '../config/googleConfig.js';
import 'dotenv/config';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function optimizeRoute(start, waypoints, end) {
  try {
    const waypointString = waypoints.map(wp => `${wp.lat},${wp.lng}`).join('|');
    const response = await axios.get(endpoints.directions, {
      params: {
        origin: start,
        destination: end,
        waypoints: `optimize:true|${waypointString}`,
        key: API_KEY,
      },
    });
    return response.data.routes[0];
  } catch (error) {
    console.error("Error optimizing route:", error);
    throw error;
  }
}
