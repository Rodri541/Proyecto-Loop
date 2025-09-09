import { Router } from 'express';
import { getAllCountries } from './countries.controllers.js';

export const countries = Router();

countries.get("/countries", getAllCountries);
