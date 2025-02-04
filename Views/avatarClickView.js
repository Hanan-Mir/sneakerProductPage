import View from "./view";
class AvatarClickView extends View{
    view=new View();
    _parentEl=document.querySelector('.itemDescription');
_itemsInCart(handler){
    this.view._itemsInCartBtn.addEventListener('click',handler);
}

}
export default new AvatarClickView();