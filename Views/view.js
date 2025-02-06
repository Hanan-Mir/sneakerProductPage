export default class View{
//element selections are below
_minusBtn=document.querySelector('.minus');
_plusBtn=document.querySelector('.plus');
_addToCart=document.querySelector('.addtocart');
_itemsInCartBtn=document.querySelector('.avatarLink');
_data;
//function for generating markup in UI
_render(data){
this._data=data;
let markup=this._generateMarkup();
console.log(markup);
this.clear();
this._parentEl.insertAdjacentHTML('afterbegin',markup);
}
clear(){
    this._parentEl.innerHTML='';
}
}