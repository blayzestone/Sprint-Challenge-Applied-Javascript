// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

document.querySelector("div.header-container").appendChild(Header());

function Header() {
  const header = document.createElement("div");
  const headerTitle = document.createElement("h1");
  const date = document.createElement("span");
  const temp = document.createElement("span");

  // add classes
  header.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // set text content
  headerTitle.textContent = "Lambda Times";
  date.textContent = "APRIL 10, 2020";
  temp.textContent = "98°";

  // append elements
  header.appendChild(date);
  header.appendChild(headerTitle);
  header.appendChild(temp);

  return header;
}
