import View from "./view";
class deleteItemCart extends View{

_parentEl=document.querySelector('.bottom');
_generateMarkup(){
    return `
    <div class="bottom">
    <p>Your cart is empty.</p>`
}
deleteItem(handler){
    document.addEventListener('click',handler);
}
}
export default new deleteItemCart();