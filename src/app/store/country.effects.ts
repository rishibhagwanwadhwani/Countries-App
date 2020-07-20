import { CountryService } from './../services/country.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as CountryActions from './country.action';
import { Country } from '../models/country';

@Injectable()
export class CountryEffects {
  constructor(
    private action$: Actions,
    private countryService: CountryService
  ) {}

  private ApiURL = 'https://restcountries.eu/rest/v2/region/';

  GetRegions$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(CountryActions.BeginGetRegionAction),
      mergeMap(action =>
        this.countryService.getCountries(this.ApiURL + action.payload).pipe(
          map((data: Country[]) => {
            return CountryActions.SuccessGetRegionAction({ payload:
              [{
                name: JSON.stringify(action.payload),
                countries: data
              }] });
          })
        )
      )
    )
  );
}
