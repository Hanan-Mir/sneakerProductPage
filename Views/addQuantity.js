import View from "./view";

class AddItems extends View{
    view=new View();
    _parentEl=document.querySelector('.quantity');

    increaseItemQuantity(handler){
this.view._plusBtn.addEventListener('click',handler);
    }
}
export default new AddItems();