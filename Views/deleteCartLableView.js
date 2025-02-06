import View from "./view";
class deleteCartLableView extends View{
_parentEl=document.querySelector('.cartQ');
decreaseCartLabelCount(){
    console.log('hello');
    this._parentEl.textContent--;
}



}
export default new deleteCartLableView();