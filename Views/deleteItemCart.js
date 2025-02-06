import View from "./view";
class deleteItemCart extends View{

_parentEl=document.querySelector('.itemDescription');
_generateMarkup(){
    return `<h3>Cart</h3>
    <div class="break"></div>
    <div class="bottom">
    <p>Your cart is empty.</p>`
}
deleteItem(handler){
    document.addEventListener('click',handler);
}
}
export default new deleteItemCart();