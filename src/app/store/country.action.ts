import { createAction, props } from '@ngrx/store';
import { Region } from '../models/region';

export const GetRegionAction = createAction('[Countries] - Get Region');
export const BeginGetRegionAction = createAction('[Countries] - Begin Get Region',
props<{ payload: string }>());
export const SuccessGetRegionAction = createAction(
  '[Countries] - Success Get Region',
  props<{ payload: Region[] }>()
);
