const images = ["1.png","2.png","3.png","4.png","5.png",
"6.png","7.png","8.png","9.png","10.png"];


const chosenImage = images[Math.floor(Math.random() * images.length)];
                    
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
//body의 안에 bgImage라는 요소를 넣는다