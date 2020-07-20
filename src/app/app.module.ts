import { CountryService } from './services/country.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { StoreModule, Store } from '@ngrx/store';
import { CountryReducer } from './store/country.reducer';
import { CountryEffects } from './store/country.effects';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    HttpClientModule,
    StoreModule.forRoot({ regions: CountryReducer }),
    EffectsModule.forRoot([CountryEffects])
  ],
  providers: [Store, CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
