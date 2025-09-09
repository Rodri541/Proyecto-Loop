import { Router } from 'express';
import { submitVote, getTopCountries } from './voting.controllers.js';

export const voting = Router();

voting.post("/votes", submitVote);
voting.get("/top-countries", getTopCountries);
