import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct;

  // in order to inject the ID of required product, we inject ActivatedRoute
  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute,
              private breadCrumbService: BreadcrumbService) {
      this.breadCrumbService.set('@productDetails', '');
     }

  ngOnInit(): void {
    this.loadProduct();
  }
  // tslint:disable-next-line: typedef
  loadProduct(){
    this.shopService.getProduct(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(product => {
      this.product = product;
      this.breadCrumbService.set('@productDetails', product.name);

    }, error => {
      console.log(error);
    });

  }

}