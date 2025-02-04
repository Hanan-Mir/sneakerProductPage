import View from "./view";
class deleteItemCart extends View{
_item='Hanan';
_parentEl=document.querySelector('.checkoutbtn');
_generateDeleteMarkUp(){
    return `<h3>Cart</h3>
    <div class="break"></div>
    <div class="bottom">
    <p>Your cart is empty.</p>`
}
deleteItem(handler){
    console.log(this._parentEl);
    this._parentEl.addEventListener('click',handler);
}
}
export default new deleteItemCart();