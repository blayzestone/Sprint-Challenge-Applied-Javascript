// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.

function ArticleCard({ headlineText, authorImageSource, authorNameText }) {
  // create elements
  const cardEl = document.createElement("div");
  const headlineEl = document.createElement("div");
  const authorEl = document.createElement("div");
  const imageContainerEl = document.createElement("div");
  const authorImageEl = document.createElement("img");
  const authorNameEl = document.createElement("span");
  
  // add classes
  cardEl.classList.add("card");
  headlineEl.classList.add("headline");
  authorEl.classList.add("author");
  imageContainerEl.classList.add("img-container");

  // set attributes
  authorImageEl.src = authorImageSource;

  // Set text content
  headlineEl.textContent = headlineText;
  authorNameEl.textContent = authorNameText;

  // append elements
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imageContainerEl);
  authorEl.appendChild(authorNameEl);
  imageContainerEl.appendChild(authorImageEl);

  return cardEl;
}
