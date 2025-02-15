import View from "./view";
class FullImageView extends View{
_onClickImg=document.querySelector('#mainImage');
_viewFullImgSection=document.querySelector('.fullProductImg');
_crossEl=document.querySelector('.crossEl');
_parentEl=document.querySelector('.container');
_fullImg=document.querySelector('.fullPImg');
_thumbnailImages=document.querySelectorAll('.thumbnailImg-2');
_imageUrl;
fullImageView(handler,imgAdd){
    this._onClickImg.addEventListener('click',(e)=>{
e.preventDefault();
console.log(Array.from(this._thumbnailImages));
const thumbnailImgArr=Array.from(this._thumbnailImages);
switch(+this._onClickImg.getAttribute('imgid')){
    case 1:
        this._fullImg.src=imgAdd.firstImg;
        this._fullImg.setAttribute('imgid',1);
        this.removeActivethumbnail();
        thumbnailImgArr[0].classList.add('active-img');
        break;
        case 2:
        this._fullImg.src=imgAdd.secondImg;
        this._fullImg.setAttribute('imgid',2);
        this.removeActivethumbnail();
        thumbnailImgArr[1].classList.add('active-img');
        break;
        case 3:
        this._fullImg.src=imgAdd.thirdImg;
        this._fullImg.setAttribute('imgid',3);
        this.removeActivethumbnail();
        thumbnailImgArr[2].classList.add('active-img');
        break;
        case 4:
        this._fullImg.src=imgAdd.fourthImg;
        this._fullImg.setAttribute('imgid',4);
        this.removeActivethumbnail();
        thumbnailImgArr[3].classList.add('active-img');
        break;
}

handler();
    })
}
closeFullImgView(handler){
    this._crossEl.addEventListener('click',handler);
}
removeActivethumbnail(){
    this._thumbnailImages.forEach((img)=>{
        img.classList.remove('active-img');
    })
}
// addHandlerImageView(imgAdd){
//     this._thumbnailImages.forEach((img)=>{
//         const mainImage=document.querySelector('#mainImage');
//         img.addEventListener('click',function(e){
//             e.preventDefault();
//             this._imageUrl=img.getAttribute('imgId');
//              switch(+this._imageUrl){
//                 case 1:
//                 mainImage.src=imgAdd.firstImg;
//                 break;
//                 case 2:
//                     mainImage.src=imgAdd.secondImg;
//                     break;
//                     case 3:
//                         mainImage.src=imgAdd.thirdImg;
//                         break;
//                         case 4:
//                             mainImage.src=imgAdd.fourthImg;
//                             break;
//             }
//         })
//     })

// }

}
export default new FullImageView();