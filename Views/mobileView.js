import View from "./view";
import slideImagesView from "./slideImagesView";
class MobileView extends View{

_menu=document.querySelector('.menu');
_sideBar=document.querySelector('.navigation-links');
_cross=document.querySelector('.close');
_background=document.querySelector('.section-container');
_prevSlide=document.querySelector('.previousPhone');
_nextSlide=document.querySelector('.nextPhone');
_parentEl=document.querySelector('.phone-mainImg');
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
onMovePrevSlide(imgAdd){
    this._prevSlide.addEventListener('click',(e)=>{
        let currentImg=this._parentEl.getAttribute('imgid');
             if(currentImg==1){
                this._parentEl.src=imgAdd.fourthImg;
                this._parentEl.setAttribute('imgid',4);
        
             }
             if(currentImg==2){
                this._parentEl.src=imgAdd.firstImg;
                this._parentEl.setAttribute('imgid',1);
        
             }
             if(currentImg==3){
                this._parentEl.src=imgAdd.secondImg;
                this._parentEl.setAttribute('imgid',2);
             }
             if(currentImg==4){
                this._parentEl.src=imgAdd.thirdImg;
                this._parentEl.setAttribute('imgid',3);
             }
    })
    slideImagesView.addHandlerMoveNextSlide(imgAdd);
}
onMoveNextSlide(imgAdd){
this._nextSlide.addEventListener('click',(e)=>{
    e.preventDefault();
    let currentImg=this._parentEl.getAttribute('imgid');
         if(currentImg==1){
            this._parentEl.src=imgAdd.secondImg;
            this._parentEl.setAttribute('imgid',2);
         }
         if(currentImg==2){
            this._parentEl.src=imgAdd.thirdImg;
            this._parentEl.setAttribute('imgid',3);
    
         }
         if(currentImg==3){
            this._parentEl.src=imgAdd.fourthImg;
            this._parentEl.setAttribute('imgid',4);
         }
         if(currentImg==4){
            this._parentEl.src=imgAdd.firstImg;
            this._parentEl.setAttribute('imgid',1);
         }
})

}





}
export default new MobileView();