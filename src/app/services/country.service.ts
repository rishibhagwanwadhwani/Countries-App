import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryService {

    constructor(private http: HttpClient) {}

    getCountries(region: string) {
        return this.http.get(region);
    }
}
