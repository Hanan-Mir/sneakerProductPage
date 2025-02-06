import View from "./view";
class displayImageOnClick extends View{
    _parentEl=document.querySelector('.left-col');
_thumbnailImages=document.querySelectorAll('.thumbnailImg');

_imageUrl;
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
//function for adding active class
activeImage(){
    this._thumbnailImages.forEach((img)=>{
    img.addEventListener('click',function(e){
        e.preventDefault();
      const currentActiveEl=document.querySelector('.active-img');
        currentActiveEl.classList.remove('active-img');
            e.target.classList.add('active-img');
        
    })
    })
    
}





}
export default new displayImageOnClick();