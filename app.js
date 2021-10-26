var listImg = [
  "img/img-1.webp",
  "img/img-2.webp",
  "img/img-3.webp",
  "img/img-4.webp",
  "img/img-5.webp",
  "img/img-6.webp",
  "img/img-7.webp",
  "img/img-8.webp",
  "img/img-9.webp"
]
function displayProduct (){
  var temp="";
  for (var i =0 ; i< listImg.length ; i++){
    temp+=`     
    <div class="product">
    <div class="product-img">
      <img src="`+listImg[i]+`" alt="">
    </div>

    <div class="product-dec">
      <a href="#">MINIMAL DESIGN</a>
      <p>Animated, portfolio</p>
    </div>
  </div>`
  }
  document.getElementById("productRow").innerHTML =temp;
}
displayProduct();
