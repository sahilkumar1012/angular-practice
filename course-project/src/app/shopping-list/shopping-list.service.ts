import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients :Ingredient[] = [
        new Ingredient("tomato",10),
        new Ingredient("potato",20)
    ];
    
    getIngredients(){
        return this.ingredients.slice();// slice used, so that outsiders can't access the original array.
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){            // because so many event emission.
        //     this.ingredients.push(ingredient);
        // }
        this.ingredients.push(...ingredients); //spred operator . array to list
        this.ingredientsChanged.emit(this.ingredients.slice());
    }
}