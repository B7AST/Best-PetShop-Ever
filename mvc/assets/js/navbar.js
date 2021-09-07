
//DECLARE VARIABLES

var nav = document.getElementById('navbar');
var list = nav.querySelectorAll('a');

var navImages = ['/img/index_img/pet-shop-veterinary-with-food-animals-vector.jpg', '/img/index_img/shampoo.jpg', '/img/index_img/Bowls.webp', '/img/index_img/PetsCare.png'];
var fishNavImages = ['/img/index_img/fish-food.jpg', '/img/index_img/aquarium.jpg', '/img/index_img/filter.webp', 'img/index_img/fish-care.jpg']
var birdNavImages = ['/img/index_img/bird-food.jpg', '/img/index_img/bird-accessories.jpg', '/img/index_img/bird-grooming.jpg'];
var smallAnimalsImages=['/img/index_img/rabbit.jpg','/img/index_img/hamster.webp','/img/index_img/iguana.jpg']
var dropUl = document.getElementsByClassName('drop-ul');
var dogCategoriesImg = document.getElementById('dogCategoriesPic');
var catCategoriesImg = document.getElementById('catCategoriesPic');
var fishCategoriesImg = document.getElementById('fishCategoriesPic');
var birdCategoriesImg = document.getElementById("birdCategoriesPic");
var smallAnimalsCategoriesImg=document.getElementById("smallAnimalsCategoriesPic")
// var ulHeader = document.querySelectorAll(".drop-ul > li:first-child")
var picHeader = document.querySelectorAll('.li-header');
var sublists = document.querySelectorAll('.drop-ul > li');


/******* 1st NAVBAR EFFECT **********/
window.onscroll = function () {
  if (window.pageYOffset > 100) {
    // nav.style.background =  "transparent";
    nav.style.background = 'rgba(255, 249, 192, 0.7)';
    nav.style.height = '3rem';
    list.forEach(element => {
      element.style.color = 'green';

    });

  } else {
    nav.style.background = 'green';
    nav.style.height = '6.9rem';
    list.forEach(element => {
      element.style.color = 'lightgrey';

    });
  }
};


/****** NAVBAR IMG BOX/HOVER *************/
function slides(event) {

  let slideShow = event.target.parentNode;

  picHeader.forEach((header) => {
    header.textContent = event.target.innerText;
  });
  // dogPicHeader.textContent = event.target.innerText
  // console.log(dogPicHeader.textContent)

  switch (slideShow) {
    case dropUl[0]:
      dogCategoriesImg.src = navImages[0];
      break;
    case dropUl[1]:
      dogCategoriesImg.src = navImages[1];
      break;
    case dropUl[2]:
      dogCategoriesImg.src = navImages[2];
      break;
    case dropUl[3]:
      dogCategoriesImg.src = navImages[3];
      break;
    case dropUl[4]:
      catCategoriesImg.src = navImages[0];
      break;
    case dropUl[5]:
      catCategoriesImg.src = navImages[1];
      break;
    case dropUl[6]:
      catCategoriesImg.src = navImages[2];
      break;
    case dropUl[7]:
      catCategoriesImg.src = navImages[3];
      break;
    case dropUl[8]:
      fishCategoriesImg.src = fishNavImages[0];
      break;
    case dropUl[9]:
      fishCategoriesImg.src = fishNavImages[1];
      break;
    case dropUl[10]:
      fishCategoriesImg.src = fishNavImages[2];
      break;
    case dropUl[11]:
      fishCategoriesImg.src = fishNavImages[3];
      break
    case dropUl[12]:
      birdCategoriesImg.src = birdNavImages[0];
      break
    case dropUl[13]:
      birdCategoriesImg.src = birdNavImages[1];
      break
    case dropUl[14]:
      birdCategoriesImg.src = birdNavImages[2];
      break
      case dropUl[15]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[0];
      break
      case dropUl[16]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[1];
      break
      case dropUl[17]:
      smallAnimalsCategoriesImg.src = smallAnimalsImages[2];
      break
  }
}


sublists.forEach((list) => {
  list.addEventListener('mouseenter', slides);
});




