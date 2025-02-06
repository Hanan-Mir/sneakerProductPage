import addedToCartView from "./Views/addedToCartView";
import avatarClickView from "./Views/avatarClickView";
import addQuantity from "./Views/addQuantity";
import subtractQuantity from "./Views/subtractQuantity";
import cartIconUpdate from "./Views/cartIconUpdate";
import deleteItemCart from "./Views/deleteItemCart";
import displayImageOnClick from "./Views/displayImageOnClick";
import fullImageView from "./Views/fullImageView";
import slideImagesView from "./Views/slideImagesView";
import { imageAddress } from "./model";
import View from "./Views/view";
import { itemAddedToCart } from "./model";
const addItemToCart=function(){
    if(addQuantity._parentEl.textContent==0){
        alert('Add the quantity first');
        return;
    }
    else{
addedToCartView._render(addedToCartView._generateMarkup);
itemAddedToCart=true;
}
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
    if(addQuantity._parentEl.textContent==0){
        return;
    }else{
    cartIconUpdate._parentEl.textContent=1;
}
}
const deleteCartItem=function(e){
   if(e.target.classList.contains('deleteImage')){
    deleteItemCart._render(deleteItemCart._generateMarkup);
   cartIconUpdate._parentEl.textContent=0;
   return;
   }
}
const fullImage=function(){
fullImageView._parentEl.classList.add('blurBackground');
fullImageView._viewFullImgSection.classList.remove('hidden');
}
const closeImg=function(){
    fullImageView._parentEl.classList.remove('blurBackground');
    fullImageView._viewFullImgSection.classList.add('hidden');
}

let init=function(){
    addedToCartView.addHandlerRender(addItemToCart);
    avatarClickView._itemsInCart(viewCartItems);
    addQuantity.increaseItemQuantity(increaseItems);
    subtractQuantity.decreaseItemQuantity(decreaseItems);
    cartIconUpdate.updateCartValue(updateValue);
    deleteItemCart.deleteItem(deleteCartItem);  
    displayImageOnClick.addHandlerImageView(imageAddress);
    displayImageOnClick.activeImage();
    fullImageView.fullImageView(fullImage);
    fullImageView.closeFullImgView(closeImg);
    slideImagesView.moveNextSlide();
}
init();
