var like = 3;
var likeElement = document.querySelector(".amount");

console.log(likeElement);

function buttonClick() {
  like ++;
  likeElement.innerHTML = like;
  console.log(like);
}