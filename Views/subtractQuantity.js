import View from "./view";

class SubItems extends View{
    view=new View();
    _parentEl=document.querySelector('.quantity');

    decreaseItemQuantity(handler){
this.view._minusBtn.addEventListener('click',handler);
    }
}
export default new SubItems();