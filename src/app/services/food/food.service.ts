import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from '../../shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Food{
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTags():Tag[]{
    return[
      { name: 'All', count:10},
      { name: 'Gyümölcs', count:6},
      { name: 'Zöldség', count:3},
      { name: 'Egészséges', count:9},
      { name: 'Édesség', count:1},
    ];
  }

  getAllFoodsByTag(tag:string): Food[]{

    return tag == "All"? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
  }
  getAll():Food[]{
    return [
      {
        id:1,
        name:'Alma',
        price:1000,
        stars:3.0,
        imageUrl:'assets/images/foods/apple.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },

      {
        id:2,
        name:'Banán',
        price:800,
        stars:4.5,
        imageUrl:'assets/images/foods/banana.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },

      {
        id:3,
        name:'Répa',
        price:600,
        stars:3.5,
        imageUrl:'assets/images/foods/carrot.jpg',
        tags:['Zöldség', 'Egészséges']
      },
      {
        id:4,
        name:'Palacsinta',
        price:900,
        stars:5.0,
        imageUrl:'assets/images/foods/pancake.jpg',
        tags:['Édesség']
      },
      {
        id:5,
        name:'Tök',
        price:600,
        stars:3.5,
        imageUrl:'assets/images/foods/pumpkin.jpg',
        tags:['Zöldség', 'Egészséges']
      },
      {
        id:6,
        name:'Cseresznye',
        price:2400,
        stars:4.5,
        imageUrl:'assets/images/foods/cherry.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },
      {
        id:7,
        name:'Görögdinnye',
        price:400,
        stars:3.5,
        imageUrl:'assets/images/foods/melon.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },
      {
        id:8,
        name:'Gomba',
        price:700,
        stars:2.5,
        imageUrl:'assets/images/foods/mush.jpg',
        tags:['Zöldség', 'Egészséges']
      },
      {
        id:9,
        name:'Körte',
        price:880,
        stars:3.5,
        imageUrl:'assets/images/foods/pear.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },
      {
        id:10,
        name:'Ananász',
        price:1600,
        stars:4.5,
        imageUrl:'assets/images/foods/pineapple.jpg',
        tags:['Gyümölcs', 'Egészséges']
      },

    ]
  }
}
