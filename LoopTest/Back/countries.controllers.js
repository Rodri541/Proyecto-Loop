import axios from 'axios';
import { COUNTRIES_API_BASE_URL } from './config.js';

export const getAllCountries = async (req, res) => {
  try {
    const response = await axios.get(
      `${COUNTRIES_API_BASE_URL}/all?fields=name,capital,region,subregion`
    );

    const countries = response.data.map(country => ({
      name: country.name?.common || '',
      capital: country.capital ? country.capital[0] : '',
      region: country.region || '',
      subregion: country.subregion || ''
    }));

    res.json(countries);
  } catch (error) {
    console.error("Error en getAllCountries:", error.message);
    res.status(500).json({ message: error.message });
  }
};
