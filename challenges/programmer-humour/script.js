let image = document.querySelector(".img")
fetch("https://xkcd.now.sh/?comic=latest")
.then(response => response.json())
.then(data => {
    console.log(data)
     image.src = data.img;
})
.catch(err => console.log("wrong load"))