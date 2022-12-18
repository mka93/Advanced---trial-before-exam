import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BeerModel } from '../models/beer.model';
import {PagingModel} from "../models/paging.model";

@Injectable()
export class BeerService {
  constructor(private _httpClient: HttpClient) {
  }

  get(page: PagingModel): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>("https://api.punkapi.com/v2/beers?page="+page.startIndex+"&per_page="+page.endIndex);
  }

  getAll(): Observable<BeerModel[]> {
    return this._httpClient.get<BeerModel[]>("https://api.punkapi.com/v2/beers");
  }
}
