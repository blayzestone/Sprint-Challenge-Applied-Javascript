/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

document.querySelector("div.carousel-container").appendChild(Carousel());

function Carousel() {
  const imageSources = [
    "./assets/carousel/mountains.jpeg",
    "./assets/carousel/computer.jpeg",
    "./assets/carousel/trees.jpeg",
    "./assets/carousel/turntable.jpeg"
  ];

  // Create elements
  const carouselEl = document.createElement("div");
  const leftButtonEl = document.createElement("div");
  const rightButtonEl = document.createElement("div");
  const imageEls = [];

  imageSources.forEach(imageSource => {
    const image = document.createElement("img");
    image.src = imageSource; // Set source attribute for image elements

    imageEls.push(image);
  });

  // Add classes
  carouselEl.classList.add("carousel");
  leftButtonEl.classList.add("left-button");
  rightButtonEl.classList.add("right-button");

  // Append elements
  carouselEl.appendChild(leftButtonEl);
  imageEls.forEach(imageEl => {
    carouselEl.appendChild(imageEl);
  });
  carouselEl.appendChild(rightButtonEl);

  return carouselEl;
}
