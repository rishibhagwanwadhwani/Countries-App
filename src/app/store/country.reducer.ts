import CountryState, { initializeState } from './country.state';
import { createReducer, on, Action } from '@ngrx/store';
import * as CountryActions from './country.action';

export const intialState = initializeState();

const reducer = createReducer(
  intialState,
  on(CountryActions.GetRegionAction, state => state),
  on(CountryActions.SuccessGetRegionAction, (state: CountryState, { payload }) => {
    return { ...state, regions: payload };
  })
);

export function CountryReducer(state: CountryState | undefined, action: Action) {
  return reducer(state, action);
}
