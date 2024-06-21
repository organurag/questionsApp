import { Component } from '@angular/core';
import { Product } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'questionsApp';
  products: Product[];
  product!: Product;
  isEdit: boolean;


  constructor() {
    this.products = [
      {id: 1, name:'Mobile', price: 45000},
      {id: 2, name:'Laptop', price: 70000},
      {id: 3, name:'Speaker', price: 1999},
    ];
    this.product = new Product();
    this.isEdit = false;

  }

  AddProduct(){
    if (this.products.length <= 0){
      alert(`Id, Name and Price cannot be empty`);
    } else {
      this.products.push(this.product);
      this.product = new Product();
    }
  }

  UpdateProduct() {
    for (let i = 0; i < this.products.length; i++) {
      const element = this.products[i];
      if (element.id == this.product.id) {
        this.products[i].name = this.product.name;
        this.products[i].price = this.product.price;

        this.product = new Product();
        this.isEdit = false;
        break;
      }
    }
  }
  

  EditProduct(id: number) {
    const existingProduct = this.products.find(u => u.id == id);
    if (existingProduct != undefined) {
      // this.product = Object.create(existingProduct);
      this.product.id = existingProduct.id;
      this.product.name = existingProduct.name;
      this.product.price = existingProduct.price;
      this.isEdit = true;
    }
}

DeleteProduct(id: number, name: string) {
  if (confirm(`Do you want to delete product "${name}"?`)) {
    let index = this.products.findIndex(x => x.id === id);
    this.products.splice(index, 1);
    alert(`The product "${name}" has been deleted successfully.`);
  }
}

}
