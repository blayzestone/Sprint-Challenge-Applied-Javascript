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

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(res => res.data)
  .then(data => Object.values(data.articles))
  .then(articleDataArrays => {
    const cardsContainer = document.querySelector("div.cards-container");

    // Loop through the arrays of article data
    articleDataArrays.forEach(articleDataArray => {

      // At the current iteration of the parent loop, loop through 
      // This array of article data
      rticleDataArray.forEach(articleData => { // Create a card using the article data and append it to the page
        const card = ArticleCard(articleData);
        cardsContainer.appendChild(card);
      });
    });
  });

function ArticleCard({ headline, authorPhoto, authorName }) {
  // Create elements
  const cardEl = document.createElement("div");
  const headlineEl = document.createElement("div");
  const authorEl = document.createElement("div");
  const imageContainerEl = document.createElement("div");
  const authorImageEl = document.createElement("img");
  const authorNameEl = document.createElement("span");
  
  // Add classes
  cardEl.classList.add("card");
  headlineEl.classList.add("headline");
  authorEl.classList.add("author");
  imageContainerEl.classList.add("img-container");

  // Set attributes
  authorImageEl.src = authorPhoto;

  // Set text content
  headlineEl.textContent = headline;
  authorNameEl.textContent = authorName;

  // Append elements
  cardEl.appendChild(headlineEl);
  cardEl.appendChild(authorEl);
  authorEl.appendChild(imageContainerEl);
  authorEl.appendChild(authorNameEl);
  imageContainerEl.appendChild(authorImageEl);

  return cardEl;
}
