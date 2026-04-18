import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProductCardListComponent } from './product-card-list/product-card-list.component';
import { Product } from './model/product';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class App {}
