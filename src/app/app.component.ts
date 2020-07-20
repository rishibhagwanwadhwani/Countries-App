import { map } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import CountryState from './store/country.state';
import * as CountryActions from './store/country.action';
import { Store, select } from '@ngrx/store';
import { Region } from './models/region';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  regions = ['Europe', 'Asia'];
  regionsState$: Observable<CountryState>;
  regionSubscription: Subscription;
  RegionList: Region[] = [];
  countryList = [];
  displayedCountry = null;

  constructor(private store: Store<{ regions: CountryState }>) {
    this.regionsState$ = store.pipe(select('regions'));
  }

  ngOnInit() {
    this.regionSubscription = this.regionsState$
    .pipe(
      map(x => {
        this.RegionList = x.regions;
        if (!!this.RegionList[0]) {
          this.countryList = this.RegionList[0].countries.map(c => c.name);
        }
      })
    )
    .subscribe();
  }

  regionChange(value) {
    this.store.dispatch(CountryActions.BeginGetRegionAction({ payload: value }));
    this.displayedCountry = null;
  }

  countryChange(value) {
    this.displayedCountry = this.RegionList[0].countries.filter(c => c.name === value);
  }

  ngOnDestroy() {
    if (this.regionSubscription) {
      this.regionSubscription.unsubscribe();
    }
  }
}
