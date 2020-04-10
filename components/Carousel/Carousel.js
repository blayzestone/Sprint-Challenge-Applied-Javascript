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
const carousel = Carousel();
document.querySelector("div.carousel-container").appendChild(carousel);
cycleCarouselImages(carousel);

function cycleCarouselImages(carousel) {
  const imagesNodeList = carousel.querySelectorAll("img")
  const imagesArray = Array.from(imagesNodeList);
  const leftButton = carousel.querySelector("div.left-button");
  const rightButton = carousel.querySelector("div.right-button");

  cycleImages(0);

  function cycleImages(index) {
    const maxIndex = imagesArray.length - 1;

    if (index > maxIndex) {
      return cycleImages(0);
    } else if (index < 0) {
      return cycleImages(maxIndex);
    }

    // hides the image at the current index and then recursively calls the parent function
    // passing in the current index plus the direction (positive or negative one) as the index.
    const nextImage = (currentIndex, direction = 1) => {
      imagesArray[currentIndex].style.display = "none";
      return cycleImages(currentIndex + direction);
    }

    leftButton.addEventListener('click', () => nextImage(index, -1));
    rightButton.addEventListener('click', () => nextImage(index, 1));

    return imagesArray[index].style.display = "block";
  }
}

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
