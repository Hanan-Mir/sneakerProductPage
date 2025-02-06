import View from "./view";
class FullImageView extends View{
_onClickImg=document.querySelector('#mainImage');
_viewFullImgSection=document.querySelector('.fullProductImg');
_crossEl=document.querySelector('.crossEl');
_parentEl=document.querySelector('.container');
_thumbnailImages=document.querySelectorAll('.thumbnailImg');
_imageUrl;
fullImageView(handler){
    this._onClickImg.addEventListener('click',handler)
}
closeFullImgView(handler){
    this._crossEl.addEventListener('click',handler);
}
addHandlerImageView(imgAdd){
    this._thumbnailImages.forEach((img)=>{
        const mainImage=document.querySelector('#mainImage');
        img.addEventListener('click',function(e){
            e.preventDefault();
            this._imageUrl=img.getAttribute('imgId');
             switch(+this._imageUrl){
                case 1:
                mainImage.src=imgAdd.firstImg;
                break;
                case 2:
                    mainImage.src=imgAdd.secondImg;
                    break;
                    case 3:
                        mainImage.src=imgAdd.thirdImg;
                        break;
                        case 4:
                            mainImage.src=imgAdd.fourthImg;
                            break;
            }
        })
    })

}
}
export default new FullImageView();