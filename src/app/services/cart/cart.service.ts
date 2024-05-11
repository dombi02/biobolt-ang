import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  
  addToCart(food:Food): void{
    let cartItem = this.cart.items.find(items => items.food.id === food.id);
    if(cartItem){
      this.changeQuan(food.id, cartItem.quan + 1);
      return;
    }
    this.cart.items.push(new CartItem(food))
  }

  removeFromCart(foodId:number): void{
    this.cart.items = 
    this.cart.items.filter(item => item.food.id != foodId);
  }

  changeQuan(foodId:number, quan:number){
    let cartItem = this.cart.items.find(items => items.food.id === foodId);
    if(!cartItem) return;
    cartItem.quan = quan;
  }

  getCart():Cart{
    return this.cart;
  }
}
