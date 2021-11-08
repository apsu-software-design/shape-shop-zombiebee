import { Product } from "./products";

export class Model {
    shoppingCart : Product[];
    quantityCart: number[];

    constructor(){
        this.shoppingCart = [];
        this.quantityCart = [];
    }

    getShoppingCart(){
        return this.shoppingCart;
    }

    getQuantityCart(){
        return this.quantityCart;
    }
    
    addProduct(p : Product){
        this.getShoppingCart().push(p);        
    }

    addQuantity(q : number){
        this.getQuantityCart().push(q);
    }

    removeProduct(index : number){
        this.getShoppingCart().splice(index, 1);
        this.getQuantityCart().splice(index, 1);
    }

}