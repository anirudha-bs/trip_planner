import axios from 'axios';
import { endpoints } from '../config/googleConfig.js';
import 'dotenv/config';

const API_KEY = process.env.GOOGLE_MAPS_API_KEY;

export async function getPlaces(location, type) {
  try {
    const response = await axios.get(endpoints.places, {
      params: {
        location,
        radius: 5000,
        type,
        key: API_KEY,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error("Error fetching places:", error);
    throw error;
  }
}
