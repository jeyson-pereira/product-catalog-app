import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from 'src/app/core/products.service';
import { ProductI } from 'src/app/shared/product-i.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product!: ProductI;
  isLoading: boolean = true;

  constructor(
    private service: ProductsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id > 20) {
        this.router.navigate(['/home']);
      } else {
        this.service.getProduct(id).subscribe(response => {
          this.product = response;
          this.isLoading = false;
        });
      }
    });
  }

}
