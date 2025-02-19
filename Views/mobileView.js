import View from "./view";
class MobileView extends View{

_menu=document.querySelector('.menu');
_sideBar=document.querySelector('.navigation-links');
_cross=document.querySelector('.close');
_background=document.querySelector('.section-container');
onClickHumberg(){
    this._menu.addEventListener('click',(e)=>{
        e.preventDefault();
        this._sideBar.classList.remove('hide');
        this._background.style.position='fixed';
        this._background.style.opacity='0.6';
    })
}
onClickClose(){
    this._cross.addEventListener('click',(e)=>{
        e.preventDefault();
        this._sideBar.classList.add('hide');
        this._background.style.position='relative';
        this._background.style.opacity='1';
    })
}






}
export default new MobileView();