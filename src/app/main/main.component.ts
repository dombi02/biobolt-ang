import { Component } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  foods: Food[] = [];

  constructor(private foodService: FoodService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['searchTerm']) {
        this.foods = this.foodService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()));
      } 
      else if(params['tag']){
        this.foods = this. foodService.getAllFoodsByTag(params['tag']);
      }
      
      else {
        this.foods = this.foodService.getAll();
      }
    });
  }
}
