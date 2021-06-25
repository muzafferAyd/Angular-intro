import { Component, OnInit } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Kategori Listesi"
  categories: Category[] = [
    {id:1, name:"Elektronik"},
    {id:2, name:"Kitap"},
    {id:3, name:"İçecek"},
    {id:4, name:"Gıda"},
  ]
  ngOnInit(): void {
  }

}
