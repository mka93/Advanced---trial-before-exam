import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductService } from '../../services/product.service';
import {ProductModel} from "../../models/product.model";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly details$: Observable<ProductModel> = this._activatedRoute.params.pipe(switchMap(data => this._productService.getOne(data['id'])));

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }
}
