import { Product } from '../model/product';
import { ProductCardComponent } from './../product-card/product-card.component';
import { Component, Input } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
@Component({
  selector: 'app-product-card-list',
  imports: [PaginationComponent, ProductCardComponent],
  templateUrl: './product-card-list.component.html',
  styleUrl: './product-card-list.component.scss',
})
export class ProductCardListComponent {
  @Input({ required: true })
  products!: Product[];
  pageIndex = 1;
}
