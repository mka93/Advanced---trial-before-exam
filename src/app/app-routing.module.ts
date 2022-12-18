import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { FilteredProductListComponent } from './components/filtered-product-list/filtered-product-list.component';
import { SortedProductListComponent } from './components/sorted-product-list/sorted-product-list.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { ProductsListComponentModule } from './components/products-list/products-list.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';
import { FilteredProductListComponentModule } from './components/filtered-product-list/filtered-product-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { SortedProductListComponentModule } from './components/sorted-product-list/sorted-product-list.component-module';
import { EmployeeListComponentModule } from './components/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { BeerListComponentModule } from './components/beer-list/beer-list.component-module';
import { BeerServiceModule } from './services/beer.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products-list', component: ProductsListComponent }, { path: 'products/:category', component: FilteredProductListComponent }, { path: 'sort-products', component: SortedProductListComponent }, { path: 'employees', component: EmployeeListComponent }, { path: 'beer-list', component: BeerListComponent }]), ProductsListComponentModule, ProductServiceModule, ProductDetailsComponentModule, FilteredProductListComponentModule, CategoriesServiceModule, SortedProductListComponentModule, EmployeeListComponentModule, EmployeeServiceModule, BeerListComponentModule, BeerServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
