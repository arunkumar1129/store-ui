import { Component } from '@angular/core';
import { FiltersComponent } from './filters/filters.component';
import { ProductsComponent } from './products/products.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [FiltersComponent, ProductsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent {

}
