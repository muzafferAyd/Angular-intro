import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }
  title ="Ürün Listesi"
  filterText = ""
  products : Product[] = [
    {id:1, name : "Laptop", price: 2500, categoryId : 1, description: "Asus Zen", imageUrl:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
    {id:2, name : "Mouse", price: 100, categoryId : 2, description: "A4 tech", imageUrl:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
    {id:1, name : "Keyboard", price: 2500, categoryId : 1, description: "Asus Zen", imageUrl:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},
    {id:2, name : "Tv", price: 100, categoryId : 2, description: "A4 tech", imageUrl:"https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"},

  ]
  ngOnInit(): void {
  }

  addToCart(product){
    alert("Sepete eklendi: "+ product.name)
  }

}
