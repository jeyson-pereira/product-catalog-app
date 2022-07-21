import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProductI } from '../shared/product-i.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private api: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductI[]> {
    return this.http.get<ProductI[]>(`${this.api}/products`);
  }

}
