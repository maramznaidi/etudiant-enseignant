import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import  { FormsModule} from '@angular/forms'
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'], // Corrected typo: styleUrl -> styleUrls
})
export class ProductsComponent {
  productlist = [
    { id: 1, title: 'maram0', price: 12, quantity: 0, like: 1 },
    { id: 2, title: 'maram1', price: 123, quantity: 6, like: 0 },
    { id: 3, title: 'maram', price: 1234, quantity: 6, like: 3 },
    
  ];

  ngOnInit(): void {
    console.log(this.productlist);
  }
  buyproduct( i : number){
    this.productlist[i].quantity--;
  }
  likeproduct(j:number){
    this.productlist[j].like--;
  }
  priceMax: number=0;

}
