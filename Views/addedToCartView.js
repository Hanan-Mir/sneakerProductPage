import View from "./view";
import image from 'url:../images/image-product-1-thumbnail.jpg';
import deleteIconimg from 'url:../images/icon-delete.svg';
class addedToCartView extends View{
    view=new View();
    _parentEl=document.querySelector('.bottom');
_generateMarkup(){
    return `<div class="pImage"> <img src="${image}" alt=""></div>
      <div class="pDescription">
        <p>Fall Limited Edition Sneakers</p>
        <div class="paymentamt">
        <label for="" class="price">$125</label>
        <label for="" class="multiply">x</label>
        <label for="" class="quantity">3</label>
        <label for="" class="total">$375</label>
      </div>
      </div>
      <div class="deleteIcon">
        <img src='${deleteIconimg}' alt="">
      </div>
      <div class="checkoutbtn">
       <button>Checkout</button>
      </div>`;
}
addHandlerRender(handler){
    this.view._addToCart.addEventListener('click',handler);
}
}
export default new addedToCartView();