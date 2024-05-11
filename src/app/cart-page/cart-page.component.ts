import { Component, OnInit } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { CartService } from '../services/cart/cart.service';
import { CartItem } from '../shared/models/CartItem';
import { FoodService } from '../services/food/food.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrl: './cart-page.component.scss'
})
export class CartPageComponent implements OnInit{
  cart!:Cart;
  constructor(private cartService:CartService,
    private foodService:FoodService
  ){
    let foods = foodService.getAll();
    
    this.setCart()
  }
  ngOnInit(): void {
    
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuan(cartItem:CartItem, quanInString:string){
    const quan = parseInt(quanInString);
    this.cartService.changeQuan(cartItem.food.id, quan)
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
