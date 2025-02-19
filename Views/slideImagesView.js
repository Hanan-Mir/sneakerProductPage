import View from "./view";
import fullImageView from "./fullImageView";
class SildeImages extends View{
_prevSlide=document.querySelector('.previous');
_nextSlide=document.querySelector('.next');
_parentEl=document.querySelector('.fullPImg');
_thumbnailImages=document.querySelectorAll('.thumbnailImg-2');
_onClick=false;
addHandlerMovePrevSlide(imgAdd){
    this._prevSlide.addEventListener('click',(e)=>{
        e.preventDefault();
        const thumbnailImgArr=Array.from(document.querySelectorAll('.thumbnailImg-2'));
   let currentImg=this._parentEl.getAttribute('imgid');
     if(currentImg==1){
        this._parentEl.src=imgAdd.fourthImg;
        fullImageView.removeActivethumbnail();
       thumbnailImgArr[3].classList.add('active-img');
        this._parentEl.setAttribute('imgid',4);

     }
     if(currentImg==2){
        this._parentEl.src=imgAdd.firstImg;
        fullImageView.removeActivethumbnail();
       thumbnailImgArr[0].classList.add('active-img');
        this._parentEl.setAttribute('imgid',1);

     }
     if(currentImg==3){
        this._parentEl.src=imgAdd.secondImg;
        fullImageView.removeActivethumbnail();
       thumbnailImgArr[1].classList.add('active-img');
        this._parentEl.setAttribute('imgid',2);
     }
     if(currentImg==4){
        this._parentEl.src=imgAdd.thirdImg;
        fullImageView.removeActivethumbnail();
       thumbnailImgArr[2].classList.add('active-img');
        this._parentEl.setAttribute('imgid',3);
     }
    })
}
addHandlerMoveNextSlide(imgAdd){
    this._nextSlide.addEventListener('click',()=>{
        const thumbnailImgArr=Array.from(document.querySelectorAll('.thumbnailImg-2'));
        let currentImg=this._parentEl.getAttribute('imgid');
     if(currentImg==1){
        this._parentEl.src=imgAdd.secondImg;
        fullImageView.removeActivethumbnail();
       thumbnailImgArr[1].classList.add('active-img');
        this._parentEl.setAttribute('imgid',2);
     }
     if(currentImg==2){
        this._parentEl.src=imgAdd.thirdImg;
        fullImageView.removeActivethumbnail();
        thumbnailImgArr[2].classList.add('active-img');
        this._parentEl.setAttribute('imgid',3);

     }
     if(currentImg==3){
        this._parentEl.src=imgAdd.fourthImg;
        fullImageView.removeActivethumbnail();
        thumbnailImgArr[3].classList.add('active-img');
        this._parentEl.setAttribute('imgid',4);
     }
     if(currentImg==4){
        this._parentEl.src=imgAdd.firstImg;
        fullImageView.removeActivethumbnail();
        thumbnailImgArr[0].classList.add('active-img');
        this._parentEl.setAttribute('imgid',1);
     }
    })
}
_imgUrl
addHandlerOnThumbnailClick(imgAdd){
    this._thumbnailImages.forEach((img)=>{
        img.addEventListener('click',(e)=>{
            e.preventDefault();
        
            this._onClick=true;
            const thumbnailImgArr=Array.from(document.querySelectorAll('.thumbnailImg-2'));
            this._imgUrl=img.getAttribute('imgid');
            switch(+this._imgUrl){
case 1:
    this._parentEl.src=imgAdd.firstImg;
    fullImageView.removeActivethumbnail();
thumbnailImgArr[0].classList.add('active-img');
this._parentEl.setAttribute('imgid',1);
    break;
    case 2:
        this._parentEl.src=imgAdd.secondImg;
        fullImageView.removeActivethumbnail();
thumbnailImgArr[1].classList.add('active-img');
this._parentEl.setAttribute('imgid',2);
        break;
        case 3:
            this._parentEl.src=imgAdd.thirdImg;
            fullImageView.removeActivethumbnail();
thumbnailImgArr[2].classList.add('active-img');
this._parentEl.setAttribute('imgid',3);
            break;
            case 4:
                this._parentEl.src=imgAdd.fourthImg;
                fullImageView.removeActivethumbnail();
thumbnailImgArr[3].classList.add('active-img');
this._parentEl.setAttribute('imgid',4);
                break;

            }
        })
    })
}





}
export default new SildeImages();