import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit,OnDestroy {

  ingredients :Ingredient[] ;
  private subscription : Subscription;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();  // for initial state
    this.subscription=this.shoppingListService.ingredientsChanged.subscribe(        // if ingredients are modified
      (ingredients:Ingredient[])=>{
        this.ingredients=ingredients;
      }
    );
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();  // to prevent any memory leak.
  }

  onEditItem(index : number){
    this.shoppingListService.startedEditing.next(index);
  }
}
