import { Region } from '../models/region';

export default class CountryState {
    regions: Array<Region>;
}

export const initializeState = (): CountryState => {
  return { regions: Array<Region>() };
};
