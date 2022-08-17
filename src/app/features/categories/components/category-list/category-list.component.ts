import { Category } from '../../models/category';
import { CategoriesService } from '../../services/categories/categories.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent implements OnInit {
  categoryList!: Category[];
  dataLoaded = false;
  filterText: string = '';

  constructor(private _categoriesService: CategoriesService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.getCategories();
    }, 2000);
  }

  getCategories() {
    this._categoriesService.getList().subscribe((response) => {
      this.categoryList = response;
      this.dataLoaded = true;
    });
  }

  getCategoryById(category: Category) {
    console.log(category);
  }
}
