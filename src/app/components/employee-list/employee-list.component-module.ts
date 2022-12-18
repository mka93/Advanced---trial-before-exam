import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EmployeeListComponent } from './employee-list.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatButtonModule, MatIconModule],
  declarations: [EmployeeListComponent],
  providers: [],
  exports: [EmployeeListComponent]
})
export class EmployeeListComponentModule {
}
