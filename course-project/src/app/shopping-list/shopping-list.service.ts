import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs/Subject";

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients :Ingredient[] = [
        new Ingredient("tomato",10),
        new Ingredient("potato",20)
    ];
    
    getIngredient(index:number){
        return this.ingredients[index];
    }
    getIngredients(){
        return this.ingredients.slice();// slice used, so that outsiders can't access the original array.
    }
    addIngredient(ingredient:Ingredient){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    addIngredients(ingredients:Ingredient[]){
        // for(let ingredient of ingredients){            // because so many event emission.
        //     this.ingredients.push(ingredient);
        // }
        this.ingredients.push(...ingredients); //spred operator . array to list
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    updateIngredient(index:number,newIngredient:Ingredient){
        this.ingredients[index]=newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }
    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }
}