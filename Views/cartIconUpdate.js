import View from "./view";
class CartIconUpdate extends View{
    view=new View();
    _parentEl=document.querySelector('.cartQ');
    updateCartValue(handler){
        this.view._addToCart.addEventListener('click',handler)
    }
}
export default new CartIconUpdate();