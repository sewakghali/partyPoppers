document.addEventListener("DOMContentLoaded", function () {
  let gallery = document.querySelector('gallery');
  addImg();
  // showSlides
});
var ImgArr=[];
function addImg(){
    let imgSection = document.getElementById("imgs");
    images.forEach(elem => {
        var newImg = document.createElement('img');
        newImg.src = elem.src;
        imgSection.appendChild(newImg);
        // newImg.hidden = true;
        ImgArr.push(newImg);
    });
    // showSlides(1);
}
// console.log(ImgArr.length);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  
  let dots = document.getElementsByClassName("dot");
  if (n > ImgArr.length) {slideIndex = 1};
  if (n < 1) {slideIndex = ImgArr.length};
  for (i = 0; i < ImgArr.length; i++) {
    ImgArr[i].hidden = true;
  };
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  };
if(ImgArr[slideIndex-1]){
    ImgArr[slideIndex-1].hidden = false;
};
  dots[slideIndex-1].className += " active";
}

gallery.getBoundingClientRect()

