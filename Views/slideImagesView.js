import View from "./view";

class SildeImages extends View{
_prevSlide=document.querySelector('.previous');
_nextSlide=document.querySelector('.next');
_parentEl=document.querySelector('.fullPImg');

moveNextSlide(imgAdd){
    console.log(this._thumbnailImages);
    this._nextSlide.addEventListener('click',function(e){
        e.preventDefault();
        _thumbnailImages=document.querySelectorAll('.thumbnailImg');
        console.log(this._thumbnailImages);
   _thumbnailImages.forEach((img)=>{
if(img.classList.contains('active-img')){
    alert('yes contains');
}


    })

    });
}





}
export default new SildeImages();