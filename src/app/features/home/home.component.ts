import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/products.service';
import { ProductI } from 'src/app/shared/product-i.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: ProductI[] = [];

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.service.getProducts().subscribe(products => {
      this.products = products;
    });
  }

}
