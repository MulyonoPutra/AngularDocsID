import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adding-navigation',
  templateUrl: './adding-navigation.component.html',
  styleUrls: ['./adding-navigation.component.scss']
})
export class AddingNavigationComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  value: string = 'ng generate component product-details';
  appModule: string = `
      @NgModule({
        imports: [
          BrowserModule,
          ReactiveFormsModule,
          RouterModule.forRoot([
            { path: '', component: ProductListComponent },
            { path: 'products/:productId', component: ProductDetailsComponent },
          ])
        ],
      declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent,
        ProductDetailsComponent,
      ],
          `;

  productListComponent: string = `
      <!-- <div *ngFor="let product of products">
        <h3>
          <a
            [title]="product.name + ' details'"
            [routerLink]="['/products', product.id]">
            {{ product.name }}
          </a>
        </h3>

        <!-- . . . -->

      </div> -->
      `

  productDetailsImport: string = `
      import { Component, OnInit } from '@angular/core';
      import { ActivatedRoute } from '@angular/router';
      import { Product, products } from '../products';
    `

  productProperties: string = `
      export class ProductDetailsComponent implements OnInit {
        product: Product | undefined;
      /* ... */
      }
  `

  activatedRoute: string = `
      export class ProductDetailsComponent implements OnInit {
      product: Product | undefined;
      constructor(private route: ActivatedRoute) { }
      }
  `

  productDetailsId: string = `
      ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));

        // Find the product that correspond with the id provided in route.
        this.product = products.find(product => product.id === productIdFromRoute);
      }
  `

  ngOnInit(): void {}

  copy() {
    console.log('clicked');

    this.snackbar.open('Copied!', '', {
      duration: 3000,
    })
  }

}
