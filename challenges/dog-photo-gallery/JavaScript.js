const btn = document.querySelector("#btn");
const ul = document.querySelector("ul");
const image = document.createElement("img");
const li = document.createElement("li");

const changingPic = () =>
fetch("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(gallery => {
    ul.appendChild(li);
    li.appendChild(image);
    image.src =gallery.message;
})
.catch(err => {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = error;
    ul.appendChild(errorMessage);
})
btn.addEventListener("click", changingPic);