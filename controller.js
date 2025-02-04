import addedToCartView from "./Views/addedToCartView";
import avatarClickView from "./Views/avatarClickView";
import addQuantity from "./Views/addQuantity";
import subtractQuantity from "./Views/subtractQuantity";
import cartIconUpdate from "./Views/cartIconUpdate";
import deleteItemCart from "./Views/deleteItemCart";
import View from "./Views/view";
import { itemAddedToCart } from "./model";
const addItemToCart=function(){
addedToCartView._render(addedToCartView._generateMarkup);
itemAddedToCart=true;
}
const viewCartItems=function(){
    avatarClickView._parentEl.classList.toggle('hidden');
}
const increaseItems=function(){
    addQuantity._parentEl.textContent++;

}
const decreaseItems=function(){
    if(addQuantity._parentEl.textContent==0){
        return
    }else{
        addQuantity._parentEl.textContent--;
    }
}
const updateValue=function(){
    cartIconUpdate._parentEl.textContent=1;
}
const deleteCartItem=function(){
   
    if(itemAddedToCart){
deleteItemCart._render(deleteItemCart._generateDeleteMarkUp)
}
}
let init=function(){
    addedToCartView.addHandlerRender(addItemToCart);
    avatarClickView._itemsInCart(viewCartItems);
    addQuantity.increaseItemQuantity(increaseItems);
    subtractQuantity.decreaseItemQuantity(decreaseItems);
    cartIconUpdate.updateCartValue(updateValue);
    console.log(itemAddedToCart);
    deleteItemCart.deleteItem(deleteCartItem);   
}
init();
