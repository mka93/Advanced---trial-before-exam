import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ProductsListComponent } from './products-list.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

@NgModule({
  imports: [CommonModule, MatTableModule, MatButtonToggleModule],
  declarations: [ProductsListComponent],
  providers: [],
  exports: [ProductsListComponent]
})
export class ProductsListComponentModule {
}
