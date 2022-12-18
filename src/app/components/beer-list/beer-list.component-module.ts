import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { BeerListComponent } from './beer-list.component';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  imports: [
    AsyncPipe,
    NgForOf,
    MatCardModule,
    MatListModule,
    MatButtonToggleModule,
    AsyncPipe,
    NgForOf,
    MatPaginatorModule,
    NgIf
  ],
  declarations: [BeerListComponent],
  providers: [],
  exports: [BeerListComponent]
})
export class BeerListComponentModule {
}
