import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable, Subject} from 'rxjs';
import {BeerModel} from '../../models/beer.model';
import {BeerService} from '../../services/beer.service';
import {map} from "rxjs/operators";
import {PagingModel} from "../../models/paging.model";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class BeerListComponent {
  private _pageSubject: Subject<PagingModel> = new BehaviorSubject<PagingModel>({startIndex: 0, endIndex: 10});
  public page$: Observable<PagingModel> = this._pageSubject.asObservable();

  readonly beers$: Observable<BeerModel[]> = this._beerService.getAll();

  readonly beer$: Observable<BeerModel[]> = combineLatest([
    this.beers$,
    this.page$
  ]).pipe(map(([beers, page]: [BeerModel[], PagingModel]) => {
    //page.startIndex = 0;
    //page.endIndex = 5;
    return beers.slice(page.startIndex, page.endIndex);;
  }));

  constructor(private _beerService: BeerService) {
  }

  onPageChange(event: PageEvent) {
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    this._pageSubject.next({ startIndex: startIndex, endIndex: endIndex });
  }
}
